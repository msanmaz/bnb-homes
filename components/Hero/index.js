import Image from 'next/image';
import Link from 'next/link'
import Button from 'common/Button/but-ton';
import clsx from 'clsx';


export default function Hero({main,caption}) {
    return (
        <>

            <div id="up" className={clsx("bg-center bg-no-repeat h-[40vh] md:h-[50vh] bg-hero-bg bg-cover relative", {
                "!h-[65vh]": main
            })}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-30 bg-black"></span>
            {
                main ? <div>
                 <div className='w-full' style={{height:"200px"}}>
                         <Image data-aos="zoom-y-out" data-aos-delay="300" src="/ATTILA(2).svg" layout="fill"/>
                </div>
                    <div className="mx-2 centerlayer text-center">
                        <div className="inline-flex">
                          <Button>Satin Almak Istiyorum</Button>
                          <div className='px-[0.5rem]'/>
                          <Button>Kiralamak Istiyorum</Button>
                        </div>
                    </div></div> : <div className='centerlayero text-center flex-col bebasBold text-3xl'>
                   <div className='text-5xl'> {caption}</div>                   <div>Five Star Full-Service Luxury Vacation Homes
 </div>

                    </div>
            }
               
            </div>

        </>
    )
}