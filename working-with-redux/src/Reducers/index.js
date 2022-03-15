import { combineReducers } from "redux";
import employeeReducers from "./employeeReducers";
import movieReducer from "./movieReducer";
import flightReducer from "./flightReducers";

const rootReducer = combineReducers({
    employees: employeeReducers,
    flights: flightReducer,
    movies: movieReducer
});

export default rootReducer