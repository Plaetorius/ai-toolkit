import React from 'react'
import { SidebarProvider } from './ui/sidebar';

export default function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			{children}
		</SidebarProvider>
	)
}
