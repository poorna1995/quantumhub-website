import React from "react";
import { Button } from "../../ui/button";

export default function Banner() {
	return (
		<div className="bg-[#6981FF] py-2">
			<div className="flex justify-center place-items-center">
				<p className="banner__text">Offers Title for the banner </p>
				<Button
					variant={"outline"}
					className="rounded-none ml-4 max-h-[28px]"
				>
					Book a demo
				</Button>
			</div>
		</div>
	);
}
