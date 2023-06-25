import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaRegTrashAlt } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users')
      return res.json()
    }
  })
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
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost"><FaRegTrashAlt className='text-xl' /></button>
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