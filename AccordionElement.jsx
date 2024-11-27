import React from "react";
import { useState } from "react";
import Button  from "./Button";
import AccordionSection from "./AccordionSection";
import './AccordionElement.css';

function AccordionElement({title}){
    const [accordionOpen,setAccordionOpen]=useState(false);
    const [Open,setOpen]=useState(false);
    const [show,setShow]=useState(false);

//    const handleAccordion=()=> setAccordionOpen(!accordionOpen);

    return (
       
       <div className="accordion" aria-expanded={accordionOpen||Open||show ? "true" : "false"}>
        
        <p className='text'> Click on each accordion to know more.</p>
        <Button type= "button"  visual="button" className="accordion-button" aria-label=" Button to Read more on discovering new worlds" onClick={()=>{setAccordionOpen(!accordionOpen)}} > 
         Discovering New Worlds {accordionOpen ? "-" : "+"} {title } </Button>
        {accordionOpen && <AccordionSection content ="Unveiling the Cosmos: Space exploration has been a journey of discovery, allowing us to uncover the mysteries of the cosmos. From the twinkling stars to distant galaxies, each celestial body holds clues to the vastness and complexity of the universe. With every telescope pointed skyward and every spacecraft launched into the void, we gain new insights into the nature of space and time, expanding our understanding of the cosmos and our place within it."/>}
        
        <Button type= "button" visual="button" className="accordion-button" aria-label=" Button to Read more on exploring beyond our horizon" onClick={()=>{setOpen(!Open)}}  >
        Exploring Beyond Our Horizon {Open ? "-" : "+"} {title} </Button>
        {Open &&  <AccordionSection content ="Frontiers of Exploration: Human curiosity knows no bounds, propelling us to explore the unknown and push the boundaries of our existence. Space exploration represents the ultimate frontier, offering endless possibilities for discovery and adventure. Whether it's setting foot on distant planets, probing the depths of black holes, or seeking signs of life beyond Earth, our quest to explore space ignites the imagination and inspires generations to dream big and reach for the stars."/>}
        
        <Button type= "button" visual="button" className="accordion-button" aria-label=" Button to Read more on innovations in space technology"  onClick={()=>{setShow(!show)}}  >
         Innovations in Space Technology {show ? "-" : "+"} {title} </Button>
        {show &&  <AccordionSection content ="Revolutionizing Science and Technology: Space exploration drives innovation on a global scale, pushing the limits of scientific knowledge and technological advancement. From the development of cutting-edge spacecraft and telescopes to breakthroughs in materials science and robotics, the technologies born out of space exploration have far-reaching implications for society. By investing in space exploration, we not only expand our understanding of the universe but also pave the way for new discoveries and innovations that benefit humanity as a whole."/>}
        
        </div>
    );
}  
export default AccordionElement;
