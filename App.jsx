import { useState } from 'react';
import './App.css';
import Header from './Header';
import MainArea from './MainArea';
import Footer from './Footer';


function App() {
  const [page,setPage]=useState('Home');
  return ( 
    <>
    <div className='app' aria-label="Container for body">
    <Header setPage={setPage}/>
    <MainArea page={page}/>
   
    <Footer/>
    </div>
    </>
  );
}

export default App;

