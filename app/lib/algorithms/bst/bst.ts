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
		const values: number[] = [this.value];
		if (this.left) {
			values.push(...this.left.getAllValues());
		}
		if (this.right) {
			values.push(...this.right.getAllValues());
		}
		return values;
	}
}

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

	checkNode(
		node: BSTNode,
		value: number,
	): { node: BSTNode; left: boolean } | null {
		if (node.value === value) return { node, left: true };
		if (value < node.value) {
			if (node.left === null) return { node, left: true };

			return this.checkNode(node.left, value);
		}
		if (value > node.value) {
			if (node.right === null) return { node, left: false };

			return this.checkNode(node.right, value);
		}
		return null;
	}

	dropNode(node: BSTNode | null, value: number): BSTNode | null {
		if (node === null) return null;
		if (value < node.value) {
			node.left = this.dropNode(node.left, value);
		} else if (value > node.value) {
			node.right = this.dropNode(node.right, value);
		} else {
			if (node.left === null && node.right === null) {
				return null;
			}
			if (node.left === null) {
				return node.right;
			}
			if (node.right === null) {
				return node.left;
			}
			let temp = node.right;
			while (temp.left !== null) {
				temp = temp.left;
			}
			node.value = temp.value;
			node.right = this.dropNode(node.right, temp.value);
		}
		return node;
	}

	addNode(value: number) {
		if (this.root === null) {
			this.root = new BSTNode(value);
		} else {
			const res = this.checkNode(this.root, value);
			if (res === null) this.root = new BSTNode(value);
			if (res?.node.value === value) return;
			if (res?.left === true) res.node.left = new BSTNode(value);
			if (res?.left === false) res.node.right = new BSTNode(value);
		}
	}

	searchTree(value: number) {
		if (this.root === null) {
			return null;
		}
		const res = this.checkNode(this.root, value);
		if (res === null || res.node.value !== value) return null;
		return res.node;
	}

	dropTree() {
		this.root = null;
	}

	removeNode(value: number) {
		this.root = this.dropNode(this.root, value);
	}
}

export default BST_Tree;
