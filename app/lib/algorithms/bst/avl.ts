import type { BSTNode } from "./bst";
import BST_Tree from "./bst";

class AVL_Tree extends BST_Tree {
	root: BSTNode | null;

	constructor(initialData: number[]) {
		super(initialData);
		this.root = null;
	}

	addNode(value: number) {
		super.addNode(value);
		this.root = this.balanceTree(this.root);
	}
	removeNode(value: number): void {
		super.removeNode(value);
		this.root = this.balanceTree(this.root);
	}

	getHeight(node: BSTNode | null): number {
		if (node === null) return 0;
		return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
	}

	balanceTree(node: BSTNode | null): BSTNode | null {
		if (node === null) return null;
		const leftHeight = this.getHeight(node.left);
		const rightHeight = this.getHeight(node.right);
		if (leftHeight - rightHeight > 1) {
			return this.RR(node);
		}
		if (rightHeight - leftHeight > 1) {
			return this.LL(node);
		}
		if (leftHeight - rightHeight > 1) {
			return this.RL(node);
		}
		if (rightHeight - leftHeight > 1) {
			return this.LR(node);
		}
		return node;
	}

	RR(node: BSTNode): BSTNode {
		const newRoot = node.left;
		if (newRoot === null) return node;
		node.left = newRoot.right;
		newRoot.right = node;
		return newRoot;
	}

	LL(node: BSTNode): BSTNode {
		const newRoot = node.right;
		if (newRoot === null) return node;
		node.right = newRoot.left;
		newRoot.left = node;
		return newRoot;
	}

	RL(node: BSTNode): BSTNode {
		if (node.right === null) return node;
		node.right = this.RR(node.right);
		return this.LL(node);
	}

	LR(node: BSTNode): BSTNode {
		if (node.left === null) return node;
		node.left = this.LL(node.left);
		return this.RR(node);
	}
}
export default AVL_Tree;
