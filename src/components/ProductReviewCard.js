import React from 'react'
import "../styles/ProductReviewCard.css"

const ProductReviewCard = ({image,index,price,name,review,url}) => {
    return (
        <div className="ProductReviewCard">
            <a href={url}>
                <img src={image} alt={`${index} review`} />
                <h5>{review}</h5>
                <span>{name}</span>
                <b>{price}</b>
            </a>
        </div>
    )
}

export default ProductReviewCard