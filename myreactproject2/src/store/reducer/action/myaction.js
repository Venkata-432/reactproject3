export default class CounterAction{
    static i='increment';
    static d='decrement';

    static doIncrement(){
        return{
            type : 'increment'
        }
    }

    static doDecrement(){
        return{
            type : 'decrement'
        }
    }
}