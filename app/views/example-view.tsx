import type DemoPage from "~/lib/demo_pages.json";
import algorithmMap from "~/utils/algorithms";
import BSTDataVisualizer from "./algorithms/bst-data-visualizer";
import type { BSTNode } from "~/utils/algorithms/bst/binary-search-tree";

export type ExampleViewProps = {
	page: (typeof DemoPage.pages)[number];
	initialData?: number[];
};

export default function ExampleView({
	page,
	initialData = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45, 55, 65, 75, 85],
}: ExampleViewProps) {
	const algorithmFunction = algorithmMap[page.function];

	if (!algorithmFunction) {
		return (
			<div className="p-4 text-red-500">
				Error: Algorithm "{page.function}" is not yet implemented.
			</div>
		);
	}

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">{page.title}</h1>
			<div className="mb-4">
				<p>{page.description}</p>
			</div>
			{initialData && (
				<div className="mb-4">
					<p>Input Data: {initialData.join(", ")}</p>
				</div>
			)}
			{page.type === "bst" &&
				(() => {
					const nodes: BSTNode = algorithmFunction(
						initialData,
					) as unknown as BSTNode;
					return <BSTDataVisualizer nodes={nodes} />;
				})()}
		</div>
	);
}
