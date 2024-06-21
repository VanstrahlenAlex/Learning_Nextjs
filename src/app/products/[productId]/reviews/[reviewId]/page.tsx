import { notFound } from "next/navigation";

type ReviewIdProps = {
	params : {
		productId: string
		reviewId : string
	}
}

export default function ReviewId({ params } : ReviewIdProps) {
	if(parseInt(params.reviewId) > 1000) {
		return notFound()

	}
	return (
		<div>
			<h1> Review Detail </h1>
			<p>Review {params.reviewId} for product {params.productId} </p>
		</div>
	)
}
