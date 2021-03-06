import React, { useContext } from 'react';
import productContext from '../context/productContext';
import { updateProduct } from '../service/Api';

const FormUpdate = () => {
  const {quantity, price, product, client, active, setQuantity, setPrice, setProduct, setClient, setActive
  } = useContext(productContext);

  const onSubmit = (e) => {
    e.preventDefault()
    updateProduct({ quantity, price, product, client, active })
  }

  return (
    <div>

      <form>
      <label style={{padding: '30px'}}>
      Quantity
      <input 
      type="text" 
      name="quantity"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}/>
      </label>

      <label style={{padding: '30px'}}>
      price
      <input 
      type="text" 
      name="price"
      value={price}
      onChange={(e) => setPrice(e.target.value)}/>
      </label>

      <label>
      product
      <input 
      type="text" 
      name="product" 
      value={product}
      onChange={(e) => setProduct(e.target.value)}/>
      </label>

      <label style={{padding: '30px'}}>
      client
      <input 
      type="text" 
      name="client"
      value={client}
      onChange={(e) => setClient(e.target.value)}/>
      </label>

      <label style={{padding: '30px'}}>
      active
      <input 
      type="checkbox" 
      name="active"
      value={active}
      onChange={(e) => setActive(e.target.value)}/>
      </label>

      <button 
      type="submit" 
      name="enviar"
      onClick={onSubmit}
      >
        Enviar
      </button>
      </form>
    </div>
  );
}

export default FormUpdate;
