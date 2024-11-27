import './Panel.css';
import panelimage1 from './assets/mier-chen-64_DnIpzsyI-unsplash.jpg';
import panelimage2 from './assets/spacex-OHOU-5UVIYQ-unsplash.jpg';
import panelimage3 from './assets/brian-mcgowan-8_C1mNcgWiQ-unsplash.jpg';
function Panel(){
    return (
        <>
        
        <div className="Panels">
          <div className="Panel-cards1"> 
          <div className='Panel-content'>          
          <h3 className="panel-title">Space Mysteries </h3>
          <p className="panel-text">
          Space comprises stars, planets, moons, galaxies, and nebulae, along with the interstellar medium. Stars, fueled by nuclear fusion, are the universe's energy sources. Planets orbit stars and vary in composition. Galaxies, like the Milky Way, contain stars, gas, dust, and dark matter. The interstellar medium includes gas, dust, and cosmic rays. Nebulae are clouds where new stars form. Dark matter and dark energy, invisible yet influential, dominate the universe's mass-energy content.
          </p></div>
          <div className='Panel-image'>  
          <img src={panelimage1} className="panel-logo1" alt="Rain dropplets against city lights" />
          </div> 
          </div>  

          <div className="Panel-cards2"> 
          <div className='Panel-image'>  
          <img src={panelimage2} className="panel-logo2" alt="Many apples placed in a basket on the table"/>
          </div> 
          <div className='Panel-content'>          
          <h3 className="panel-title">Space Tourism </h3>
          <p className="panel-text">
          Space tourism, driven by private individuals seeking leisure or adventure, marks a shift from government-led space exploration. Enabled by companies like Blue Origin, SpaceX and Virgin Galactic, it offers experiences from suborbital jaunts to extended orbital missions. While promising personal space exploration, it raises concerns about ethics and safety. Nonetheless, it signifies a new era of commercial space activity, shaping our understanding of space and humanity's role within it.
          </p> </div>
          </div>  

          <div className="Panel-cards3"> 
          <div className='Panel-content'>          
          <h3 className="panel-title">Space Habitat </h3>
          <p className="panel-text">
          Space habitats represent the future of living and working in space, offering a glimpse into humanity's potential for sustainable off-world existence. As technology advances and our understanding of space grows, space habitats will play a crucial role in enabling long-duration human space exploration and eventual colonization of other celestial bodies. 
          </p> </div>
          <div className='Panel-image'>  
          <img src={panelimage3} className="panel-logo3" alt="Blue color cup with coffee on a wooden table" />
          </div> 
          </div>  
           
        </div>
        </>
        );
}
export default Panel;
            