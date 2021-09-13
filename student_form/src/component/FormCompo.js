import React, { useEffect, useState } from 'react'
import axios from "axios"
import MainCompo from './MainCompo';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/allAction';

function FormCompo(props) {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [website,SetWebsite]=useState();
    const [image,setImage]=useState({});
    const [gender,setGender]=useState("female")
    const [skill,setSkill]=useState([])
    const dispatch = useDispatch()
    
    const [fulldata,setFulldata]=useState({})
    
        
    let genList=["male","female"]
    const skillFunc=(data)=>{
       // setSkill([...skill,data])
        data.target.checked?setSkill([...skill,data.target.name]):setSkill (skill.filter((temp)=>temp!=data.target.name))
           
    }


    const dataToSend=()=>{

        setFulldata({name,email,website,image,gender,skill})

               
       setName("")
       setEmail("")
       SetWebsite("")
    }
   
    useEffect(() => {
        dispatch(addItem(fulldata))   
    }, [fulldata])
    const handleOnchange=(e)=>{
       const reader= new FileReader();
       reader.onload=()=>{
           if(reader.readyState===2){
               setImage(reader.result)
           }
       }
       reader.readAsDataURL(e.target.files[0])
       
        console.log("url",image)
    }
    console.log("fulldata",fulldata)
    return (
        <div>
            
            <form>
                <div className="mb-3">
                    <label for="idName" className="form-label">Name</label>
                    <input type="email" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="idName" aria-describedby="emailHelp"/>
                    
                </div>

                <div className="mb-3">
                    <label for="idEamil" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="idEamil" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb-3">
                    <label for="idForWebsite" className="form-label">Website</label>
                    <input type="text" value={website} onChange={(e)=>SetWebsite(e.target.value)} className="form-control" id="idForWebsite" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb-3">
                    <label for="idImageLink" className="form-label">Image Link</label>
                    <input type="file" onChange={(e)=>handleOnchange(e)} className="form-control" id="idImageLink" aria-describedby="emailHelp"/>
                    
                </div>
                    <div className="mr-1">
                    <label for="exampleInputEmail1" className="form-label mr-auto" ><b>Gender</b></label>
                    </div>

                    {genList.map((data)=><>
                        
                        <label className="form-check-label" for="flexRadioDefault1">{data}</label>
                        <input className="form-check-input" value={data} onChange={(e)=>setGender(e.target.value)} type="radio" name="radiovalues" id="flexRadioDefault1"/>
                    </>)}


                    
                    
                    
                <div>

                </div>
               
                <div className="mb-3 form-check">
                    
                    <label className="form-check-label" for="idForJava"><b>Skil</b></label>
                        <div>
                            <label className="form-check-label" for="idForJava">Java</label>
                            <input type="checkbox" name="JAVA" onChange={(e)=>skillFunc(e)} className="form-check-input" id="idForJava"/>
                        </div>
                        
                        <div>
                            <label className="form-check-label" for="idForHTML">HTML</label>
                            <input type="checkbox" name="HTML" onChange={(e)=>skillFunc(e)} className="form-check-input" id="idForHTML"/>
                        </div>
                        
                        <div>
                            <label className="form-check-label" for="idforCss">CSS</label>
                            <input type="checkbox" name="CSS" onChange={(e)=>skillFunc(e)} className="form-check-input" id="idforCss"/>
                        </div>
                </div>
                
                </form>
                <button type="submit" onClick={()=>dataToSend()} className="btn btn-primary">Submit</button>
                          
                <button type="submit" onClick={()=>dispatch(removeItem())} className="btn btn-danger">Clear all</button>
        </div>
    )
}

export default FormCompo
