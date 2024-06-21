import React from 'react'

type DocsProps = {
	params : {
		slug : string[]
	}
}
export default function Docs({params} : DocsProps) {
	{if(params.slug?.length === 2){
		return (
			<div>
				<h1>Views Docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
			</div>
		)
	} else if(params.slug?.length === 1) {
		return (
			<div>
				Viewing docs for feature {params.slug[0]}
			</div>
		)
	} else {
		return (
			<div>
				<h1>Docs Home Page</h1>
			</div>
		)
	}
	}
}
