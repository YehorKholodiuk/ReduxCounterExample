import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./actions";

const CounterReduxHooks = () => {

    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
    return (
        <div>
<h1>Counter App using Redux hooks</h1>
            <p> Count: {count}</p>
            <button onClick = {() => dispatch(increment())}>Plus</button>
            <button onClick = {() => dispatch(decrement())}>Minus</button>
        </div>
    );
};

export default CounterReduxHooks;
