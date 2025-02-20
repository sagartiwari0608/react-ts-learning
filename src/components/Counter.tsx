import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, resetValue } from "../features/Counter/CounterSlice";
import { RootState } from "../store/Store";

function Counter() {
    const count = useSelector((state:RootState)=>state.counter.value);
    const dispatch = useDispatch();






    const [amount, setAmount] = useState(0);
    const handleInput = (e:any) => {
        setAmount(e.target.value);
    }

    // function incrementCount(){
    //     setCount(count + 1);
    // }
    return (    
        <>
        <button className="btn" >Count is {count}</button>
        <button className="btn" onClick={()=>dispatch(increment())}>incrementCount</button>
        <button className="btn" onClick={()=>dispatch(decrement())}>decrementCount</button>
        <button className="btn" onClick={()=>dispatch(resetValue())}>ResetCount</button>
        <button className="btn" onClick={()=>dispatch(incrementByAmount(amount))}>incrementCount By Amount</button>
        <input onChange={handleInput}></input>
        </>
    );
}

export default Counter;