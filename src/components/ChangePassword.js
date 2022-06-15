import React, {useState, useContext} from "react";
import {AccountContext} from "./Account";

const ChangePassword = () => {

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const {getSession} = useContext(AccountContext);

    const onSubmit = (e) => {
        e.preventDefault();

        getSession().then(({ user }) => {
            user.changePassword(password, newPassword, (err, result) => {
                if (err) {
                    console.error("err in change password", err);
                } else {
                    console.log("success in change password", result);
                }
            })
        })
    }

    return <div>
        <form onSubmit={onSubmit}>
            <label htmlFor="password">Current Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label>New Password</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <button type="submit">Change Password</button>
        </form>
    </div>
}

export default ChangePassword;