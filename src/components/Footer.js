import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://www.facebook.com/people/Mau-adventures-Atv-CR/100063765570457/">@Mau-Adventures</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Andrew Balson</a>.
        </span>
      </div>
    </footer>
  </div>
)
