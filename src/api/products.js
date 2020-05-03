import Producats from "./products.json";

export function getAll() {
  return Promise.resolve(Producats);
}

export function getById(id){
  const product =Producats.find(item => item.id === id );

  return Promise.resolve(product)
}

export default { getAll,getById };
