import React from 'react';
import './Card.css';
import Button from './Button';
import planets from './assets/david-menidrey-zpUsOQzByFg-unsplash.jpg';
import stars from './assets/jeremy-thomas-4dpAqfTbvKA-unsplash.jpg';
import galaxy from './assets/arnaud-mariat-45Z6hW1dQMI-unsplash.jpg';
import nebulae from './assets/tasos-mansour-jHMQHLP05RQ-unsplash.jpg';
import blackhole from './assets/jeremy-perkins-UgNjyPkphtU-unsplash.jpg';
import exoplanets from './assets/nasa-hubble-space-telescope-aqDO7A67jQI-unsplash.jpg';

function Card(){
    return (
      
      <>
      <div className='cards'>
        
          <div className="space-cards">
          <div className="space-cards-inner">
          <div className="space-cards-front"> 
          <h2 className="card-title">Planets </h2>
          <img src={planets} className="card-logo" alt="Many colorful planets shown together varying in sizes"/> 
          </div> 
          <div className="space-cards-back">  
          <p className="card-text">
          Planets are celestial bodies that orbit stars and do not produce their own light. They vary widely in composition, size, and atmospheric conditions.
          Examples include Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.Some planets, like Earth, have conditions suitable for life, while others are inhospitable due to extreme temperatures or lack of atmosphere.Planets are classified into two main categories: terrestrial planets (rocky) and gas giants (mostly composed of hydrogen and helium).
          </p>
          <a href="Home" aria-label='Link to home page to get more details on planets'>Discover more about planets</a>         
          </div>
          </div>
          </div>

          <div className="space-cards">  
          <div className="space-cards-inner">
          <div className="space-cards-front"> 
          <h2 className="card-title">Stars</h2>
          <img src={stars} className="card-logo" alt="Colourful stars twinkiling against the blue,purple,black sky"/>
          </div>
          <div className="space-cards-back">    
          <p className="card-text">
          Stars are massive celestial bodies primarily composed of hydrogen and helium.They generate light and heat through nuclear fusion reactions in their cores. Stars vary in size, temperature, and brightness, with the most common type being main-sequence stars like our Sun. Stars form from clouds of gas and dust through gravitational collapse and can exist alone or in clusters within galaxies.The lifecycle of a star depends on its mass.</p> 
          <a href="Explore" aria-label='Link to home page to get more details on stars'>Discover more about stars</a>         
          </div>
          </div>
          </div>
          
          <div className="space-cards">
          <div className="space-cards-inner">
          <div className="space-cards-front"> 
          <h2 className="card-title">Galaxies</h2>
          <img src={galaxy} className="card-logo" alt="Black background with a galaxy shown bright"/>    
          </div>
          <div className="space-cards-back">    
          <p className="card-text">
          Galaxies are vast systems containing billions to trillions of stars, along with gas, dust, and dark matter.They come in various shapes and sizes, including spiral, elliptical, and irregular. The Milky Way, our home galaxy, is a spiral galaxy containing hundreds of billions of stars.Galaxies are bound together by gravity and often interact with each other through collisions and mergers.</p>   
          <a href="Explore" aria-label='Link to home page to get more details on galaxy'>Discover more about galaxies</a>         
          </div>
          </div>
          </div>

          <div className="space-cards">
          <div className="space-cards-inner">
          <div className="space-cards-front"> 
          <h2 className="card-title">Nebulae  </h2>
          <img src={nebulae} className="card-logo" alt="Large cloud like structures in pink, orange shades against black background with twinkling stars ahead"/>
          </div>    
          <div className="space-cards-back">    
          <p className="card-text">
          Nebulae are large clouds of gas and dust in space, where new stars are born. They come in different types, including emission nebulae, reflection nebulae, and dark nebulae. Nebulae are illuminated by nearby stars or by the energy from hot young stars within them. These cosmic nurseries serve as the birthplaces of stars and planetary systems. Famous examples are Orion Nebula and the Eagle Nebula's Pillars of Creation. </p>
          <a href="Explore" aria-label='Link to home page to get more details on nebulae'>Discover more about nebulae</a>         
          </div>
          </div>
          </div>

          <div className="space-cards">
          <div className="space-cards-inner">
          <div className="space-cards-front"> 
          <h2 className="card-title">Black holes</h2>
          <img src={blackhole} className="card-logo" alt="Black background with fire like ring ahead"/>    
          </div>
          <div className="space-cards-back">    
          <p className="card-text">
          Black holes are regions in space where gravity is so strong that nothing, not even light, can escape.They form from the remnants of massive stars that collapse under their own gravity. They have different sizes, ranging from stellar-mass black holes to supermassive black holes found at the centers of galaxies. They can emit radiation and have a strong influence on their surroundings through their gravitational pull. Studying them provides insights into the nature of space-time.
          </p>          
          <a href="Explore" aria-label='Link to home page to get more details on blackhole'>Discover more about blackhole</a>         
          </div>
          </div>
          </div>
          
          <div className="space-cards">
          <div className="space-cards-inner">
          <div className="space-cards-front"> 
          <h2 className="card-title">Exoplanets</h2>
          <img src={exoplanets} className="card-logo" alt="Planets shown outside of the solar system"/>    
          </div>
          <div className="space-cards-back">    
          <p className="card-text">
          Exoplanets are planets that orbit stars outside our solar system. Thousands have been discovered using various techniques, including the transit method, radial velocity measurements, and direct imaging. Exoplanets vary in size, composition, and orbital characteristics, with some resembling Earth in terms of size and potentially habitable conditions. The search for exoplanets aims to understand the prevalence and diversity of planetary systems in the universe. 
          </p>          
          <a href="Explore" aria-label='Link to home page to get more details on exoplanets'>Discover more about exoplanets</a>         
          </div>
          </div>
          </div>

          
      </div>        
        </>
  );
};

export default Card;
