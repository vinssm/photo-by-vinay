import React from "react";
import { ImageList, ImageListItem } from "@material-ui/core";

import Image1 from './assets/images/image1.jpg';
import Image2 from './assets/images/image2.jpg';
import Image3 from './assets/images/image3.jpg';
import Image4 from './assets/images/image4.jpg';
import image5 from './assets/images/image5.jpg';
import image6 from './assets/images/image6.jpg';
import image7 from './assets/images/image7.jpg';
import image8 from './assets/images/image8.jpg';
import image9 from './assets/images/image9.jpg';
import Image10 from './assets/images/image10.jpg';
import Image11 from './assets/images/image11.jpg';
import image12 from './assets/images/image12.jpg';


const HomeGallery = () => {

    let data =[
        {    
            "id": 1,
            "imgSrc": Image1,
            rows: 3,
            cols: 3,
            featured: true,
        },
        {    
            "id": 2,
            "imgSrc": Image2,
        },
        {    
            "id": 3,
            "imgSrc": Image3,
        },
        {    
            "id": 4,
            "imgSrc": Image4,
            rows: 3,
            cols: 3,
            featured: true,
        },
        {    
            "id": 5,
            "imgSrc": image5,
        },
        {    
            "id": 6,
            "imgSrc": image6,
            
        },
        {    
            "id": 7,
            "imgSrc": image7,
            rows: 3,
            cols: 3,
        },
        {    
            "id": 8,
            "imgSrc": image8,
        },
        {    
            "id": 9,
            "imgSrc": image9,
        },
        {    
            "id": 10,
            "imgSrc": Image10,
            rows: 3,
            cols: 3,
        },
        {    
            "id": 11,
            "imgSrc": Image11,
        },
        {    
            "id": 12,
            "imgSrc": image12,
        },
    ];
    return (
        <ImageList sx={{ width: 500, height: 450 }} >
            <ImageListItem  style={{width: '100%', height:'100%', position: 'absolute'}} cols={3} rowHeight={164}>
                {data.map((item, index) =>{ 
                    return(                        
                        <img
                            src={`${item.imgSrc}?w=164&fit=crop&auto=format`}
                            srcSet={`${item.imgSrc}?w=164&fit=crop&auto=format&dpr=3 3x`}
                            alt={item.title}
                            loading="lazy"/>
                        )
                  })}
            </ImageListItem>
       </ImageList>
    )
}

export default HomeGallery