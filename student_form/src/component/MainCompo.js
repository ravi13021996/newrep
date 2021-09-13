import React, { useState } from 'react'
import FormCompo from './FormCompo'
import DataReflectCompo from './DataReflectCompo'
import Header from './Header'
import Show4Comp from './Show4Comp'

function MainCompo() {

    
    
    return (
        <div>
            <Header></Header>            
           <Show4Comp></Show4Comp>
           

           {/*<div className="row">
                <div className="col border border-danger">
                    <FormCompo ></FormCompo>
                </div>

                

                
                <div className="col border border-green">
                    <div>
                    <DataReflectCompo ></DataReflectCompo>
                    </div>
                </div>
            </div>*/} 
        </div>
    )
}

export default MainCompo