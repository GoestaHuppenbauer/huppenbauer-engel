import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel' 
import img1 from './imgs/field.jpg';
import img2 from './imgs/field2.jpg';
import img3 from './imgs/flowers.jpg';
import Image from 'react-bootstrap/Image'
import img5 from './imgs/turkey.jpg';
import img6 from './imgs/sea2.jpg';
import img8 from './imgs/mountains.jpg';
import img9 from './imgs/road66.jpg';
import img4 from './imgs/newsealand.jpg';
import img10 from './imgs/desert.jpg';
import img11 from './imgs/road.jpg';
import img12 from './imgs/forest2.jpg';
import img13 from './imgs/sky.jpg';

export class BootstrapCarouselDemo extends Component {  
        render() {  
                return (  
                        <div>  
                         
                          
                        <Carousel fade={true} interval={4000} keyboard={true} pauseOnHover={false} indicators={false} controls={true}>  
                        
                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image alt="" src={img1} fluid /> 
                        </Carousel.Item  >  
                        
                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image alt="" src={img2} fluid />               
                        </Carousel.Item>  
                            
                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image alt="" src={img3} fluid /> 
                        </Carousel.Item> 

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image alt="" src={img5} fluid /> 
                        </Carousel.Item>

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image alt="" src={img6} fluid /> 
                        </Carousel.Item>

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image alt="" src={img4} fluid /> 
                        </Carousel.Item>  

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image alt="" src={img8} fluid /> 
                        </Carousel.Item> 

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image alt="" src={img9} fluid /> 
                        </Carousel.Item>  

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image alt="" src={img10} fluid /> 
                        </Carousel.Item>  

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image alt="" src={img11} fluid /> 
                        </Carousel.Item> 

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image alt="" src={img12} fluid /> 
                        </Carousel.Item> 

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image alt="" src={img13} fluid /> 
                        </Carousel.Item> 

                       
                                    
                        </Carousel>  
                                </div>  
                          
                )  
        }  
}  
  

export default BootstrapCarouselDemo 