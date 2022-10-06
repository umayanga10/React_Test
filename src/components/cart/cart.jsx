import React from "react";

export default function Cart(props) {

   const {cartItems, onAdd,onRemove} = props;

    const itemsPrice = cartItems.reduce((a,b)=> a + b.price * b.qty,0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
    <aside className="block col-1">
        <h2 className="cart-heading">Cart Items</h2>
        <div> {cartItems.length === 0 && <div>Cart Is empty</div>}</div>

       {cartItems.map((item)=>(

       <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
                <div className="col-2">
                    <button onClick={()=>onAdd(item)} className="add">+</button>
                    <button onClick={()=>onRemove(item)} className="remove">-</button>
                </div>
                <div className="col-2 text-right">
                    {item.qty} X ${item.price.toFixed(2)}
                </div>
       </div>
       ))}

       {cartItems.length !==0 && (
            <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Item Price</div>
                    <div className="col-2 text-right">$ {itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Tax Price</div>
                    <div className="col-2 text-right">$ {taxPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Shiping Price</div>
                    <div className="col-2 text-right">$ {shippingPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Total Price</div>
                    <div className="col-2 text-right">$ {totalPrice.toFixed(2)}</div>
                </div>
                <hr></hr>
                <div className="row">
                    <button className="btn" onClick={()=>alert('Implemnt Checkout')}>
                        Checkout
                    </button>
                </div>
            </>
       )}
    </aside>
    )
}









