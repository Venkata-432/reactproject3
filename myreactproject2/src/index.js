import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store/storeindex';
import CounterAction from './store/reducer/action/myaction';

//step2 create reducer
/*
function counter(state=0, action){
  switch(action.type){
    case 'increment':
        return state+1;
    case 'decrement':
        return state-1;
    default:
        return state;
  }
}
*/
//step 1 create store
//let store=createStore(counter);

//step 4: consume value of state changes by reducer
//store.subscribe(()=>
//   console.log("result is "+store.getState())
//)

//step 3 generate action
//store.dispatch({type:'increment'})
//store.dispatch({type:'increment'})
//store.dispatch({type:'increment'})

//store.dispatch({type:'decrement'})

ReactDOM.render(
    <Provider store={store}>
    <div>
    <App />
    <div>
      <button onClick={()=>store.dispatch(CounterAction.doIncrement())}>Increment</button>
      <button onClick={()=>store.dispatch(CounterAction.doDecrement())}>Decrement</button>
    </div>
    </div>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
