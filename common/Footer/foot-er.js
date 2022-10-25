import Logo from 'common/icons/Logo'
import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
<>
<footer className="footer p-10 text-base-content border-t md:border-none">
  <div>
  <Logo size={100}/>
    <p className='futuraMedium'>ATTILA HOMES Ltd.<br/>Providing reliable Real Estate solutions since 2014</p>
  </div> 
  <div>
    <span className="footer-title !bebasBold text-xl">Houses</span> 
    <div className="link link-hover futuraMedium"><Link href='/sale'>For Sale</Link></div> 
    <div className="link link-hover futuraMedium"><Link href='/rental'>For Rent</Link></div> 
    <div className="link link-hover futuraMedium"><Link href='/Bodrum'>Bodrum</Link></div> 
    <div className="link link-hover futuraMedium"><Link href='/Istanbul'>Istanbul</Link></div>
  </div> 
  <div>
    <span className="footer-title !bebasBold text-xl">Company</span> 
  <div className="link link-hover futuraMedium">  <Link  href='/aboutus'>About us</Link></div> 
    <div className="link link-hover futuraMedium"><Link  href='/contact'>Contact </Link></div>
  </div> 
  <div>
    <span className="footer-title !bebasBold text-xl">Legal</span> 
   <div className="link link-hover futuraMedium"> <Link href='/privacypolicy'>Privacy policy</Link></div> 
  </div>
</footer>
</>
  )
}

export default Footer