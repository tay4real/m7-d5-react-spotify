import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import artistsReducer from "../reducers/artists";
import albumsReducer from "../reducers/albums";
import likesReducer from "../reducers/likes";
import usersReducer from "../reducers/users";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  likes: [],
  artists: [],
  album: {
    currentSong: {},
    albums: {},
    tracks: [],
  },

  user: {
    username: "",
    password: "",
    email: "",
  },
};

const allReducers = combineReducers({
  likes: likesReducer,
  artists: artistsReducer,
  album: albumsReducer,
  user: usersReducer,
});

export default function configureStore() {
  return createStore(
    allReducers,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
