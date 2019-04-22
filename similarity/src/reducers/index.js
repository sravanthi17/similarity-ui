import { combineReducers } from "redux"
import sortData from './similarity.reducer'
import { routerReducer } from "react-router-redux"


const  reducer  = combineReducers({
   router: routerReducer,
   sortData,
});

export default reducer

