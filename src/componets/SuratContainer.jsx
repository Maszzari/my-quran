import React, { useState } from "react";
import { useQuery } from "react-query";
import { quranAPI } from "../helpers";
import { LoadingSurat } from "./Loading";
import SearchMenu from "./SearchMenu";
import SuratItem from "./SuratItem";

export default function SuratContainer() {
	const { data, isLoading } = useQuery(["surat"], () => quranAPI("/surat").then((response) => response.data.data));
	const [search, setSearch] = useState("");

	const searchHandler = (search) => setSearch(search);

	return (
		<>
			<SearchMenu searchHandler={searchHandler} />
			<div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
				{isLoading && [1, 2, 3, 4, 5, 6].map((i) => <LoadingSurat key={i} />)}
				{data
					?.filter((result) =>
						result.namaLatin
							.replace(/[-'\s]/g, "")
							.toLowerCase()
							.includes(search.replace(/[-'\s]/g, ""))
					)
					.map((result) => (
						<SuratItem key={result.nomor} data={result} />
					))}
			</div>
		</>
	);
}
