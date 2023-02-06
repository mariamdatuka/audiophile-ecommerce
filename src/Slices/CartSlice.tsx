import { createSlice,configureStore, PayloadAction} from "@reduxjs/toolkit";


export interface Types{
    cartItems:number[],
  
}

const initialState:Types={
    cartItems:[],
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
      addToCart:(state,action:PayloadAction<number>)=>{
        state.cartItems.push(action.payload)
      }
    }
})

export const store=configureStore({
    reducer:cartSlice.reducer  
})


export const cartActions=cartSlice.actions;
export default cartSlice.reducer;