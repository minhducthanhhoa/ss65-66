import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Count() {
    const countState:any = useSelector(state=>{
        return state;
    })
    const dispatch = useDispatch();
    console.log(countState);
    const increase = ()=>{
        dispatch(
            {
                type:"INCREASE"
            }
        )
    }
    const decrease = ()=>{
        dispatch(
            {
                type:"DECREASE"
            }
        )
    }
  return (
    <div>
        <p>Giá trị biến count: {countState}</p>
        <button onClick={increase}>Tăng</button>
        <button onClick={decrease}>Giảm</button>
    </div>
  )
}
