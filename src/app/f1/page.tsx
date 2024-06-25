import Link from 'next/link';
import React from 'react'

export default function F1() {
	return (
		<div>
			<h1>F1 Page</h1>
			<div>
				<Link href="/f1/f2">
                    <p>Go to F2</p>
                </Link>
			</div>
		</div>
	)
}
