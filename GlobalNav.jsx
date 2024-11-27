import { useState } from 'react';
import './GlobalNav.css';
import menu from './menu';

function GlobalNav({className,setPage}){
    
    const [showMenu,setShowMenu]=useState(false);

    const listHtml= menu.map(item => {
        return(
            <li key={item.name} className="global-nav-item">
                <a 
                className="global-nav-link"
                href={item.path}
                onClick={(e)=>{
                    e.preventDefault();
                    console.log(e.target.innerText);
                    setPage(e.target.innerText);
                }}
                >
                    {item.name}
                </a>
            </li>
        );
    });

    const showClass= showMenu ? '' : 'global-nav-list-collapsed';

    return(
        <nav className={`global-nav ${className}`}>
        <button className="global-nav-toggle" aria-expanded={showMenu} onClick={()=>setShowMenu(!showMenu)}>
        &#9776; {showMenu? "Close Menu": ""}
        </button>
        <ul className={`global-nav-list ${showClass}` }>
            {listHtml}
        </ul>
        
        </nav>
    );
}

export default GlobalNav;