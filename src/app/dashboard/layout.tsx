import SidebarContainer from "@/components/SidebarContainer";
import { SidebarProvider } from "@/components/ui/sidebar";
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
