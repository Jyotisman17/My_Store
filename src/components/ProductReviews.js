import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/ProductReview.css"

const ProductReviews = ({productReviews}) => {
    return (
        <div className="ProductReviews">
            {productReviews.map((item,index)=>(
                <ProductReviewCard image={item.image} index={index} price={item.price} name={item.name} review={item.review} url={item.url}  />

            ))}
        </div>
    )
}

export default ProductReviews