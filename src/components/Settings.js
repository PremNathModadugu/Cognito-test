import React, {useContext,useState, useEffect} from "react";
import {AccountContext} from "./Account";
import ChangePassword from "./ChangePassword";

const Settings = () => {
    const {getSession} = useContext(AccountContext);

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        getSession().then(session => {
            console.log("logged in session", session);
            setLoggedIn(true);
        })
    }, []);

    return <div>
        {loggedIn && (<>
            <h2>Settings</h2>
            <ChangePassword />
        </>)}
        </div>
}

export default Settings;