import React from 'react'
import { ThemeProvider } from 'next-themes';

export default function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ThemeProvider attribute='class'>
			{children}
		</ThemeProvider>
	)
}
