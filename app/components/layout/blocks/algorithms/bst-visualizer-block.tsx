import type { BSTDataVisualizerBlockProps } from "~/types/blocks";
import { useState } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import BST_Tree from "~/lib/algorithms/bst/bst";
import type { BSTNode } from "~/lib/algorithms/bst/bst";
import { cn } from "~/lib/utils";

export default function BSTVisualizerBlock({
	initialData,
}: BSTDataVisualizerBlockProps) {
	const [bst, setBst] = useState(() => new BST_Tree(initialData));
	const [data, setData] = useState(initialData);
	const [searchResult, setSearchResult] = useState<BSTNode | null>(null);
	const handleAddNode = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		bst.addNode(Number(formData.get("number")));
		setData(bst.root ? bst.root.getAllValues() : []);
	};

	const handleRemoveNode = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		bst.removeNode(Number(formData.get("number")));
		setData(bst.root ? bst.root.getAllValues() : []);
	};

	const handleSearchNode = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const node = bst.searchTree(Number(formData.get("number")));
		setSearchResult(node);
	};

	const handleRandomData = () => {
		const randomDataArray = Array.from(
			{ length: Math.max(5, Math.floor(Math.random() * 25)) },
			() => Math.floor(Math.random() * 100),
		);
		const newBst = new BST_Tree([]);
		for (let i = 0; i < randomDataArray.length; i++) {
			newBst.addNode(randomDataArray[i]);
		}
		setBst(newBst);
		setData(randomDataArray);
	};

	const BSTNodeItem = ({
		node,
	}: {
		node: BSTNode;
	}) => {
		return (
			<div
				className={cn(
					"flex flex-col items-center p-2 border ",
					node === searchResult && "bg-green-500",
				)}
			>
				<h2>{node.value}</h2>
				<div className="flex gap-2">
					<div className=" bg-muted h-fit">
						{node.left && <BSTNodeItem node={node.left} />}
					</div>
					<div className=" bg-muted-foreground h-fit">
						{node.right && <BSTNodeItem node={node.right} />}
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="flex flex-col gap-4">
			<h1>BST Data Visualizer</h1>
			<div className="flex flex-col gap-2">
				<div>
					<Button onClick={handleRandomData}>Random Data</Button>
				</div>
				<form onSubmit={handleAddNode} className="flex gap-2 items-end">
					<div className="w-full">
						<Label>Add a number to the tree</Label>
						<Input type="number" name="number" />
					</div>
					<Button type="submit">Add</Button>
				</form>
				<form onSubmit={handleRemoveNode} className="flex gap-2 items-end">
					<div className="w-full">
						<Label>Remove a number from the tree</Label>
						<Input type="number" name="number" />
					</div>
					<Button type="submit">Remove</Button>
				</form>
				<form onSubmit={handleSearchNode} className="flex gap-2 items-end">
					<div className="w-full">
						<Label>Search a number in the tree</Label>
						<Input type="number" name="number" />
					</div>
					<Button type="submit">Search</Button>
				</form>
			</div>
			<div>data: {data.join(", ")}</div>
			{bst.root && <BSTNodeItem node={bst.root} />}
		</div>
	);
}
