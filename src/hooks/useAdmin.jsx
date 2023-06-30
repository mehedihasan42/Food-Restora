import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiousSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data:isAdmin,isLoading:adminLoader} = useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn: async()=>{
            const res = await axiosSecure(`/users/admin/${user?.email}`)
            return res.data.admin;
        }
    })
    return [isAdmin,adminLoader]
};

export default useAdmin;