import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchProducts, fetchCategories } from "../../Redux-ToolKit/Slices/ProductsSlice";
import './Categories.css';
import { addToCart } from "../../Redux-ToolKit/Slices/CartSlice";


const ProductListPage = () => {
  const { category: initialCategory } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => {
    if (selectedCategory === "AllProducts") {
      return state.product.product;
    }
    return state.product.product.filter(prd => prd.category === selectedCategory);
  });
  const categories = useSelector((state) => state.product.categories);
  const quantity = 1;

  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    navigate(`/products/${newCategory}`);
  };


  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "price-low") {
      return a.price - b.price;
    } else if (sortBy === "price-high") {
      return b.price - a.price;
    }
    return 0;
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity }));
};

  return (
    <div className="container ProductListPage">
      <section >
        <h1>{`${selectedCategory}`}</h1>
        <div className="product-list">
          <div className="filter-bar">
            <label>Filter: </label>
            <select value="" onChange={handleCategoryChange}>
              <option value="" disabled>Category</option>
              <option value="AllProducts">All products</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="sort-and-count-container">
            <div className="sorting-bar">
              <label>Sort By: </label>
              <select id="sort" value={sortBy} onChange={handleSortChange}>
                <option value="name">Name</option>
                <option value="price-low">Price Low to High</option>
                <option value="price-high">Price High to Low</option>
              </select>
            </div>
            <div className="product-count">
              {products.length} products
            </div>
          </div>
        </div>
        <div className="card-deck">
          {sortedProducts.map((product) => (
            <div className="row">
              <div className="card">
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
                  <p className="card-footer">Rating: <b>{product.rating.rate}</b></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductListPage;
