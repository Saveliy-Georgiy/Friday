import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profileReducer";
import {AuthActionsType, authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {RegistrationActionsType, registrationReducer} from "./registrationReducer";
import {PasswordActionsType, passwordReducer} from "./passwordReducer";


const rootReducers = combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    profilePage: profileReducer,
    password: passwordReducer,
})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducers>
export type AppActionsType = AuthActionsType | RegistrationActionsType | ProfileActionsType | PasswordActionsType

export default store
// @ts-ignore
window.store = store;