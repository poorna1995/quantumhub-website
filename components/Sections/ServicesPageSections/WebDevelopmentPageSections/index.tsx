import React from "react";
import HeroSection from "../../HomePageSections/HeroSection";
import heroImage from "public/assets/solutions/web-development/hero.png";

export default function WebDevelopmentPageSections() {
	return (
		<div>
			<HeroSection
				title={`Web Application Development`}
				imgSrc={heroImage}
			/>
		</div>
	);
}
