import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../../Redux-ToolKit/Slices/ProductsSlice";
import StarRating from "./StarRating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductDetails.css"
import { addToCart } from "../../Redux-ToolKit/Slices/CartSlice";

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.product.product);
    const product = productsData.find(prd => prd.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAdd = () => {
        setQuantity(quantity + 1);
    };    

    const handleRemove = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        draggable: true, 
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, quantity }));
        setQuantity(1);
    };


    return (
        <div>
            <Link className="link-go-back" to="#" onClick={() => window.history.back()} >
                Go Back
            </Link>
            <section>
                <div className="container ProductDetails flex">
                    <div className="main_image left">
                        <img src={product.image} alt="Main Image" />
                    </div>
                    <div className="right">
                        <h3>{product.title}</h3>
                        <h4><p className="font-weight-bold" style={{ color: "#6096BA" }}>${product.price}<sup style={{ textDecoration: "line-through", color: "gray" }}>${(product.price + (product.rating.rate * 10)).toFixed(2)}</sup></p></h4>
                        <p>{product.description}</p>
                        <h5>Category: {product.category}</h5>
                        <StarRating rating={product.rating.rate} />
                        <div className="color flex1">
                        </div>
                        <h5>Number</h5>
                        <div className="add flex1">
                            <span className="subtract-btn" onClick={handleRemove} role="button">
                                -
                            </span>
                            <label>{quantity}</label>
                            <span className="add-btn" onClick={handleAdd} role="button">
                                +
                            </span>
                        </div>
                        <button className="btn" onClick={()=>handleAddToCart(product)}>Add to cart</button>
                    </div>
                </div>
            </section>
            <section className="container products">
                <h2>Other Products</h2>
                <Slider {...carouselSettings}>
                    {productsData.map((product) => (
                        <div className="row">
                            <div className="card" key={product.id}>
                                <div className="product-image">
                                    <Link to={`/productdetails/${product.id}`}>
                                        <img className="card-img-top" src={product.image} alt={product.title} />
                                    </Link>
                                    <ul className="social">
                                        <li><Link className="a" href="#" onClick={() => handleAddToCart(product)}><i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg></i></Link></li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-subtitle">{product.title}</h6>
                                    <p className="card-text text-secondary">{product.category}</p>
                                    <p className="font-weight-bold" style={{ color: "#274C77" }}>${product.price}<sup style={{ textDecoration: "line-through", color: "gray" }}>${(product.price + (product.rating.rate * 10)).toFixed(2)}</sup></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
};

export default ProductDetails;
