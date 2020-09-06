import { Movies } from "../models/movies";
import { LIST_MOVIES, LIST_DATA_SUCCESS,MoviesActions }  from './movie.action';


export interface State {
  movies: Movies[];
}

const initialState: State = {
  movies: []
};

export function movieReducer(
  state = initialState,
  action: MoviesActions
)

{
    
  switch (action.type) {
    
    case LIST_MOVIES:
      return {
        ...state,
        movies: [...state.movies]
      };
      case LIST_DATA_SUCCESS: {
        return {
          movies: action.payload,
          message: null
        };
      }
     default:
      return state;
  }
}
