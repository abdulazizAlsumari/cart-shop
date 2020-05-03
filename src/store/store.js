import { createStore } from "redux";
import cartReducers from './reducers/index'

function loadState(){
 
 
    try{
  const state = localStorage.getItem('cart');
  if(state !== null){
    return JSON.parse(state);
  }
}catch(e){
  
}
  return{
    cart:[]
  }

}
function saveState(state){
  localStorage.setItem('cart',JSON.stringify(state));
  
};

function reducers(state) {
  return state;
}
const store = createStore(cartReducers, loadState(),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(()=>{
  saveState(store.getState());

});


export default store;
