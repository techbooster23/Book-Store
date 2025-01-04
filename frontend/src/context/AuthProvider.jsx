import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({children}) {
    const initialAuthUser = localStorage.getItem("user")
    const [authUser, setAutUser] = useState(initialAuthUser? JSON.parse(initialAuthUser):undefined)

    return(
        <AuthContext.Provider value={[authUser,setAutUser]} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>  useContext(AuthContext);

