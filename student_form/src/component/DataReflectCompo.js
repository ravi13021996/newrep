import React, { useState } from 'react'
import { useSelector } from 'react-redux';


function DataReflectCompo() {
    const [data, setData]=useState();
   const state = useSelector(state => state.allReducer.list)
   console.log("state",state)
    return (
        <div>
            <h1>Student Details</h1>
            {state.map((data)=><div>

                <div className="card" style={{width:"18rem",border:"2px solid"}}>
                    <img src={data.image} className="card-img-top" alt="" width=""/>
                    <div class="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <h5 className="card-title">{data.email}</h5>
                        <h5 className="card-title">{data.website}</h5>
                        <h5 className="card-title">{data.gender}</h5>
                        <h5 className="card-title">{data.skill}</h5>
                        
                    </div>
                    </div>
            </div>)}
            
        </div>
    )
}

export default DataReflectCompo
