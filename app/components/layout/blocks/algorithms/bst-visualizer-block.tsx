import type { BSTNode } from "~/utils/algorithms/bst/binary-search-tree";
import type { BSTDataVisualizerBlockProps } from "~/types/blocks";
import BinarySearchTree from "~/utils/algorithms/bst/binary-search-tree";

export default function BSTVisualizerBlock({
	initialData,
}: BSTDataVisualizerBlockProps) {
	const Tree = BinarySearchTree(initialData);

	return (
		<div>
			<h1>BST Data Visualizer</h1>
			<BSTNodeItem node={Tree} />
		</div>
	);
}

function BSTNodeItem({ node }: { node: BSTNode }) {
	return (
		<div className="flex flex-col p-5 items-center justify-center">
			<h2>{node.value}</h2>

			<div className="grid grid-cols-2 items-start justify-between gap-4 relative ">
				<div className="absolute flex items-start justify-between px-7 top-0 left-0 w-full h-full">
					{node.left && <div className="h-1/3 w-[2px] rotate-45 bg-black" />}
					{node.right && <div className="h-1/3 w-[2px] -rotate-45 bg-black" />}
				</div>
				<div>{node.left && <BSTNodeItem node={node.left} />}</div>
				<div>{node.right && <BSTNodeItem node={node.right} />}</div>
			</div>
		</div>
	);
}
