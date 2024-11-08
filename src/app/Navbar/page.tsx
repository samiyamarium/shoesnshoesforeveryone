import './App.css'
import Home1 from '../Home/page';
import About1 from '../About/page';
import Contact1 from '../Contact/page'



const Navbar=()=>{
    return(<div>
        <div className="para1"><a className="back" href="#H" target='blank'>Home</a><a className="back" href="#A" target='blank'>About</a><a className="back"  href="#C" target='blank'>Contact</a></div>
<div ><h1 className="dis" id="H"><Home1/></h1><h1 className="dis" id="A"><About1/></h1><h1 className="dis" id="C"><Contact1/></h1>
</div>
</div>
    )
}
export default Navbar;