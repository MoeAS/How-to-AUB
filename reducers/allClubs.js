const allClubsReducer = (allClubs = null, action) => {
    switch (action.type) {
      case "FETCH_CLUBS":
        return action.payload; // allClubs = action.payload
      default:
        return allClubs;
    }
  };
  
  export default allClubsReducer;