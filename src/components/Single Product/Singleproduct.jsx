import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import { ToastContainer, toast } from 'react-toastify';
import { supabase } from '../../supabaseClient'; 
import 'react-toastify/dist/ReactToastify.css';
import './singleproduct.css';

const SingleProduct = () => {
  const { id } = useParams(); // Fetch the product ID from the URL
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch product details from Supabase based on the ID
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching product:', error.message);
      } else {
        setProduct(data);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle cases where the product is not found or still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  // Generate the product image URL (prevent double URL duplication)
  const productImage = product.img?.startsWith('http')
    ? product.img
    : `https://zxfrrbvpbbzmsotfekak.supabase.co/storage/v1/object/public/product-images/${product.img}`;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to the cart!`, {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="single-product">
      <div className="container">
        <div className="left">
          <img src={productImage} alt={product.name} />
        </div>
        <div className="right">
          <div className="sing-head">
            <h1>{product.name}</h1>
            <span className="price">${product.price}</span>
          </div>
          <p className="description">{product.description || 'No description available.'}</p>
          <div className="quantity">
            <button className="Qty" onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button className="Qty" onClick={() => setQuantity((prev) => prev + 1)}>
              +
            </button>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      {/* Toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default SingleProduct;
