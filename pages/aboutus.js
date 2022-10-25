import Head from 'next/head'
import React, { useCallback, useLayoutEffect } from 'react';
import Layout from 'common/Layout';





export default function About() {
    return (
        <div className="bg-white dark:bg-black">

            <AboutHero />
            <Atti />

        </div>
    )
}


function AboutHero() {
    return (
        <>
            <div className=" bg-opacity-50 flex flex-wrap">
                <div className="justify-start md:w-1/2 mt-48 pl-8 md:px-20">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="fill-current dark:text-white text-blue-light md:w-full w-80"
                        viewBox="0 0 200 80" style={{ enableBackground: "new 0 0 200 80" }}>
                        <g>
                            <g>
                                <path class="st0" d="M25.8,42.7l-1.7,4h-0.9l5.7-13.5h0.9l6.3,13.5h-1.8l-1.9-4H25.8z M28.9,35.4L28.9,35.4l-2.8,6.5H32L28.9,35.4
			z"/>
                                <path class="st0" d="M42.2,46.7V34.3H37v-1.1h12v1.1h-5.2v12.4H42.2z" />
                                <path class="st0" d="M55,46.7V34.3h-5.2v-1.1h12v1.1h-5.2v12.4H55z" />
                                <path class="st0" d="M67,33.2v13.5h-1.8V33.2H67z" />
                                <path class="st0" d="M81,46.7v-1h-6.9V33.2h-1.7v13.5H81z" />
                                <path class="st0" d="M84.8,42.7l-1.7,4h-0.9l5.7-13.5h0.9L95,46.7h-1.8l-1.9-4H84.8z M87.9,35.4L87.9,35.4l-2.8,6.5H91L87.9,35.4z
			"/>
                                <path class="st0" d="M106.3,46.7h-1.7V33.2h1.7v5.9h8v-5.9h1.8v13.5h-1.8V40h-8V46.7z" />
                                <path class="st0" d="M119.8,37.7c0.3-0.9,0.7-1.6,1.3-2.3c0.6-0.7,1.4-1.3,2.2-1.7c0.9-0.4,2-0.7,3.3-0.7c1.3,0,2.4,0.2,3.3,0.7
			c0.9,0.5,1.7,1,2.3,1.7c0.6,0.7,1,1.4,1.3,2.3c0.3,0.8,0.5,1.6,0.5,2.3c0,0.5-0.1,0.9-0.2,1.5c-0.1,0.5-0.3,1.1-0.6,1.6
			c-0.2,0.5-0.6,1-1,1.5c-0.4,0.5-0.9,0.9-1.5,1.2c-0.5,0.3-1.2,0.6-1.9,0.9c-0.7,0.2-1.5,0.3-2.3,0.3c-1.3,0-2.4-0.2-3.3-0.7
			c-0.9-0.5-1.6-1.1-2.2-1.8c-0.6-0.7-1-1.4-1.3-2.3c-0.2-0.8-0.4-1.6-0.4-2.3C119.4,39.3,119.5,38.5,119.8,37.7z M121.7,42.5
			c0.3,0.7,0.7,1.4,1.2,1.9c0.5,0.5,1,1,1.7,1.3c0.6,0.3,1.4,0.4,2.1,0.4c0.7,0,1.4-0.1,2.1-0.4c0.7-0.3,1.3-0.7,1.8-1.3
			c0.5-0.5,0.9-1.2,1.2-1.9c0.3-0.8,0.5-1.6,0.5-2.5c0-0.9-0.2-1.7-0.5-2.4c-0.3-0.8-0.7-1.4-1.2-2c-0.5-0.6-1.1-1-1.8-1.3
			c-0.7-0.3-1.3-0.4-2.1-0.4c-0.8,0-1.5,0.2-2.1,0.4c-0.7,0.3-1.2,0.7-1.7,1.3c-0.5,0.5-0.9,1.2-1.2,2c-0.2,0.7-0.4,1.6-0.4,2.4
			C121.3,40.9,121.4,41.7,121.7,42.5z"/>
                                <path class="st0" d="M144.7,44.8h0.1l6.2-11.6h1.3v13.5h-1.7V35.8h-0.1l-6,11.2h-0.4l-5.9-11.2h-0.1v11h-0.9V33.2h1.3L144.7,44.8z
			"/>
                                <path class="st0" d="M165.6,33.2v1.1h-6.9v4.8h6V40h-6v5.7h6.9v1H157V33.2H165.6z" />
                                <path class="st0" d="M168.2,43.3c0,0.2,0,0.5,0.1,0.9c0.1,0.3,0.3,0.6,0.5,0.9c0.2,0.3,0.6,0.5,1.1,0.7c0.5,0.2,1.1,0.3,1.9,0.3
			c1,0,1.8-0.2,2.4-0.5c0.6-0.4,0.9-1,0.9-1.8c0-0.7-0.2-1.2-0.6-1.6c-0.4-0.4-0.9-0.7-1.5-1c-0.6-0.3-1.2-0.5-1.9-0.7
			c-0.7-0.2-1.3-0.5-1.9-0.8c-0.6-0.3-1.1-0.7-1.5-1.2c-0.4-0.4-0.5-1.1-0.5-1.8c0-0.6,0.1-1.1,0.4-1.5c0.2-0.4,0.6-0.8,1-1.1
			c0.4-0.3,0.9-0.5,1.4-0.7c0.5-0.2,1.1-0.2,1.7-0.2c0.5,0,1,0.1,1.6,0.2c0.5,0.1,1,0.3,1.4,0.6c0.4,0.2,0.7,0.6,1,1
			c0.3,0.4,0.5,0.8,0.5,1.2h-1.3c-0.1-0.7-0.5-1.3-1-1.6c-0.6-0.4-1.3-0.5-2.1-0.5c-0.5,0-0.9,0.1-1.3,0.2c-0.4,0.1-0.7,0.3-1,0.5
			c-0.2,0.2-0.5,0.4-0.6,0.7c-0.1,0.3-0.2,0.6-0.2,0.9c0,0.6,0.2,1,0.6,1.3c0.4,0.3,0.9,0.6,1.5,0.9c0.6,0.2,1.2,0.5,1.9,0.7
			c0.7,0.2,1.4,0.5,1.9,0.9c0.6,0.3,1.1,0.8,1.5,1.3c0.4,0.5,0.6,1.1,0.6,1.9c0,0.6-0.1,1.1-0.4,1.6c-0.2,0.5-0.5,0.9-1,1.2
			c-0.4,0.3-0.9,0.6-1.5,0.8c-0.6,0.2-1.2,0.2-1.9,0.2c-0.7,0-1.4-0.1-2-0.2c-0.6-0.2-1.2-0.4-1.6-0.7c-0.5-0.3-0.8-0.7-1.1-1.2
			c-0.2-0.4-0.4-0.9-0.4-1.5H168.2z"/>
                            </g>
                            <rect x="197.7" y="27.8" class="st0" width="2.3" height="52.2" />
                            <rect class="st0" width="2.3" height="52.2" />
                        </g>
                    </svg>
                </div>
                <div className="md:w-1/2 lg:px-24">
                    <div className="bg-blue-light dark:bg-white mt-32 mb-10 p-4 md:w-full">
                        <p className="font-sans text-xl leading-tight font-light dark:text-black text-white text-center">Attila Homes</p>
                    </div>
                    <div className="ml-6">
                        <p className="text-black text-xs dark:text-white md:mr-8 px-12 sm:px-0 sm:my-8 text-center">
                            Attila Homes; Attila Utkucan'in insaat ve emlak sektor bilesenlerini bir araya getirip, Almanya ve Turkiye sinirlari icerisinde hizmet veren bir gayrimenkul ve danismalik sirketidir.Karli yatirima boyut katarak
                            hem kazancli hem keyifli gayrimenkul sahibi olmaniz icin dinamik ekimizle sizler icin calismaktayiz.
                        </p>

                        <p className="text-black text-xs dark:text-white md:mr-8 px-12 sm:px-0 sm::my-8 text-center">Portfoy icerisinde yer alan gayrimenkuller aile, is ortakligi ve sosyal cevre mulklerinden olusmaktadir. Attila Homes kriterlerini saglayan gayrimenkuller ile sizleri bulusturup, tum sureclerin takibini ve is yukunu ustlenip, kazancli bir yatirim ve yasam alanina donusturmeniz icin 20 yili askin tecrubesi ile sizleri yeni baslangiclara davet ediyoruz</p>

                    </div>

                </div>
            </div>
        </>
    )
}



function Atti() {
    return (
        <>
            <div className="bg-blue-light dark:bg-white mt-32 p-4 md:ml-16 w-full md:w-9/1">
                <p className="font-sans text-xl leading-tight font-light dark:text-black text-white text-center md:pl-31">Attila Utkucan</p>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/2 flex justify-center">
                    <div className="mt-32 lg:-mt-16">
                        <img className="w-full md:h-full h-1/2" src="/atillautkucan-edit.png" />
                    </div>
                </div>

                <div className="w-1/2 flex justify-center py-10">
                    <ul class="list-disc">
                        <li className="text-blue-light dark:text-white py-4 text-sm md:text-xl">STROYKA Real Estate GmbH - Hissedar & Genel Mudur</li>
                        <li className="list-none text-blue-light text-xm  dark:text-white ">Subat 2020 - Aktif</li>
                        <li className="text-blue-light dark:text-white py-4 text-sm md:text-xl">Ece Wallpapers Industry and Trade Inc. - Hissedar & Yonetici</li>
                        <li className="list-none text-blue-light dark:text-white text-xm ">Eylul 2013 - Aktif</li>
                        <li className="text-blue-light dark:text-white py-4 text-sm md:text-xl">Mega Yapi Insaat ve Tic.Ltd.Sti. - Insaat Organizasyonu</li>
                        <li className="list-none text-blue-light dark:text-white text-xm ">Eylul 2017 - Aktif</li>
                        <li className="text-blue-light dark:text-white py-4 text-sm md:text-xl">Daidalos Insaat Turizm ve Tic. A.S - Musteri Iliskileri</li>
                        <li className="list-none text-blue-light dark:text-white text-xm ">Haziran 2017 - Agustos 2017</li>
                        <li className="text-blue-light dark:text-white py-4 text-sm md:text-xl">Mega Yapi Insaat ve Tic Ltd.Sti - Santiye Sefi</li>
                        <li className="list-none text-blue-light dark:text-white text-xm ">Aralik 2015 - Haziran 2017</li>
                        <li className="text-blue-light dark:text-white py-4 text-sm md:text-xl">Fenerbahce Spor Kulubu Kongre Uyesi</li>
                        <li className="list-none text-blue-light dark:text-white text-xm ">Subat-2016 - Aktif</li>



                    </ul>

                </div>
            </div>

            <div className="flex w=full flex-wrap">
                <div className="w-1/3">
                    <div className="border-b w-37 h-33 md:w-31 border-black dark:border-white"></div>
                </div>
                <div className="w-1/3 flex justify-center mt-4">
                    <h3 className="mt-5 max-w-2xl font-sans text-xs md:text-xl text-gray-500 dark:text-white lg:mx-auto">EKİBİMİZ</h3>
                </div>
                <div className="w-1/3">
                    <div className="border-b border-black w-37 h-33 md:w-31 dark:border-white"></div>
                </div>
            </div>

            <div className="flex flex-wrap mt-2 mx-2" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-blocks]">


                <div className="w-full md:w-1/2 lg:w-1/3 px-1 my-1 cursor-pointer">
                    <p className="text-gray-500 dark:text-white  font-sans text-sm lg:text-2xl px-2 tracking-wider text-center">Avukatımız</p>
                    <div className="flex w-1/2">
                        <img className="lg:h-64 h-52 w-full object-cover" src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                            alt="Profile picture" />
                        <div className="flex w-full">
                            <p className="text-gray-500 dark:text-white  font-sans text-sm lg:text-2xl px-20 tracking-wider text-center">Umut Hukuk</p>

                        </div>
                    </div>

                </div>


                <div className="w-full md:w-1/2 lg:w-1/3 px-1 my-1 cursor-pointer">
                    <p className="text-gray-500 dark:text-white  font-sans text-sm lg:text-2xl px-2 tracking-wider text-center">Yazılımcımız</p>
                    <div className="flex w-1/2">
                        <img className="lg:h-64 h-52 w-full object-cover" src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                            alt="Profile picture" />
                        <div className="flex w-full">
                            <p className="text-gray-500 dark:text-white  font-sans text-sm lg:text-2xl px-20 tracking-wider text-center">Mert</p>

                        </div>
                    </div>

                </div>


                <div className="w-full md:w-1/2 lg:w-1/3 px-1 my-1 cursor-pointer">
                    <p className="text-gray-500 dark:text-white  font-sans text-sm lg:text-2xl px-2 tracking-wider text-center">Mimarımız</p>
                    <div className="flex w-1/2">
                        <img className="lg:h-64 h-52 w-full object-cover" src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                            alt="Profile picture" />
                        <div className="flex w-full">
                            <p className="text-gray-500 dark:text-white  font-sans text-sm lg:text-2xl px-20 tracking-wider text-center">Blabla</p>

                        </div>
                    </div>

                </div>

            </div>




        </>
    )
}



About.getLayout = (page) => {
    return <Layout title={'Attila-Homes'}>{page}</Layout>
  }
  