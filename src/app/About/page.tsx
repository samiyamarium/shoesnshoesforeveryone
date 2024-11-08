import Image from 'next/image';
import './App.css';
import i1 from './i1.png';
import i2 from './i2.png';import i3 from './i3.png';import i4 from './i4.png';import i5 from './i5.png';

import i6 from './i6.png';
import i7 from './i7.png';
import i8 from './i8.png';
import i9 from './i9.png';
import i10 from './i10.png';
const About=()=>{
    return(
        <div>
            <div className='back'><b className='back'>ABOUT</b></div>
            <div className='back' ><p><b><i className='hom'>Shoesnshoes,as the name implies, is a dedicated online business for shoes deals!!We are facilitating our customers by offering all varieties i.e.formal/casual/party/comfort/orthopaedic under one roof for all ages and group..<br/><br/>Come and grab your choice!!<br/><br/>Below is given the sample list of some of our collection..<br/><br/> we will be launching our complete collection soon, so stay connected ..</i></b></p></div>
             <div className='d'><div className="out"><div className="in"><Image className="back"
          src={i1}
          alt="TESTIMAG"/><p className='d1'><b>New Arrival<br/><br/>$100</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div className="out"><div className="in"><Image className="back"
          src={i2}
          alt="TESTIMAG"/><p className='d1'><b>New Arrival <br/><br/>$80</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div className="out"><div className="in"><Image className="back"
          src={i3}
          alt="TESTIMAG"/><p className='d1'><b>New Arrival<br/><br/>$40</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div className="out"><div className="in"><Image className="back"
          src={i4}
          alt="TESTIMAG"/><p className='d1'><b>New Arrival<br/><br/>$90</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div className="out"><div className="in"><Image className="back"
          src={i5}
          alt="TESTIMAG"/><p className='d1'><b>New Arrival<br/><br/>$130</b><br/><br/>5%  Discount for first 50
             customers</p></div></div></div>
             <div className='d'><div className="out"><div className='in'><Image className="back"
          src={i6}
          alt="TESTIMAG"/><p className='d1'><b>New Arrival<br/><br/>$100</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div className="out"><div className="in"><Image className="back"
          src={i7}
          alt="TESTIMAG"/><p className='d1'><b>New Arrival <br/><br/>$80</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div className="out"><div className="in"><Image className="back"
          src={i8}
          alt="TESTIMAG"/><p className='d1'><b>New Arrival<br/><br/>$40</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div className="out"><div className="in"><Image className="back"
          src={i9}
          alt="TESTIMAG"/><p className='d1'><b>New Arrival<br/><br/>$90</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div className="out"><div className="in"><Image className="back"
          src={i10}
          alt="TESTIMAG"/><p className='d1'><b>New Arrival<br/><br/>$130</b><br/><br/>5%  Discount for first 50
             customers</p></div></div></div>
        </div>
    )

}
export default About;