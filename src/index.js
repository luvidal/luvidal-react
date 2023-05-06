import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ModalProvider } from "react-modal-hook";

import { portrait } from './_common'

import Header from './header'
import Main   from './main'
import Footer from './footer'

const App =
  <StrictMode>
      <Header style={{ display:'flex', flexShrink:0 }}/>
      <ModalProvider>
        <Main   style={{ display:'flex', flexGrowth:1, flexDirection:portrait('column','row'), overflow:'hidden', height:'100%' }}/>
      </ModalProvider>
      { portrait(<Footer style={{ display:'flex', flexShrink:0 }}/>, null) }
  </StrictMode>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App);
