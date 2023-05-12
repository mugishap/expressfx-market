import React, { FormEvent, useState } from 'react'
import { Helmet } from 'react-helmet'
import CommonHeader from '../Common/CommonHeader'
import { toast } from 'react-toastify'
import CommonFooterComponent from '../Common/CommonFooterComponent'
import { contacts } from '../../constants'
import { Link } from 'react-router-dom'

const ContactComponent: React.FC = () => {

    const [contactData, setContactData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleSubmitMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!contactData.fullName || !contactData.email || !contactData.subject || !contactData.message) toast.error("Please fill all fields")
        console.log(contactData)
    }

    return (
        <div className='w-full flex flex-col'>
            <Helmet>
                <title>Contact Us | Express FX Market</title>
            </Helmet>
            <CommonHeader page='CONTACT US' whiteText='GET IN' yellowText='TOUCH' />
            <div className='w-full flex py-10 justify-center'>
                <div className='w-6/12 mx-2 flex flex-col'>
                    <span className='font-bold text-white text-xl my-2'>FEEL FREE TO DROP US A MESSAGE</span>
                    <span className='my-2 text-gray-1 text-base'>Need to speak to us? Do you have any queries or suggestions? Please contact us about all enquiries using the form below.</span>
                    <form onSubmit={handleSubmitMessage} className='w-full flex flex-col'>
                        <div className='my-2 w-full flex items-center justify-between'>
                            <input value={contactData.fullName} onChange={(e) => setContactData({ ...contactData, fullName: e.target.value })} type="text" className='w-[49%] my-2 bg-[#222222] border border-[#333] text-white p-2 text-sm h-12 placeholder:text-gray-1 placeholder:text-xs' placeholder='FULL NAMES' />
                            <input value={contactData.email} onChange={(e) => setContactData({ ...contactData, email: e.target.value })} type="email" className='w-[49%] my-2 bg-[#222222] border border-[#333] text-white p-2 text-sm h-12 placeholder:text-gray-1 placeholder:text-xs' placeholder='EMAIL' />
                        </div>
                        <div className='my-2 w-full flex items-center justify-between'>
                            <input value={contactData.subject} onChange={(e) => setContactData({ ...contactData, subject: e.target.value })} type="text" className='w-[49%] my-2 bg-[#222222] border border-[#333] text-white p-2 text-sm h-12 placeholder:text-gray-1 placeholder:text-xs' placeholder='SUBJECT' />
                        </div>
                        <div className='my-2 w-full flex items-center justify-between'>
                            <textarea value={contactData.message} onChange={(e) => setContactData({ ...contactData, subject: e.target.value })} rows={6} className='resize-none w-full my-2 bg-[#222222] border border-[#333] text-white p-2 text-sm placeholder:text-gray-1 placeholder:text-xs' placeholder='MESSAGE' />
                        </div>
                        <button type="submit" className="w-2/5 py-3 bg-orange mx-2 my-3 text-white text-center">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
                <div className='w-3/12 mx-2 bg-[#1d1d1d] p-8 flex flex-col'>
                    {contacts.map((contact, index) => (
                        <div key={index} className='flex items-start h-24'>
                            <span className='mr-4 my-4'>
                                <contact.icon className='text-orange ' size={25} />
                            </span>
                            <div className='flex flex-col ml-4'>
                                <span className='text-white text-xl mb-2 font-bold'>{contact.title.toUpperCase()}</span>
                                <span className='text-gray-1 text-sm'>{contact.data}</span>
                                {contact.socials && (
                                    <div className='flex mt-4'>
                                        {contact.socials.map((social, index) => (
                                            <Link to={social.href}>
                                                <span className={`w-10 rounded-full flex items-center justify-center mx-2 h-10 bg-${social.background} `}>
                                                    <social.icon key={index} className={`text-white  mx-2`} size={30} />
                                                </span>
                                            </Link>
                                        ))}

                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CommonFooterComponent />
        </div>
    )
}

export default ContactComponent