import React from 'react'
import Link from 'next/link';

export default function F4() {
  return (
	<div>
		<h1>F4 page</h1>
		<div>
		<Link href="/f1/f3">
			<p>Go to F3</p>
		</Link>
		</div>

	</div>
  )
}
