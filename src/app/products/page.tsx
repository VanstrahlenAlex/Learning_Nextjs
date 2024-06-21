import Link from 'next/link'
import React from 'react'

export default function Products() {
	return (
		<div>
			<h1>
				Products List
			</h1>
				<ul>
					<li><Link href={"/products/1"}></Link>Product 1</li>
					<li><Link href={"/products/2"}></Link>Product 2</li>
					<li><Link href={"/products/3"} replace></Link>Product 3</li>
					<Link href={"/products/4"}><p>Product 4</p></Link>
					

				</ul>
		</div>
	)
}
