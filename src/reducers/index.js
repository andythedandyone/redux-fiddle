import { INCREMENT } from '../actions';


export default (state = 0, action) => {
    console.log('from reducer -> ', state)
    switch (action.type) {
        case INCREMENT:
            return state + 1
            break;
    
        default:
            break;
    }
}