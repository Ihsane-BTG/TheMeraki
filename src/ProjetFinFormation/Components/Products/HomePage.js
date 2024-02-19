import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts } from "../../Redux-ToolKit/Slices/ProductsSlice";
import { Link } from "react-router-dom";
import './HomePage.css';
import { addToCart } from "../../Redux-ToolKit/Slices/CartSlice";

const HomePage = () => {
    const productIds = [4, 7, 14, 16];
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.product.product);
    const categories = useSelector((state) => state.product.categories);
    const bestSellers = products.filter(prd => productIds.includes(prd.id));
    const [currentSlide, setCurrentSlide] = useState(0);
    const quantity = 1;


    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
        setProducts(productsData);
    }, [dispatch, productsData]);

    useEffect(() => {
        const slideshow = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
        }, 5000);

        return () => clearInterval(slideshow);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, quantity }));
    };

    return (
        <div className="home-page">
            <section className="container-fluid background-section">
                <div className="slideshow-container">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            className={`mySlides fade ${index === currentSlide ? "show" : ""}`}
                            key={index}
                        >
                            <img
                                src={`./PFF-Images/bg${index + 1}.jpg`}
                                alt={`Slide ${index + 1}`}
                                className="slideshow-image"
                            />
                        </div>
                    ))}
                    <button className="prev" onClick={prevSlide}>&#10094;</button>
                    <button className="next" onClick={nextSlide}>&#10095;</button>
                </div>
                <div className="description-container">
                    <h1>Welcome to TheMeraki Website</h1>
                    <p>Discover a wide range of high-quality products for all your needs.</p>
                </div>
            </section>
            <div className="container">
                <section>
                    <h1>Categories</h1>
                    <div className="category-container row">
                        {categories.map(category => (
                            <div className="col cat" key={category}>
                                <Link to={`/products/${category}`} >
                                    <img src={`./PFF-Images/${category}.jpg`} alt="" />
                                    <p>{category}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h1>Best Sellers</h1>
                    <div className="best-sellers card-deck">
                        {bestSellers.map((product) => (
                            <div className="row">
                                <div className="card" key={product.id}>
                                    <div className="product-image">
                                        <Link to={`/productdetails/${product.id}`}>
                                            <img className="card-img-top" src={product.image} alt={product.title} />
                                        </Link>
                                        <ul className="social">
                                            <li><Link className="a" href="#" onClick={() => handleAddToCart(product)}>
                                                <i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                                </svg></i>
                                            </Link></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-subtitle">{product.title}</h6>
                                        <p className="card-text text-secondary">{product.category}</p>
                                        <p className="font-weight-bold" style={{ color: "#274C77" }}>${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link to={"/products/AllProducts"} >
                        <button type="button" class="btn">View All</button>
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
