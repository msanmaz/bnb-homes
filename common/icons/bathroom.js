import React from 'react'

const Bathroom = ({
    size = "16",
    color = "currentColor",
    isDark,
    ...attributes
}) => {
  return (
 <svg xmlns="http://www.w3.org/2000/svg" width={size}
 height={size} viewBox="0 0 100 100" className="fill-current"><path d="M-1161.8-513.6h-.8v-8.8c0-4.8-4-8.8-8.8-8.8h-38.4c-4.8 0-8.8 4-8.8 8.8v8.8h-.8c-2.2 0-4 1.8-4 4v12.8c0 .4.4.8.8.8h3.2v4c0 .4.4.8.8.8h6.4c.4 0 .8-.4.8-.8v-4h41.6v4c0 .4.4.8.8.8h6.4c.4 0 .8-.4.8-.8v-4h3.2c.4 0 .8-.4.8-.8v-12.8c0-2.2-1.7-4-4-4zm-55.2-8.8c0-4 3.2-7.2 7.2-7.2h38.4c4 0 7.2 3.2 7.2 7.2v8.8h-4.8v-.8c0-5.6-5.3-5.6-8.8-5.6s-8.8 0-8.8 5.6v.8h-8v-.8c0-5.6-5.3-5.6-8.8-5.6-3.5 0-8.8 0-8.8 5.6v.8h-4.8v-8.8zm46.4 8v.8h-14.4v-.8c0-3.4 2.3-4 7.2-4s7.2.6 7.2 4zm-25.6 0v.8h-14.4v-.8c0-3.4 2.3-4 7.2-4s7.2.6 7.2 4zm-16.8 21.6h-4.8v-3.2h4.8v3.2zm49.6 0h-4.8v-3.2h4.8v3.2zm4-4.8H-1221.8v-12c0-1.3 1.1-2.4 2.4-2.4h57.6c1.3 0 2.4 1.1 2.4 2.4v12zM-1129.6 66.9h-2.3c0-.1.1-.1.1-.2V39.2c0-.3-.3-.6-.8-.6h-8.2v-4.1c0-.2-.1-.4-.3-.5-.2-.1-.4-.1-.7-.1l-12.2 3v-9.5c0-3-7.6-6.1-21.8-6.1s-21.8 3.1-21.8 6.1v9.4l-11.8-2.9c-.2-.1-.5 0-.7.1-.2.1-.3.3-.3.5v4.1h-8.2c-.4 0-.8.3-.8.6v27.5c0 .1 0 .1.1.2h-3.3c-.4 0-.8.3-.8.6s.3.6.8.6h22.2v1.8c0 .2.1.4.3.5.1.1.3.1.5.1h.2l10.9-2.3h7.1v14.5c0 .3.3.5.6.6l5.8.7H-1174.7l11.3-1.9v2.2c0 .3.3.5.6.6l5.8.7H-1156.7l15.7-2.6c.3-.1.6-.3.6-.6V68.1h10.8c.4 0 .8-.3.8-.6-.1-.3-.4-.6-.8-.6zm-12.8-31.6v27.6l-2.2.2c-.2-2.1-.7-4-2.2-4.9-.9-.6-2.2-.8-3.6-.6-.2 0-.3.1-.5.1v-3.6c0-.3-.2-.5-.6-.6l-2.6-.6V38.1l11.7-2.8zm-14.5 28.7h-1.4c0-1.8.4-4.3 2.3-4.6 1-.3 2.1 0 2.7.7-.4 1.1-.5 2.5-.5 3.6l-3.1.3zm-18-1.5h-1.4c0-1.8.4-4.3 2.3-4.6 1-.3 2.1 0 2.7.7-.4 1.1-.5 2.5-.5 3.6l-3.1.3zm4.7-1.5c.1.4.1.7.2 1.1h-.2c-.1-.4-.1-.7 0-1.1zm1.6 1c-.1-1.2-.4-2.4-1.1-3.5.3-.7.9-1.2 1.6-1.3 1-.2 1.8-.1 2.4.3 1.1.7 1.5 2.4 1.7 4.1l-4.6.4zm16.2-3.4c-.1.1-.2.3-.3.4-1-.7-2.4-.9-3.7-.6-1.5.2-2.5 1.2-3 2.8l-2.7.2v-8.9l9.7 2.1v4zm-9.7-7.3v-6.5c2.2.4 4.4.9 6.5 1.4v6.4l-6.5-1.3zm6.5-6.3c-2.1-.6-4.3-1-6.5-1.4V37c2.2.4 4.4.9 6.5 1.4V45zm-8-8.1v6.5c-2.4-.4-4.8-.6-7.2-.7v-6.6-.1c2.4.1 4.8.4 7.2.8.1 0 0 0 0 .1zm-8.6-.8v6.5c-1.2 0-2.4-.1-3.6 0h-3.6v-6.5-.1c1.2 0 2.4-.1 3.6-.1h3.6v.2zm-8.7 0v6.6c-2.4.1-4.8.4-7.2.7v-6.5-.1c2.4-.4 4.8-.7 7.2-.7 0-.1 0-.1 0 0zm-8.7 7.5c-2.2.4-4.4.8-6.5 1.4v-6.6c2.1-.6 4.3-1.1 6.5-1.4v6.6zm-6.5 2.7c2.1-.6 4.3-1.1 6.5-1.4v6.5l-6.5 1.4v-6.5zm8 4.9v-6.7c2.4-.4 4.8-.6 7.2-.7v6.7c-2.4.2-4.8.4-7.2.7zm8.7-7.4c1.2 0 2.4-.1 3.6 0h3.6v6.7c-2.4-.1-4.8-.1-7.2 0v-6.7zm8.7 0c2.4.1 4.8.4 7.2.7v6.7c-2.4-.3-4.8-.6-7.2-.7v-6.7zm8.2 20.2v-1.4l2.6-.2V64h-2.6zm11.9-.5c0-.5-.1-1.1-.3-1.6V59c.2-.2.5-.3.8-.3 1-.2 1.8-.1 2.4.3 1.1.7 1.5 2.4 1.7 4.1l-4.6.4zm-25.2-41c11.9 0 20.2 2.6 20.2 4.9v9.7c-6.5-1.7-13.3-2.6-20.2-2.5-6.9-.1-13.7.8-20.3 2.5v-9.7c0-2.3 8.4-4.9 20.3-4.9zm-42.1 44.2V39.8h7.5v26.9c0 .1 0 .1.1.2h-7.6v-.2zm9 .2c0-.1.1-.1.1-.2V35.3l11.3 2.7v15.1l-2.2.5c-.3.1-.6.3-.6.6V67h-8.6zm10-12.3l9.3-2v14.1c0 .1.1.2.2.3l-9.5 2V54.6zm10.8 12.3c0-.1.1-.1.1-.2V52.4c8.1-1.1 16.4-1.1 24.5 0v5.4c-.3-.5-.7-.9-1.2-1.2-.9-.6-2.2-.8-3.6-.6-1.1.2-1.8.7-2.3 1.4-1-.7-2.4-.9-3.7-.6-1.6.2-3.4 1.5-3.4 5.7h-2.8c-.4 0-.8.3-.8.6v3.8h-6.8zm8.2-3.2h4.3v18.9l-4.3-.5V63.7zm5.8 18.8V63.6l2.4-.2c.1.9.2 1.5.3 1.7.1.3.4.5.7.5h.1c.4-.1.7-.4.6-.7-.1-.4-.2-1-.2-1.6l6.2-.5v1.6c0 .3.3.5.6.6v15.8l-10.7 1.7zm12.2-17.3h4.3v18.9l-4.3-.5V65.2zm20 16.5l-14.2 2.4V65.2l2.4-.2c.1.9.2 1.5.3 1.7.1.3.4.5.7.5h.1c.4-.1.7-.4.6-.7-.1-.4-.2-1-.2-1.6l6.2-.5V66c0 .3.3.6.8.6s.8-.3.8-.6v-1.7l2.6-.2v17.6zm1.3-18.8c-.1-.1-.2-.1-.3-.1v-23h7.5v26.9c0 .1 0 .1.1.2h-7.1v-3.6c0-.1 0-.3-.2-.4zM-1145.8 549.9h-3.1v-15.2c0-3.8-3.1-6.9-6.9-6.9h-40.8c-3.8 0-6.9 3.1-6.9 6.9v15.2h-3.1c-2.4 0-4.4 2-4.4 4.4v4c0 2.4 2 4.4 4.4 4.4h3.1v16.1c0 3.8 3.1 6.9 6.9 6.9h1.3v1.2c0 2.8 2.3 5 5 5h.1c2.8 0 5-2.3 5-5v-1.2h18.8v1.2c0 2.8 2.3 5 5 5h.1c2.8 0 5-2.3 5-5v-1.2h.4c3.8 0 6.9-3.1 6.9-6.9v-16.1h3.1c2.4 0 4.4-2 4.4-4.4v-4c.1-2.5-1.9-4.4-4.3-4.4zm-57.6 11.2h-3.1c-1.6 0-2.9-1.3-2.9-2.9v-4c0-1.6 1.3-2.9 2.9-2.9h3.1v9.8zm16.9 25.7c0 2-1.6 3.6-3.6 3.6h-.1c-2 0-3.6-1.6-3.6-3.6v-1.2h7.3v1.2zm16.2-2.7h-12v-3.4h12v3.4zm12.7 2.7c0 2-1.6 3.6-3.6 3.6h-.1c-2 0-3.6-1.6-3.6-3.6v-1.2h7.3v1.2zm7.3-36.2v28.1c0 3-2.4 5.4-5.4 5.4h-13.1v-3.8c0-.5-.4-1-1-1h-12.9c-.5 0-1 .4-1 1v3.8h-12.8c-3 0-5.4-2.4-5.4-5.4v-44c0-3 2.4-5.4 5.4-5.4h40.8c3 0 5.4 2.4 5.4 5.4v15.9zm7.4 7.6c0 1.6-1.3 2.9-2.9 2.9h-3.1v-9.8h3.1c1.6 0 2.9 1.3 2.9 2.9v4z" /><path d="M-1188.6 570.8h-9.1c-.6 0-1.1.5-1.1 1.1v5.6c0 .6.5 1.1 1.1 1.1h9.1c.6 0 1.1-.5 1.1-1.1v-5.6c0-.6-.5-1.1-1.1-1.1zm-.4 6.4h-8.4v-4.9h8.4v4.9zM-1154.4 570.8h-9.1c-.6 0-1.1.5-1.1 1.1v5.6c0 .6.5 1.1 1.1 1.1h9.1c.6 0 1.1-.5 1.1-1.1v-5.6c0-.6-.5-1.1-1.1-1.1zm-.4 6.4h-8.4v-4.9h8.4v4.9zM-1168.8 575.5h-14.8c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h14.8c.4 0 .7-.3.7-.7.1-.4-.3-.7-.7-.7zM-1168.8 571.7h-14.8c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h14.8c.4 0 .7-.3.7-.7.1-.4-.3-.7-.7-.7zM-1197.4 566.3h42c.8 0 1.5-.7 1.5-1.5v-24.5c0-.8-.7-1.5-1.5-1.5h-42c-.8 0-1.5.7-1.5 1.5v24.5c0 .9.7 1.5 1.5 1.5zm0-25.9h42v24.5h-42v-24.5zM-1203.5-395.8h18.7v-12.4h-18.7v12.4zm1.4-11.1h15.9v9.7h-15.9v-9.7z" /><path d="M-1206.1-392.1H-1164.9v-25h-12.1v-4c0-1.8 1.6-3.2 3.5-3.2s3.5 1.4 3.5 3.2c0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-2.5-2.2-4.6-4.8-4.6-2.7 0-4.8 2.1-4.8 4.6v4h-5.6c0-.5-.5-1-1-1h-6.7c-.6 0-1 .4-1 1h-2.8c0-.5-.5-1-1-1h-6.7c-.6 0-1 .4-1 1h-19.1v25.1h17zm23.9-1.3h-23.9v-17.2h23.9v17.2zm1.4-22.4h14.5v7h-14.5v-7zm0 22.4v-14h14.5v14h-14.5zm-25.3-22.4h23.9v3.8h-23.9v-3.8zm-15.9 22.4v-22.3h14.5v22.4h-14.5zM-1206.1-454.3h-17.2v11.5h17.2v-11.5zm-1.4 10.1h-14.5v-8.8h14.5v8.8zM-1182.2-442.8h17.2v-11.5h-17.2v11.5zm1.4-10.1h14.5v8.8h-14.5v-8.8zM-1189.1-444.9v-9.3h-10.1v9.3l-6.9 7.5v5.4h23.9v-5.4l-6.9-7.5zm-1.4-8v7.6h-7.4v-7.6h7.4zm-7.7 8.9h8.2l5.6 6.1h-19.4l5.6-6.1zm-6.5 10.6v-3.1h21.1v3.1h-21.1zM11.3 90H82v-2.7H52.7v-76c0-.7-.6-1.3-1.3-1.3h-40c-.7 0-1.3.6-1.3 1.3v77.3c-.1.8.5 1.4 1.2 1.4zm1.4-77.3H30v4h-6.7c-.7 0-1.3.6-1.3 1.3v5.3c0 .7.6 1.3 1.3 1.3h16c.7 0 1.3-.6 1.3-1.3V18c0-.7-.6-1.3-1.3-1.3h-6.7v-4H50v74.7H32.7V62h2.7v-2.7h-2.7v-4H30v32H12.7V12.7zM38 19.3V22H24.7v-2.7H38zM86 87.3h4V90h-4z" /><path d="M24.7 27.3h2.7v4h-2.7zM24.7 34h2.7v2.7h-2.7zM30 27.3h2.7v8H30zM30 38h2.7v2.7H30zM35.3 27.3H38v4h-2.7zM35.3 34H38v2.7h-2.7zM88.7 54h-4.3c1.1-1.5 1.7-3.4 1.7-5.3 0-.7-.6-1.3-1.3-1.3h-24c-.7 0-1.3.6-1.3 1.3 0 1.9.6 3.8 1.7 5.3h-4.3c-.7 0-1.3.6-1.3 1.3v16c0 .7.6 1.3 1.3 1.3h32c.7 0 1.3-.6 1.3-1.3v-16c-.2-.7-.8-1.3-1.5-1.3zm-26.6-4h21.1c-.3 1.6-1.2 3-2.6 4H64.7c-1.3-1-2.2-2.4-2.6-4zm25.2 6.7v2.7H58v-2.7h29.3zM58 70v-8h29.3v8H58z" /><path d="M68.7 64.7H78v2.7h-9.3zM71.3 41.9v2.7H74v-2.7c8.2-.7 14.7-7.6 14.7-15.9 0-8.8-7.2-16-16-16s-16 7.2-16 16c0 8.4 6.4 15.3 14.6 15.9zm1.4-29.2c1.8 0 3.5.4 5.1 1l-10 10 1.9 1.9L80.2 15c3.5 2.4 5.8 6.4 5.8 11 0 7.4-6 13.3-13.3 13.3-7.4 0-13.3-6-13.3-13.3s5.9-13.3 13.3-13.3z" /><path d="M66.38 33.115L78.4 21.094l1.909 1.91-12.02 12.02zM62.38 29.02l2.686-2.687 1.91 1.91-2.687 2.686z" /><g><path d="M-1199-293.3c-.2 0-.4-.1-.5-.2s-.2-.3-.2-.5v-6.7h-4.7v3.5h1.1c.4 0 .8.3.8.8 0 .4-.3.7-.7.7h-1.1v.5c0 .4-.3.7-.7.8-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.5v-.5h-1.1c-.4 0-.8-.3-.8-.8 0-.4.3-.7.7-.7h1.1v-3.5h-4.7v6.7c0 .4-.3.8-.7.8-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.5v-6.7h-5.5c-3.2 0-5.7-2.6-5.7-5.7v-42.3c0-3.2 2.6-5.7 5.7-5.7h24.9c3.2 0 5.7 2.6 5.7 5.7V-306.2c0 3.2-2.6 5.7-5.7 5.7h-5.5v6.7c-.2.2-.5.5-1 .5zm-22.9-13.2c0 2.3 1.9 4.2 4.2 4.2h24.9c2.3 0 4.2-1.9 4.2-4.2v-4.2h-33.4v4.2zm0-5.7h33.4v-30.9h-33.4v30.9zm4.3-40.8c-2.3 0-4.2 1.9-4.2 4.2v4.2h33.4v-4.2c0-2.3-1.9-4.2-4.2-4.2h-25z" /><path d="M-1208.6-320.7c-.1 0-.2 0-.3-.1-.2-.1-.3-.2-.4-.4-.1-.2-.1-.4 0-.6.1-.2.1-.3.1-.5l.5-1.7-1.3 1.2-.3.3-.2.2c-.5.3-1.1.5-1.7.5-.3 0-.6 0-.9-.1-1.1-.3-1.9-1.2-2.1-2.4-.2-1.2.5-2.5 1.8-3.5s1.8-2.3 1.7-4.1v-.4l-.2-1.5-.8 1.3c-.4.7-.9 1.2-1.4 1.7-1.2 1-2.3 1.4-3.2 1.8l-.3.1c-.9.3-1.6.6-2.4 1.1-.7.5-1.3 1.4-1.6 2.3-.3.8-.4 1.7-.3 2.2v.1c0 .3 0 .5-.1.6-.1.2-.3.3-.5.3h-.2c-.3-.1-.5-.3-.5-.6-.1-.9 0-2 .4-3 .3-.9.9-2.2 2.2-3.1 1-.7 1.9-1 2.7-1.3l.3-.1c1-.3 1.8-.7 2.7-1.5 1.6-1.3 2.1-4.4 2.1-4.5 0-.4.3-.7.7-.7.3 0 .5.1.7.4 0 0 .7 1.3 1.1 2.9v.1c.1.2.1.5.1.7.2 1.3.4 4.5-2.2 6.5-.9.7-1.3 1.4-1.2 2.1.1.5.5 1 1 1.1.2 0 .4.1.6.1.3 0 .6-.1.9-.3.5-.3 1.2-1 1.8-2.6 0-.1.1-.2.1-.2.1-.2.3-.2.5-.2s.4.1.5.2c0 0 .5.6.8 1.4.2.6.4 2-.4 3.8-.2.3-.5.4-.8.4zM-1167.8-293.3c-5.2 0-9.5-4.2-9.5-9.5 0-4.8 3.6-8.8 8.3-9.4l.5-.1v-1.8c0-.2.1-.4.2-.5s.3-.2.5-.2.4.1.5.2c.1.1.2.3.2.5v1.7l.4.1c4.7.6 8.3 4.6 8.3 9.4 0 5.4-4.2 9.6-9.4 9.6zm0-17.4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-1.3 12.5c-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.3-.5 0-.2.1-.4.2-.5l2.1-2.5h-2.1c-.2 0-.3-.1-.5-.2-.3-.3-.4-.7-.1-1l3.1-3.7c.1-.2.3-.3.6-.3.2 0 .4.1.5.2.2.1.2.3.3.5 0 .2 0 .4-.2.5l-2.1 2.5h2.1c.2 0 .3.1.5.2.3.3.4.7.1 1l-3.1 3.7c-.2.2-.4.3-.6.3zm1.3-18.7c-.4 0-.7-.3-.7-.8v-1.3c0-.4.3-.8.7-.8.2 0 .4.1.5.2.1.1.2.3.2.5v1.3c0 .6-.3.9-.7.9zm-1.3-5c-.2 0-.4-.1-.5-.2s-.2-.3-.2-.5c0-.4.3-.7.7-.7h1.3c.4 0 .8.3.8.8 0 .4-.3.7-.7.7l-1.4-.1zm-5 0c-.2 0-.4-.1-.5-.2s-.2-.3-.2-.5c0-.4.3-.7.7-.7h1.3c.2 0 .4.1.6.2s.2.3.2.5c0 .4-.3.7-.7.7h-1.4zm-5 0c-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.5 0-.4.3-.7.7-.7h1.3c.4 0 .8.3.8.8 0 .4-.3.7-.7.7l-1.4-.1zM-1184.1-321.9c-.2 0-.4-.1-.5-.2s-.2-.3-.2-.5c0-.4.3-.7.7-.7h1.3c.2 0 .4.1.6.2s.2.3.2.5c0 .4-.3.7-.7.7h-1.4z" /></g><g><path d="M-1177.5-95.2h-42.9c-1.6 0-2.9-1.3-2.9-2.9v-47.2c0-1.6 1.3-2.9 2.9-2.9h42.9c1.6 0 2.9 1.3 2.9 2.9v47.2c0 1.6-1.3 2.9-2.9 2.9zm-43-51.5c-.8 0-1.4.6-1.4 1.4v47.2c0 .8.6 1.4 1.4 1.4h42.9c.8 0 1.4-.6 1.4-1.4v-47.2c0-.8-.6-1.4-1.4-1.4h-42.9zM-1192.6-151h-12.9c-1.6 0-2.9-1.3-2.9-2.9v-2.1c0-1.6 1.3-2.9 2.9-2.9h12.9c1.6 0 2.9 1.3 2.9 2.9v2.1c0 1.6-1.3 2.9-2.9 2.9zm-12.8-6.5c-.8 0-1.4.6-1.4 1.4v2.1c0 .8.6 1.4 1.4 1.4h12.9c.8 0 1.4-.6 1.4-1.4v-2.1c0-.8-.6-1.4-1.4-1.4h-12.9z" /><path d="M-1199.7-147.5h1.5V-96h-1.5zM-1161.3-124.1h-6.6c-.7 0-1.2-.4-1.5-.9-.3-.6-.3-1.2 0-1.8l3.3-6.4c.3-.6.9-1 1.5-1s1.3.4 1.6 1l3.3 6.4c.3.5.3 1.2 0 1.7-.4.6-1 .9-1.6 1zm-3.3-8.5c-.1 0-.2 0-.2.1l-3.3 6.4c-.1.1-.1.2 0 .3.1.1.2.2.3.2h6.5c.1 0 .2-.1.2-.2.1-.1.1-.2 0-.3l-3.3-6.4c-.1-.1-.2-.1-.2-.1zM-1164.6-109.2c-.7 0-1.3-.4-1.5-1l-3.3-6.4c-.3-.5-.3-1.2 0-1.7s.9-.9 1.5-.9h6.6c.7 0 1.2.4 1.5.9.3.6.3 1.2 0 1.8l-3.3 6.4c-.3.6-.9.9-1.5.9zm-3.3-8.5c-.1 0-.2.1-.2.2-.1.1-.1.2 0 .3l3.3 6.4c.1.2.3.2.4 0l3.3-6.4c.1-.1.1-.2 0-.3-.1-.1-.2-.2-.3-.2h-6.5z" /></g><g><path d="M-886.9-107.3h-5.6c-.5 0-1-.4-1-1v-35.1c0-.5.4-1 1-1h14c6.3 0 11.5 5.2 11.5 11.5s-5.2 11.5-11.5 11.5h-7.4v13.1c0 .6-.5 1-1 1zm-4.7-2h3.7v-13.1c0-.5.4-1 1-1h8.4c5.3 0 9.5-4.3 9.5-9.5 0-5.3-4.3-9.5-9.5-9.5h-13.1v33.1z" /><path d="M-878.5-126.9h-8.4c-.5 0-1-.4-1-1v-9.8c0-.5.4-1 1-1h8.4c3.3 0 5.9 2.6 5.9 5.9 0 3.2-2.7 5.9-5.9 5.9zm-7.4-2h7.4c2.2 0 3.9-1.8 3.9-3.9 0-2.2-1.8-3.9-3.9-3.9h-7.4v7.8z" /><path d="M-881.9-95.2c-8.5 0-16.5-3.3-22.5-9.3-6-6-9.3-14-9.3-22.5s3.3-16.5 9.3-22.5c6-6 14-9.3 22.5-9.3s16.5 3.3 22.5 9.3c6 6 9.3 14 9.3 22.5s-3.3 16.5-9.3 22.5c-6 6-14 9.3-22.5 9.3zm0-61.8c-16.5 0-29.9 13.4-29.9 29.9s13.4 29.9 29.9 29.9 29.9-13.4 29.9-29.9-13.4-29.9-29.9-29.9z" /></g><g><path d="M-902.5-366.4h41.3v33h1.8v-33.9c0-.5-.4-.9-.9-.9h-43.1c-.5 0-.9.4-.9.9v33.9h1.8v-33z" /><path d="M-864-333.4v-29.3c0-.5-.4-.9-.9-.9h-33.8c-.5 0-.9.4-.9.9v29.2h1.8v-28.2h15v28.3h1.8v-28.3h15v28.3h2z" /><path d="M-893.2-358.6c.4-.4.4-1 0-1.3-.4-.4-1-.4-1.3 0l-1.5 1.5c-.4.4-.4 1 0 1.3.2.2.4.3.7.3.3 0 .5-.1.7-.3l1.4-1.5zM-894.2-352.8c.3 0 .5-.1.7-.3l4.3-4.3c.4-.4.4-1 0-1.3-.4-.3-1-.4-1.3 0l-4.3 4.3c-.4.4-.4 1 0 1.3.1.2.4.3.6.3zM-853.4-307.8h-2.9v-20.8h2.9c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-57c-.5 0-.9.4-.9.9s.4.9.9.9h2.9v20.8h-2.9c-.5 0-.9.4-.9.9s.4.9.9.9h57c.5 0 .9-.4.9-.9s-.3-.9-.9-.9zm-4.8 0h-5.2v-20.8h5.2v20.8zm-33.3-20.8h5.2v20.8h-5.2v-20.8zm-1.8 20.8h-5.2v-20.8h5.2v20.8zm8.9-20.8h5.2v20.8h-5.2v-20.8zm7 0h5.2v20.8h-5.2v-20.8zm7 0h5.2v20.8h-5.2v-20.8zm-35.2 0h5.2v20.8h-5.2v-20.8z" /></g><g><path d="M-929.6 120.8v65.5h65.5v-65.5h-65.5zm64 1.5v38.1c-.4.3-.9.4-1.7.4-2.9 0-3-2.8-3-3 0-.2-.1-.3-.3-.3-.2 0-.3.1-.3.3 0 .1-.1 3-3 3-2.1 0-2.7-1.4-2.9-2.3.1-.4.1-.6.1-.6 0-.2-.1-.3-.3-.3h-.1-.1c-.2 0-.3.1-.3.3 0 .1-.1 2.9-2.9 3-2.9 0-2.9-2.8-2.9-3 0-.2-.1-.3-.3-.3h-.1-.1c-.2 0-.3.1-.3.3 0 .1 0 2.9-2.9 2.9s-2.9-2.8-2.9-2.9c0-.2-.1-.3-.3-.3-.1 0-.2 0-.2.1s-.1.1-.1.2-.1 1.7-1.3 2.5c-.4.3-1 .4-1.7.4-2.8 0-2.9-2.8-2.9-3 0-.2-.2-.3-.3-.3-.2 0-.3.1-.3.3 0 .1 0 1.6-1.1 2.4-.4.3-1 .6-1.8.6-.5 0-1-.1-1.3-.3-1.5-.7-1.6-2.5-1.6-2.7 0-.1 0-.1-.1-.1v-.1c-.1-.1-.1-.1-.2-.1-.2 0-.3.1-.3.3 0 .1-.1 2.9-3.1 3h-.4c-2.4-.3-2.4-2.8-2.4-2.9 0-.2-.1-.3-.3-.3-.2 0-.3.1-.3.3 0 .1-.2 2.9-2.9 3-2.7-.1-2.8-2.8-2.8-3 0-.2-.2-.3-.3-.3h-.1-.1c-.2 0-.3.1-.3.3 0 0 0 .3.1.7-.2.9-.9 2.3-3 2.3-.9 0-1.6-.3-2.1-.8-.8-.9-.8-2.2-.8-2.2 0-.2-.1-.3-.3-.3-.2 0-.3.1-.3.3 0 .1-.2 3-3 3-.6 0-1.1-.2-1.5-.4v-38.2h61.7zm-62.5 62.5v-23.6c.4.2.9.3 1.5.3 2 0 2.9-1.1 3.3-2.1.2.4.4.8.7 1.2.6.6 1.5 1 2.6 1 1.9 0 2.9-1 3.3-1.9.4.9 1.3 1.9 3.2 1.9h.2c1.9 0 2.7-1 3.2-2 .1.3.3.7.6 1 .6.6 1.5 1 2.6 1h.2c2 0 2.9-1.1 3.3-2.1.3.7.8 1.4 1.7 1.8.4.2 1 .3 1.6.3 1 0 1.7-.3 2.2-.7.5-.4.8-.9 1-1.4.4 1 1.3 2.1 3.3 2.1.9 0 1.5-.2 2-.6.6-.4 1-1 1.3-1.6.4 1 1.3 2.1 3.3 2.1 2 0 2.9-1.1 3.3-2 .4 1 1.3 2 3.2 2h.2c1.9 0 2.8-1 3.3-1.9.4.9 1.3 1.9 3.2 1.9 2 0 2.9-1.1 3.3-2.1.4 1 1.3 2.1 3.3 2.1.7 0 1.2-.1 1.7-.3v23.6h-62.6z" /><path d="M-907.6 136c1.1 0 2.1-.5 2.8-1.4 1.2 1.2 3.1 1.7 4.8 1.2.6.9 1.7 1.5 2.8 1.5 1.8 0 3.3-1.5 3.3-3.3 0-1.5-1-2.8-2.5-3.2-.1-2.6-2.3-4.8-5-4.8-2.2 0-4.1 1.4-4.7 3.4-.5-.2-1-.3-1.5-.3-1.9 0-3.4 1.5-3.4 3.4-.1 2 1.5 3.5 3.4 3.5zm0-6.2c.5 0 1.1.2 1.5.5.1.1.2.1.3 0 .1 0 .2-.1.2-.2.5-2 2.2-3.3 4.2-3.3 2.4 0 4.3 1.9 4.3 4.3 0 .2.1.3.3.3 1.3.2 2.2 1.3 2.2 2.6 0 1.5-1.2 2.7-2.7 2.7-1 0-1.9-.5-2.3-1.4-.1-.1-.2-.2-.3-.2h-.1c-1.7.6-3.5 0-4.6-1.3-.1-.1-.2-.1-.3-.1-.1 0-.2.1-.3.2-.5.9-1.4 1.4-2.4 1.4-1.5 0-2.8-1.2-2.8-2.8s1.2-2.7 2.8-2.7zM-873.4 174.5c0-.1-.1-.3-.2-.3-.1-.1-.3 0-.4.1l-2.6 2.9c-.6-.5-2.2-1.6-4.2-2.1l-.1-1.7c0-.1-.1-.2-.2-.3-.1 0-.2 0-.3.1l-1.9 1.6c-.3 0-.6 0-.9.1h-.1c-3.3.4-5.7 2.5-5.8 2.6-.1.1-.1.2-.1.2 0 .1 0 .2.1.2.1.1 3.1 2.7 6.9 2.7 3.3 0 6-2 6.7-2.5l3 2.9c.1.1.1.1.2.1h.2c.1-.1.2-.2.2-.4l-.7-3 .2-3.2zm-8.2-.4l.1.8c-.3-.1-.6-.1-.9-.1l.8-.7zm-3.1 5.7c-2.2-.4-4-1.6-4.7-2.1.7-.5 2.6-1.8 4.9-2.2.2.6.4 1.2.4 1.9 0 .9-.2 1.7-.6 2.4zm1.5.1h-.8c.4-.7.6-1.6.6-2.5 0-.7-.1-1.4-.3-2h.6c2.9 0 5.3 1.6 6.2 2.3-1 .6-3.5 2.2-6.3 2.2zm7.1-2.3l1.9-2.2-.1 2.2v.1l.5 2-2.3-2.1zM-893.4 167c0-.1-.1-.3-.2-.3-.1-.1-.3 0-.4.1l-2.6 2.9c-.6-.5-2.2-1.6-4.2-2.1l-.1-1.7c0-.1-.1-.2-.2-.3-.1 0-.2 0-.3.1l-1.9 1.6c-.3 0-.6 0-.9.1h-.1c-3.3.4-5.7 2.5-5.8 2.6-.1.1-.1.2-.1.2 0 .1 0 .2.1.2.1.1 3.1 2.7 6.9 2.7 3.3 0 6-2 6.7-2.5l3 2.9c.1.1.1.1.2.1h.2c.1-.1.2-.2.2-.4l-.7-3 .2-3.2zm-8.1-.4l.1.8c-.3-.1-.6-.1-.9-.1l.8-.7zm-3.2 5.7c-2.2-.4-4-1.6-4.7-2.1.7-.5 2.6-1.8 4.9-2.2.2.6.4 1.2.4 1.9 0 .9-.2 1.8-.6 2.4zm1.5.2h-.8c.4-.7.6-1.6.6-2.5 0-.7-.1-1.4-.3-2h.6c2.9 0 5.3 1.6 6.2 2.3-1 .5-3.4 2.2-6.3 2.2zm7.2-2.4l1.9-2.2-.1 2.2v.1l.5 2-2.3-2.1zM-876.5 138.9c3.5 0 6.4-2.9 6.4-6.4 0-3.5-2.9-6.4-6.4-6.4-3.5 0-6.4 2.9-6.4 6.4 0 3.5 2.8 6.4 6.4 6.4zm0-12.1c3.2 0 5.7 2.6 5.7 5.7s-2.6 5.7-5.7 5.7c-3.2 0-5.7-2.6-5.7-5.7s2.5-5.7 5.7-5.7zM-906.4 143.8c-.2.1-.3.3-.2.4.1.1.2.2.3.2h.1l21.6-8.6c.2-.1.3-.3.2-.4-.1-.2-.3-.3-.4-.2l-21.6 8.6zM-877.5 140.7c-.2-.1-.4 0-.4.2l-3.3 10c-.1.2 0 .4.2.4h.1c.1 0 .3-.1.3-.2l3.3-10c0-.1-.1-.3-.2-.4zM-882.8 138.9l-12 10.7c-.1.1-.1.3 0 .5.1.1.2.1.2.1.1 0 .2 0 .2-.1l12-10.7c.1-.1.1-.3 0-.5-.1-.1-.3-.1-.4 0zM-893.3 130l8.3.7c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.4l-8.3-.7c-.2 0-.3.1-.4.3s.2.4.4.4zM-873.3 140.2c-.2.1-.3.2-.2.4l2.7 9c0 .1.2.2.3.2h.1c.2-.1.3-.2.2-.4l-2.7-9c-.1-.2-.3-.3-.4-.2z" /></g><g><path d="M-1217.6 276.7v-8.3h83v8.3h-83zm1.8-1.8h79.4v-4.6h-79.4v4.6zM-1212.7 266.5v-.9c0-15.7 10-29.7 24.8-34.8 1.2-.5 2.4-.8 3.7-1.1l.8-.2v-1.4c0-4 3.3-7.3 7.3-7.3s7.3 3.3 7.3 7.3v1.4l.8.2c1.1.2 2.3.6 3.7 1.1 14.8 5.1 24.8 19 24.9 34.8v.9h-73.3zm36.5-35.7c-2 0-4 .2-5.9.5-2.1.3-3.8.8-5.3 1.4-13.5 4.6-22.7 16.8-23.5 31.1l-.1 1.1h69.6l-.1-1.1c-.7-14.3-10-26.5-23.6-31.1-1.5-.6-3.2-1-5.3-1.3-1.8-.4-3.8-.6-5.8-.6zm1.8-1.8h.5c.2 0 .5.1.7.1h.8c.2 0 .5.1.8.1h1v-1c0-3-2.5-5.5-5.5-5.5s-5.5 2.5-5.5 5.5v1h1c.2 0 .4 0 .6-.1h1.1c.4-.1.7-.1 1.2-.1h3.3z" /></g><g><path d="M-873.9 261.7c-4.2 0-7.7-3.4-7.7-7.7 0-1.4.4-2.7 1.1-3.9.2-.3.4-.4.7-.4.1 0 .3 0 .4.1.2.1.3.3.4.5.1.2 0 .4-.1.6-.5.9-.8 2-.8 3.1 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.5-1.5-4.7-3.8-5.6l-1.4-.5v5.9c0 .5-.4.8-.8.8s-.8-.4-.8-.8v-6.6c0-.5.4-.8.8-.8 4.2 0 7.7 3.4 7.7 7.7 0 4.1-3.4 7.5-7.7 7.6zM-882.7 267.8c-.5 0-.8-.4-.8-.8s.4-.8.8-.8h4.3c.5 0 .8.4.8.8s-.4.8-.8.8h-4.3z" /><path d="M-928.8 280.6c-.5 0-.8-.4-.8-.8v-6.5c0-.5.4-.8.8-.8h7.7v-5.3l-.7-.2c-4.7-1.4-7.8-5.7-7.8-10.6v-14c0-.5.4-.8.8-.8h33c.5 0 .8.4.8.8v14c0 4.9-3.1 9.1-7.8 10.6l-.7.2v5.3h5.3c2.4 0 4.6-.9 6.3-2.6 1.7-1.7 2.6-3.9 2.6-6.3v-35h-10.6v4.5c0 .5-.4.8-.8.8h-23.2c-.5 0-.8-.4-.8-.8v-4.5h-4.1c-.5 0-.8-.4-.8-.8V225c0-2 .8-4 2.3-5.5 1.4-1.4 3.4-2.3 5.5-2.3h48c2 0 4 .8 5.5 2.3 1.4 1.4 2.3 3.4 2.3 5.5v2.8c0 .5-.4.8-.8.8h-4.6v12.2c0 .5-.4.8-.8.8s-.8-.4-.8-.8v-12.2h-5.1c-.5 0-.8-.4-.8-.8s.4-.8.8-.8h10.5v-2c0-1.6-.6-3.1-1.8-4.3-1.1-1.2-2.7-1.8-4.3-1.8h-48c-2.6 0-4.9 1.7-5.7 4-.2.7-.4 1.4-.4 2v2h39.5c.5 0 .8.4.8.8v35.8c0 2.8-1.1 5.5-3.1 7.5s-4.7 3.1-7.5 3.1H-928v4.9h60.2v-6.6c-.1-3.4-2.5-4.6-4.6-4.6h-.3c-.4 0-.7-.4-.7-.8s.4-.8.8-.8h.3c1.6 0 3.2.7 4.3 1.8 1.2 1.2 1.8 2.7 1.8 4.4v7.4c0 .5-.4.8-.8.8h-61.8zm9.3-8.2h14.3v-5h-14.3v5zm-8.5-16.1c0 4 2.5 7.5 6.2 8.8 1 .4 2.1.6 3.2.6h12.5c5.2 0 9.4-4.2 9.4-9.4v-6.7H-928v6.7zm0-8.3h31.3v-4.9H-928v4.9zm4.9-15.8h21.5v-3.7h-21.5v3.7z" /><path d="M-881.2 235.6c-.5 0-.8-.4-.8-.8s.4-.8.8-.8h1.5c.5 0 .8.4.8.8s-.4.8-.8.8h-1.5zM-881.2 241.5c-.5 0-.8-.4-.8-.8s.4-.8.8-.8h1.5c.5 0 .8.4.8.8s-.4.8-.8.8h-1.5z" /></g><g><path d="M-988.2 553.6c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h33.1v-12.5h-33.1c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h33.7c.3 0 .6.3.6.6V553c0 .3-.3.6-.6.6h-33.7zM-988.2 561.4c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h90.6c.3 0 .6.3.6.6s-.3.6-.6.6h-90.6zM-947.5 553.6c-.3 0-.6-.3-.6-.6v-13.7c0-.3.3-.6.6-.6h11.4c.3 0 .6.3.6.6V553c0 .3-.3.6-.6.6h-11.4zm.6-1.2h10.3v-12.5h-10.3v12.5z" /><path d="M-988.2 588.8c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3h14.2l-.7-1.7c-.3-.7-.4-1.4-.4-2.1v-1.2h-6c-.3 0-.6-.3-.6-.6v-5.4h-6.4c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3h91.4c1.6 0 3.3-.3 4.8-.9 4.1-1.5 6.8-5.5 6.8-9.8 0-2.9-1.2-5.7-3.3-7.7l-.6-.6h-40c-.3 0-.6-.3-.6-.6v-13.7c0-.3.3-.6.6-.6h24.7l-3.5-2.3c-3-1.9-6.4-2.9-10-2.9h-70.3c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3h70.3c5.4 0 10.5 2 14.4 5.7l16.8 15.7c2.6 2.5 4.2 6 4.2 9.6 0 5.5-3.4 10.4-8.6 12.3-1.5.6-3.1.9-4.8 1l-1.2.1v5.4c0 .3-.3.6-.6.6h-6v1.2c0 .7-.2 1.5-.4 2.1l-.7 1.7h20.9c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3h-104.4zm74-6.4c.1 2.5 2.2 4.5 4.7 4.5s4.6-2 4.7-4.5l.1-1.3h-9.5v1.3zm-10.5 0c.1 2.5 2.2 4.5 4.7 4.5s4.6-2 4.7-4.5l.1-1.3h-9.5v1.3zm-38.8 0c.1 2.5 2.2 4.5 4.7 4.5s4.6-2 4.7-4.5l.1-1.3h-9.5v1.3zm-10.5 0c.1 2.5 2.2 4.5 4.7 4.5s4.6-2 4.7-4.5l.1-1.3h-9.5v1.3zm21.1-.1c0 .7-.2 1.5-.4 2.1l-.7 1.7h29.3l-.7-1.7c-.3-.7-.4-1.4-.4-2.1v-1.2h-6c-.3 0-.6-.3-.6-.6v-5.4h-13.9v5.4c0 .3-.3.6-.6.6h-6v1.2zm21.6-2.4h33.1v-5.5h-33.1v5.5zm-49.3 0h33.1v-5.5h-33.1v5.5zm52.1-27.5h38.1l-13.4-12.5h-24.7v12.5z" /></g><g><path d="M-1198.7 653.3c-2.6-.5-4.6-2.5-5.1-5.1l-.1-.3h-2.2c-3 0-5.4-2.4-5.4-5.4v-23.6c0-3 2.4-5.4 5.4-5.4h51.1c1.3 0 2.6.5 3.5 1.4 1.4 1.3 2.7 2.7 3.9 4.3.1.1.3.2.4.5 1 1.4 2 2.9 2.8 4.5l.1.2h5.6c.3 0 .6.2.7.5l1.9 4.3c.1.2.1.4 0 .6-.1.2-.2.4-.4.5-.1.1-.2.1-.3.1-.3 0-.6-.2-.7-.5l-1.7-3.9h-4.2l.2.5c2.2 5 3.5 10.3 3.9 15.8.2 2.9-2 5.5-5 5.6h-6.7l-.1.3c-.6 3-3.3 5.3-6.4 5.3-.4 0-.9 0-1.3-.1-2.6-.5-4.6-2.5-5.1-5.1l-.1-.3h-26.8l-.1.3c-.6 3-3.3 5.3-6.4 5.3-.5-.1-1-.2-1.4-.3zm-3.6-6.2c0 2.7 2.2 4.9 4.8 5h.1c2.7 0 5-2.2 5-5 0-2.7-2.2-5-5-5-2.7 0-4.9 2.3-4.9 5zm39.7 0c0 2.7 2.1 4.9 4.8 5h.2c2.7 0 5-2.2 5-5 0-2.7-2.2-5-5-5s-5 2.3-5 5zm-43.2-.8h2l.1-.3c.6-3 3.3-5.3 6.4-5.3.4 0 .9 0 1.3.1 2.6.5 4.6 2.5 5.1 5.1l.1.3h26.8l.1-.3c.6-3 3.3-5.3 6.4-5.3.4 0 .9 0 1.3.1 2.6.5 4.6 2.5 5.1 5.1l.1.3h6.4c1 0 2-.4 2.7-1.2.7-.7 1.1-1.7 1-2.8-.1-1.1-.2-2.2-.4-3.4v-.3h-.3c-13.2-.3-16-5.8-16.6-8.2l-.1-.3h-51.6v12.3c0 1 .4 2 1.1 2.7s1.7 1.1 2.7 1.1l.3.3zm57.3-25.7h-16.1v8.1h5.9c.9 0 1.7.6 1.9 1.5.4 1.5 2.6 6.6 14.6 7h.4l-.1-.4c-.7-3.9-1.9-7.6-3.7-11.1l-.1-.1c-.8-1.6-1.8-3.2-2.8-4.7v-.3zm-52.1 0h-9.3v8.1h9.4l-.1-8.1zm11.5 0h-9.9v8.1h9.8l.1-8.1zm11.5 0h-9.9v8.1h9.9v-8.1zm11.4 0h-9.9v8.1h9.9v-8.1zm13.7-4.6c-.7-.6-1.6-1-2.5-1h-51.1c-2 0-3.7 1.6-3.8 3.5v.4h60.3l-.5-.6c-.8-.7-1.6-1.5-2.4-2.3z" /><path d="M-1198.7 653.3c-2.6-.5-4.6-2.5-5.1-5.1l-.1-.3h-2.2c-3 0-5.4-2.4-5.4-5.4v-23.6c0-3 2.4-5.4 5.4-5.4h51.1c1.3 0 2.6.5 3.5 1.4 1.4 1.3 2.7 2.7 3.9 4.3.1.1.3.2.4.5 1 1.4 2 2.9 2.8 4.5l.1.2h5.6c.3 0 .6.2.7.5l1.9 4.3c.1.2.1.4 0 .6-.1.2-.2.4-.4.5-.1.1-.2.1-.3.1-.3 0-.6-.2-.7-.5l-1.7-3.9h-4.2l.2.5c2.2 5 3.5 10.3 3.9 15.8.2 2.9-2 5.5-5 5.6h-6.7l-.1.3c-.6 3-3.3 5.3-6.4 5.3-.4 0-.9 0-1.3-.1-2.6-.5-4.6-2.5-5.1-5.1l-.1-.3h-26.8l-.1.3c-.6 3-3.3 5.3-6.4 5.3-.5-.1-1-.2-1.4-.3zm-3.6-6.2c0 2.7 2.2 4.9 4.8 5h.1c2.7 0 5-2.2 5-5 0-2.7-2.2-5-5-5-2.7 0-4.9 2.3-4.9 5zm39.7 0c0 2.7 2.1 4.9 4.8 5h.2c2.7 0 5-2.2 5-5 0-2.7-2.2-5-5-5s-5 2.3-5 5zm-43.2-.8h2l.1-.3c.6-3 3.3-5.3 6.4-5.3.4 0 .9 0 1.3.1 2.6.5 4.6 2.5 5.1 5.1l.1.3h26.8l.1-.3c.6-3 3.3-5.3 6.4-5.3.4 0 .9 0 1.3.1 2.6.5 4.6 2.5 5.1 5.1l.1.3h6.4c1 0 2-.4 2.7-1.2.7-.7 1.1-1.7 1-2.8-.1-1.1-.2-2.2-.4-3.4v-.3h-.3c-13.2-.3-16-5.8-16.6-8.2l-.1-.3h-51.6v12.3c0 1 .4 2 1.1 2.7s1.7 1.1 2.7 1.1l.3.3zm57.3-25.7h-16.1v8.1h5.9c.9 0 1.7.6 1.9 1.5.4 1.5 2.6 6.6 14.6 7h.4l-.1-.4c-.7-3.9-1.9-7.6-3.7-11.1l-.1-.1c-.8-1.6-1.8-3.2-2.8-4.7v-.3zm-52.1 0h-9.3v8.1h9.4l-.1-8.1zm11.5 0h-9.9v8.1h9.8l.1-8.1zm11.5 0h-9.9v8.1h9.9v-8.1zm11.4 0h-9.9v8.1h9.9v-8.1zm13.7-4.6c-.7-.6-1.6-1-2.5-1h-51.1c-2 0-3.7 1.6-3.8 3.5v.4h60.3l-.5-.6c-.8-.7-1.6-1.5-2.4-2.3z" /><path d="M-1200.5 647.1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1zm1.3 0c0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9 0 1-.8 1.8-1.9 1.8-1.1.1-1.9-.8-1.9-1.8z" /><path d="M-1200.5 647.1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1zm1.3 0c0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9 0 1-.8 1.8-1.9 1.8-1.1.1-1.9-.8-1.9-1.8zM-1160.7 647.1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1zm1.2 0c0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9 0 1-.8 1.8-1.9 1.8-1 .1-1.9-.8-1.9-1.8z" /><path d="M-1160.7 647.1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1zm1.2 0c0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9 0 1-.8 1.8-1.9 1.8-1 .1-1.9-.8-1.9-1.8z" /></g><g><circle cx="-911.1" cy="42.7" r=".8" /><path d="M-924.9 45.5h1.5V47h-1.5zM-894.1 65.6h3.9v1.5h-3.9zM-927.3 40.7h1.5v1.5h-1.5zM-902.8 71.9h4.7c.4 0 .8-.3.8-.8v-4.7c0-.4-.3-.8-.8-.8h-4.7c-.4 0-.8.3-.8.8v4.7c0 .4.4.8.8.8zm.8-4.8h3.2v3.2h-3.2v-3.2zM-917.5 46l3.2.6-3.3 2.4-.2.2c-.1.2-.1.4-.1.6 0 .2.2.4.3.5 2.3 1.6 5.1 2.4 7.9 2.4h7l.1.3c.5 1.3 1.5 2.4 2.7 3.1 1.4.8 2.6 1.2 3.4 1.2.4 0 .7-.3.7-.7v-3.8h1.5c3.2 0 6.3-.6 9.4-1.7l7.6-2.8.2.3c1.4 2.5 4.1 4.1 7.1 4.1h.2c.2 0 .4-.2.5-.3.1-.2.1-.4.1-.6l-.8-3.4c-.2-.9-.5-1.7-.9-2.5l-.3-.7.2-.2c1.3-1.5 2.2-3.2 2.7-5.1l.4-1.5v-.2c0-.4-.3-.7-.7-.7h-.9c-2.6 0-5 1.2-6.5 3.3l-.9 1.2-5.3-2.3c-1.5-.7-3.2-1.1-4.9-1.2l-5.9-.4c-.7-.1-1.3-.6-1.4-1.3-.3-1.5-.2-3 .2-4.4l.2-.9v-.2c0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.5-.2h-.2c-1.6 0-3.1.6-4.3 1.7l-.2.2c-1.2 1.1-1.9 2.7-2 4.4v.9h-.4c-1.2.1-2.3.2-3.4.4l-6.6 1.2c-1.2.2-2.3.3-3.5.3h-5c-.4 0-.7.3-.7.7 0 1.7.7 3.3 1.8 4.4.3.7.9 1 1.7 1.2zm14.5 3.4V51.2h-6.7c-1.9 0-3.9-.5-5.6-1.3l-.6-.3 3.5-2.6 5.1 1.3c1.3.3 2.6.6 3.9.7h.4v.4zm17.5.2c-2.8 1-5.8 1.6-8.9 1.6h-1.4v-2h1.2c2.6 0 5.2-.3 7.7-.9l1-.2c1.3-.3 2.6-.5 4-.5l.1.8-3.7 1.2zm-34.3-8.4h4.3c1.3 0 2.5-.1 3.8-.3l6.6-1.2c1.4-.3 2.9-.4 4.3-.5.4 0 .7-.3.7-.7v-1.6c0-1.3.6-2.5 1.5-3.4l.2-.2c.5-.5 1.1-.8 1.8-1.1l.7-.2-.1.7c-.3 1.4-.3 2.9 0 4.3.3 1.3 1.4 2.4 2.8 2.5l5.9.4c1.5.1 3 .5 4.4 1.1l5.8 2.5c.1 0 .2.1.3.1.2 0 .5-.1.6-.3l1.2-1.6c1.1-1.5 2.8-2.5 4.7-2.6l.6-.1-.2.6c-.5 1.9-1.4 3.6-2.8 5-.2.2-.3.6-.1.9l.6 1.2c.3.7.6 1.4.8 2.2l.6 2.4-.7-.2c-1.9-.5-3.5-1.7-4.4-3.5l-.2-.5V47h-.1-.2c-1.5-.4-3.1-.6-4.7-.6s-3.2.2-4.7.6l-1 .2c-2.4.6-4.9.9-7.3.9h-1.9c-.4 0-.7.3-.7.7v7.1l-.6-.2c-.5-.2-.9-.4-1.3-.7-1.4-.8-2.3-2.2-2.3-3.7v-2.6c0-.4-.3-.7-.7-.7-1.6-.1-3.2-.4-4.7-.8l-5.5-1.4-4.8-1c-.5-.1-.9-.3-1.2-.7-.6-.6-1-1.3-1.2-2.1l-.8-.8zM-873.9 65.6h1.5v1.5h-1.5zM-878.7 68h1.5v1.5h-1.5z" /><path d="M-891.4 81.1l1.9-1c.3-.1.4-.4.4-.7V79h24.8V25.4h-65.5V79h24.8v.4c0 .3.2.6.4.7l1.9 1 1.5.3h7.9l1.9-.3zm-16.1-3.6h-20.6v-3.2h19.8v1.6c0 .4.3.8.8.8v.8zm17 1.4l-1.8.9h-9.1l-1.8-.9v-2.3h12.7v2.3zm3.5-3.8h-19.8V62.4h19.8v12.7zm21.3 2.4h-20.6v-.8c.4 0 .8-.3.8-.8v-1.6h19.8v3.2zm0-4.8h-19.8V61.6c0-.4-.3-.8-.8-.8h-21.3c-.4 0-.8.3-.8.8v11.1h-3.3l.8-.7c.5-.4 1-1 1-2.1 0-1.2-.8-1.9-1.3-2.4-.5-.4-.8-.7-.8-1.2 0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8 0 1.2.8 1.9 1.3 2.4.5.4.8.7.8 1.2s-.2.7-.8 1.2c-.4.3-.8.7-1.1 1.3l-.1.3h-4.2l.8-.7c.5-.4 1-1 1-2.1 0-1.2-.8-1.9-1.3-2.4-.5-.4-.8-.7-.8-1.2s.2-.7.8-1.2c.6-.5 1.3-1.1 1.3-2.4 0-.4-.3-.8-.8-.8s-.8.3-.8.8-.2.7-.8 1.2c-.6.5-1.3 1.1-1.3 2.4 0 1.2.8 1.9 1.3 2.4.5.4.8.7.8 1.2s-.2.7-.8 1.2c-.4.3-.8.7-1.1 1.3l-.1.3h-4.2l.8-.7c.5-.4 1-1 1-2.1 0-1.2-.8-1.9-1.3-2.4-.5-.4-.8-.7-.8-1.2s.2-.7.8-1.2c.6-.5 1.3-1.1 1.3-2.4 0-.4-.3-.8-.8-.8s-.8.3-.8.8-.2.7-.8 1.2c-.6.5-1.3 1.1-1.3 2.4 0 1.2.8 1.9 1.3 2.4.5.4.8.7.8 1.2s-.2.7-.8 1.2c-.4.3-.8.7-1.1 1.3l-.1.3h-2.9V26.9h62.4v45.8z" /><path d="M-885.8 56.1h1.5v1.5h-1.5zM-869.4 61.9c-.6-.2-1.2-.6-1.6-1.1l-.2-.3.2-.3c.4-.5.9-.9 1.6-1.1.2-.1.3-.2.4-.4.1-.2.1-.4 0-.6-.1-.3-.4-.5-.7-.5h-.3c-.7.3-1.4.7-2 1.3l-.3.3-.3-.3c-1.2-1.1-2.7-1.6-4.3-1.6-1.7 0-3.4.7-4.6 1.9l-.7.7c-.3.3-.3.8 0 1.1l.7.7c1.2 1.2 2.9 1.9 4.6 1.9 1.6 0 3.1-.6 4.3-1.6l.3-.3.3.3c.5.6 1.2 1 2 1.3h.3c.3 0 .6-.2.7-.5.1-.2.1-.4 0-.6 0-.1-.2-.3-.4-.3zm-7.3.2c-1.7 0-3.5-.6-3.5-1.6s1.7-1.6 3.5-1.6c1.7 0 3.5.6 3.5 1.6s-1.8 1.6-3.5 1.6zM-894.1 69.2h2.7v1.5h-2.7z" /></g><g><path d="M-1138.1 373.9h-4.9v-8.5-14.1-2c1.5.4 2.9.8 4.3 1.3.7.2 1-.8.3-1l-5.1-1.5c-.2-.1-.4-.1-.7-.2-6.9-1.8-14.1-2.8-21.2-3.4-2.1-.2-4.2-.3-6.3-.3-7.3-.2-14.6.1-21.8 1v-11-1c.2 0 .4-.2.4-.4.2-.9.5-1.9.7-2.8h2c.2 0 .4-.1.5-.3.4-1 .8-2 1.3-2.9.1-.2.1-.5-.1-.7-.1-.1-.2-.1-.4-.1h-2.3c.5-2.5 1.1-5.1 1.6-7.6h1.1c.2 0 .4-.1.5-.3.1-.1.1-.3.1-.4-.3-1.1-.5-2.1-.8-3.2-.1-.2-.3-.4-.5-.4h-8.8V311c0-.7-1.1-.7-1.1 0v3.1H-1200.7v-4.9c0-.7-1.1-.7-1.1 0v4.9h-8.8c-.2 0-.5.2-.5.4-.3 1.1-.5 2.1-.8 3.2-.1.3.2.7.5.7h1.2c.6 2.5 1.1 5.1 1.7 7.6H-1210.9c-.5 0-.6.5-.5.8.4 1 .8 2 1.3 2.9.1.2.3.3.5.3h2c.2.9.5 1.9.7 2.8 0 .2.2.3.4.4v14.4c-.6.1-1.1.3-1.7.4-1.7.4-3.3.9-4.9 1.5-.7.2-.4 1.3.3 1 1.4-.5 2.8-.9 4.3-1.3v24.7H-1213.8c-.7 0-.7 1.1 0 1.1H-1137.8c.4 0 .4-1.1-.3-1.1zm-62.7-9.8v-9.8c8-1.6 16.2-2.2 24.4-2.3v6.7h-10.5v-.3-1.8c0-.7-1.1-.7-1.1 0v2.1h-8.9c-.7 0-.7 1.1 0 1.1h9v6.9h-8.9c-.7 0-.7 1.1 0 1.1h9v2.3c0 .7 1.1.7 1.1 0v-2.3h10.6V374h-24.3c-.4-3.4-.4-6.6-.4-9.9zm49.9.1v9.7h-24.4v-6.2h10.6v2.3c0 .7 1.1.7 1.1 0v-2.3h8.9c.7 0 .7-1.1 0-1.1h-8.9v-6.9h8.9c.7 0 .7-1.1 0-1.1h-8.9v-.3-1.8c0-.7-1.1-.7-1.1 0v2.1h-10.5-.1V352v-.1h2.9c7.2.2 14.4.9 21.5 2.2v10.1zm-25.5 2.4h-10.5v-6.9h10.6v1.4c-.1 1.9-.1 3.7-.1 5.5zm1.1-1.9v-4.9h10.6v6.9h-10.5-.1v-2zm-24.7-18.5c-1.5.3-3.1.6-4.6.9-.1 0-.2.1-.3.1-.1 0-.3.1-.4.1-.1 0-.1 0-.2.1v-10.8-3.3h11.1v12.1c-1.9.1-3.7.4-5.6.8zm6.1-14.1h-12.2c-.2-.7-.4-1.4-.5-2.2h13.2c-.2.8-.4 1.5-.5 2.2zm-5.2-6.1h-3.6c-.3-2.5-.6-5.1-.9-7.6h7.2c-.3 2.5-.6 5.1-.8 7.6h-1.9zm2.9 0c.3-2.5.6-5.1.8-7.6h4.5c-.5 2.5-1.1 5.1-1.6 7.6h-3.7zm6.4-10.9c.2.7.3 1.4.5 2.1h-21.4c.2-.7.3-1.4.5-2.1h20.4zm-19.3 3.2h4.5c.3 2.5.6 5.1.9 7.6h-3.7c-.6-2.5-1.2-5-1.7-7.6zm-1 8.7h20.2c-.3.6-.5 1.2-.8 1.8h-18.6c-.3-.5-.6-1.1-.8-1.8zm2.5 38.4v-14.1-2.3c.7-.2 1.4-.4 2.2-.5h.1c.2-.1.4-.1.6-.1 3.5-.8 7.1-1.5 10.7-1.9 4.9-.6 9.8-1 14.7-1.1h4.5c3.7 0 7.5.2 11.2.5h.5c4.2.4 8.3 1 12.5 1.8 1.2.2 2.3.5 3.5.7.6.1 1.2.3 1.7.4.3.1.6.1.9.2.1 0 .2 0 .3.1h.2V374.1h-5.7v-9.8V354v-.1c0-.2-.1-.4-.4-.4-9.4-1.8-19.1-2.6-28.7-2.4-7.6.2-15.1.9-22.6 2.4-.2 0-.4.3-.4.5v20.1h-5.6-.1c-.1-3-.1-5.9-.1-8.7z" /><path d="M-1178.3 331.7c-.6.3-1.2.7-1.8 1-.2.1-.4.5-.2.7.3.4.5.7.8 1.1.2.2.3.4.5.6.1.2.3.4.5.5.2.1.4 0 .6 0 .4 0 .8-.1 1.2-.1 2.3-.2 4.5-.5 6.8-.7.2 0 .4 0 .6-.1h.1c7.1-1.7 14.2-3.7 21-6.6 1.7-.7 3.3-1.5 4.9-2.5.9-.6 1.8-1.2 2.5-1.9.4-.4.7-.8.9-1.4.1-.1.1-.3.1-.4 0-.4-.4-.7-.7-.9-1.9-1.5-4.7-2-7.1-1.7-1.8.2-3.5.8-5.2 1.3-1.9.6-3.8 1.3-5.7 2-1.4-.6-2.8-1.3-4.2-1.9-2.1-.9-4.2-1.9-6.3-2.8-.4-.2-1.2-.7-1.6-.5-.9.4-1.7.9-2.6 1.3-.1.1-.3.2-.4.2-.3.2-.4.6-.1.9 2.5 2 5.1 4.1 7.6 6.1-1.9.8-3.8 1.6-5.6 2.5-1.8-.6-3.5-1.2-5.3-1.9-.6-.2-1.3-.4-1.9-.7-.3-.1-.9.3-1.2.4-.5.2-1.1.5-1.6.7-.1 0-.2.1-.3.1-.4.2-.6.6-.2.9 1.4 1.3 2.6 2.6 3.9 3.8zm6.1-12.2c.7-.4 1.4-.7 2-1.1 3.4 1.5 6.8 3.1 10.3 4.6.4.2.9.4 1.3.6 0 0 .1 0 .1.1.3.1.7.3 1 .4.8.3 1.5.6 2.3 1-2.2.9-4.5 1.8-6.7 2.7-2.7-2.2-5.5-4.4-8.2-6.6-.7-.6-1.4-1.1-2.1-1.7zm-6.8 7.5c.1 0 .1 0 0 0h.2c.4.1.7.3 1.1.4 2 .7 3.9 1.4 5.9 2.1.2.1.4 0 .6-.1l1.2-.6c1.6-.8 3.2-1.5 4.9-2.2.8.7 1.6 1.3 2.5 2l.1.1c.1.1.3.2.5.1 2.7-1.1 5.5-2.2 8.2-3.3.2 0 .4-.2.4-.4v-.1-.1c-.1-.2-.2-.4-.4-.4-.8-.3-1.6-.7-2.4-1-.3-.1-.5-.2-.8-.3 1.4-.5 2.9-1 4.3-1.5.9-.3 1.9-.6 2.8-.9.4-.1.9-.2 1.3-.3.2 0 .4-.1.6-.1.1 0 .2 0 .3-.1h.2c1-.1 2-.1 3 .1-.6.4-1.2.7-1.8 1.1-.6.4-.1 1.3.5.9.9-.5 1.8-1.1 2.7-1.6.8.3 1.5.7 2.1 1.2-.1.2-.2.3-.3.5l-.2.2c-.1.1-.2.3-.4.4-.2.1-.3.3-.5.4-.1.1-.2.1-.3.2-.1 0-.1.1-.2.1-.5.4-1.1.7-1.7 1.1-1.7 1-3.5 1.8-5.4 2.6-6.3 2.6-13 4.4-19.6 6-2.9.3-5.9.6-8.8.9l-.9-1.2c.6-.4 1.2-.7 1.9-1.1.3-.2.4-.6.1-.9-1.2-1.2-2.5-2.4-3.7-3.6.8 0 1.4-.3 2-.6z" /></g></svg>
  )
}

export default Bathroom