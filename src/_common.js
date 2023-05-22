import ReactModal from 'react-modal'
import { useModal } from 'react-modal-hook'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import Summary from './page-summary'
import Mocks from './page-mocks'
import History from './page-history'
import Education from './page-education'
import Links from './page-links'
import Reviews from './page-reviews'
// import Hobbies from './page-hobbies'

export const menu =
[
  { id:'summary', text:'Summary', icon:solid('scroll'), content:Summary },
  { id:'mocks', text:'Mocks', icon:solid('briefcase'), content:Mocks },
  { id:'history', text:'History', icon:solid('book'), content:History },
  { id:'education', text:'Education', icon:solid('graduation-cap'), content:Education },
  { id:'links',   text:'Links', icon:solid('globe'), content:Links },
  { id:'reviews', text:'Reviews', icon:solid('message'), content:Reviews },
  // { id:'hobbies', text:'Hobbies', icon:solid('masks-theater'), content:Hobbies },
]

export const portrait = (d1, d2) => (window.innerHeight > window.innerWidth) ? d1 : d2
export const color    = { LINK:'#61DAFB', REACT:'#61DAFB', 0:'#060606', 1:'#0C0C0C', 2:'#131313', 3:'#191919', 4:'#1F1F1F', 5:'#252525', 6:'#2B2B2B', 7:'#323232', 8:'#373737', 9:'#3D3D3D', A:'#333', B:'#555' }

export const threedee = (light = '#555', dark = '#111', width = 1) =>
{ 
  return { borderWidth:width, borderStyle:'solid', borderLeftColor:light, borderTopColor:light, borderBottomColor:dark, borderRightColor:dark, borderRadius:9 }
}

export function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}

// ---------------------------------------------------------------------------------------------------

const Title = ({ title, subtitle, favicon }) =>
  <div style={{ display:'flex', flexDirection:'row', alignItems:'center' }}>
      <img alt={ title } src={ require('./assets/favicons/' + favicon) } style={{ width:portrait(30, 40), height:portrait(30, 40), borderRadius:portrait(30, 40), marginRight:12 }} />
      <div>
        <div style={{ display:'flex', textAlign:'left', fontSize:'114%', whiteSpace:'nowrap', opacity:1.0, marginBottom:2 }}>{ title }</div>
        <div style={{ display:'flex', textAlign:'left', fontSize:'100%', whiteSpace:'nowrap', opacity:0.6 }}>{ subtitle }</div>
      </div>
  </div>

const Between = ({ start, end }) => start ?
    <div style={{ display:'flex', textAlign:'right', whiteSpace:'nowrap', marginBottom:5 }}>
        { start } - { end || 'Current' }
    </div> : null

export const OnDate = ({ onedate }) => onedate ?
    <div style={{ display:'flex', textAlign:'right', whiteSpace:'nowrap', marginBottom:5 }}>
        { onedate }
    </div> : null

// ---------------------------------------------------------------------------------------------------

const padding = '2%'
const hdraux  = { display:'flex', flexDirection:'row', justifyContent:'space-between', padding, marginTop:'4%', backgroundColor:color.A }
export const hdrcss = { ...threedee(), ...hdraux }

export const Header = ({ title, subtitle = '', favicon, start, end, certificate, visit }) =>
    <div style={ hdrcss }>
        <Title title={ title } subtitle={ subtitle } favicon={ favicon }/>
        <div style={{ textAlign:'right' }}>
            <Between start={ start } end={ end } />
            <Certificate file={ certificate } />
            <Visit url={ visit } />
        </div>
    </div>

export const Body = ({ children }) =>
    <div style={{ padding, marginTop:'4%', marginBottom:'6%' }}>
        { children }
    </div>

const skillcss = { backgroundColor:color.REACT, color:'black', opacity:0.7, borderRadius:100, fontSize:'75%', marginRight:'1%', paddingLeft:'2%', paddingRight:'2%', paddingTop:'1%', paddingBottom:'1%' }

export const Skill = ({ txt }) =>
    <span style={ skillcss }>
        { txt }
    </span>

export const Separator = () =>
    <>
        <br/><hr style={{ borderColor:color.REACT, opacity:0.5 }}/><br/>
    </>

// ---------------------------------------------------------------------------------------------------

export const Anchor = ({ onClick, children, style = undefined }) =>
{
  const onClickAux = () => { onClick(); return false; }
  return <a href='#' onClick={ onClickAux } style={ style }>{ children }</a>
}

// ---------------------------------------------------------------------------------------------------

export const GoTo = ({ text, url, style={} }) => 
{
  const openInNewTab = url => window.open(url, '_blank', 'noreferrer')

  return (
    <Anchor onClick={ () => openInNewTab(url) } style={{ color:color.LINK , ...style }}>
      { text }
    </Anchor>)
}

export const Visit = ({ url }) =>
{
  const openInNewTab = () => window.open(url, '_blank', 'noreferrer')

  return url ?
    <Anchor onClick={ openInNewTab } style={{ color:color.LINK, whiteSpace:'nowrap', fontSize:'90%' }}>
      <FontAwesomeIcon icon={ solid('arrow-up-right-from-square') } style={{ marginRight:8, fontSize:'85%' }} />
      Visit Site
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
        <img alt={ file }  src={ require('./assets/certificates/' + file) } style={{ width:'100%', heigth:'100%' }} onClick={ hideModal }/>
    </ReactModal>
  ) : null)

  return file ? (
    <Anchor onClick={ showModal } style={{ color:color.LINK, whiteSpace:'nowrap', fontSize:'90%' }}>
      <FontAwesomeIcon icon={ solid('award') } style={{ marginRight:4, fontSize:'85%' }} />
      { text }
    </Anchor>)  : null
} 

ReactModal.setAppElement('#modal');

export const ReactIco = ({ size }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" width={ size } height={ size }>
    <g fill="#61DAFB">
      <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
      <circle cx="420.9" cy="296.5" r="45.7"/>
      <path d="M520.5 78.1z"/>
    </g>
  </svg>
