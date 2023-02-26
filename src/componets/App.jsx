import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ShowSurat from "../Pages/ShowSurat";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/surat/:nomor" element={<ShowSurat />} />
		</Routes>
	);
}
