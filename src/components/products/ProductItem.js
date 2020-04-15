import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import UploadProductImage from "../products/UploadProductImage";
import CartContext from "../../context/cart/cartContext";

const ProductItem = ({ product }) => {
	const { _id, name, type, image, description, price, availability } = product;

	const cartContext = useContext(CartContext);
	const { addToCart, cart } = cartContext;

	const handleClick = (e) => {
		e.preventDefault();
		console.log(_id);
		// Add to Cart
	};
	return (
		// <div className='row'>
		// 	<div className='col-sm-3'>
		// 		<div className='card'>
		// 			{image ? (
		// 				<img src={image} alt='Preview' className='card-img-top' />
		// 			) : (
		// 				<img src='/img/avater.jpg' alt='Preview' />
		// 			)}

		// 			<div className='card-body'>
		// 				<h4 className='card-header'>{name}</h4>
		// 				<p className='float-left'>N {price}</p>
		// 				<button onClick={handleClick} className='float-right'>
		// 					Buy
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<Card style={{ width: "20rem" }} className='d-inline-block'>
			{image ? (
				<Card.Img variant='top' src={image} style={{ height: "200px" }} />
			) : (
				<Card.Img variant='top' src='/img/avater.jpg' style={{ height: "200px" }} />
			)}

			<Card.Body>
				<Card.Title>{name.toUpperCase()}</Card.Title>
				<Card.Text>
					<h5 className='float-left'>N {price}</h5>
				</Card.Text>
				<Button
					variant='primary'
					size='sm'
					className='float-right'
					onClick={handleClick}>
					Add to Cart
				</Button>
			</Card.Body>
			<UploadProductImage id={_id} />
		</Card>
	);
};

export default ProductItem;
