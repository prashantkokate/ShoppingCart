const initState = {
  departments: [],
  products: [],
  filter: null
};

const catelogREducer= (state = initState, action) => {
  switch (action.type) {
    case "SET_FILTER": {
      return {
        ...state,
        filter: action.filter
      };
    }
    case "CLEAR_FILTER": {
      return {
        ...state,
        filter: null
      };
    }
    case "INITIALIZE_CATALOG": {
      return {
        ...state,
        departments: action.departments,
        products: action.products
      };
    }
    default: {
      return state;
    }
  }
};
export default catelogREducer