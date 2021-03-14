import React, { useState, useEffect } from 'react';
import { getProduct } from '../service/Api';

const RenderTable = () => {
  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [client, setClient] = useState('');
  const [active, setActive] = useState('');



  useEffect(() => {
    getProduct()
  },[setId, setQuantity, setProduct, setPrice, setClient, setActive]);
  return(
    <>
      <tread>
        <tr>
          <th>_id</th>
          <th>Quantity</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>client</th>
          <th>active</th>
        </tr>
      </tread>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{quantity}</td>
          <td>{product}</td>
          <td>{price}</td>
          <td>{client}</td>
          <td>{active}</td>
          <td>
            <button 
            type="button"
            >
              Select
            </button>
          </td>
          <td>
            <button
            type="button"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default RenderTable;
