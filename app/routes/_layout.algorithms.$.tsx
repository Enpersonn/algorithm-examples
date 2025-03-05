import type { LoaderFunctionArgs } from "@remix-run/node";
import Demo_Data from "~/lib/demo_pages.json";
import { json, useLoaderData } from "@remix-run/react";
import ExampleView from "~/views/example-view";

type CategoryData = {
	id: string;
	label: string;
	description: string;
	path: string;
	type: string;
};

type PageData = {
	id: string;
	label: string;
	category: string;
	title: string;
	description: string;
	path: string;
	type: string;
	disabled: boolean;
};

export async function loader({ params }: LoaderFunctionArgs) {
	const path = params["*"]?.split("/");
	const category = path?.[0];
	const page_id = path?.[1];
	const Data = Demo_Data;

	if (category && page_id) {
		const pageData = Data.pages.find(
			(page) => page.category === category && page.id === page_id,
		) as PageData | undefined;

		if (!pageData) {
			throw Response.json({ message: "Page not found" }, { status: 404 });
		}

		return Response.json(pageData);
	}

	if (!category) {
		const pageData = Data.categories.find(
			(categoryPage) => categoryPage.id === category,
		) as CategoryData | undefined;

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

	return <ExampleView page={data} />;
}
