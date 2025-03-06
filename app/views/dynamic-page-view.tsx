import BlocksRenderer from "~/components/layout/blocks-renderer";
import type { PageProps } from "~/types/page";

export default function DynamicPageView(page: PageProps) {
	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">{page.title}</h1>
			{page?.entry && <BlocksRenderer blocks={page.entry} />}
			{page?.blocks && <BlocksRenderer blocks={page.blocks} />}
		</div>
	);
}
