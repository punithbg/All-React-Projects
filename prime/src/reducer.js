export const initialState = {
  user: null,
  searchValue: null,
  loading: false,
  movieList: null,
  selectedMovie: null,
  category: "tv",
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_CATEGORY":
      return { ...state, category: action.data };
    case "SET_LOADING_VALUE":
      return { ...state, loading: action.value };
    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: action.value };
    case "SET_SELECTED_MOVIE":
      return { ...state, selectedMovie: action.data };
    case "SET_MOVIE_LIST":
      return { ...state, movieList: action.data };

    default:
      return state;
  }
};

export default reducer;

// case "ADD_TO_BASKET":
//   if (
//     state.basket?.findIndex(
//       (basketItem) => basketItem.id === action.item.id
//     ) >= 0
//   ) {
//     return state;
//   }
//   return {
//     ...state,
//     basket: [...state.basket, action.item],
//   };
// case "REMOVE_FROM_BASKET":
//   let newBasket = state.basket.filter((prod) => prod.id != action.id);
//   return { ...state, basket: newBasket };
