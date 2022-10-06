import React from "react";

export function Item(props) {

    const {product,onAdd} = props;

    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3 className="pro-name">{product.name}</h3>
            <div className="price">
                ${product.price}
            </div>
            <br></br>
            <div>
                <button className="btn" onClick={()=>onAdd(product)}>ADD Cart</button>
            </div>
        </div>
    )
}