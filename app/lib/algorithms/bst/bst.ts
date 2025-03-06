export class BSTNode {
	value: number;
	left: BSTNode | null;
	right: BSTNode | null;

	constructor(value: number) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	getAllValues(): number[] {
		return inOrderTraversal(this);
	}
}

const inOrderTraversal = (node: BSTNode | null): number[] => {
	if (!node) return [];
	return [
		...inOrderTraversal(node.left),
		node.value,
		...inOrderTraversal(node.right),
	];
};

class BST_Tree {
	root: BSTNode | null;
	constructor(initialData?: number[]) {
		this.root = null;
		if (initialData) {
			for (const value of initialData) {
				this.addNode(value);
			}
		}
	}

	dropNode(node: BSTNode | null, value: number): BSTNode | null {
		if (!node) return null;

		if (value < node.value) {
			node.left = this.dropNode(node.left, value);
		} else if (value > node.value) {
			node.right = this.dropNode(node.right, value);
		} else {
			if (!node.left) return node.right;
			if (!node.right) return node.left;

			let successor = node.right;
			while (successor.left !== null) {
				successor = successor.left;
			}
			node.value = successor.value;
			node.right = this.dropNode(node.right, successor.value);
		}

		return node;
	}

	addNode(value: number) {
		const newNode = new BSTNode(value);
		if (!this.root) {
			this.root = newNode;
			return;
		}

		let current: BSTNode | null = this.root;
		while (current) {
			if (value < current.value) {
				if (!current.left) {
					current.left = newNode;
					return;
				}
				current = current.left;
			} else if (value > current.value) {
				if (!current.right) {
					current.right = newNode;
					return;
				}
				current = current.right;
			} else {
				return;
			}
		}
	}

	searchTree(value: number) {
		let current = this.root;
		while (current) {
			if (current.value === value) return current;
			if (value < current.value) current = current.left;
			else current = current.right;
		}
		return null;
	}

	dropTree() {
		this.root = null;
	}

	removeNode(value: number) {
		if (!this.root) return null;
		this.root = this.dropNode(this.root, value);
	}
}

export default BST_Tree;
