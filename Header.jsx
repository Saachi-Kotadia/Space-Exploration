import './Header.css';
import GlobalNav from './GlobalNav';
import logo from './assets/greg-rakozy-oMpAz-DN-9I-unsplash.jpg';

function Header({setPage}){
    return(
        
        <header className="header">
             <a href="#main" className="skip-link">Skip to content</a>
    
            <img src={logo}
            className='logo-picture'
            alt="A human standing against light and the backdrop of a sky with orange,yellow, purle, blue, black shades filled with stars "
            />
            <h1 className="header-title">Space Exploration</h1>
            <GlobalNav className="header-nav" setPage={setPage}/>
        </header>
        
    );
}
export default Header;

