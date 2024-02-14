import React from "react";
import HeroSection from "../../HomePageSections/HeroSection";
import heroImage from "public/assets/solutions/data-science/hero.png";

export default function DataSciencePageSections() {
	return (
		<div>
			<HeroSection
				title={`Data Science & Analytics Solutions`}
                imgSrc={heroImage}
			/>
		</div>
	);
}
