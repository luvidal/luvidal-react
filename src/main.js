import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { color, portrait, menu } from './_common'

// ---------------------------------------------------------------------------------------------------

const Main = ({ style }) => 
{
  const [selected, setSelected] = useState('')
  const [content,  setContent]  = useState('')

  useEffect(() => 
  {
    const sto = localStorage.getItem('menu')
    const ids = menu.map(obj => obj.id);
    const id  = ids.includes(sto) ? sto : menu[0].id // if stored and exists ... set as id

    setSelected(id)
    const content = menu.find(x => x.id === id).content
    setContent(content)

  }, []);

  const onSelect = id =>
  {
    localStorage.setItem('menu', id)
    setSelected(id)
    const content = menu.find(x => x.id === id).content
    setContent(content)
  }

  const menucss = { display:'flex', flexShrink:0, flexDirection:portrait('row', 'column'), paddingLeft:portrait('4%', 0) }
  const contcss = { display:'flex', flexShrink:1, height:'100%' }

  return (
  <div style={ style }>
    <Menu selected={ selected } onSelect={ onSelect } style={ menucss }/>
    <Content content={ content } style={ contcss }/>
  </div>)
}

export default Main;

// ---------------------------------------------------------------------------------------------------

const Menu = ({ selected, onSelect, style }) => 
  <div style={{ ...style, backgroundColor:color[2] }}>
  {  menu.map((item, i) => MenuButton(item, i, selected, onSelect)) }
  </div>

const MenuButton = (item, i, selected, onSelect) => 
{
  const back = selected === item.id ? 'darkred' : 'transparent'
  const fore = selected === item.id ? 'white'   : color.A

  const buttoncss = { display:'flex', flexDirection:'column', alignItems:'center', padding:portrait(16, 25), margin:portrait(10, 15), backgroundColor:back, color:fore, borderRadius:10 }

  return (
    <a href='#' key={ i } style={ buttoncss } onClick={ () => onSelect(item.id) }>
      <FontAwesomeIcon icon={ item.icon } size='xl' />
      <span style={{ display:portrait('none', 'flex'), marginTop:16, fontSize:'80%' }}>{ item.text }</span>
    </a>)
}

// ---------------------------------------------------------------------------------------------------

const Content = ({ content, style }) =>
  <div style={{ ...style, backgroundColor:color[3], width:'100%', flexDirection:'column' }}>
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