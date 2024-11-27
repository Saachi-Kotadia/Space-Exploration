import backdropimage from './assets/nasa-Q1p7bh3SHj8-unsplash.jpg';
import './Home.css';
import Panel from './Panel';
import LogoAnimation from './LogoAnimation';

function Home(){
    return(

        <div className='home'>
        <h2 className='subheading'>The Infinite Quest for Knowledge</h2>
        <p className='paragraph'>Welcome to our Space Exploration Page, where we embark on an extraordinary journey to explore the wonders of the universe and the frontiers of human knowledge. Here, we're passionate about sharing our fascination with space exploration and inspiring others to join us in our quest to understand the cosmos.
        </p>
        <img src={backdropimage} className="background-logo" alt="Black background with a galaxy shown bright"/>      
        
        <LogoAnimation/>
          
           
       
        <Panel/>
        </div>
       
    );
}
export default Home;
      


