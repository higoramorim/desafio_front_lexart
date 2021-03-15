import React, { useContext } from 'react';
import { addProduct } from '../service/Api';
// import FormUpdate from './component/FormUpdate'
import productContext from '../context/productContext';
import './Form.css';

const Form = () => {
  const {quantity, price, product, client, active, setQuantity, setPrice, setProduct, setClient, setActive, setRefreshTable
  } = useContext(productContext);

  const onSubmit = (e) => {
    console.log('onsubmit')
    e.preventDefault()
    addProduct({ quantity, price, product, client, active })
    setRefreshTable(true)
  }

  return (
      <form>

        <label style={{padding: '30px'}}>Quantity</label>

        <input 
        type="text" 
        name="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}/>

        <label style={{padding: '30px'}}>price</label>

        <input 
        type="text" 
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}/>

        <label style={{padding: '30px'}}>product</label>

        <input 
        type="text" 
        name="product" 
        value={product}
        onChange={(e) => setProduct(e.target.value)}/>

        <label style={{padding: '30px'}}>client</label>

        <input 
        type="text" 
        name="client"
        value={client}
        onChange={(e) => setClient(e.target.value)}/>

        <label style={{padding: '30px'}}>active</label>

        <input 
        type="checkbox" 
        name="active"
        value={active}
        onChange={(e) => setActive(e.target.value)}/>

        <button 
        type="submit" 
        name="enviar"
        onClick={onSubmit}
        >
          Enviar
        </button>
      </form>
    
  );
}

export default Form;
