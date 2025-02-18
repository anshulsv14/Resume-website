import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer class="footer">
        <div class="footer-container">
            <div class="footer-logo">MyWebsite</div>
            <ul class="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div class="social-icons">
                <a href="#">🔵</a> 
                <a href="#">🔴</a>
                <a href="#">🟠</a>
            </div>
        </div>
        <p class="copyright">&copy; 2025 MyWebsite. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Footer
