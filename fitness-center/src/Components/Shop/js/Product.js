import React from 'react';
import "../css/index.css"

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className={"product-block"}>
      <img className="small" src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)} className={"button_add"}>Add To Cart</button>
      </div>
    </div>
  );
}
