const INITIAL_STATE = {
  cases: null,
};

const CovidCases = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_COVID_CASES":
      return {
        ...state,
        cases: action.payload,
      };

    default:
      return state;
  }
};

export { CovidCases };
