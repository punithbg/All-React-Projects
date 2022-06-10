export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
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
      //LOGIV FROM REMOVING FROM BASKET
      let newBasket = state.basket.filter((prod) => prod.id != action.id);
      //   const index = state.basket.findIndex(
      //     (basketItem) => basketItem.id === action.id
      //   );
      //   if (index >= 0) {
      //     newBasket.splice(index, 1);
      //   }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
