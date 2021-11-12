import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from "../firebase"

const AuthContext = React.createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

    let [user, setUser] = useState(null)
    let history = useHistory()

    useEffect(() => {
        auth.onAuthStateChanged(myUser => {
            setUser(myUser)
            // TODO: Method = replace
            if (user) history.push('/chats');
        });
    }, [user, history])

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider }