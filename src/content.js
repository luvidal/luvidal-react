import { useState, useEffect } from 'react'

import { StyleSheet, css } from 'aphrodite';
import { fadeIn, fadeOut } from 'react-animations';

import { color, portrait, menu } from './_common'

// ---------------------------------------------------------------------------------------------------

const contentCss = { display:'flex', flexShrink:1, height:'100%', backgroundColor:color[4], width:'100%', flexDirection:'column' }

const styles = StyleSheet.create(
{
  fadeIn :{ animationName:fadeIn,  animationDuration:'3s' },
  fadeOut:{ animationName:fadeOut, animationDuration:'1s' }
});

export const Content = ({ selected }) => 
{
  const [content, setContent] = useState('')
  const [className, setClassName] = useState('')
  const [fade, setFade] = useState(false)

  useEffect(() => 
  {
    setFade(true)
//console.log('selected', selected)

  }, [selected]);

  useEffect(() => 
  {
    if (fade)
    {
      setClassName(css(styles.fadeOut))
      setFade(false)
//console.log('fadeOut')

    } else {

      const content = menu.find(x => x.id === selected).content
      setContent(content)
      setClassName(css(styles.fadeIn))
//console.log('fadeIn')
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
