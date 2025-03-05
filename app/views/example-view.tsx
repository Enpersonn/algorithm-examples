import type DemoPage from "~/lib/demo_pages.json";
import * as algorithms from "~/utils/algorithms";

export type ExampleViewProps = {
	page: (typeof DemoPage.pages)[number];
	initialData: number[];
	functionURL?: string;
};

// Define a type for the algorithm functions
type AlgorithmFunction = (data: number[]) => number[];

export default function ExampleView({
	page,
	initialData = [20, 14, 3, 1, 15, 10, 11, 7, 5, 12, 4, 8, 9, 13, 6],
	functionURL,
}: ExampleViewProps) {
	let algorithmFunction: AlgorithmFunction | undefined;

	try {
		// Get the algorithm function based on the page ID
		algorithmFunction = (algorithms as { [key: string]: AlgorithmFunction })[
			page.id
		];

		if (!algorithmFunction) {
			throw new Error(`Algorithm function ${page.id} not found`);
		}
	} catch (error) {
		console.error("Error loading algorithm:", error);
		return (
			<div className="p-4 text-red-500">
				Error: Algorithm function "{page.id}" not found. Please make sure it is
				exported in the algorithms directory.
			</div>
		);
	}

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">{page.title}</h1>
			<div className="mb-4">
				<p>{page.description}</p>
			</div>
			{/* Add your visualization or execution logic here using algorithmFunction */}
		</div>
	);
}
