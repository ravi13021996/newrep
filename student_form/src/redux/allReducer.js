const intialState={
    list:[]
}

const allReducer=(state=intialState, action)=>{
    console.log("reducers",action.payload)
    switch (action.type) {
        case "ADD_ITEM":
            
            return {...state,list:[...state.list,action.payload]}
        
        case "REMOVE_ITEM":
            return {...state,list:[]}
        default:
            return state
    }
}

export default allReducer;