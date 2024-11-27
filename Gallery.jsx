import { useState } from 'react';
import gallery from './galleryData';
import './Gallery.css';
import { useId } from 'react';

function Gallery(){
    const id = useId();

    const [filter,setFilter] = useState(gallery);
    const [selectedCategory, setSelectedCategory] = useState('');

    const filterCategory = (category) => {
        const filtered = gallery.filter(item => item.category === category);
        setFilter(filtered);
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setSelectedCategory(selectedCategory);
        if (selectedCategory === 'all') {
            setFilter(gallery); 
        } else {
            filterCategory(selectedCategory);
        }
    };
   
    return(
        <>
        <div className='gallery'>
        <p className='gallery-text'>Watch and learn different things by selecting your preffered filter.</p>
    
            <div className='gallery-dropdown-layout'>
            <label htmlFor={`${id}-filterOption`} >Filter to view pictures</label>
                <select className='filter-dropdown' id={`${id}-filterOption`}  value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="all">All</option>
                    <option value="universe">Universe</option>
                    <option value="stars">Stars</option>
                    <option value="planets">Planets</option>
                    <option value="spacecraft">SpaceCraft</option>
                    <option value="astronaut">Astronaut</option>
                </select>
            </div> 
            <div className='gallery-layout'>
                {filter.map((item, index) => (
                    <img key={index} src={item.photo} alt={item.alt} />
                ))}
            </div> 
            </div>
        </>
    );
};

export default Gallery;

