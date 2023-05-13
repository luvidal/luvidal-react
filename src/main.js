import { useState, useEffect } from 'react'

import { Menu } from './menu'
import { Content } from './content'

import { menu } from './_common'

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
