import { useState } from 'react';
import Cart from './components/cart/cart'
import { Header } from './components/header'
import data from './components/item-list/data'
import { ItemList } from './components/item-list/item-list'

function App() {

  const {products} = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) =>{
      const exist = cartItems.find(x=>x.id === product.id);
        if (exist) {
          console.log(exist);
            setCartItems(
              cartItems.map((x)=>x.id === product.id ? {...exist, qty: exist.qty + 1} : x
              )
            );
        }
        else
        {
            setCartItems([...cartItems, {...product, qty: 1 }]);
        }
  }

  const onRemove =(product)=>{
      const exist = cartItems.find(x=>x.id === product.id);

          if (exist.qty==1) {
                setCartItems(cartItems.filter((x)=>x.id !== product.id))
          }
          else
          {
              setCartItems(
                cartItems.map((x)=>
                x.id === product.id ? {...exist, qty: exist.qty - 1} : x
                )
              )
          }
  }

  return (
    <div className="App">
      <Header countCartItems={cartItems.length} />
        <div className='row'>
            <ItemList onAdd={onAdd} products={products}/>
            <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart>
        </div>
  
    </div>
  )
}

export default App
