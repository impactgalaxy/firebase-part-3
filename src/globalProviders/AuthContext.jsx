import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";
import { Navigate } from "react-router-dom";

export const authContext = createContext(null);





export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })
        return () => {
            subscriber();
        }
    }, []);
    <Navigate to="/" state={location.pathname}></Navigate>



    const authInfo = { createUser, signInUser, currentUser, userSignOut, loading, location }


    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node
}
