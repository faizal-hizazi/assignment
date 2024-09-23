import { Link } from "react-router-dom";
import "./product.css";
import React, { useState, useEffect } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');

    // Fetch products based on the query
    const fetchProducts = async (searchQuery = '') => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://dummyjson.com/products/search?q=${searchQuery}`
            );
            const data = await response.json();
            setProducts(data.products);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts()
    }, [])

    // Handle button click to search for products
    const handleSearch = () => {
        fetchProducts(query);  // Fetch products when the button is clicked
    };

    if (loading) {
        return <p>Loading products...</p>;
    }

    // Handle errors
    if (error) {
        return <p>Error loading products: {error.message}</p>;
    }

    return (
        <div>
            <div className="row mt-2">
                <div className="d-flex justify-content-center">
                    <Link to="/" className="btn btn-primary ">Login</Link>
                </div>
            </div>
            <h1>Search for Products</h1>

            {/* Search input field */}
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}     // Update the query state as the user types
                className="search-input"
            />

            {/* Search button */}
            <button onClick={handleSearch} className="search-button">
                Search
            </button>

            {/* Display the products in a grid */}
            <div className="product-grid">
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.thumbnail} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Rating:</strong> {product.rating}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default Product;
