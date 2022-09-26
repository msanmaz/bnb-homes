import React from 'react';
import { useCallback, useState } from 'react';
import emailjs from 'emailjs-com';
import Layout from 'common/Layout';


export default function Contact() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })

    const [inputs, setInputs] = useState({
        email: '',
        name: '',
        phone: '',
        message: ''
    })


    const handleResponse = (status, msg) => {
        if (status === 200) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            })
            setInputs({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
        } else {
            setStatus({
                info: { error: true, msg: msg }
            })
        }
    }

    const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        })
    }

    const handleOnSubmit = async e => {
        e.preventDefault()
        e.target.reset()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        emailjs.sendForm('service_bllq8vq', 'template_rhbp65v', e.target, 'user_qO4LzyY3KSpXRvNUfC1y9')
            .then((result) => {
                console.log(result)
                console.log(result.text);
                handleResponse(result.status, result.text)
            },
                (error) => {
                    console.log(error.text);
                });


    }


    return (
        <div className="">
            <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-b dark:bg-blue-light">

                <main className="flex-grow">
                    <Section handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} status={status} />

                    <section className="md:pt-2">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6">
                            <div className="pb-12 md:pt-10 md:pb-20">

                                {/* Section header */}
                                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                    <h1 className="h1 mb-4 dark:text-white" data-aos="zoom-y-out">Takımımız ile iletişime geçin</h1>
                                    <p className="text-xl text-gray-600 dark:text-white" data-aos="zoom-y-out" data-aos-delay="150">Kiralık ve Satılık evler olmak üzere her konuda bizimle iletişime geçebilirsiniz</p>
                                </div>

                                {/* Items */}
                                <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>


                                    {/* 3rd item */}
                                    <div className="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
                                        <svg className="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="none" fillRule="evenodd">
                                                <circle className="fill-current text-blue-light" cx="24" cy="24" r="24" />
                                                <g strokeWidth="2">
                                                    <path className="stroke-current text-white " d="M33 16L22 27" />
                                                    <path className="stroke-current text-white " d="M33 16l-7 19-4-8-8-4z" />
                                                </g>
                                            </g>
                                        </svg>
                                        <h4 className="text-xl font-bold text-black leading-snug tracking-tight mb-1">Satış ile iletişime geç</h4>
                                        <p className="text-gray-600">Satış departmanımız ile iletişime geçin</p>
                                    </div>

                                    {/* 4th item */}
                                    <div className="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-blocks]">
                                        <svg className="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="none" fillRule="evenodd">
                                                <circle className="fill-current text-blue-light" cx="24" cy="24" r="24" />
                                                <g strokeWidth="2">
                                                    <path className="stroke-current text-white " d="M19.799 29.601C21.092 31.61 23.826 33 27 33c.59 0 1.163-.051 1.716-.142L33 35v-4.04c1.241-1.057 2-2.44 2-3.96 0-1.552-.792-2.961-2.081-4.027" />
                                                    <path className="stroke-current text-white" d="M23 14c-5.523 0-10 3.582-10 8 0 1.797.75 3.45 2 4.785V32l4.833-2.416c.996.266 2.059.416 3.167.416 5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                                                </g>
                                            </g>
                                        </svg>
                                        <h4 className="text-xl font-bold text-black leading-snug tracking-tight mb-1">Email ile canlı yardım</h4>
                                        <p className="text-gray-600">2 saat içerisinde emailinize cevaplıyoruz</p>
                                    </div>



                                    {/* 6th item */}
                                    <div className="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="750" data-aos-anchor="[data-aos-id-blocks]">
                                        <svg className="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="none" fillRule="evenodd">
                                                <circle className="fill-current text-blue-light" cx="24" cy="24" r="24" />
                                                <g strokeWidth="2">
                                                    <path className="stroke-current text-white" d="M29 22h6v11H13V22h5" />
                                                    <path className="stroke-current text-white" d="M21 25h-3v-3l9-9 3 3z" />
                                                </g>
                                            </g>
                                        </svg>
                                        <h4 className="text-xl font-bold text-black leading-snug tracking-tight mb-1">Evinizi Satmak istiyorsanız</h4>
                                        <p className="text-gray-600">Evinizi portfoyümüze katmak istiyorsanız</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>



                </main>

            </div>
        </div>
    );
}

Contact.getLayout = (page) => {
    return <Layout title={'Attila-Homes'}>{page}</Layout>
  }
  

const Section = ({ handleOnChange, handleOnSubmit, status }) => {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pt-20 md:pb-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pt-6 pb-12 md:pb-16">
                        <h1 className="futuraMedium text-lg">Have a Question About Houses? Contact Us</h1>
                    </div>

                    {/* Contact form */}
                    <form className="max-w-xl mx-auto" onSubmit={handleOnSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block futuraMedium text-sm font-medium mb-1" htmlFor="name">Name<span className="text-red-600">*</span></label>
                                <input
                                    id="name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
                                    name="name"
                                    type="firstname"
                                    required
                                    autofocus
                                    placeholder="İsminizi Yazınız"
                                    onChange={handleOnChange}
                                />                  </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block futuraMedium text-sm font-medium mb-1" htmlFor="last-name">Phone <span className="text-red-600">*</span></label>
                                <input
                                    id="phone"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
                                    name="phone"
                                    type="phone"
                                    required
                                    autofocus
                                    onChange={handleOnChange}
                                    placeholder="Telefon Numaranizi Yazınız"
                                />                   </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block futuraMedium text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                                <input
                                    id="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
                                    name="email"
                                    required
                                    autofocus
                                    onChange={handleOnChange}
                                    placeholder="Email Adresinizi Yazınız"
                                />                            </div>
                        </div>


                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block futuraMedium text-sm font-medium mb-1" htmlFor="message">Your Message</label>
                                <textarea
                                    name="message"
                                    onChange={handleOnChange} id="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
                                    placeholder="Write your message"></textarea>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mt-4">
                            <div className="w-full px-3">
                                <button className={`mb-1 w-full bg-[#161616] ${status.submitted &&'bg-green-500', 'hover:bg-green-200'}  text-white rounded hover:bg-gray-600 px-4 py-2 focus:outline-none`} disabled={status.submitting}> {!status.submitting
                                    ? !status.submitted
                                        ? 'Submit'
                                        : 'Submitted'
                                    : 'Submitting...'}</button>
                            </div>
                        </div>
                        <div className="text-sm text-gray-400 mt-4">
                            By clicking "send" you consent to allow Simple to store and process the personal information submitted above and agree to our <a className="underline" href="#0">terms and conditions</a> as well as our <a className="underline" href="#0">Privacy Policy</a>.
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}