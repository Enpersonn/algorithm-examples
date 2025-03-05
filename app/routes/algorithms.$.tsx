import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
	const path = params["*"]?.split("/");
	const category = path?.[0];
	const type = path?.[1];

	return {
		category,
		type,
	};
}

export default function AlgorithmsPages() {
	const { category, type } = useLoaderData<typeof loader>();

	return (
		<div>
			<h1>Algorithms</h1>
			<p>{category}</p>
			<p>{type}</p>
		</div>
	);
}
