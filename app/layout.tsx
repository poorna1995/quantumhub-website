import Banner from "@/components/Common/AppHeader/Banner";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppHeader from "@/components/Common/AppHeader";
import AppFooter from "@/components/Common/AppFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Quantum Hub Technologies",
	description: "Quantum Hub Technologies - A Software Development Company",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Banner />

				<AppHeader />
				{children}
				<AppFooter />
			</body>
		</html>
	);
}
