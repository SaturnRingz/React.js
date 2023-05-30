import React, {useState} from "react";
//context
export const AuthContext = React.createContext();

const AuthProvider=({children})=>{
    const [login, setLogin] = useState(false);

    const handleLogin=()=>{
        setLogin(true);
        console.log(login)
    }
    const handleLogOut=()=>{
        setLogin(false);
        console.log(login)
    }

    return(
        <AuthContext.Provider value={{login, handleLogin, handleLogOut}}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;