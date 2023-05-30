import '../App';
import UncontrolledExample from './carousel';
import ColorSchemesExample from './Navbar';
import WithHeaderExample from './footer';
import BasicExample from './produtos';
import '../pages/xhome.css'



function Home() {
  return (
    <div>
      <ColorSchemesExample/> <br></br>
      <UncontrolledExample/> <br></br>
      <BasicExample/> <br></br>
      <WithHeaderExample/>
    </div>
  )
}

export default Home
