import Logo from 'common/icons/Logo'
import React from 'react'

const Footer = () => {
  return (
<>
<footer className="footer p-10 text-base-content border-t md:border-none">
  <div>
  <Logo size={100}/>
    <p className='futuraMedium'>ATTILA HOMES Ltd.<br/>Providing reliable Real Estate solutions since 1992</p>
  </div> 
  <div>
    <span className="footer-title !bebasBold text-xl">Services</span> 
    <a className="link link-hover futuraMedium">Branding</a> 
    <a className="link link-hover futuraMedium">Design</a> 
    <a className="link link-hover futuraMedium">Marketing</a> 
    <a className="link link-hover futuraMedium">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title !bebasBold text-xl">Company</span> 
    <a className="link link-hover futuraMedium">About us</a> 
    <a className="link link-hover futuraMedium">Contact</a> 
    <a className="link link-hover futuraMedium">Jobs</a> 
    <a className="link link-hover futuraMedium">Press kit</a>
  </div> 
  <div>
    <span className="footer-title !bebasBold text-xl">Legal</span> 
    <a className="link link-hover futuraMedium">Terms of use</a> 
    <a className="link link-hover futuraMedium">Privacy policy</a> 
    <a className="link link-hover futuraMedium">Cookie policy</a>
  </div>
</footer>
</>
  )
}

export default Footer