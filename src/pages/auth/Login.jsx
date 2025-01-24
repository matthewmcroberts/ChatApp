import React from 'react'
import Logo from '../../components/Logo'
import { Link } from 'react-router-dom'
import LoginIllustration from "../../images/auth/chat-login.svg"

export default function Login() {
    return (
        <div className="border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen">
            <div className="flex flex-wrap items-center h-full">
                <div className="hidden w-full xl:block xl:w-1/2">
                    <div className="py-17.5 px-26 text-center">
                        <Link className="mb-5.5 inline-block">
                            <Logo />
                        </Link>

                        <p className="2xl:px-20">
                            Hey there, welcome back! Login to chat with your friends.
                        </p>

                        <span className="mt-15 inline-block">
                            <img src={LoginIllustration} alt="login" className="h-115 w-auto object-cover object-center" />
                        </span>
                    </div>
                </div>

                <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2 xl:px-44">
                    <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                        <span className="mb-1.5 block font-medium">Start for free</span>

                        <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">Sign in to Chati</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
