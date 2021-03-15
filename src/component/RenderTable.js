import React, { useState, useEffect, useContext } from 'react';
import productContext from  '../context/productContext';
import { deleteProduct } from '../service/Api';
import { handleShowProducts } from '../service/handleShowProducts'

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
          <th>_id</th>
          <th>Quantity</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>client</th>
          <th>active</th>
        </tr>
      </tread>
      <tbody>
        {products.map((product) => (
        <tr>
          <td>{product._id}</td>
          <td>{product.quantity}</td>
          <td>{product.product}</td>
          <td>{product.price}</td>
          <td>{product.client}</td>
          <td>{product.active}</td>
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
