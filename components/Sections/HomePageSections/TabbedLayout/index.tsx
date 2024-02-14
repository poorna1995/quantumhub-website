import TabsSection from "@/components/Common/TabsSection";
import React from "react";
import TabContentCard from "./TabContentCard";

export default function TabbedLayout() {
	return (
		<div className="w-[100%] p-[80px] bg-gradient-section  min-h-[1000px] ">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-5xl text-center text-white mb-10">
					Solutions
				</h1>
				<TabsSection data={tabsData} component={TabContentCard} />
			</div>
		</div>
	);
}

const tabsData = [
	{
		title: "Data Science",
		value: "data-science",
		component: "Data Science Solution",
		content: {
			title: "Data Science & Analytics Solutions",
		},
	},
	{
		title: "Business Intelligence",
		value: "business-intelligence",
		component: "Business Intelligence Solution",
		content: {
			title: "Business Intelligence Solutions",
		},
	},
	{
		title: "Data Management",
		value: "data-management",
		component: "Data Management Solution",
		content: {
			title: "Data Management Solutions",
		},
	},
	{
		title: "Cloud Integration",
		value: "cloud-integration",
		component: "Cloud Integration Solution",
		content: {
			title: "Cloud Integration Solutions",
		},
	},
	{
		title: "Software Development",
		value: "software-development",
		component: "Software Development Solution",
		content: {
			title: "Software Development Solutions",
		},
	},
	{
		title: "Digital Marketing Partner",
		value: "digital-marketing-partner",
		component: "Digital Marketing Partner Solution",
		content: {
			title: "Digital Marketing Partner Solutions",
		},
	},
	{
		title: "SEO Optimization",
		value: "seo-optimization",
		component: "SEO Optimization Solution",
		content: {
			title: "SEO Optimization Solutions",
		},
	},
	{
		title: "Lead Generation",
		value: "lead-generation",
		component: "Lead Generation Solution",
		content: {
			title: "Lead Generation Solutions",
		},
	},
];
