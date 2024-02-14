import AppImage from "@/components/Common/AppImage";
import { Button } from "@/components/ui/button";
import React from "react";
import tailoredSolutionsImage from "public/assets/home/solutions/tailored-solutions.png";

export default function TailoredSolutions() {
	return (
		<div className="bg-gradient-section w-full h-full py-24 text-[#fff]">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-2 gap-8">
					<div>
						<h1 className="text-4xl mb-4">
							QuantumHub offers tailored solutions at every stage
							of your company&apos;s journey.
						</h1>
						<Button variant={"link"} className="my-10">
							Learn more
						</Button>
						<AppImage src={tailoredSolutionsImage} />
					</div>
					<div className="flex flex-col space-y-8">
						{data.map((item, index) => (
							<div
								key={index}
								className="bg-[#fff]/10 p-8 rounded-[10px]"
							>
								<h1 className="text-3xl">{item.title}</h1>
								<p className="text-lg">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
const data = [
	{
		title: "Early-Stage Startup",
		description: `Guiding early-stage startups to find product-market fit, build growth strategies, and establish valuable partnerships`,
	},
	{
		title: "Young Startup",
		description: `Empowering young startups with funding opportunities and helping craft a compelling story plan for attracting investors`,
	},
	{
		title: "Growth Phase Startup",
		description: `Collaborating as a digital and AI partner to lead growth initiatives and capitalize on emerging opportunities`,
	},
	{
		title: "Matured Business",
		description: `Finding funding opportunities and build a strong story pDriving digital transformation as a trusted digital and AI partner to maintain a competitive edge and lead growth initiatives lan for your startup`,
	},
	{
		title: "Enterprises",
		description: `Enabling enterprises to become digital and AI leaders, unlocking transformational initiatives for sustained growth."`,
	},
];
