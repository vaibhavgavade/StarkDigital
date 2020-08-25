const data = [];

export const reducer = (state = data, action) => {
  switch (action.type) {
    case 'CREATE_ACTION':
      return [...state, action.payload];

    case 'SECOND_ACTION':
      return [...state, action.payload];

    case 'THIRD_ACTION':
      return [...state, action.payload];

    case 'FOURTH_ACTION':
      return [...state, action.payload];

    default:
      return state;
  }
};
