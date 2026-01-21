/**
 * Context is the Global state used in the entire app.
 * It can be used by any component by using useContext hook.
 */

import { createContext, useContext, useState } from "react";


// creating a empty context;
const AuthContext = createContext(null);



// provide the two value of authentication and to set authentication
// they give it to children
export const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(true);
    
    return (
        <AuthContext.Provider value={
            {isAuthenticated, setIsAuthenticated}
        }>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext); // custom hook for every component to use