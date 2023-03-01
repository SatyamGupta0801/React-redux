import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount} from './counterSlice'
import styles from './Counter-module.css';

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='row'>
        <button
          className='button'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className='value'>{count}</span>
        <button
          className='button'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
      <button
          className='button'
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment By Amount 10
        </button>
      </div>
    </div>
  )
}