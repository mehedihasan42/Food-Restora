import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCards = ({item}) => {
    const {_id,image,name,price,recipe} = item;
    const {user} = useAuth()
    const [refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()

    const handleFoodCard = item =>{
      console.log(item)
        if(user && user?.email){
          const cartItem = {cartId:_id,name,image,price,userEmail:user?.email}
          fetch('http://localhost:5000/carts',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(cartItem)
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.insertedId){
              refetch()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Food added on the card',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
        }
        else{
          Swal.fire({
            title: 'Please Login',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go to Login'
          }).then((result) => {
            if (result.isConfirmed) {
                  navigate('/login', {state:{from: location}})
            }
          })
        }
    }
    return (
        <div className="card card-compact w-96 my-6 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className='bg-slate-800 text-white font-bold absolute top-0 right-2 p-2'>${price}</p>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleFoodCard(item)} className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCards;