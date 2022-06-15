import React, { useEffect, useState, useContext } from "react";
import { AccountContext } from "./Account";

const Status = () => {
    const [status, setStatus] = useState(false);
    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => {
        getSession().then(session => {
            console.log("logged in", session);
            setStatus(true);
        })
    }, [])
    
    return <div>
        {status ? <button onClick={logout}>
            Logout
        </button> : "not logged in"}
    </div>
}

export default Status;