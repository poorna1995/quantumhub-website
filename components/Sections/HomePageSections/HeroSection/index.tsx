import AppImage from "@/components/Common/AppImage";
import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";
import heroImage from "public/assets/home/hero/hero.png";

export default function HeroSection({
	title,
	imgSrc,
}: {
	title?: string;
	imgSrc?: StaticImageData | string;
}) {
	return (
		<div className="flex items-center overflow-hidden bg-white">
			<div className="flex items-center mt-10">
				<div className="sm:max-w-lg">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						{title ?? `Your Digital Transformational Process`}
					</h1>
					<p className="mt-4 text-xl text-gray-500">
						Tap into the blockchain universe with our world-class
						custom decentralized solutions{" "}
					</p>
					<div className="mt-4">
						<Button className="rounded-none ">Book a Demo</Button>
						<Button variant="outline" className="rounded-none ml-2">
							Get Started
						</Button>
					</div>
				</div>
				<div className="max-w-6xl min-w-4xl">
					<AppImage
						src={imgSrc ?? heroImage}
						alt="Quantum hub"
						className="max-w[100%] w-[100%] h-[500px] object-contain"
					/>
				</div>
			</div>
		</div>
	);
}
