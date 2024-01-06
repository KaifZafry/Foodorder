import { createContext } from "react";

const UserContext= createContext({
    logedIn: "Default user"
})

export default UserContext;