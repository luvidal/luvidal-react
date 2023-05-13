import { useState, useEffect } from 'react'

import { StyleSheet, css } from 'aphrodite'
//import { lightSpeedIn as fadein, lightSpeedOut as fadeout } from 'react-animations'
//import { rollIn as fadein, rollOut as fadeout } from 'react-animations'
//import { rotateIn as fadein, rotateOut as fadeout } from 'react-animations'
import { slideInDown as fadein, slideOutUp as fadeout } from 'react-animations'

import { color, portrait, menu, timeout } from './_common'

// ---------------------------------------------------------------------------------------------------

const contentCss = { display:'flex', flexShrink:1, height:'100%', backgroundColor:color[4], width:'100%', flexDirection:'column' }

const styles = StyleSheet.create(
{
  in :{ animationName:fadein, animationDuration:'0.4s' },
  out:{ animationName:fadeout, animationDuration:'0.2s' },
});

export const Content = ({ selected }) => 
{
  const [content, setContent] = useState('')
  const [className, setClassName] = useState('')

  useEffect(() => {

    const fadeinout = async () => 
    {
      setClassName(css(styles.out))
      await timeout(200);

      setClassName(css(styles.in))
      const content = menu.find(x => x.id === selected).content
      setContent(content)
      await timeout(400);
    }

    fadeinout()

  }, [selected]);

  return <ContentComponent content={ content } className={ className }/>
}

const ContentComponent = ({ content, className }) =>
  <div style={ contentCss }>
    <Updated/>
    <div style={{ width:'100%', display:'flex', justifyContent:'center', overflow:'auto' }}>
      <div className={ className } style={{ width:portrait('90%','60%') }}>
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
