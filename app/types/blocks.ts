import type { RichTextProps } from "./rich-text";

export type BaseBlockProps = {
	id: string;
	initialData: number[];
	title?: string;
	description?: string;
	disabled?: boolean;
};

export type BSTDataVisualizerBlockProps = BaseBlockProps & {
	type: "bst_data_visualizer";
};

export type AVLTreeBlockProps = BaseBlockProps & {
	type: "avl_tree";
};

export type RichTextBlockProps = BaseBlockProps & {
	type: "rich_text";
	content: RichTextProps[];
};

export type PageListBlockProps = BaseBlockProps & {
	type: "page_list";
	category?: string;
	page_type?: string;
	sort?: string;
	pages?: string[];
};

export type BlockProps =
	| BSTDataVisualizerBlockProps
	| AVLTreeBlockProps
	| RichTextBlockProps
	| PageListBlockProps;
