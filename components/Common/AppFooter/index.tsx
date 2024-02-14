import React from "react";
import AppImage from "../AppImage";
import logo from "public/logo.png";
import Link from "next/link";

export default function AppFooter() {
	return (
		<div className="max-w-7xl mx-auto py-24 flex justify-between">
			<div>
				<AppImage src={logo} className="max-h-[40px] max-w-[200px]" />
				<p>
					Tap into the blockchain universe with our world-class custom
					decentralized solutions
				</p>
			</div>
			<div className="flex space-x-4">
				{links.map((item, index) => (
					<Link href="/" key={index}>
						{item.title}
					</Link>
				))}
			</div>
		</div>
	);
}
const links = [
	{
		title: "Contact Us",
	},
	{
		title: "FAQ",
	},
	{
		title: "Privacy Policy",
	},
	{
		title: "Terms of Use",
	},
];
