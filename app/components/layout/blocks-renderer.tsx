import type { BlockProps } from "~/types/blocks";
import RichTextRenderer from "~/components/layout/rich-text-renderer";
import BSTVisualizerBlock from "~/components/layout/blocks/algorithms/bst-visualizer-block";
import PageListBlock from "./blocks/page-list-block";
const getBlockComponent = (block: BlockProps) => {
	switch (block.type) {
		case "bst_data_visualizer":
			return <BSTVisualizerBlock {...block} />;
		case "rich_text":
			return <RichTextRenderer {...block} />;
		case "page_list":
			return <PageListBlock {...block} />;
	}
};

const BlocksRenderer = ({ blocks }: { blocks: BlockProps[] }) => {
	return (
		<div>
			{blocks.map((block) => (
				<div key={block.id}>{getBlockComponent(block)}</div>
			))}
		</div>
	);
};

export default BlocksRenderer;
