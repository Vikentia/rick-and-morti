import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'; //thunk
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'; //thunk
import { CharactersActionTypes, charactersReducer } from "./reducers/charactersReducer";

//@ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const rootReducer = combineReducers({
    characters: charactersReducer,
})

// export const store = createStore(rootReducer, applyMiddleware(thunk), composeEnhancers()) //thunk
export const store = createStore(rootReducer, applyMiddleware(thunk)) //thunk

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector

export type AppStoreType = ReturnType<typeof store.getState>
// export type RootReducerActionType = ReturnType<typeof rootReducer> //запасная типизация


// export type AppDispatch2 = typeof store.dispatch // типизация из документации. он диспатчит только экшены

type AppDispatch = ThunkDispatch<AppStoreType, unknown, AllActionTypes>

type AllActionTypes = CharactersActionTypes

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AllActionTypes>