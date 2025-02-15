"use client";

import { useBreadcrumbs } from '@/context/BreadcrumbsContext'
import React, { useEffect } from 'react'

export default function DashboardClient() {
	const { setBreadcrumbs } = useBreadcrumbs();

	useEffect(() => {

		setBreadcrumbs([
			{ label: "Home", href: "/" },
			{ label: "Dashboard", href: "/dashboard" },
		]);
	}, [setBreadcrumbs])

	return (
		<>
			<div>Learn</div>
		</>
	)
}
