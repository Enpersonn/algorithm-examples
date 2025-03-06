import type { PageListBlockProps } from "~/types/blocks";
import Demo_Data from "~/lib/demo_pages.json";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { Link } from "@remix-run/react";
export default function PageListBlock({
	category,
	page_type,
	sort,
	pages,
}: PageListBlockProps) {
	const Data = Demo_Data;
	const Listpages =
		(pages && Data.pages.filter((page) => pages.includes(page.id))) ||
		Data.pages.filter(
			(page) => page?.type === page_type && page?.category === category,
		);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{Listpages.map((page) => (
				<Link to={`/algorithms/${page.category}/${page.id}`} key={page.id}>
					<Card className="hover:bg-muted">
						<CardHeader>
							<CardTitle>{page.label}</CardTitle>
						</CardHeader>
					</Card>
				</Link>
			))}
		</div>
	);
}
