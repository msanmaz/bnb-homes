import React from 'react'


const Logo = React.forwardRef(function Logo({
  size = "16",
  color = "currentColor"
}, ref) {
  
  return (
    <svg version="1.1" width={size} stroke={color}
    height={size} id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className={`w-24 cursor-pointer fill-current text-white`}
    viewBox="0 0 200 80" >
    <g stroke={color}>
        <g stroke={color}>
            <path stroke={color}  d="M25.8,42.7l-1.7,4h-0.9l5.7-13.5h0.9l6.3,13.5h-1.8l-1.9-4H25.8z M28.9,35.4L28.9,35.4l-2.8,6.5H32L28.9,35.4
z"/>
            <path stroke={color}  d="M42.2,46.7V34.3H37v-1.1h12v1.1h-5.2v12.4H42.2z" />
            <path stroke={color}  d="M55,46.7V34.3h-5.2v-1.1h12v1.1h-5.2v12.4H55z" />
            <path stroke={color} d="M67,33.2v13.5h-1.8V33.2H67z" />
            <path stroke={color} d="M81,46.7v-1h-6.9V33.2h-1.7v13.5H81z" />
            <path stroke={color}  d="M84.8,42.7l-1.7,4h-0.9l5.7-13.5h0.9L95,46.7h-1.8l-1.9-4H84.8z M87.9,35.4L87.9,35.4l-2.8,6.5H91L87.9,35.4z
"/>
            <path stroke={color}  d="M106.3,46.7h-1.7V33.2h1.7v5.9h8v-5.9h1.8v13.5h-1.8V40h-8V46.7z" />
            <path stroke={color}  d="M119.8,37.7c0.3-0.9,0.7-1.6,1.3-2.3c0.6-0.7,1.4-1.3,2.2-1.7c0.9-0.4,2-0.7,3.3-0.7c1.3,0,2.4,0.2,3.3,0.7
c0.9,0.5,1.7,1,2.3,1.7c0.6,0.7,1,1.4,1.3,2.3c0.3,0.8,0.5,1.6,0.5,2.3c0,0.5-0.1,0.9-0.2,1.5c-0.1,0.5-0.3,1.1-0.6,1.6
c-0.2,0.5-0.6,1-1,1.5c-0.4,0.5-0.9,0.9-1.5,1.2c-0.5,0.3-1.2,0.6-1.9,0.9c-0.7,0.2-1.5,0.3-2.3,0.3c-1.3,0-2.4-0.2-3.3-0.7
c-0.9-0.5-1.6-1.1-2.2-1.8c-0.6-0.7-1-1.4-1.3-2.3c-0.2-0.8-0.4-1.6-0.4-2.3C119.4,39.3,119.5,38.5,119.8,37.7z M121.7,42.5
c0.3,0.7,0.7,1.4,1.2,1.9c0.5,0.5,1,1,1.7,1.3c0.6,0.3,1.4,0.4,2.1,0.4c0.7,0,1.4-0.1,2.1-0.4c0.7-0.3,1.3-0.7,1.8-1.3
c0.5-0.5,0.9-1.2,1.2-1.9c0.3-0.8,0.5-1.6,0.5-2.5c0-0.9-0.2-1.7-0.5-2.4c-0.3-0.8-0.7-1.4-1.2-2c-0.5-0.6-1.1-1-1.8-1.3
c-0.7-0.3-1.3-0.4-2.1-0.4c-0.8,0-1.5,0.2-2.1,0.4c-0.7,0.3-1.2,0.7-1.7,1.3c-0.5,0.5-0.9,1.2-1.2,2c-0.2,0.7-0.4,1.6-0.4,2.4
C121.3,40.9,121.4,41.7,121.7,42.5z"/>
            <path stroke={color} d="M144.7,44.8h0.1l6.2-11.6h1.3v13.5h-1.7V35.8h-0.1l-6,11.2h-0.4l-5.9-11.2h-0.1v11h-0.9V33.2h1.3L144.7,44.8z
"/>
            <path stroke={color}  d="M165.6,33.2v1.1h-6.9v4.8h6V40h-6v5.7h6.9v1H157V33.2H165.6z" />
<path stroke={color}  d="M168.2,43.3c0,0.2,0,0.5,0.1,0.9c0.1,0.3,0.3,0.6,0.5,0.9c0.2,0.3,0.6,0.5,1.1,0.7c0.5,0.2,1.1,0.3,1.9,0.3
c1,0,1.8-0.2,2.4-0.5c0.6-0.4,0.9-1,0.9-1.8c0-0.7-0.2-1.2-0.6-1.6c-0.4-0.4-0.9-0.7-1.5-1c-0.6-0.3-1.2-0.5-1.9-0.7
c-0.7-0.2-1.3-0.5-1.9-0.8c-0.6-0.3-1.1-0.7-1.5-1.2c-0.4-0.4-0.5-1.1-0.5-1.8c0-0.6,0.1-1.1,0.4-1.5c0.2-0.4,0.6-0.8,1-1.1
c0.4-0.3,0.9-0.5,1.4-0.7c0.5-0.2,1.1-0.2,1.7-0.2c0.5,0,1,0.1,1.6,0.2c0.5,0.1,1,0.3,1.4,0.6c0.4,0.2,0.7,0.6,1,1
c0.3,0.4,0.5,0.8,0.5,1.2h-1.3c-0.1-0.7-0.5-1.3-1-1.6c-0.6-0.4-1.3-0.5-2.1-0.5c-0.5,0-0.9,0.1-1.3,0.2c-0.4,0.1-0.7,0.3-1,0.5
c-0.2,0.2-0.5,0.4-0.6,0.7c-0.1,0.3-0.2,0.6-0.2,0.9c0,0.6,0.2,1,0.6,1.3c0.4,0.3,0.9,0.6,1.5,0.9c0.6,0.2,1.2,0.5,1.9,0.7
c0.7,0.2,1.4,0.5,1.9,0.9c0.6,0.3,1.1,0.8,1.5,1.3c0.4,0.5,0.6,1.1,0.6,1.9c0,0.6-0.1,1.1-0.4,1.6c-0.2,0.5-0.5,0.9-1,1.2
c-0.4,0.3-0.9,0.6-1.5,0.8c-0.6,0.2-1.2,0.2-1.9,0.2c-0.7,0-1.4-0.1-2-0.2c-0.6-0.2-1.2-0.4-1.6-0.7c-0.5-0.3-0.8-0.7-1.1-1.2
c-0.2-0.4-0.4-0.9-0.4-1.5H168.2z"/>
        </g>
        <rect stroke={color} x="197.7" y="27.8"  width="2.3" height="52.2" />
        <rect stroke={color}  width="2.3" height="52.2" />
    </g>
</svg>
  );
});



export default Logo