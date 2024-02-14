const posts = [
	{
		id: 1,
		title: "Web Application Development",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
	},
	{
		id: 2,
		title: "Android Development",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
	},
	{
		id: 3,
		title: "iOS Development",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
	},
	{
		id: 4,
		title: "Blockchain Development",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
	},
	{
		id: 5,
		title: "Spatial App Development",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
	},
	{
		id: 6,
		title: "Product Development",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
	},
	// More posts...
];

export default function ServicesSection() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl ">
					<h2 className="text-[42px] font-bold tracking-tight text-gray-900 mx-auto text-center">
						Services
					</h2>
				</div>
				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post) => (
						<article
							key={post.id}
							className="flex max-w-xl flex-col items-start justify-between"
						>
							<div className="group relative">
								<h3 className="mt-3 text-[32px] font-semibold leading-[47px] text-[#101010] group-hover:text-gray-600">
									<a href={post.href}>
										<span className="absolute inset-0" />
										{post.title}
									</a>
								</h3>
								<p className="mt-5 line-clamp-3 text-[21px]  text-[#101010] leading-[30px]">
									{post.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}
