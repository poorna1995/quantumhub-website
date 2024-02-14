import Image, { StaticImageData } from "next/image";
import React from "react";

export default function AppImage({
	src,
	alt = "",
	className,
	...props
}: {
	src: StaticImageData | string;
	alt?: string;
	[key: string]: any;
}) {
	return (
		<Image
			src={src}
			alt={alt ?? "Image"}
			className={className}
			{...props}
		/>
	);
}
