import { useState } from "react";

const useInput = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const getEmail = event => {
        setEmail(event.target.value)
    }
    const getPassword = event => {
        setPassword(event.target.value)
    }
    const getConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }
    return {email, password, confirmPassword, getEmail, getPassword, getConfirmPassword}
}

export default useInput;