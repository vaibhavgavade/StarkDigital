const INITIAL_STATE = {
  quantity: 0,
};
export const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT': {
      return {
        ...state,
        quantity: (state.quantity = action.payload + 1),
      };
    }

    case 'DECREASE_COUNT': {
      if (state.quantity > 0) {
        return {
          ...state,
          quantity: (state.quantity = action.payload - 1),
        };
      }
    }
    default: {
      return state;
    }
  }
};
