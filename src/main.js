import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { color, portrait, menu, ReactIco } from './_common'

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

  const menucss = { display:'flex', flexShrink:0, flexDirection:portrait('row', 'column'), paddingLeft:portrait('4%', '1%'), paddingTop:portrait(0, '2%') }
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
  <div style={{ ...style, backgroundColor:color[1] }}>
    {  menu.map((item, i) => MenuButton(item, i, selected, onSelect)) }
    { portrait(null, <ReactLogo/>) }
  </div>

const MenuButton = (item, i, selected, onSelect) => 
{
  const back = selected === item.id ? color[4] : 'transparent'
  const fore = selected === item.id ? 'white'  : color.A

  const buttoncss = { display:'flex', flexDirection:'column', alignItems:'center', padding:portrait(16, 30), backgroundColor:back, color:fore, borderTopLeftRadius:portrait(0, 6), borderBottomLeftRadius:portrait(0, 6) }

  return (
    <a href='#' key={ i } style={ buttoncss } onClick={ () => onSelect(item.id) }>
      <FontAwesomeIcon icon={ item.icon } size='xl' />
      <span style={{ display:portrait('none', 'flex'), marginTop:15, fontSize:'70%' }}>{ item.text }</span>
    </a>)
}

const ReactLogo = () =>
  <a href='https://reactjs.org/' style={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop:'auto', marginBottom:10, paddingRight:15 }}>
    <ReactIco size={ 35 }/>
    <span style={{ color:color.REACT, marginLeft:-5 }}>React</span>
  </a>  

// ---------------------------------------------------------------------------------------------------

const Content = ({ content, style }) =>
  <div style={{ ...style, backgroundColor:color[4], width:'100%', flexDirection:'column' }}>
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