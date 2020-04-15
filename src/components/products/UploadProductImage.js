import React, { useState, useContext } from "react";
import ProductContext from "../../context/product/productContext";
import { Form, Button } from "react-bootstrap";

const UploadProductImage = (props) => {
	const productContext = useContext(ProductContext);
	const { addImage } = productContext;

	const [fileUpload, setFileUpload] = useState(null);
	const handleChange = (e) => {
		setFileUpload(e.target.files[0]);
	};
	console.log(fileUpload);
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		// Product ID and File Data
		if (fileUpload.name === "null") {
			return;
		}
		console.log("Clicked", props.id);
		const formData = new FormData();
		formData.append("image", fileUpload, fileUpload.name);
		console.log(formData);
		await addImage(props.id, formData);
		setFileUpload(null);
	};
	return (
		<Form onSubmit={handleOnSubmit}>
			<Form.Control type='file' required onChange={handleChange} />
			<Button varient='info' type='submit'>
				{" "}
				Upload Image
			</Button>
		</Form>
	);
};

export default UploadProductImage;
