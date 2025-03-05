export type BSTNode = {
	value: number;
	left: BSTNode | null;
	right: BSTNode | null;
};

const insertNode = (root: BSTNode, value: number): boolean => {
	if (value < root.value) {
		if (root.left) {
			return insertNode(root.left, value);
		}
		root.left = { value, left: null, right: null };
	}
	if (value > root.value) {
		if (root.right) {
			return insertNode(root.right, value);
		}
		root.right = { value, left: null, right: null };
	}
	return true;
};

const BinarySearchTree = (InitialData: number[]): BSTNode => {
	const root = { value: InitialData[0], left: null, right: null };

	for (let i = 1; i < InitialData.length; i++) {
		insertNode(root, InitialData[i]);
	}
	return root;
};

export default BinarySearchTree;
