import React from 'react'
import { useSelector } from 'react-redux'

function Show4Comp() {
    const state_data=useSelector((state)=>state.productReducer.products)
    console.log("state_data",state_data)


    return (
        <div>
            {state_data.map((data,index)=><h1 key={index}>{data.id}</h1>)}
        </div>
    )
}

export default Show4Comp
