import Home from './Home';
import About from './About';
import Explore from './Explore';
import Join from './Join';
import Initiatives from './Initiatives';

function MainArea({page}){
    return(
        <main className='main' id='main'>
           {(page==='Home')&& <Home/>}
           {(page==='About')&& <About/>}
           {(page==='Explore')&& <Explore/>}
           {(page==='Join')&& <Join/>}
           {(page==='Initiatives')&& <Initiatives/>}
           
        </main>
    );
}
export default MainArea;