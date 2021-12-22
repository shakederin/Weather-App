export const weatherReducer = (state = [], action)=>{
    switch (action.type){
        case "SEARCH_CITY":
            console.log(action.payload);
            return [action.payload] 
        default:
            return state;    
    }
}