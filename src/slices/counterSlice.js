import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const doIncrement = createAsyncThunk('increment', async (userId, { dispatch }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch(increment());
      resolve(); // Indicate that the operation is successful
    }, 4000);
  });
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    loading:true,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(doIncrement.pending,(state)=>{
      console.log('pending...')
    })
    .addCase(doIncrement.fulfilled,(state)=>{
      console.log('success')
    })
    .addCase(doIncrement.rejected,(state)=>{
      console.log('rejected')
    })
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer