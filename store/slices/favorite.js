import { createSlice } from '@reduxjs/toolkit'
import { PRODUCTS } from '../../data'


export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    items:PRODUCTS,
    favorites:[]
  },
  reducers: {
    toggleFavorite: (state,action) => {
        const {id} =action.payload
        const data = state.items.find(items=>(
            items.id===id
        ))
        const tempt = state.favorites.find(items=>(
            items.id===data.id
        ))
        if(tempt)
        {
          state.favorites= state.favorites.filter(items=>(
            items.id!=id
            ))
        }else
        {
            state.favorites.push(data)
        }
    },
    handelFavorite:(state,action)=>{
      const {id} = action.payload
      state.favorites=state.favorites.filter(items=>(
        items.id!==id
      ))
    },
    trashProducts:(state,action)=>{
      state.favorites = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { toggleFavorite,handelFavorite,trashProducts} = favoriteSlice.actions

export default favoriteSlice.reducer