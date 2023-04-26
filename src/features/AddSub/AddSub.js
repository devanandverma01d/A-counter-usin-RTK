import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddByOne, Reset, SubByOne, selectCount } from './AddSubSlice'

export const AddSub = () => {
    let state = useSelector(selectCount)
    let dispatch = useDispatch()
  return (
    <div className='App'>
        
        <h1>{state}</h1>
        <button type='button' onClick={()=>dispatch(AddByOne())}>Increment</button>
        <button type='button' onClick={()=>dispatch(Reset())}>Reset</button>
        <button type='button' onClick={()=>dispatch(SubByOne())}>Decrement</button>
    </div>
  )
}
