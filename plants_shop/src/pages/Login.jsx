import Nav from "../components/Nav";
import "../styles/contact.css";
import "../styles/form.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


import AuthService from "../services/AuthService";

export default function Login() {
    const baseInputClass = "login--input";
    const errorInputClass = "login--input-error";
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("This field is required!")
                .min(6, "Username must be at least 6 characters.")
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
        <>
            <div className="login--container">
            <span className="white">
                <Nav />
            </span>
                <div className="background--image"></div>
                <div className="login--wrapper">
                    <>
                        <div className="login--tabs">
                            <p className="sign--btn login--active">Sign in</p>
                            <a href="/register"><p className="sign--btn login--notactive">Sign up</p></a>
                        </div>

                        <form className="login--form" onSubmit={formik.handleSubmit}>
                            <p className="login--text">Username</p>
                            <input type="text" className={`${baseInputClass} ${formik.touched.username && formik.errors.username ? errorInputClass : ''}`}
                                   id="username" placeholder="Your username" autoComplete="off" name="username"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.username}
                            />
                            <p className="login--text">Password</p>
                            <input type="password" className={`${baseInputClass} ${formik.touched.password && formik.errors.password ? errorInputClass : ''}`}
                                   id="password" placeholder="Your password" autoComplete="off" name="password"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.password}
                            />
                            <button className="login--btn" type="submit" disabled={formik.isSubmitting}>
                                {formik.isSubmitting}
                                Log in
                            </button>

                        </form>
                    </>
                </div>
            </div>
        </>
    )
}
