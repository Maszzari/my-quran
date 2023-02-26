import React, { useEffect, useState } from "react";

import Jumbotron from "../componets/Jumbotron";
import SuratContainer from "../componets/SuratContainer";
import Navbar from "../componets/Navbar";
import FooterApp from "../componets/FooterApp";

export default function Home() {
	const [scroll, setScroll] = useState(false);
	// const [jHeight, setJHeight] = useState();
	// const gap = jHeight - 64 || 0;

	useEffect(() => {
		const scrollHandler = () => {
			if (window.scrollY > 0) return setScroll(true);
			return setScroll(false);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, []);

	// const getPosition = (height) => {
	// 	setJHeight(height);
	// };

	
	return (
		<>
			<Navbar scroll={scroll} />
			<Jumbotron />
			<section className="my-8">
				<div className="container">
					<div className="max-w-5xl mx-auto">
						<SuratContainer />
					</div>
				</div>
			</section>
			<FooterApp />
		</>
	);
}
