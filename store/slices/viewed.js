import { createSlice } from '@reduxjs/toolkit'


export const viewedSlice = createSlice({
  name: 'viewed',
  initialState: {
    items:[],
  },
  reducers: {
    addNewProduct: (state,action) => {
        const {id} =action.payload
        state.items = [...new Set([id,...state.items])]
    },
    deleteProduct:(state,action)=>{
        const {id} =action.payload  
        state.items = state.items.filter(items=>(
            items!==id
        ))
    },
    trashVieweds:(state,action)=>{
        state.items=[]
    }
  }
})

// Action creators are generated for each case reducer function
export const { addNewProduct,deleteProduct,trashVieweds} = viewedSlice.actions

export default viewedSlice.reducer