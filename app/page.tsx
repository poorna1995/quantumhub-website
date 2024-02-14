import NavigationMenuDemo from "@/components/Common/AppHeader";
import Banner from "@/components/Common/AppHeader/Banner";
import BrandLogosSection from "@/components/Sections/HomePageSections/BrandLogos";
import BusinessModelsSection from "@/components/Sections/HomePageSections/BusinessModelsSection";
import HeroSection from "@/components/Sections/HomePageSections/HeroSection";
import ModernCloudSolutionsSection from "@/components/Sections/HomePageSections/ModernCloudSolutionsSection";
import ServicesSection from "@/components/Sections/HomePageSections/ServicesSection";
import StatisticsSection from "@/components/Sections/HomePageSections/StatisticsSection";
import TabbedLayout from "@/components/Sections/HomePageSections/TabbedLayout";
import TailoredSolutions from "@/components/Sections/HomePageSections/TailoredSolutions";
import TestimonialsSection from "@/components/Sections/HomePageSections/TestimonialsSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div className="max-w-7xl mx-auto">
				<HeroSection />
				<BrandLogosSection />
			</div>
			<div>
				<TabbedLayout />
			</div>
			<div>
				<ServicesSection />
				<BusinessModelsSection />

				<StatisticsSection />
				<TailoredSolutions />
				<ModernCloudSolutionsSection />
				<TestimonialsSection />
				{/* <Button>Click me</Button> */}
			</div>
		</div>
	);
}
