import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TablePagination, TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import { fetchUsers } from '../../services';
import type { User } from '../../common/interfaces';


const UsersSection: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredMembers, setFilteredMembers] = useState<User[]>([]);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [orderBy, setOrderBy] = useState<keyof User>('name');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState('');
    const  [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const loadMembers = async () => {
            try {
                const data = await fetchUsers({
                    page,
                    limit: page ? page * rowsPerPage: rowsPerPage,
                    sortBy: orderBy,
                    order: sortOrder,
                    filter: searchQuery
                });
                setUsers(data.data);
                setFilteredMembers(data.data);
                setTotalPages(data.meta.totalPages)
            } catch (error) {
                console.error('Failed to load members:', error);
            }
        };

        loadMembers();
    }, [page, rowsPerPage, sortOrder, orderBy, searchQuery]);

    const handleRequestSort = (property: keyof User) => {
        const isAsc = orderBy === property && sortOrder === 'asc';
        setSortOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}
            />

            <TableContainer>
                <Table aria-label="members table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'name'}
                                    direction={orderBy === 'name' ? sortOrder : 'asc'}
                                    onClick={() => handleRequestSort('name')}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Teams</TableCell>
                            <TableCell>Last Login</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredMembers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.memberships.map((ms) => ms.role ?? '').join(', ')}</TableCell>
                                <TableCell>{user.teamLinks.map((tl) => tl.team?.name ?? '').join(', ')}</TableCell>
                                <TableCell>{new Date(user.lastLoginAt).toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={totalPages}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default UsersSection;
