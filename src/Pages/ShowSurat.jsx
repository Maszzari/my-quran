import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Navbar from "../componets/Navbar";
import FooterApp from "../componets/FooterApp";
import ShowSuratItem from "../componets/ShowSuratItem";
import { quranAPI } from "../helpers";
import { LoadingShowSurat } from "../componets/Loading";

export default function ShowSurat() {
	const { nomor } = useParams();
	const { data, isLoading } = useQuery(["getSuratByNomor", nomor], () => quranAPI(`/surat/${nomor}`).then((response) => response.data));
	const ayat = data?.data?.ayat;
	const nama = data?.data?.nama;
	const namaLatin = data?.data?.namaLatin;

	const nomorSurat = data?.data?.nomor;

	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		const scrollHandler = () => {
			if (window.scrollY > 0) return setScroll(true);
			return setScroll(false);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, []);

	return (
		<>
			<Navbar scroll={scroll} />
			<section id="show-surat" className="pt-20">
				<div className="container">
					<div className="max-w-5xl mx-auto">
						<div className="text-center mt-3">
							<h2 className="text-2xl font-bold">
								{nomorSurat}. {namaLatin}
							</h2>
							<h1 className="text-6xl font-lpmq mt-2">{nama}</h1>
							<p>
								Pembukaan - <span className="italic">Mekah</span> - 7 Ayat
							</p>
						</div>
						<div className="my-10">
							{isLoading && [1, 2, 3].map((i) => <LoadingShowSurat key={i} />)}
							{ayat?.map((result) => (
								<ShowSuratItem key={result.nomorAyat} data={result} />
							))}
						</div>
					</div>
				</div>
			</section>
			<FooterApp />
		</>
	);
}
