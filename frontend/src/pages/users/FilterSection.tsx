import {useEffect, useState } from 'react'
import GuestStatusSelect from '../../components/selects/GuestStatusSelect'
import TeamSelect from '../../components/selects/TeamSelect'
import UserRoleSelect from '../../components/selects/UserRoleSelect'
import { ROLES } from '../../common/enums'
import { fetchTeams } from '../../services'

const FilterSection = () => {
    const [isGuest, setIsGuest] = useState(false);
    const [teams, setTeams] = useState([])
    const [selectedTeams, setSelectedTeams] = useState([]);
    const [userRole, setUserRole] = useState<ROLES>(ROLES.VIEWER);

    const handleRoleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setUserRole(event.target.value as ROLES);
    };

    const handleGuestChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setIsGuest(event.target.value as boolean);
    };

    const handleTeamsChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedTeams(event.target.value as string[]);
    };

    const getTeamList = async () => {
        const teams =  await fetchTeams();
        setTeams(teams)
    }
    useEffect(() => {
        getTeamList()
    }, []);


    return (
        <>
            <GuestStatusSelect isGuest={isGuest} onGuestStatusChange={handleGuestChange}/>
            <TeamSelect teams={teams} selectedTeams={selectedTeams} onTeamsChange={handleTeamsChange}/>
            <UserRoleSelect userRole={userRole} onUserRoleChange={handleRoleChange}/>
        </>
    )
}

export default FilterSection
