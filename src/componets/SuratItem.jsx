import React from "react";
import { useNavigate } from "react-router-dom";

export default function SuratItem({ data }) {
	const navigate = useNavigate();

	const moveToShowSurat = (nomor) => {
		return navigate(`/surat/${nomor}`, true);
	};

	return (
		<div className="p-3 rounded border flex justify-between items-center relative cursor-pointer hover:bg-green-800 hover:text-white transition-colors duration-300" onClick={() => moveToShowSurat(data.nomor)}>
			<span className="absolute top-0 left-0 w-6 h-6 bg-green-600 grid place-content-center rounded-full -translate-x-1/2 -translate-y-1/2 text-white text-sm">{data.nomor}</span>
			<div>
				<h2>{data.namaLatin}</h2>
				<p>
					{data.arti} <span className="text-sm italic">({data.tempatTurun})</span>
				</p>
			</div>
			<h2 className="text-xl lg:text-3xl font-bold font-lpmq">{data.nama}</h2>
		</div>
	);
}
