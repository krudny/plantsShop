import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthService from "../services/AuthService";

const Register = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("This field is required!")
                .min(3, "The username must be at least 3 characters")
                .max(20, "The username must be at most 20 characters"),
            email: Yup.string().required("This field is required!").email("This is not a valid email"),
            password: Yup.string()
                .required("This field is required!")
                .min(6, "The password must be at least 6 characters")
                .max(40, "The password must be at most 40 characters"),
        }),
        onSubmit: async (values, { setSubmitting, setFieldError }) => {
            try {
                const response = await AuthService.register(
                    values.username,
                    values.email,
                    values.password
                );

                // Assuming AuthService.register returns a response with a message
                formik.setStatus({ message: response.data.message });
                formik.setSubmitting(false);
                formik.setValues({
                    username: "",
                    email: "",
                    password: "",
                });
            } catch (error) {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setFieldError("username", resMessage);
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />

                <form onSubmit={formik.handleSubmit}>
                    {!formik.status?.message && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.username && formik.errors.username && (
                                    <div className="alert alert-danger" role="alert">
                                        {formik.errors.username}
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="alert alert-danger" role="alert">
                                        {formik.errors.email}
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <div className="alert alert-danger" role="alert">
                                        {formik.errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    disabled={formik.isSubmitting}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    )}

                    {formik.status?.message && (
                        <div className="form-group">
                            <div
                                className={
                                    formik.status.successful
                                        ? "alert alert-success"
                                        : "alert alert-danger"
                                }
                                role="alert"
                            >
                                {formik.status.message}
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Register;
