const counters = (state = [], action) => {
  switch (action.type) {
    case 'ADD COUNT':
      return [...state, action.count];
    case 'SUBSTRACT COUNT':
      return [...state, action.count];
    default:
      return state;
  }
};

export default counters;
