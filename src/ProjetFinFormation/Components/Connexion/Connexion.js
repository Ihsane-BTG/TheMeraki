import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchUsers } from "../../Redux-ToolKit/Slices/UsersSlice";
import { Link } from "react-router-dom";
import "./Connexion.css"

const Connexion = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Users = useSelector((state) => state.user.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    console.log(Users);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setErrorMessage('');
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        if (!email || !password) {
            setErrorMessage('Email and password are required');
            return;
        }

        if (!Users || Users.length === 0) {
            setErrorMessage('Authentication data not available');
            return;
        }

        const filteredUser = Users.find(user => user.email === email);
        if (!filteredUser || filteredUser.password !== password) {
            setErrorMessage('Incorrect email or password');
            return;
        }

        navigate("/");
    };

    return (
        <div className="container-fluid connexion" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/PFF-Images/BG.jpg')` }}>
            <div className="d-flex justify-content-center">
                <div className="user_card">
                    <div className="d-flex justify-content-center">
                        <div className="brand_logo_container">
                            <img src={`${process.env.PUBLIC_URL}/PFF-Images/blackLogo.jpg`} className="brand_logo_cnx" alt="TheMerakiLogo" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center form_container form_container_cnx">
                        <form onSubmit={handleLogin}>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text input-group-cnx"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg></span>
                                </div>
                                <input type="text" name="" className="form-control input_user" defaultValue="" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text input-group-cnx"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                    </svg></span>
                                </div>
                                <input type="password" name="" className="form-control input_pass" defaultValue="" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                    <label className="custom-control-label" for="customControlInline">Remember me</label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container login_container_cnx">
                                <input type="submit" className="login_cnx btn btn-login" value="Login" />
                            </div>
                        </form>
                    </div>
                    {errorMessage && (
                        <div className="danger" role="alert">
                            {errorMessage}*
                        </div>
                    )}
                    <div className="mt-4 footLogin">
                        <div className="d-flex justify-content-center links">
                            Don't have an account? <Link to={"#"} className="ml-2">Sign Up</Link>
                        </div>
                        <div className="d-flex justify-content-center links">
                            <Link to={"#"}>Forgot your password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connexion;