export const actionOne = (data) => {
  return {
    type: 'CREATE_ACTION',
    payload: data,
  };
};

export const actionTwo = (data) => {
  return {
    type: 'SECOND_ACTION',
    payload: data,
  };
};

export const actionThree = (data) => {
  return {
    type: 'THIRD_ACTION',
    payload: data,
  };
};
export const actionFour = (data) => {
  return {
    type: 'FOURTH_ACTION',
    payload: data,
  };
};

export const increaseCount = (data) => {
  return {
    type: 'INCREASE_COUNT',
    payload: data,
  };
};

export const decreaseCount = (data) => {
  console.log('test inc count', data);
  return {
    type: 'DECREASE_COUNT',
    payload: data,
  };
};
