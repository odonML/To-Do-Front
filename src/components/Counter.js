import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, selectCount} from '../redux/counter/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch  = useDispatch();

    const incrementCount = () =>{
        dispatch(increment());
    }
    const decrementCount = () =>{
        dispatch(decrement());
    }
    const incrementByAmountCount = () =>{
        dispatch(incrementByAmount(10));
    }

    return (
        <div>
            <button type="button" onClick={incrementCount}>Mas</button>
            <h2>{count}</h2>
            <button type="button" onClick={decrementCount}>Mas</button>
            <button type="button" onClick={incrementByAmountCount}>Mas 10</button>
        </div>
    );
}

export default Counter;
