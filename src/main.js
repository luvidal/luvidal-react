import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyleSheet, css } from 'aphrodite';
import { fadeIn, fadeOut } from 'react-animations';

import { color, portrait, menu, threedee, ReactIco } from './_common'

// ---------------------------------------------------------------------------------------------------

const Main = ({ style }) => 
{
  const [selected, setSelected] = useState('')

  useEffect(() => 
  {
    const ids = menu.map(obj => obj.id); // get all valid sections

    const url  = new URL(window.location.href) // hash is priority
    const hash = url.hash.substring(1)
    if (hash && ids.includes(hash)) localStorage.setItem('menu', hash)

    const sto = localStorage.getItem('menu')
    const id  = ids.includes(sto) ? sto : menu[0].id // if stored and exists ... set as id

    setSelected(id)

  }, []);

  const onSelect = id =>
  {
    localStorage.setItem('menu', id)
    setSelected(id)
  }

  return selected ? (
  <div style={ style }>
    <Menu selected={ selected } onSelect={ onSelect }/>
    <Content selected={ selected }/>
  </div>) :  null
}

export default Main;

// ---------------------------------------------------------------------------------------------------

const Menu = ({ selected, onSelect }) => 
  <div style={{ display:'flex', flexShrink:0, flexDirection:portrait('row', 'column'), paddingLeft:portrait('4%', '1%'), paddingTop:portrait(0, '2%'), backgroundColor:color[0], borderRightWidth:1, borderRightStyle:'solid', borderRightColor:'#444' }}>
    {  menu.map((item, i) => MenuButton(item, i, selected, onSelect)) }
    { portrait(null, <ReactLogo/>) }
  </div>

const MenuButton = (item, i, selected, onSelect) => 
{
  const back = selected === item.id ? color[4] : 'transparent'
  const fore = selected === item.id ? 'white'  : color.A
  const glow = selected === item.id ? 1 : 0

  const btnaux = { display:'flex', flexDirection:'column', alignItems:'center', padding:portrait(16, 30), backgroundColor:back, color:fore, borderTopRightRadius:0, borderBottomRightRadius:0, marginRight:-2 }
  const btncss = { ...threedee('#444', '#222', glow), ...btnaux }

  return (
    <a href='#' key={ i } style={ btncss } onClick={ () => onSelect(item.id) }>
      <FontAwesomeIcon icon={ item.icon } size='xl' />
      <span style={{ display:portrait('none', 'flex'), marginTop:15, fontSize:'70%' }}>{ item.text }</span>
    </a>)
}

const ReactLogo = () =>
  <div style={{ display:'flex', flexDirection:'column', marginTop:'auto', marginBottom:20, paddingRight:26 }}>
    <span style={{ fontSize:'75%', opacity:0.2, marginLeft:12 }}>Built with</span>
    <a href='https://reactjs.org/' style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
      <ReactIco size={ 35 }/>
      <span style={{ color:color.REACT, marginLeft:-5 }}>React</span>
    </a>
  </div> 

// ---------------------------------------------------------------------------------------------------

const contentCss = { display:'flex', flexShrink:1, height:'100%', backgroundColor:color[4], width:'100%', flexDirection:'column' }

const styles = StyleSheet.create(
{
  fadeIn :{ animationName:fadeIn,  animationDuration:'4s' },
  fadeOut:{ animationName:fadeOut, animationDuration:'1s' }
});

const Content = ({ selected }) => 
{
  const [content, setContent] = useState('')
  const [className, setClassName] = useState('')
  const [fade, setFade] = useState(false)

  useEffect(() => 
  {
    setFade(true)

  }, [selected]);

  useEffect(() => 
  {
    if (fade)
    {
      setClassName(css(styles.fadeOut))
      setFade(false)

    } else {

      const content = menu.find(x => x.id === selected).content
      setContent(content)
      setClassName(css(styles.fadeIn))
    }

  }, [fade]);

  return <ContentComponent content={ content } className={ className }/>
}

const ContentComponent = ({ content, className }) =>
  <div className={ className } style={ contentCss }>
    <Updated/>
    <div style={{ width:'100%', display:'flex', justifyContent:'center', overflow:'auto' }}>
      <div style={{ width:portrait('90%','60%') }}>
        { content }
        <br/><br/><br/>
      </div>
    </div>
  </div>

const Updated = () =>
  <div style={{ marginTop:15, alignSelf:'flex-end' }}>
    <span style={{ opacity:0.2, marginRight:10 }}>Last updated on</span>
    <span style={{ opacity:0.5, marginRight:30 }}>Dec 02, 2022</span>
  </div>
