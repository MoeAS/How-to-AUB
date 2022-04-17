import axios from "axios";

const API = axios.create({ baseURL: "http://10.169.5.115:5000"});

export const signin = (signInData) => API.post("/authentication/signin", signInData);
export const signup = (signUpData) => API.post("/authentication/signup", signUpData);

export const fetchingClubs = () => API.get("/Clubs/fetchingClubs");


