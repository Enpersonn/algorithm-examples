import { Link } from "@remix-run/react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenuItem,
} from "~/components/ui/sidebar";
import { Button } from "../ui/button";
import demoPages from "~/lib/demo_pages.json";

// bst i need to add
// Binary Search Tree
// AVL
// Red Black Tree
// Trie
// B-Tree
// Merkle Tree
// Consecutive Merkle Tree

// sorting
// Quick Sort
// Merge Sort
// Tim Sort
// Heap Sort
// Bubble Sort
// Insertion Sort
// Selection Sort
// Tree Sort
// Shell Sort
// Bucket Sort
// Radix Sort
// Counting Sort
// Cube Sort
// Pigeonhole Sort
// Cycle Sort
// Cocktail Sort
// Comb Sort
// Gnome Sort
// Bogo Sort

// topics
// Big O

function MainSidebar() {
	const data = demoPages;

	return (
		<Sidebar variant="floating" className="list-none">
			<SidebarHeader>
				<h1>MainSidebar</h1>
			</SidebarHeader>
			<SidebarContent>
				{data?.categories?.map((category) => {
					const pages = data?.pages?.filter(
						(page) => page.category === category.id && !page.disabled,
					);
					if (pages.length === 0) return null;
					return (
						<SidebarGroup key={category.id}>
							<SidebarGroupLabel>{category.label}</SidebarGroupLabel>
							<SidebarGroupContent>
								<div className="ml-4 border-l border-border">
									{pages.map((page) => (
										<SidebarMenuItem key={page.id}>
											<Button
												variant="ghost"
												className="w-full flex justify-normal text-left text-sm"
												asChild
											>
												<Link to={`/algorithms/${category.id}/${page.id}`}>
													{page.label}
												</Link>
											</Button>
										</SidebarMenuItem>
									))}
								</div>
							</SidebarGroupContent>
						</SidebarGroup>
					);
				})}
			</SidebarContent>
		</Sidebar>
	);
}

export default MainSidebar;
