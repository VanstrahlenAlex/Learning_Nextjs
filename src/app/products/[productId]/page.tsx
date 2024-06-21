import { Metadata } from "next";

type ProductDetailsProps = {
	params : {
		productId : string
	}
}
export const generateMetadata = async ({params} : ProductDetailsProps) : Promise<Metadata> => {
	const title = await new Promise(resolve => {
		setTimeout(() => {
			resolve(`Iphone ${params.productId}`)
		}, 100)
	})
	return {
		title: `Product Details ${title}`,
	}
}


export default function ProductDetails({params} : ProductDetailsProps) {
	return (
		<div>
			<h1> ProductDetails Page {params.productId}</h1>
		</div>
	)
}
