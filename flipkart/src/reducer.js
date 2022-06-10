export const initialState = {
  loading: "false",
  searchValue: null,
  searchProducts: [],
  basket: [],
  user: null,
  userData: null,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_LOADING_VALUE":
      return { ...state, loading: action.value };
    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: action.value };
    case "SET_SEARCH_PRODUCTS":
      return { ...state, searchProducts: action.data };
    case "ADD_TO_BASKET":
      if (
        state.basket?.findIndex(
          (basketItem) => basketItem.id === action.item.id
        ) >= 0
      ) {
        return state;
      }
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = state.basket.filter((prod) => prod.id != action.id);
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
