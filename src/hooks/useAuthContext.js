import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = ()=>{
    const context = useContext(AuthContext)

    if(!context) {
        throw Error('useauthcontext should be accessed inside an authcontext provider')
    }

    return context
}