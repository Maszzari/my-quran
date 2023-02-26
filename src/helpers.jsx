import axios from "axios";

export const quranAPI = axios.create({
	baseURL: "https://equran.id/api/v2",
});
