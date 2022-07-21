import {combineReducers, createStore } from 'redux';
//import counter from './reducer/counterreducer';
import decrementcounter from './reducer/counterreducerdecrement';
import incrementcounter from './reducer/counterreducerincrement';

//import counter from './reducer/counterreducer';

export const rootreducer=combineReducers({
   incrementcounter,
   decrementcounter
})

let store=createStore(rootreducer);

//step 4 : consume value of state changes by reducer
store.subscribe(()=>
  console.log("result is "+JSON.stringify(store.getState()))
)

export default store;
