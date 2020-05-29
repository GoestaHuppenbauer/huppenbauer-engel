import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel' 
import img1 from './imgs/field.jpg';
import img2 from './imgs/field2.jpg';
import img3 from './imgs/flowers.jpg';
import img4 from './imgs/stairway.jpg';
import Image from 'react-bootstrap/Image'
export class BootstrapCarouselDemo extends Component {  
        render() {  
                return (  
                        <div>  
                         
                          
                        <Carousel fade={true} interval={4000} keyboard={true} pauseOnHover={false} indicators={true} controls={true}>  
                        
                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image src={img1} fluid /> 
                        </Carousel.Item  >  
                        
                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image src={img2} fluid />               
                        </Carousel.Item>  
                            
                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image src={img3} fluid /> 
                        </Carousel.Item> 

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image src={img4} fluid /> 
                        </Carousel.Item>  
                                    
                        </Carousel>  
                                </div>  
                          
                )  
        }  
}  
  

export default BootstrapCarouselDemo 