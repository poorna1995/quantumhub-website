import React from "react";
import ecommerceImage from "public/assets/home/modern-cloud-solutions/ecommerce.png";
import constructionImage from "public/assets/home/modern-cloud-solutions/construction.png";
import financeImage from "public/assets/home/modern-cloud-solutions/finance.png";
import insuranceImage from "public/assets/home/modern-cloud-solutions/insurance.png";
import retailImage from "public/assets/home/modern-cloud-solutions/retail.png";
import marketplacesImage from "public/assets/home/modern-cloud-solutions/marketplaces.png";
import AppImage from "@/components/Common/AppImage";
import { Button } from "@/components/ui/button";
export default function ModernCloudSolutionsSection() {
	return (
		<div className="max-w-7xl mx-auto">
			<div className="py-10">
				<h1 className="text-4xl ">Modern Solutions</h1>
			</div>
			<div className="grid grid-cols-3 gap-4">
				{data.map((item, index) => (
					<div key={index}>
						<AppImage
							src={item.image}
							className="max-w-[400px] max-h-[400px]"
						/>
						<h1 className="text-3xl py-8">{item.title}</h1>
						<p>
							No matter what business model, industry, and degree
							of digitailizationthere are ind
						</p>
						<Button variant={"link"}>Learn More</Button>
					</div>
				))}
			</div>
		</div>
	);
}

const data = [
	{
		title: "Ecommerce",
		image: ecommerceImage,
	},
	{
		title: "Construction",
		image: constructionImage,
	},
	{
		title: "Retail",
		image: retailImage,
	},
	{
		title: "Insurance",
		image: insuranceImage,
	},
	{
		title: "Finance",
		image: financeImage,
	},
	{
		title: "Marketplaces",
		image: marketplacesImage,
	},
];
