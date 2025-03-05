import BinarySearchTree, { type BSTNode } from "./bst/binary-search-tree";

type AlgorithmFunction = (data: number[]) => number[] | BSTNode;

const algorithmMap: Record<string, AlgorithmFunction> = {
	BinarySearchTree: BinarySearchTree,
	// Add other algorithms as they become available
	// QuickSort: algorithms.QuickSort,
	// MergeSort: algorithms.MergeSort,
	// etc...
};

export default algorithmMap;
