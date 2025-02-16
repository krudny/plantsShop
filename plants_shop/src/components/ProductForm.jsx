import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/contact.css';
import '../styles/form.css';
import '../styles/product-form.css';

const ProductForm = ({ product, onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            name: product.name || '',
            description: product.description || '',
            image: product.image || '',
            long_description: product.long_description || '',
            price: product.price || 0,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('This field is required!'),
            description: Yup.string().required('This field is required!'),
            image: Yup.string().required('This field is required!'),
            long_description: Yup.string().required('This field is required!'),
            price: Yup.number().required('This field is required!').min(0, 'Price must be greater than or equal to 0'),
        }),
        onSubmit: (values) => {
            onSubmit({
                product_id: product.id,
                image: values.image,
                name: values.name,
                description: values.description,
                price: values.price,
                long_description: values.long_description
            });
        },
    });

    return (
        <form className="form flex" onSubmit={formik.handleSubmit}>
            <div className="input-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="input"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    autoComplete='off'
                />
                {formik.touched.name && formik.errors.name && (
                    <div className="error-message" role="alert">
                        {formik.errors.name}
                    </div>
                )}
            </div>

            <div className="input-group">
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    className="input"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    autoComplete='off'
                />
                {formik.touched.description && formik.errors.description && (
                    <div className="error-message" role="alert">
                        {formik.errors.description}
                    </div>
                )}
            </div>

            <div className="input-group">
                <label htmlFor="image">Image:</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    className="input"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.image}
                    autoComplete='off'
                />
                {formik.touched.image && formik.errors.image && (
                    <div className="error-message" role="alert">
                        {formik.errors.image}
                    </div>
                )}
            </div>

            <div className="input-group">
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    className="input"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    autoComplete='off'
                />
                {formik.touched.price && formik.errors.price && (
                    <div className="error-message" role="alert">
                        {formik.errors.price}
                    </div>
                )}
            </div>

            <div className="input-group">
                <label htmlFor="long_description">Long Description:</label>
                <textarea
                    id="long_description"
                    name="long_description"
                    className="input"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.long_description}
                    autoComplete='off'
                />
                {formik.touched.long_description && formik.errors.long_description && (
                    <div className="error-message" role="alert">
                        {formik.errors.long_description}
                    </div>
                )}
            </div>

            <button className="add--cart" type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting && <span className="spinner-border spinner-border-sm"></span>}
                <span>Save Product</span>
            </button>
        </form>
    );
};

export default ProductForm;
