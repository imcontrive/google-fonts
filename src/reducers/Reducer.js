export default function fonts(state=[],action){
  switch(action.type){
    case "ADD_FONTS": {
      return action.payload;
    }
    default: 
    return state;
  }
}
