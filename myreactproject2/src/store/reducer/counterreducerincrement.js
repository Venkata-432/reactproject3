import CounterAction from "./action/myaction";

function incrementcounter(state=0, action){
    switch(action.type){
      case CounterAction.i :
        return state+1;
     
      default:
        return state;
    }
  }

  export default incrementcounter;