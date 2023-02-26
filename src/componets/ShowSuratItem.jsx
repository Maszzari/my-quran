import React from "react";

export default function ShowSuratItem({ data }) {
	return (
		<div className="border-b py-8 relative">
			<span className="absolute left-0 top-0 bg-green-600 text-white px-2 rounded-b-md">{data.nomorAyat}</span>
			<p className="text-right text-3xl lg:text-4xl font-lpmq leading-relaxed lg:leading-relaxed">{data.teksArab}</p>
			<p className="mt-3">{data.teksLatin}</p>
			<p className="mt-2">{data.teksIndonesia}</p>
		</div>
	);
}
