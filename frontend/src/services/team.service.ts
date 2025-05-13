import axiosInstance from './instance';

export const fetchTeams = async () => {
    const response =  await axiosInstance.get('/team/list');
    return response.data;
}


