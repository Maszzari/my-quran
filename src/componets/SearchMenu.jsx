import React, { useRef } from "react";

export default function SearchMenu({ searchHandler }) {
	const sRef = useRef();

	return (
		<>
			<div className="flex">
				<input ref={sRef} type="text" className="w-full border py-2 px-4 outline-green-200 rounded" placeholder="Cari surat" onChange={() => searchHandler(sRef.current.value)} />
			</div>
		</>
	);
}
