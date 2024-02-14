import DataSciencePageSections from "@/components/Sections/ServicesPageSections/DataSciencePageSections";
import WebDevelopmentPageSections from "@/components/Sections/ServicesPageSections/WebDevelopmentPageSections";
import React from "react";

const pages = {
	"data-science": {
		component: DataSciencePageSections,
	},
	"web-development": {
		component: WebDevelopmentPageSections,
	},
};

export default function ServicePage({
	params: { type },
}: {
	params: { type: string };
}) {
	const Page = pages[type as keyof typeof pages]?.component;
	return <div className="max-w-7xl mx-auto">{Page && <Page />}</div>;
}
