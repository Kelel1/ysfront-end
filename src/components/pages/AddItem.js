import      React                        from "react";
import    { useFormik }                  from "formik";
import * as Yup                          from "yup";

const AddItem = () => {

    const formik = useFormik({
        initialValues: {
            itemName: "",
            price: "",
            inventory: "",
            totalOnHold: "",
            description: "",
            images: "",
        },
        validationSchema: Yup.object({
            itemName: Yup.string().max(15, "Item name cannot be more than 15 characters.")
                         .required("Required"),
            price: Yup.string().required("Required"),
            inventory: Yup.number(),
            totalOnHold: Yup.number(),
            description: Yup.string().required("Required")
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="input-container">
                <input 
                    id="itemName"
                    name="itemName"
                    type="text"
                    placeholder="Item name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.itemName}
                />
                {formik.touched.itemName && formik.errors.itemName ? <p>{formik.errors.itemName}</p> : null}
            </div>
            <div className="input-container">
                <input 
                    id="price"
                    name="price"
                    type="text"
                    placeholder="Price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price ? <p>{formik.errors.price}</p> : null}
            </div>
            <div className="input-container">
                <input 
                    id="inventory"
                    name="inventory"
                    type="number"
                    placeholder="Inventory"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.inventory}
                />
                {formik.touched.inventory && formik.errors.inventory ? <p>{formik.error.inventory}</p> : null}
            </div>
            <div className="input-container">
                <input 
                    id="totalOnHold"
                    name="totalOnHold"
                    type="number"
                    placeholder="Total on hold"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.totalOnHold}
                />
                {formik.touched.totalOnHold && formik.errors.totalOnHold ? <p>{formik.error.totalOnHold}</p> : null}
            </div>
            <div className="input-container">
                <input 
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description ? <p>{formik.error.description}</p> : null}
            </div>
            <div className="input-container">
                <input 
                    id="images"
                    name="images"
                    type="file"
                    placeholder="Upload image"
                    onChange={formik.handleChange}
                    value={formik.values.images}
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )

}

export default AddItem;