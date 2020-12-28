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
                            <Image className="img-fluid" style={{'width':'auto','height':"100%",'maxHeight':'100%'}} src={img1}  mode='fill'/> 
                        </Carousel.Item  >  
                        
                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image className="img-fluid" style={{'width':'auto','height':"100%"}} src={img2}  mode='fill' />               
                        </Carousel.Item>  
                            
                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image className="img-fluid" style={{'width':'auto','height':"100%"}} src={img3}  mode='fill' /> 
                        </Carousel.Item> 

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image className="img-fluid" style={{'width':'auto','height':"100%"}} src={img5}  mode='fill'/> 
                        </Carousel.Item>

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image className="img-fluid" style={{'width':'auto','height':"100%"}} src={img6}  mode='fill'/> 
                        </Carousel.Item>

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image className="img-fluid" style={{'width':'auto','height':"100%"}} src={img4}  mode='fill'/> 
                        </Carousel.Item>  

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image className="img-fluid" style={{'width':'auto','height':"100%"}} src={img8}  mode='fill'/> 
                        </Carousel.Item> 

                        <Carousel.Item style={{'height':"100vh"}}>  
                            <Image className="img-fluid" style={{'width':'auto','height':"100%"}} src={img9}  /> 
                        </Carousel.Item>  

                       
                                    
                        </Carousel>  
                                </div>  
                          
                )  
        }  
}  
  

export default BootstrapCarouselDemo 