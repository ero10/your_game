const answerReducer = (state=[], action) => {

  const {type, payload} = action;
  switch(type){
    case 'ADD_ANSWER' :
      return [payload, ...state];
      default : 
      return state;
  }

}
export default answerReducer
