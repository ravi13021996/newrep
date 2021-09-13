export const addItem=(data)=>{
    console.log("action",data)
    return{
        type:"ADD_ITEM",
        payload:data
    }
}

export const removeItem=()=>{
        return{
            type:"REMOVE_ITEM"
            
        }
}