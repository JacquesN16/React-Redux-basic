import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct,removeSelectedProduct } from "../redux/actions/productActions";
import axios from "axios";

export default function ProductDetail() {
    const product = useSelector((state) => state.product)
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();

    console.log(product);

  const fetchItem = async() => {
      setIsLoading(true)
    const res = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      })
      .finally(setIsLoading(false));


    dispatch(selectedProduct(res.data));
  };
  

  useEffect(()=>{
    if(id && id !== '')  {
        fetchItem()
    }
    
    return ()=>{
      dispatch(removeSelectedProduct())
    }
  },[id])
  console.log(product.image)

  return ( <div className="ui grid container">
  {(product.length === 0 || isLoading) ? (
    <div>...Loading</div>
  ) : (
    <div className="ui placeholder segment">
      <div className="ui two column stackable center aligned grid">
        <div className="ui vertical divider">AND</div>
        <div className="middle aligned row">
          <div className="column lp">
            <img className="ui fluid image" src={product.image} />
          </div>
          <div className="column rp">
            <h1>{product.title}</h1>
            <h2>
              <a className="ui teal tag label">${product.price}</a>
            </h2>
            <h3 className="ui brown block header">{product.category}</h3>
            <p>{product.description}</p>
            <div className="ui vertical animated button" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>);
}
