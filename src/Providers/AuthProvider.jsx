import React, {  createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () =>{
       return signInWithPopup(auth,googleProvider)
    }

    const userLogin = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    const emailVerify = () =>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    const logOut = () =>{
        setLoading(true)
        signOut(auth)
    }

    const updateUserProfile = (name,photo) =>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('current user',currentUser)
          if(currentUser){
            axios.post('http://localhost:5000/jwt',{email:currentUser.email})
            .then(data=>{
                console.log(data.data.token)
                localStorage.setItem('access-token',data.data.token)
                setLoading(false)
            })
          }
          else{
            localStorage.removeItem('access-token')
          }
           
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const userInfo = {
        user,
        loading,
        createUser,
        userLogin,
        googleSignIn,
        emailVerify,
        updateUserProfile,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;