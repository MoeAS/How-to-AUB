const authReducer = (state = { auth: null }, action) => {
    switch (action.type) {
      case "AUTH":
        return { ...state, authData: action?.data };
      case "LOGOUT":
        return { ...state, auth: null };
      default:
        return state;
    }
  };
  
  export default authReducer;