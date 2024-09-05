import { createSlice } from "@reduxjs/toolkit";

const loadState=()=> {
    try {
      const myState = localStorage.getItem('cart');
      if (myState=== null) {
        return [];
      }
      return JSON.parse(myState);
    } catch (err) {
      console.error("not load state", err);
      return [];
    }
  };
  
  const saveState=(state)=> {
    try {
      const myState = JSON.stringify(state);
      localStorage.setItem('cart', myState);
    } catch (err) {
      console.error("not save state", err);
    }
  };

const cartSlice= createSlice({
    name:'cart',
    initialState:{
        items:loadState(),
    },
    reducers:{
        addToCart: (state, action)=>{
            const product= action.payload;
            const exits=state.items.some(item=>item.id===product.id);
            if(!exits){
                state.items.push(product);
                saveState(state.items);
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter(item => item.id !== productId);
            saveState(state.items);
          }
    },
});

export const {addToCart, removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;