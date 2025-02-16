import SidebarContainer from "@/components/shadcn/common/SidebarContainer";
import { SidebarProvider } from "@/components/shadcn/sidebar";
import { BreadcrumbsProvider } from "@/context/BreadcrumbsContext";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<BreadcrumbsProvider>
			<SidebarProvider>
				<SidebarContainer>
					{children}
				</SidebarContainer>
			</SidebarProvider>
		</BreadcrumbsProvider>
	);
}
