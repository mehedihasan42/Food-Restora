import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {

    // const [menu,setMenu] = useState([])
    // const [loading,setLoading] = useState(true)

    const {data:menu=[],refetch} = useQuery({
        queryKey:['food'],
        queryFn: async()=>{
           const res = await fetch('http://localhost:5000/food')
            return res.json()
        }
    })

    // useEffect(()=>{
    //     fetch('http://localhost:5000/food')
    //     .then(res=>res.json())
    //     .then(data=> setMenu(data))
    //     setLoading(false)
    // },[])
    return [menu,refetch]
};

export default useMenu;