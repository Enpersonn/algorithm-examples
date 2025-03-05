import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import MainSidebar from "~/components/sidebar/main-sidebar";
import { Button } from "~/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<SidebarProvider>
			<MainSidebar />
			<main className="w-full h-full">
				<div className="grid mx-auto w-full gap-4 px-4 max-w-7xl grid-cols-12">
					<div className="col-span-12 md:col-span-8 md:col-start-3 h-full">
						<SidebarTrigger />
						<Outlet />
					</div>
				</div>
			</main>
		</SidebarProvider>
	);
}
