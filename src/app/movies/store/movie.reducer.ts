import { Movies } from "../models/movies";
import { LIST_MOVIES, LIST_DATA_SUCCESS,MoviesActions,ADD_MOVIES,UPDATE_MOVIES }  from './movie.action';


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
      case ADD_MOVIES: {
        return {
          ...state
        };
        }
        case UPDATE_MOVIES: {
          return {
            ...state,
          };
        }
     default:
      return state;
  }
}
