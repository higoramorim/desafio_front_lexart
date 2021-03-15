import axios from 'axios';
import endpoint from './endpoint';

// create product
export async function addProduct(product){ //ok
  await axios({
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': '*/*' },
    url: `${endpoint}`,
    data: product,
  });
  console.log(product)
}

 // delete product
 export async function deleteProduct(id){
  await axios({
    method: 'DELETE',
    //headers: { 'Content-Type': 'application/json' },
    url: `${endpoint}/${id}`,
  })
}

 // get all products
 export async function getProduct(){
  
  return await axios({
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    url: `${endpoint}`,
  })
}

// get products by Id
export async function getByIdProduct(id){
  await axios({
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    url: `${endpoint}${id}`,
    data:id
  })
}

//update product by id
export async function updateProduct(id){
  await axios({
    method: 'GET',
    //headers: { 'Content-Type': 'application/json' },
    url: `${endpoint}${id}`,
    data:id
  })
}