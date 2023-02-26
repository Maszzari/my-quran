import React, { useState } from "react";
import { TbLayoutGrid, TbX } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ scroll }) {
	const [btnToggle, setBtnToggle] = useState(false);
	const location = useLocation();

	return (
		<>
			<nav className={`fixed w-full left-0 top-0 z-50 transition-colors text-white ${location.pathname !== "/" ? "bg-green-700" : "bg-transparent"} ${scroll ? "shadow !bg-green-700 text-white" : ""}`}>
				<div className="container">
					<div className="flex justify-between h-16 items-center">
						<Link to={"/"} className="font-semibold">
							MY-QURAN
						</Link>

						<div className={`${btnToggle ? "!translate-x-0" : "translate-x-full"} transition-transform lg:transition-none fixed right-0 top-[4.5rem] p-5 w-1/2 rounded-l-md bg-green-700 lg:static lg:p-0 lg:bg-transparent lg:rounded-none lg:w-auto lg:translate-x-0`}>
							<div className={`gap-5 flex flex-col lg:flex-row`}>
								<a href="/">Home</a>
								<a href="/" aria-disabled="true" className="pointer-events-none text-slate-300">
									Jadwal Sholat (CS)
								</a>
							</div>
						</div>
						<button className="text-2xl lg:hidden" onClick={() => setBtnToggle(!btnToggle)}>
							{btnToggle ? <TbX /> : <TbLayoutGrid />}
						</button>
					</div>
				</div>
			</nav>
		</>
	);
}
