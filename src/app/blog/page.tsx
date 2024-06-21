import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Blog"
}
export default function Blog() {
  return (
	<div>
		<h1 className='text-2xl text-cyan-500'>My Blog</h1>
	</div>
  )
}
