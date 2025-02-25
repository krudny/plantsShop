import Nav from "../components/Nav";
import "../styles/contact.css";
import "../styles/form.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import AuthService from "../services/AuthService";
import LoadingOverlay from "../components/LoadingOverlay.jsx";
import toast from "react-hot-toast";

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
      username: Yup.string()
        .required("This field is required!")
        .min(6, "Username must be at least 6 characters.")
        .max(20, "Username must be at most 20 characters."),
      password: Yup.string()
        .required("This field is required!")
        .min(6, "Password must be at least 6 characters.")
        .max(40, "Password must be at most 40 characters."),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await AuthService.login(values.username, values.password);
        toast.success("You have successfully logged in!");
        navigate("/profile");
      } catch (error) {
        toast.error("Something went wrong!");
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <LoadingOverlay />
      <div className="login--container">
        <span className="white">
          <Nav />
        </span>
        <div className="background--image"></div>
        <div className="login--wrapper">
          <>
            <form className="login--form" onSubmit={formik.handleSubmit}>
              <div className="login--tabs">
                <p className="sign--btn login--active">Sign in</p>
                <Link to="/register">
                  <p className="sign--btn login--notactive">Sign up</p>
                </Link>
              </div>
              <p className="login--text">Username</p>
              <input
                type="text"
                className={`${baseInputClass} ${formik.touched.username && formik.errors.username ? errorInputClass : ""}`}
                id="username"
                placeholder="Your username"
                autoComplete="off"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              <p className="login--text">Password</p>
              <input
                type="password"
                className={`${baseInputClass} ${formik.touched.password && formik.errors.password ? errorInputClass : ""}`}
                id="password"
                placeholder="Your password"
                autoComplete="off"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.username &&
              formik.touched.password &&
              (formik.errors.username || formik.errors.password) ? (
                <>
                  <div className="error-message">{formik.errors.username}</div>
                  <div className="error-message">{formik.errors.password}</div>
                </>
              ) : null}
              <button
                className="login--btn"
                type="submit"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting}
                Log in
              </button>
            </form>
          </>
        </div>
      </div>
    </>
  );
}
