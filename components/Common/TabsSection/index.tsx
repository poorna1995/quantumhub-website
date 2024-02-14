import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsSection({
	data = [],
	component: Component,
}: {
	data: { title: string; value: string; component: any; content: {} }[];
	component: any;
}) {
	if (data.length > 0)
		return (
			<Tabs defaultValue={data[0].value} className="max-w-[1400px]">
				<div className="mb-10">
					<TabsList className="grid w-full  gap-4 grid-cols-4 h-auto">
						{data.map((item, index) => (
							<TabsTrigger value={item.value} key={index}>
								{item.title}
							</TabsTrigger>
						))}
					</TabsList>
				</div>
				<div className="mt-10 w-full">
					{data.map((item, index) => (
						<TabsContent
							className="mt-4"
							value={item.value}
							key={index}
						>
							<Component {...item.content} />
						</TabsContent>
					))}
				</div>
			</Tabs>
		);
}
