import React from "react";

export function LoadingShowSurat() {
	return (
		<div className="border-b py-8 relative animate-pulse w-full">
			<span className="absolute left-0 top-0 bg-slate-200 text-white px-2 rounded-b-md">
				<div className="w-3 h-6"></div>
			</span>
			<div className="text-right text-3xl lg:text-4xl leading-relaxed lg:leading-relaxed">
				<div className="w-1/2 h-7 bg-slate-200 ml-auto rounded"></div>
			</div>
			<div className="mt-3">
				<div className="w-full h-7 bg-slate-200 ml-auto rounded"></div>
			</div>
			<div className="mt-2">
				<div className="w-full h-7 bg-slate-200 ml-auto rounded"></div>
				<div className="w-1/2 h-7 bg-slate-200 mt-2 rounded"></div>
			</div>
		</div>
	);
}

export function LoadingSurat() {
	return (
		<div className="py-3 relative animate-pulse w-full">
			<span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 bg-slate-200 text-white rounded-full">
				<div className="w-6 h-6"></div>
			</span>
			<div className="flex justify-between">
				<div className="w-1/3 h-7 bg-slate-200 rounded"></div>
				<div className="w-1/3 h-7 bg-slate-200 ml-auto rounded"></div>
			</div>
			<div className="mt-3">
				<div className="w-1/4 h-7 bg-slate-200 rounded"></div>
			</div>
		</div>
	);
}
