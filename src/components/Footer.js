import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="custom-footer">
      <p className="footer-text">
        &copy; {currentYear} Todo List App | All Rights Reserved | m.asadrazzaqweb@gmail.com.
      </p>
    </footer>
  )
}

export default Footer
