import React from 'react'

export default function card({children} : {children: React.ReactNode}) {
	const cardStyle = {
		border: '1px solid #ddd',
		padding: '100px',
		margin: '10px',
		borderRadius: '10px',
		boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.1)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

	}
	return (
		<div style={cardStyle}>
			{children}
		</div>
	)
}
