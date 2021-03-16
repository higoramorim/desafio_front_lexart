import React, { useState, useEffect, useContext } from 'react';
import productContext from  '../context/productContext';
import { deleteProduct } from '../service/Api';
import { handleShowProducts } from '../service/handleShowProducts'
import './RenderTable.css';

const handleDelete = async (id, setRefreshTable) => {
  await deleteProduct(id)
  setRefreshTable(true)
  console.log(id)
}

const RenderTable = () => {
  const [products, setProducts] = useState([]);
  const { refreshTable, setRefreshTable } = useContext(productContext)
  console.log(refreshTable);

  useEffect(() => {
    handleShowProducts(refreshTable, setProducts)
  },[products, refreshTable]);

  useEffect(() => {
   setRefreshTable(false)
  },[products, setRefreshTable])
  

  return(
    <>
      <tread>
        <tr>
          <th style={{width: '211px'}}>_id</th>
          <th>Quantity</th>
          <th>Product Name</th>
          <th style={{width: '50px'}}>Price</th>
          <th style={{width: '100px'}}>client</th>
          <th>active</th>
        </tr>
      </tread>
      <tbody> 
        {products.map((product) => (
        <tr key={product._id}>
          <td>{product._id}</td>
          <td style={{width: '69px'}}>{product.quantity}</td>
          <td style={{width: '108px'}}>{product.product}</td>
          <td style={{width: '50px'}}>{product.price}</td>
          <td style={{width: '100px'}}>{product.client}</td>
          <td>{product.active}</td>
          <td>
            <button 
            type="button"
            onClick={() => console.log(product._id)}
            >
              Select
            </button>
          </td>
          <td>
            <button
            type="button"
            onClick={() => handleDelete(product._id, setRefreshTable) }
            >
              Delete
            </button>
          </td>
        </tr>
          ))}
      </tbody>
    </>
  )
}

export default RenderTable;
