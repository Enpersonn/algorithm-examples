import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Demo_Data from "~/lib/demo_pages.json";
import type { PageProps, CategoryPageProps } from "~/types/page";
import DynamicPageView from "~/views/dynamic-page-view";

export async function loader({ params }: LoaderFunctionArgs) {
	const path = params["*"]?.split("/");
	const category = path?.[0];
	const page_id = path?.[1];
	const Data = Demo_Data;

	if (category && page_id) {
		const pageData = Data.pages.find(
			(page) =>
				page.type === "algorithm" &&
				page.category === category &&
				page.id === page_id,
		) as PageProps | undefined;

		if (!pageData) {
			throw Response.json({ message: "Page not found" }, { status: 404 });
		}

		return Response.json(pageData);
	}

	if (!page_id) {
		const pageData = Data.pages.find(
			(categoryPage) =>
				categoryPage.type === "category" && categoryPage.id === category,
		) as CategoryPageProps | undefined;

		if (!pageData) {
			throw Response.json({ message: "Category not found" }, { status: 404 });
		}

		return Response.json(pageData);
	}

	throw Response.json(
		{ message: "No category or type provided" },
		{ status: 400 },
	);
}

export default function AlgorithmsPages() {
	const data = useLoaderData<typeof loader>();

	return <DynamicPageView {...data} />;
}
