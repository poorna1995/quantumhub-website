import AppImage from "@/components/Common/AppImage";
import React from "react";
import dataScienceImage from "public/assets/home/solutions/data-science.png";
import { Button } from "@/components/ui/button";
export default function TabContentCard({
	title = "",
	description = "",
	list = dummyList,
	handleButtonClick = () => {},
}) {
	return (
		<div className="flex flex-1 justify-between space-x-4 space-y-4">
			<div className="flex-1 ">
				<AppImage src={dataScienceImage} className="w-[100%] m-10" />
			</div>
			<div className="flex-1 ">
				<h1 className="text-4xl my-10">
					{title ?? `Data Science Solution`}
				</h1>
				<div>
					{Array.isArray(list) && list.length > 0 && (
						<div className="">
							{list.map((item, index) => (
								<div key={index} className="mt-4">
									{item}
								</div>
							))}
						</div>
					)}
				</div>
				{description && (
					<div>
						{description ??
							`Extract valuable insights from your data to guide strategic decisions..`}
					</div>
				)}{" "}
				<Button
					variant={"link"}
					className="text-[#fff] mt-10"
					// onClick={() => handleButtonClick()}
				>
					Learn More
				</Button>
			</div>
		</div>
	);
}
const dummyList = [
	"Extract valuable insights from your data to guide strategic decisions..",
	"Utilize predictive modeling for accurate forecasting and planning.",
	"Optimize business performance through data-driven analysis and visualization.",
];
