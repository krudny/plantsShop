import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthService from '../services/AuthService';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import LoadingOverlay from '../components/Overlay';
import '../styles/contact.css';
import '../styles/form.css';

const Register = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, Math.floor(Math.random() * (1000 - 500 + 1) + 500));
    }, []);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('This field is required!')
                .min(3, 'The username must be at least 3 characters')
                .max(20, 'The username must be at most 20 characters'),
            email: Yup.string().required('This field is required!').email('This is not a valid email'),
            password: Yup.string()
                .required('This field is required!')
                .min(6, 'The password must be at least 6 characters')
                .max(40, 'The password must be at most 40 characters'),
        }),
        onSubmit: async (values, { setSubmitting, setFieldError }) => {
            try {
                const response = await AuthService.register(
                    values.username,
                    values.email,
                    values.password
                );

                formik.setStatus({
                    message: response.data.message,
                    successful: true,
                });
                formik.setSubmitting(false);
                formik.setValues({
                    username: '',
                    email: '',
                    password: '',
                });
            } catch (error) {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setFieldError('username', resMessage);
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
                        <div className="header-tab">
                            <a className="contact-1">Sign up</a>
                        </div>
                        <div className="header-tab not-active">
                            <a className="contact-1" href="/login">
                                Log in
                            </a>
                        </div>
                    </div>
                    <p className="contact-2">Is this your first visit?</p>
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
                            type="text"
                            className="input"
                            id="email"
                            placeholder="Your email"
                            autoComplete="off"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="error-message" role="alert">
                                {formik.errors.email}
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
                        <button
                            className="add--cart"
                            type="submit"
                            disabled={formik.isSubmitting}
                        >
                            {formik.isSubmitting && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Create account</span>
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
