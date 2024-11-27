import { useState } from 'react';
import Dialog from './Dialog';
//import Form from './Form';
import './Explore.css';
import LogoAnimation from './LogoAnimation';
import AccordionElement from './AccordionElement';
import rocketLaunch from './assets/spacex-OHOU-5UVIYQ-unsplash.jpg';


function Explore() {
    const [enteredName, setEnteredName] = useState('');

    const handleNameChange = (name) => {
        setEnteredName(name);
    }

    
    return (
        <div className='explore'>
        <AccordionElement />
        <div className='spacing'>
        <p>Excited to learn more about your favourite planet. Click on the button to reserve your spot.</p>
        <Dialog onNameChange={handleNameChange} />
            {enteredName && (
                <div>
                    <p className='submission-text'> {enteredName}! That's a great choice. Thanks for letting us know your favourite planet. Prepare for your journey to {enteredName} soon. 
                    We will reach out to you regarding next steps shortly.</p>
                </div>
            )}
        </div>  
            
           <img src={rocketLaunch} className="explore-galaxy-image" alt="A rocket being launched from space center emitting lots of pollution."/>
            <LogoAnimation />
        </div>
    );
}

export default Explore;
