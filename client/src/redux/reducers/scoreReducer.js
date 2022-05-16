const scoreReducer = (state=null, action) => {
  const {type, payload} = action;
  switch(type){
    case 'ADD_SCORE' :
      return state + payload;
      default :
      return state;
  }
}
export default scoreReducer;
