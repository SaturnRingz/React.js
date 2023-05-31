import React, {useState} from "react";
//context
export const AuthContext = React.createContext();

const AuthProvider=({children})=>{
    const [login, setLogin] = useState(localStorage.getItem("login")?true:false);
    const [user, setUser] = useState(localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{});

    const handleLogin=(userLogin)=>{
        const user = userLogin
        setUser(user);
        localStorage.setItem("login", true);
        localStorage.setItem("user", JSON.stringify(user));
        setLogin(true);
    }
    const handleLogOut=()=>{
        setUser({});
        localStorage.removeItem("login");
        localStorage.removeItem("user");
        setLogin(false);
    }

    return(
        <AuthContext.Provider value={{login, handleLogin, handleLogOut, user}}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;