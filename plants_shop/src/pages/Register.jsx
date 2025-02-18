import {Link, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthService from '../services/AuthService';
import Nav from '../components/Nav';
import '../styles/contact.css';
import '../styles/form.css';

const Register = () => {
    const baseInputClass = "login--input";
    const errorInputClass = "login--input-error";
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
                .min(6, 'The username must be at least 6 characters')
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
                navigate('/login');
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
        <>
            <div className="login--container">
            <span className="white">
                <Nav />
            </span>
                <div className="background--image"></div>
                <div className="login--wrapper">
                    <div className="login--tabs">
                        <Link to="/login"><p className="sign--btn login--notactive">Sign in</p></Link>
                        <p className="sign--btn login--active">Sign up</p>
                    </div>

                    <form className="login--form" onSubmit={formik.handleSubmit}>
                        <p className="login--text">Username</p>
                        <input type="text" className={`${baseInputClass} ${formik.touched.username && formik.errors.username ? errorInputClass : ''}`}
                               id="username" placeholder="Your username" autoComplete="off" name="username"
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               value={formik.values.username}
                        />
                        <p className="login--text">E-mail</p>
                        <input className={`${baseInputClass} ${formik.touched.email && formik.errors.email ? errorInputClass : ''}`}
                               placeholder="Your email" autoComplete="off" name="email"
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               value={formik.values.email}
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
                            Create account
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Register;
