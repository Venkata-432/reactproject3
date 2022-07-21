import CounterAction from "./action/myaction";

function decrementcounter(state=0, action){
    switch(action.type){
     
      case CounterAction.d:
        return state-1;
      default:
        return state;
    }
  }

  export default decrementcounter;