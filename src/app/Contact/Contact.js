import React from 'react';
import './App.css';
import email from './email.jfif';
import inn from './inn.jfif'

const Contact=()=>{
    return(
        <div className='para1'><p><img className='dcont' src={email} alt="email"/><a className='para' href="mailto:samiyamarium8@gmail.com">SEND US AN EMAIL!!</a></p><p className='back'>CONTACT</p><a className='para' href='https://www.linkedin.com/in/samiya-marium-893192a8/'>CONNECT WITH US ON LINKEDIN</a><img className='dcont' src={inn} alt="linkedin"/></div>
    )
}

export default Contact;