import { createSlice } from "@reduxjs/toolkit";
export interface CounterState{
    value: number;
}
const initialState: CounterState = {
    value: 0,
}
export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.value +=1;
    },
    decrement:(state)=>{
        state.value-=1;
    },
    resetValue:(state) =>{
        state.value = initialState.value
    },
    incrementByAmount:(state, action) =>{
        state.value += Number(action.payload);
    }
}
}
)
export const { increment, decrement, resetValue, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;