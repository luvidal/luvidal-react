
import { color, ReactIco } from './_common'

const Footer = ({ style }) => 
  <div style={{ ...style, display:'flex', justifyContent:'center', padding:'0.8%', backgroundColor:color[1] }}>
    <a href='https://reactjs.org/' style={{ display:'flex', alignItems:'center' }}>
      <ReactIco size={ 45 }/>
      <span style={{ color:color.REACT, marginLeft:-5 }}>React</span>
    </a>
	  
  </div>

export default Footer;
