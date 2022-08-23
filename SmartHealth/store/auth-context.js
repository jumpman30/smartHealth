import React, {useState, useContext, createContext} from 'react';

export const AuthContext = createContext({
    token: '',
    email: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {}
});


function AuthContextProvider({children}) {
    
    const [authToken, setAuthToken] = useState();
    const [email, setEmail] = useState();

    function authenticate(token, email){
        setEmail(email);
        setAuthToken(token);
    }

    function logout(){
        setAuthToken(null);
    }

    const value = {

        token: authToken,
        email: email,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export default AuthContextProvider;