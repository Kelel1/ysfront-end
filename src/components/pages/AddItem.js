import   React       from "react";
import { useFormik } from "formik";

const AddItem = () => {

    const formik = useFormik({
        initialValues: {
            itemName: "",
            price: "",
            inventory: "",
            totalOnHold: "",
            description: "",
            images: null,
        },
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
                    value={formik.values.itemName}
                />
            </div>
            <div className="input-container">
                <input 
                    id="price"
                    name="price"
                    type="text"
                    placeholder="Price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />
            </div>
            <div className="input-container">
                <input 
                    id="inventory"
                    name="inventory"
                    type="number"
                    placeholder="Inventory"
                    onChange={formik.handleChange}
                    value={formik.values.inventory}
                />
            </div>
            <div className="input-container">
                <input 
                    id="totalOnHold"
                    name="totalOnHold"
                    type="number"
                    placeholder="Total on hold"
                    onChange={formik.handleChange}
                    value={formik.values.totalOnHold}
                />
            </div>
            <div className="input-container">
                <input 
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
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