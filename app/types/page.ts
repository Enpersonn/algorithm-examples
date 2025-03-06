import type { BlockProps } from "./blocks";

export type BasePageProps = {
	id: string;
	label: string;
	category: string;
	title: string;
	disabled: boolean;
	entry?: BlockProps[];
	blocks?: BlockProps[];
};

export type CategoryPageProps = BasePageProps & {
	type: "category";
};

export type AlgorithmPageProps = BasePageProps & {
	type: "algorithm";
};

export type PageProps = BasePageProps | AlgorithmPageProps | CategoryPageProps;
