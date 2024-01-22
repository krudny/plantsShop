import Footer from "../components/Footer";
import Nav from "../components/Nav";
import LoadingOverlay from "../components/Overlay";
import "../styles/contact.css";
import "../styles/form.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


import AuthService from "../services/AuthService";

export default function Login() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, Math.floor(Math.random() * (1000 - 500 + 1) + 500));
    }, []);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("This field is required!")
                .max(20, "Username must be at most 20 characters."),
            password: Yup.string().required("This field is required!")
                .min(6, "Password must be at least 6 characters.")
                .max(40, "Password must be at most 40 characters."),
        }),
        onSubmit: async (values, { setSubmitting, setFieldError }) => {
            try {
                await AuthService.login(values.username, values.password);
                navigate("/profile");
                window.location.reload();
            } catch (error) {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setFieldError("username", resMessage);
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="contact--container">
            <img className="img1" src="../../src/assets/contact2.png" />
            <img className="img2" src="../../src/assets/contact2.png" />
            <Nav />
            <LoadingOverlay isLoading={isLoading} />
            <div className="contact--wrapper">
                <div className="contact-text">
                    <div className="form-header">
                        <div className="header-tab not-active">
                            <a className="contact-1" href="/register">Sign up</a>
                        </div>
                        <div className="header-tab">
                            <a className="contact-1">Log in</a>
                        </div>

                    </div>
                    <p className="contact-2">Are you a user?</p>
                </div>
                <div className="form-box flex">
                    <form className="form flex" onSubmit={formik.handleSubmit}>
                        <input
                            type="text"
                            className="input"
                            id="username"
                            placeholder="Your username"
                            autoComplete="off"
                            name="username"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                        />
                        {formik.touched.username && formik.errors.username && (
                            <div className="error-message" role="alert">
                                {formik.errors.username}
                            </div>
                        )}
                        <input
                            type="password"
                            className="input"
                            id="password"
                            placeholder="Your password"
                            autoComplete="off"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="error-message" role="alert">
                                {formik.errors.password}
                            </div>
                        )}
                        <button className="add--cart" type="submit" disabled={formik.isSubmitting}>
                            {formik.isSubmitting && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Log in</span>
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
