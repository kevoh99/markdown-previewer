import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      Made with <FaHeart style={{ color: 'red', fontSize: '1rem' }} /> by{' '}
      <a
        href='https://twitter.com/kevinnjoroge'
        target='_blank'
        rel='noreferrer'
      >
        Kevin Nganga
      </a>
    </footer>
  )
}

export default Footer