import { useId } from 'react';
import './FormPage.css';
import { useState } from 'react';
import Button from './Button';

function  FormPage() {
const id = useId();

const [other, setOther] = useState();
const [emailError,setEmailError]=useState();
const [nameError, setNameError] = useState('');
const [formValid, setFormValid] = useState(false);
const [errorMessage, setErrorMessage]=useState();
const [confirmEmailError, setconfirmEmailError] = useState('');
const [emailState, setemailState]=useState('');

const nameCheck =(e)=>{
    const nameValue=e.target.value;
    if(!e.target.value){
        setNameError("Name is required");
    }else{
        setNameError('');
        setFormValid(true);
    }
}

const emailFormatCheck=(e)=>{
    const emailValue=e.target.value;  
    if (!e.target.value){   
        setEmailError("Email is required"); 
        setemailState(emailValue);
    }else if  (!emailValue.includes("@")){
        setEmailError("Invalid email format. The email should contain a @ sign");
    }else{
        setEmailError('');
        setFormValid(true);
        setemailState(emailValue);
      }
    }

   const confirmEmailCheck = (e) => {
        const confirmEmailValue = e.target.value;
        const emailValue = emailState;
        if (!confirmEmailValue) {
            setconfirmEmailError("Confirm Email is required");
        } else if (emailValue !== confirmEmailValue) {
            setconfirmEmailError("Both emails must match. Please re-enter");
        } else {
            setconfirmEmailError(''); 
            setFormValid(true);
        }
    };
    
const showChange=(e)=>{
     setOther(e.target.value);
 }

const showField = () => {
    if (other==="4") {
        return(
        <div>
            <label htmlFor={`${id}-otheroccupation`}>Please enter</label>
            <input id={`${id}-otheroccupation`}/>
        </div>
        ); 
    }
}

const submittingButton=(e)=>{
    e.preventDefault();
    console.log("Form submitted");
}
    /*if (!setNameError && !setEmailError && !confirmEmailError) {
         console.log("Form submitted successfully!");
         } else {
           
            setErrorMessage("Please fill out the form completely before submitting.");
         }
    */

return (
    <>
   
    <form className='complex-form' onSubmit={submittingButton}>
    <p> * indicates required </p>

    <label htmlFor={`${id}-name`} className='label'>Name* </label>
    <input id={`${id}-name`} className='input' onInput={nameCheck}/>
    {nameError && <p className='error-message'>{nameError}</p>} 
      
    <label htmlFor={`${id}-email`} className='label'>Email*</label>
    <input id={`${id}-email`} className='input' onInput={emailFormatCheck}/>
    {emailError && <p className="error-message">{emailError}</p>}

    <label htmlFor={`${id}-confirmEmail`}className='label'>Confirm Email*</label>
    <input id={`${id}-confirmEmail`}  className='input' onInput={confirmEmailCheck}/>
    {confirmEmailError && <p className="error-message">{confirmEmailError}</p>}

    <label htmlFor={`${id}-tier`} >Occupation</label>
    <select id={`${id}-tier`} className="dropdown" onClick={showChange} >
        <option disabled defaultValue=""> Please Select</option>
        <option value="1"> Student</option>
        <option value="2"> Scientist</option>
        <option value="3"> Doctor</option>
        <option value="4"> Other </option>
    </select>      
    {showField()}
    
    <label htmlFor={`${id}-subscribe`}>Do you want us to send you annoying emails?</label>
    <input type="checkbox" id={`${id}-subscribe`}/>
    
    {errorMessage && <p className="error-message">{errorMessage}</p>}

    <div className='button-styling'>
    <Button type='submit' visual="button" className='submitbutton'>Submit</Button>  
    <Button type='cancel' visual="button" className='cancelbutton' >Cancel</Button>          
    </div>

    </form>
    </>
);
}

export default FormPage;