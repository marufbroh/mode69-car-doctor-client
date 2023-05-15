import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserData = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // console.log(error.message);
            // An error occurred
            // ...
        });
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)

            if (currentUser && currentUser.email) {
                const loggedUser = {
                    email: currentUser.email
                }

                fetch('https://car-doctor-server-ochre-nine.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",

                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('jwt response', data);
                        localStorage.setItem('car-access-token', data.token)

                    })
            }
            else {
                localStorage.removeItem('car-access-token')
            }

        })
        return () => {
            unsubscribe()
        }
    }, [])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        updateUserData,
        signIn,
        googleSignin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;