import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

 
  const renderList = products.map((product) => {
    return (
      <div className="four wide column" key={product.id}>
        <Link to={`/product/${product.id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="content">
                <div className="header">{product.title}</div>
                <div className="meta price">{product.price} EUR</div>
                <div className="meta">{product.category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
}
