import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiousSecure';
const token = localStorage.getItem('access-token')

const useCart = () =>{
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {refetch, data:cart=[]} = useQuery({
        queryKey:['carts',user?.email],
        enabled: !loading,
        // queryFn: async()=>{
        //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,
        //     {headers:{authorization:`bearer ${token}`}}
        //     )
        //     return response.json();
        // }
        queryFn: async()=>{
            const response = await axiosSecure(`carts?email=${user?.email}`
            )
            return response.data;
        }

    })
     return[refetch,cart]
}
export default useCart;