import AppImage from "@/components/Common/AppImage";
import React from "react";
import businessModelImage from "public/assets/home/solutions/data-science.png";
export default function BusinessModelsSection() {
	return (
		<div className="w-full h-full  bg-gradient-section text-[#fff]">
			<div className="max-w-7xl mx-auto py-24">
				<h1 className="text-white text-4xl py-4 text-center mb-10">
					Business Models
				</h1>
				{/* list of models */}
				<div className="flex items-center py-4">
					{models.map((item, index) => (
						<span
							key={index}
							className="bg-[#fff]/10 text-[#fff] ml-2 p-4 px-8"
						>
							{item}
						</span>
					))}
				</div>

				{/* grid */}
				<div className="grid grid-cols-2 gap-8 mt-10">
					{data.map((item, index) => (
						<div key={index} className="flex flex-col ">
							<AppImage
								src={businessModelImage}
								className="max-w-[100%] max-h-[300px]"
								// width={400}
								// height={400}
							/>
							<div className="py-8">
								<h1 className="text-3xl py-[16px]">
									{item.title}
								</h1>
								<ul>
									{item.list.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const models = [
	"Front End of Applications ",
	"Back End of Applications",
	"Security Threats",
	"Web portals",
	"SAAS",
];

const data = [
	{
		title: "SAAS",
		list: [
			"Develop scalable cloud-based software solutions.",
			"Implement subscription-based models for recurring revenue.",
			"Provide ongoing customer support and maintenance.",
		],
	},
	{
		title: "Marketplaces",
		list: [
			"Build and manage online marketplaces connecting both supply and demand side. ",
			"Create intuitive user experiences and secure transaction processes. ",
		],
	},
];
