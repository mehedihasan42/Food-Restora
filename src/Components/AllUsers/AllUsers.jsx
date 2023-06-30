import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import { BiUserPin } from "react-icons/bi";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiousSecure';

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure()
  const { data: users = [],refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('users')
      return res.data;
    }
  })

  const handleMakeAdmin = user =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
      method:'PATCH',
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount){
        refetch()
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `${user.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  const handleDelete = user =>{
    
  }

  return (
    <>
      <Helmet>
        <title>Food Restora - All Users</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) =>
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {
                      user.role === 'admin' ? 'admin' :
                      <button onClick={()=>handleMakeAdmin(user)} className='btn btn-ghost bg-slate-800'>
                    <BiUserPin className='text-2xl text-white font-bold'/></button>
                    }
                  </td>
                  <th>
                    <button
                    onClick={()=>handleDelete(user)}
                    className="btn btn-ghost bg-slate-800"><FaRegTrashAlt className='text-xl text-white font-bold' /></button>
                  </th>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;