const getCovidCases = () => async (dispatch) => {
  try {
    const data = await fetch("https://api.covid19api.com/summary", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const result = await data.json();
    dispatch({
      type: "GET_COVID_CASES",
      payload: result,
    });
  } catch (err) {
    console.log("err =>", err.message);
  }
};

export { getCovidCases };
