import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: []
}

export const dataSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setMovies (state,action)  {
      state.data = action.payload;
    },

  },
})

// Action creators are generated for each case reducer function
export const { setMovies } = dataSlice.actions

export default dataSlice.reducer


export const fetchMovies = () => {
    return async function fetchMoviesThunk(dispatch){
   const response = await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
   const movies = await response.json();
   dispatch(setMovies(movies))
    }
}