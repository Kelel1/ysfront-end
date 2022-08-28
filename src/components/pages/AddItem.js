import      React                        from "react";
import    { useFormik }                  from "formik";
import * as Yup                          from "yup";
import    { gql, useMutation }           from "@apollo/client"; 

const CREATE_ITEM = gql`
    mutation createItem($name: String!, $price: String!, $inventoryCount: Int!, 
                        $totalOnHold: Int!, $description: String!, $images: [String!]) {
                            addItem(
                                name: $name,
                                price: $price,
                                inventoryCount: $inventoryCount,
                                totalOnHold: $totalOnHold,
                                description: $description,
                                images: $images,
                            ) {
                                name,
                                price,
                                description
                            }
                        }
`
// Test query to see added Items(Remove later)
const FETCH_ITEMS= gql`
    query {
        fetchItems {
            name,
            price
        }
}
`

const AddItem = () => {

    const [ createItem, { loading, error } ] = useMutation(CREATE_ITEM, {
        refetchQueries: [ { query:  FETCH_ITEMS } ]
    });
    

    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            inventoryCount: "",
            totalOnHold: "",
            description: "",
            images: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().max(15, "Item name cannot be more than 15 characters.")
                         .required("Required"),
            price: Yup.string().required("Required"),
            inventoryCount: Yup.number(),
            totalOnHold: Yup.number(),
            description: Yup.string().required("Required")
        }),
        onSubmit: (values) => {
            // console.log(values); 
            createItem({ variables: values });
            console.log(values);
        }
    });
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    console.log(formik);


    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="input-container">
                <input 
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Item name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
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
                    id="inventoryCount"
                    name="inventoryCount"
                    type="number"
                    placeholder="Inventory"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.inventory}
                />
                {formik.touched.inventoryCount && formik.errors.inventoryCount ? 
                 <p>{formik.error.inventoryCount}</p> : null}
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