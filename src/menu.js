import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { color, portrait, menu, threedee, ReactIco } from './_common'

export const Menu = ({ selected, onSelect }) => 
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
