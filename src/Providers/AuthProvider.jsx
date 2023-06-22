import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
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
            setLoading(false)
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