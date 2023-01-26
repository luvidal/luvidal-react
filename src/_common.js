import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import Summary from './page-summary'
import History from './page-history'
import Education from './page-education'
import Links from './page-links'
import Reviews from './page-reviews'
import Hobbies from './page-hobbies'

export const menu =
[
  { id:'summary', text:'Summary', icon:solid('screwdriver-wrench'), content:Summary },
  { id:'history', text:'History', icon:solid('book'), content:History },
  { id:'education', text:'Education', icon:solid('graduation-cap'), content:Education },
  { id:'links',   text:'Links', icon:solid('globe'), content:Links },
  { id:'reviews', text:'Reviews', icon:solid('comment-dots'), content:Reviews },
  { id:'hobbies', text:'Hobbies', icon:solid('masks-theater'), content:Hobbies },
]

export const color = { LINK:'#61DAFB', REACT:'#61DAFB', 0:'#060606', 1:'#0C0C0C', 2:'#131313', 3:'#191919', 4:'#1F1F1F', 5:'#252525', 6:'#2B2B2B', 7:'#323232', 8:'#373737', 9:'#3D3D3D', A:'#414141', B:'#474747' }

export const portrait = (d1, d2) => (window.innerHeight > window.innerWidth) ? d1 : d2

// ---------------------------------------------------------------------------------------------------

const Title = ({ title, subtitle, favicon }) =>
  <div style={{ display:'flex', flexDirection:'row', alignItems:'center' }}>
      <img src={ require('./assets/favicons/' + favicon) } style={{ width:46, height:46, borderRadius:46, marginRight:12 }} />
      <div>
        <div style={{ display:'flex', textAlign:'left', fontSize:'120%', whiteSpace:'nowrap', opacity:1.0, marginBottom:2 }}>{ title }</div>
        <div style={{ display:'flex', textAlign:'left', fontSize:'108%', whiteSpace:'nowrap', opacity:0.6 }}>{ subtitle }</div>
      </div>
  </div>

const RevTitle = ({ title, subtitle, flag }) =>
  <div style={{ display:'flex', flexDirection:'column' }}>
    <div style={{ display:'flex', textAlign:'left', fontSize:'110%', whiteSpace:'nowrap', opacity:1.0, marginBottom:2 }}>{ title }</div>
    <div style={{ display:'flex', flexDirection:'row' }}>
      <img src={ require('./assets/flags/' + flag + '.svg') } style={{ width:23, height:23, marginRight:9 }} />
      <div style={{ display:'flex', textAlign:'left', fontSize:'105%', whiteSpace:'nowrap', opacity:0.6 }}>{ subtitle }</div>
    </div>
  </div>

const Between = ({ start, end }) => start ?
    <div style={{ display:'flex', textAlign:'right', whiteSpace:'nowrap', marginBottom:5 }}>
        { start } - { end || 'Current' }
    </div> : null

const OnDate = ({ onedate }) => onedate ?
    <div style={{ display:'flex', textAlign:'right', whiteSpace:'nowrap', marginBottom:5 }}>
        { onedate }
    </div> : null

// ---------------------------------------------------------------------------------------------------

const padding = '1.5%'

export const Header = ({ title, subtitle = '', favicon, start, end, certificate, checkout }) =>
    <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', padding, marginTop:'4%', background:'#222', borderRadius:10 }}>
        <Title title={ title } subtitle={ subtitle } favicon={ favicon }/>
        <div style={{ textAlign:'right' }}>
            <Between start={ start } end={ end } />
            <Certificate file={ certificate } />
            <CheckOut url={ checkout } />
        </div>
    </div>

export const RevHeader = ({ title, subtitle, flag, onedate }) =>
    <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', padding, marginTop:'4%', background:'#222', borderRadius:10 }}>
        <RevTitle title={ title } subtitle={ subtitle } flag={ flag }/>
        <div style={{ textAlign:'right' }}>
            <OnDate onedate={ onedate } />
            <CheckOut url='https://www.upwork.com/freelancers/~01a7f98bc0f8942450' />
        </div>
    </div>

export const Body = ({ children }) =>
    <div style={{ padding, marginTop:'4%', marginBottom:'6%' }}>
        { children }
    </div>


export const Skill = ({ txt }) =>
    <span style={{ whiteSpace:'nowrap', backgroundColor:'grey', color:'white', borderRadius:100, fontSize:'90%', marginRight:'1%', paddingLeft:'2%', paddingRight:'2%', paddingTop:'1%', paddingBottom:'1%' }}>
        { txt }
    </span>

export const Separator = () =>
    <>
        <br/><hr style={{ borderColor:color.REACT, opacity:0.5 }}/><br/>
    </>

// ---------------------------------------------------------------------------------------------------

export const Anchor = ({ onClick, children, style = undefined }) =>
{
  const onClickAux = () =>
  {
    onClick();
    return false;
  }

  return <a href='#' onClick={ onClickAux } style={ style }>{ children }</a>
}

// ---------------------------------------------------------------------------------------------------

export const GoTo = ({ text, url }) => 
{
  const openInNewTab = url => window.open(url, '_blank', 'noreferrer')

  return (
    <Anchor onClick={ () => openInNewTab(url) } style={{ color:color.LINK }}>
      { text }
    </Anchor>)
}

const CheckOut = ({ url }) =>
{
  const openInNewTab = () => window.open(url, '_blank', 'noreferrer')

  return url ?
    <Anchor onClick={ openInNewTab } style={{ color:color.LINK, whiteSpace:'nowrap', fontSize:'90%' }}>
      <FontAwesomeIcon icon={ solid('eye') } style={{ marginRight:8, fontSize:'85%' }} />
      Website
    </Anchor> : null
}

const Certificate = ({ text = 'Certificate', file }) =>
{
  const style = 
  {
    overlay: {
      backgroundColor:'rgba(20, 20, 20, 0.75)'
    },
  
    content: {
      top:'50%', left:'50%', right:'auto', bottom:'auto',
      marginRight:'-50%',
      transform:'translate(-50%, -50%)',
      maxWidth:'80%', maxHeight:'80%',
      padding:0,
    },
  }

  const [showModal, hideModal] = useModal(() => file ? (
    <ReactModal isOpen style={ style } onRequestClose={ hideModal }>
        <img src={ require('./assets/certificates/' + file) } style={{ width:'100%', heigth:'100%' }} onClick={ hideModal }/>
    </ReactModal>
  ) : null)

  return file ? (
    <Anchor onClick={ showModal } style={{ color:color.LINK, whiteSpace:'nowrap', fontSize:'90%' }}>
      <FontAwesomeIcon icon={ solid('award') } style={{ marginRight:4, fontSize:'85%' }} />
      { text }
    </Anchor>)  : null
} 

ReactModal.setAppElement('#modal');