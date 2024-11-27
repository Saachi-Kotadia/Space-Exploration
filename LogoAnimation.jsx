import './LogoAnimation.css';
import logoImg from './assets/kobby-mendez-d0oYF8hm4GI-unsplash.jpg';

function LogoAnimation(){
    return(
        <div className='panel'>
        <div className='logo-animation'>
            <p  className='first-flight-button' >Hover on the image to take your first flight to Space </p>
            <img src={logoImg} className="logo-move" alt="An illustrative, animated astronaut sitting on a moon structure"/> 
        </div>
        </div>
    );
}
export default LogoAnimation;
