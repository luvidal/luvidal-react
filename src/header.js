import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import mypic from './assets/dev-round.png'
import { threedee, portrait } from './_common'

// ---------------------------------------------------------------------------------------------------

const border     = { ...threedee(), ...{ padding:portrait('3%', '1.5%'), borderRadius:0 }}
const container  = { flexDirection:'row', display:'flex', justifyContent:'space-between' }
const background = { background:'linear-gradient(to right,#200, #400, #300)' }

//const textshadow = { textShadowColor:'rgba(0, 0, 0, 0.8)', textShadowOffset:{ width:10, height:10 }, textShadowRadius:3 }
const textshadow = {}

console.log({ ...textshadow, ...{ fontSize:'105%', whiteSpace:'nowrap', opacity:0.5 } });

const Header = ({ style }) => 
  <div style={{ ...container, ...background, ...border, ...style }}>
    <DeveloperInfo/>
    <ContactLinks/>
  </div>

export default Header;

const DeveloperInfo = () =>
  <div style={{ display:'flex', flexDirection:'row' }}>
    <img src={ mypic } width={ portrait('40', '60') } height={ portrait('40', '52') } alt='Luis Vidal DB'/>
    <div style={{ display:'flex', flexDirection:'column', marginLeft:'3%'}}>
      <div style={{ ...textshadow, ...{ fontSize:'150%', whiteSpace:'nowrap', opacity:0.9 } }}>Luis Vidal DB</div>
      <div style={{ ...textshadow, ...{ fontSize:'105%', whiteSpace:'nowrap', opacity:0.5 } }}>Startup Engineer</div>
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