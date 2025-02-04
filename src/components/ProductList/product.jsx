import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient'; 
import './product.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    styles: [],
    maxPrice: 10000,
  });
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProducts = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        console.error('Error fetching products:', error.message);
      } else {
        setProducts(data);
        setFilteredProducts(data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const applyFilters = () => {
    const { categories, styles, maxPrice } = filters;
    const filtered = products.filter((product) => {
      const matchesCategory =
        categories.length === 0 || categories.includes(product.category);
      const matchesStyle =
        styles.length === 0 || styles.includes(product.filter);
      const matchesPrice = product.price <= maxPrice;
      return matchesCategory && matchesStyle && matchesPrice;
    });
    setFilteredProducts(filtered);
    setCurrentPage(1);
    setShowFilter(false);
  };

  return (
    <div className="container">
      {/* Filter Button for Mobile */}
      <button className="filter-toggle" onClick={() => setShowFilter(true)}>
        Filter Now
      </button>
      
      {/* Overlay for closing filter on click outside */}
      {showFilter && <div className="filter-overlay" onClick={() => setShowFilter(false)}></div>}

      {/* Filter Section */}
      <div className={`filter-section ${showFilter ? 'show' : ''}`}>
        <div className="heading">
          <h3>FILTERS</h3>
          <button className="close-filter" onClick={() => setShowFilter(false)}>X</button>
        </div>

        {/* Categories */}
        <div className="filter-item">
          <h4>CATEGORIES</h4>
          <div className="input-items">
            {['Tshirts', 'Shorts', 'Shirts', 'Hoodies', 'Jeans'].map(
              (category) => (
                <div key={category} className="input-item">
                  <input
                    type="checkbox"
                    id={category}
                    value={category}
                    onChange={(e) => {
                      const newCategories = e.target.checked
                        ? [...filters.categories, e.target.value]
                        : filters.categories.filter((cat) => cat !== e.target.value);
                      setFilters((prev) => ({ ...prev, categories: newCategories }));
                    }}
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              )
            )}
          </div>
        </div>

        {/* Price */}
        <div className="filter-item">
          <h4>PRICE</h4>
          <div className="input-items-price">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))
              }
            />
            <span>{filters.maxPrice}</span>
          </div>
        </div>

        <button className="filter-btn" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>

      {/* Product Cards */}
      <div className="products-component">
        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="product-card-container">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  className="product-card"
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                >
                  <img className="p-img" src={product.img} alt={product.name} />
                  <h4>{product.name}</h4>
                  <div className="star">{product.rating}</div>
                  <div className="price">${product.price}</div>
                </div>
              ))
            ) : (
              <p>No products match the selected filters.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
