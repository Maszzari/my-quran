import React from "react";
import masjid from "../assets/img/masjid.png";
import bulan from "../assets/img/bulan.png";
// import { SuratContext } from "../contexts/SuratContext";

export default function Jumbotron() {
	return (
		<>
			<section id="jumbo" className="w-full h-screen flex justify-center items-center relative bg-gradient-to-t from-green-600 to-green-900">
				<div className="container">
					<div className="max-w-lg text-center mx-auto lg:max-w-4xl relative z-10">
						<h1 className="text-3xl font-bold text-white lg:text-7xl">Al - Quran Elektronik. Mudah, nyaman, simple</h1>
						<p className="mt-2 text-slate-300 lg:text-2xl">Aplikasi ini mengambil sumber dari Kementrian Agama Republik Indonesia.</p>
					</div>
				</div>
				<img src={bulan} alt="" className="absolute w-44 left-[10%] bottom-[38%]" />
				<img src={masjid} alt="" className="absolute bottom-0 left-0 w-full" />
			</section>
		</>
	);
}
