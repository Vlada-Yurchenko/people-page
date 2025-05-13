import axiosInstance from './instance';

interface UserSearchOptions {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: 'asc' | 'desc';
    filter?: string;
}

export const fetchUsers = async (params: UserSearchOptions = {}) => {
    const response =  await axiosInstance.get('/user/list', {
        params
    });
    return response.data
}


