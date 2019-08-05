import React from 'react'

import './styles.scss'
import Logo from '../../assets/graphics/logo.png'

export default function index() {
  return (
    <header className='header' data-test='header'>
      <div className='wrap'>
        <div className='logo' data-test='logo'>
          <img src={Logo} alt='logo' />
        </div>
      </div>
    </header>
  )
}
