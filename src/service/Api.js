import axios from 'axios';

// create product
export async function addProduct(product){
  const endpoint = 'http://crudcrud.com/api/b2b6b0bc32cc444abbc23067dc6e1b2f/ABMStock'
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
  const endpoint = 'http://crudcrud.com/api/b2b6b0bc32cc444abbc23067dc6e1b2f/ABMStock'
  await axios({
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    url: `${endpoint}${id}`,
  })
}

 // get all products
 export async function getProduct(product){
  const endpoint = 'http://crudcrud.com/api/b2b6b0bc32cc444abbc23067dc6e1b2f/ABMStock'
  await axios({
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    url: `${endpoint}`,
    data:product
  })
}

// get products by Id
export async function getByIdProduct(id){
  const endpoint = 'http://crudcrud.com/api/b2b6b0bc32cc444abbc23067dc6e1b2f/ABMStock'
  await axios({
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    url: `${endpoint}${id}`,
    data:id
  })
}

//update product by id
export async function updateProduct(id){
  const endpoint = 'http://crudcrud.com/api/b2b6b0bc32cc444abbc23067dc6e1b2f/ABMStock'
  await axios({
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    url: `${endpoint}${id}`,
    data:id
  })
}