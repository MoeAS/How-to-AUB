import { Alert } from "react-native";
import * as api from "../api/index";

export const fetchingClubs = () => async (dispatch) => {
    try {
        const {data} = await api.fetchingClubs();
        dispatch({type: "FETCH_CLUBS", payload:data.clubs})
        // dispatch({type:"FETCH_CLUBS", payload: [Club1,Club2,Club3]})
    } catch (error) {
        console.log(error);
    }
}

// dispatch({type:"Add", payload: Club4})