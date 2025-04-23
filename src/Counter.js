import React from 'react';
import {decrement, increment} from "./actions"
import {connect} from "react-redux";

const Counter = ({count, increment, decrement}) => {
    return (
        <div>
            <h1>Counter App using Redux</h1>
            <p>Count: {count}</p>
            <button onClick = {increment}> plus </button>
            <button onClick = {decrement}> minus </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {

        count: state.count,
    }

}

const mapDispatchToProps  = {
increment,
    decrement
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);
