import Image from 'next/image';
import './App.css';
import email from './email.png';
import inn from './inn.png'

const Contact=()=>{
    return(
        <div className='para1'><p><Image className='dcont' src={email} width={48} alt="email"/><a className='para' href="mailto:samiyamarium8@gmail.com">SEND US AN EMAIL!!</a></p><p className='back'>CONTACT</p><a className='para' href='https://www.linkedin.com/in/samiya-marium-893192a8/'>CONNECT WITH US ON LINKEDIN!!</a><Image className='dcont' src={inn}  alt="linkedin"/></div>
    )
}

export default Contact;