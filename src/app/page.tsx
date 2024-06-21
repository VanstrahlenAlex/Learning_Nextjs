import Link from 'next/link'
import React from 'react'

export default function Home() {
	return (
		<div>
			<h1> Home Page</h1>
			<div className='flex flex-row gap-2 m-2'>
				<Link href={"/blog"}>blog</Link>
				<Link href={"/products"}>Products</Link>
			</div>
		</div>
	)
}
