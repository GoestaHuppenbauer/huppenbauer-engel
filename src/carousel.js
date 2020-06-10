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

export class BootstrapCarouselDemo extends Component {  
        render() {  
                return (  
                        <div>  
                         
                          
                        <Carousel fade={false} interval={4000} keyboard={true} pauseOnHover={false} indicators={false} controls={true}>  
                        
                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image style={{'width':'100%','height':"auto"}} src={img1} fluid /> 
                        </Carousel.Item  >  
                        
                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image style={{'width':'100%','height':"auto"}} src={img2} fluid />               
                        </Carousel.Item>  
                            
                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image style={{'width':'100%','height':"auto"}} src={img3} fluid /> 
                        </Carousel.Item> 

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image style={{'width':'100%','height':"auto"}} src={img5} fluid /> 
                        </Carousel.Item>

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image style={{'width':'100%','height':"auto"}} src={img6} fluid /> 
                        </Carousel.Item>

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image style={{'width':'100%','height':"auto"}} src={img4} fluid /> 
                        </Carousel.Item>  

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image style={{'width':'100%','height':"auto"}} src={img8} fluid /> 
                        </Carousel.Item> 

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image style={{'width':'100%','height':"auto"}} src={img9} fluid /> 
                        </Carousel.Item>  

                       
                                    
                        </Carousel>  
                                </div>  
                          
                )  
        }  
}  
  

export default BootstrapCarouselDemo 