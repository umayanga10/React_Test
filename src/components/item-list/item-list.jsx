import React from "react";
import { Item } from "../item/item";

export function ItemList(props) {

    const {products,onAdd} = props;

    return (
        <main className="block col-2">
            <h1 className="product-heading">Products</h1>
            <div className="row">
                {
                products.map((product)=>(
                    <Item key={product.id} product={product} onAdd={onAdd}></Item>
                    )
                )}
            </div>
        </main>
    )
}