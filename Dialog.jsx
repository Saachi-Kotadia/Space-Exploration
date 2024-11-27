import { useRef } from 'react';
import Button from './Button';
import { useId } from 'react';
import { useState } from 'react';
//import Form from './Form';
import './Dialog.css';


function Dialog({ onNameChange }) {
    const dialogRef = useRef();
    const id = useId();

    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onNameChange(name); 
        dialogRef.current.close(); 
    }

 

    return (
        <>
        <div className='dialogForm'>
            <Button type="button" visual="button" aria-label="button to open dialog modal" className='open' onClick={() => {
                dialogRef.current.showModal();
            }}>Tell us your favourite planet
            </Button>

            <dialog ref={dialogRef} className='modal'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={`${id}-name`}>Planet Name</label>
                    <input id={`${id}-name`} value={name} onChange={(e) => setName(e.target.value)} />
                    
                    <Button type='submit' visual="button" className='submitbutton1'>
                        Submit
                    </Button>
                </form>

                <Button type="button" visual="button" aria-label="button to close dialog modal" className='close' onClick={() => {
                    dialogRef.current.close();
                }}>Close Modal
                </Button>
            </dialog>
            </div>
        </>
    );
}

export default Dialog;


