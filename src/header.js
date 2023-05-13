import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import mypic from './assets/dev-round.png'

// ---------------------------------------------------------------------------------------------------

const Header = ({ style }) => 
  <div style={{ ...style, flexDirection:'row', display:'flex', justifyContent:'space-between', padding:'1.5%', backgroundColor:'#330000', borderBottomWidth:1, borderBottomColor:'#000', borderBottomStyle:'solid' }}>
    <DeveloperInfo/>
    <ContactLinks/>
  </div>

export default Header;

const DeveloperInfo = () =>
  <div style={{ display:'flex', flexDirection:'row' }}>
    <img src={ mypic } width='60' height='60' alt='Luis Vidal DB'/>
    <div style={{ display:'flex', flexDirection:'column', marginLeft:'3%'}}>
      <div style={{ fontSize:'150%', whiteSpace:'nowrap', opacity:0.9 }}>Luis Vidal DB</div>
      <div style={{ fontSize:'105%', whiteSpace:'nowrap', opacity:0.5 }}>Web & Mobile Developer</div>
    </div>
  </div>

const ContactLinks = () =>
  <div style={{ display:'inline-block', flexDirection:'row' }}>
    <a style={{ marginLeft:8, color:'white', opacity:0.2 }} target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send?phone=56933846684&text=Hi%20Luis%2C%20I%27m%20looking%20for%20a%20dev'>
      <FontAwesomeIcon icon={ faWhatsapp } size='lg' />
    </a>
    <a style={{ marginLeft:8, color:'white', opacity:0.2 }} target='_blank' rel='noreferrer' href='mailto:luvidal@edictus.com?subject=I%27m%20looking%20for%20a%20dev'>
      <FontAwesomeIcon icon={ faEnvelope } size='lg'/>
    </a>
  </div>