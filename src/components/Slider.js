import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = ({start}) => {
    return (
        <Carousel >
        {start.map((item)=>(
            <Carousel.Item>
            <a href={item.url}>  
            <img
                className="d-block w-100"
                src={item.image_link}
                alt="First slide"
            /></a>  
            </Carousel.Item>
        ))}   
        </Carousel>
    )
}
export default Slider
