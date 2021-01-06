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
                         
                          
                        <Carousel fade={false} interval={4000} keyboard={true}  indicators={false} controls={true}>  
                        
                        <Carousel.Item >  
                            <img 
                                className="d-block w-100 h-100" 
                                
                                src={img1}  
                            /> 
                        </Carousel.Item  >  
                        
                        <Carousel.Item >  
                            <img 
                                className="img-fluid d-block w-100" 
                                
                                src={img2}  
                            />               
                        </Carousel.Item>  
                            
                        <Carousel.Item >  
                                <img className="img-fluid d-block w-100" 
                                
                                src={img3}  
                            /> 
                        </Carousel.Item> 

                        <Carousel.Item >  
                            <img 
                                className="img-fluid d-block w-100" 
                                
                                src={img5}  
                            /> 
                        </Carousel.Item>

                        <Carousel.Item >  
                                <img className="img-fluid d-block w-100" 
                                
                                src={img6}  
                            /> 
                        </Carousel.Item>

                        <Carousel.Item >  
                            <img 
                                className="img-fluid d-block w-100" 
                                
                                src={img4} 
                            /> 
                        </Carousel.Item>  

                        <Carousel.Item >  
                            <img 
                                className="img-fluid d-block w-100 h-100" 
                               
                                src={img8} 
                            /> 
                        </Carousel.Item> 

                        <Carousel.Item >  
                            <img 
                                className="img-fluid d-block w-100" 
                                
                                src={img9}  
                            /> 
                        </Carousel.Item>  

                       
                                    
                        </Carousel>  
                                </div>  
                          
                )  
        }  
}  
  

export default BootstrapCarouselDemo 