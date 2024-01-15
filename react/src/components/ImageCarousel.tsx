import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {mediahost} from "../other/host.config";

function ImageCarousel(props:{images:string[]}) {
    const images = props.images;
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex:number) => {
        setIndex(selectedIndex);
    };

    // const images = [
    //         `https://placehold.co/1920x1080`,
    //         `https://placehold.co/420x1080`,
    //         `https://placehold.co/1920x480`,
    // ]

    var imageList = images.map(function(image){
        return <Carousel.Item as={"img"} src={mediahost+image} alt="property_image" loading="lazy"
              style={{justifyContent: 'center',
                  alignItems: 'center',
                  position:"relative",
                  maxHeight:"30rem",
                  height:"30rem",
                  objectFit:"scale-down"
              }}>
        </Carousel.Item>;
    })

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{maxHeight:"30rem", minWidth:"100%", }} keyboard pause="hover" >
            {imageList}
        </Carousel>
    );
}

export default ImageCarousel;