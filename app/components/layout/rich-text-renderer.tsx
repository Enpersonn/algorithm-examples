import type { RichTextBlockProps } from "~/types/blocks";
import type { RichTextProps } from "~/types/rich-text";

const getRichTextComponent = (content: RichTextProps) => {
	switch (content.type) {
		case "p":
			return <p>{content.content}</p>;
		case "h1":
			return <h1 className="text-2xl font-bold">{content.content}</h1>;
		case "h2":
			return <h2 className="text-xl font-bold">{content.content}</h2>;
		case "h3":
			return <h3 className="text-lg font-bold">{content.content}</h3>;
	}
};

export default function RichTextRenderer({ content }: RichTextBlockProps) {
	return (
		<div className="flex flex-col gap-4">
			{content.map((content) => (
				<div key={content.id}>{getRichTextComponent(content)}</div>
			))}
		</div>
	);
}
