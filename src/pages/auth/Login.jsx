import React from 'react'
import Logo from '../../components/Logo'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen">
            <div className="flex flex-wrap items-center h-full">
                <div className="hidden w-full xl:block x:w-1/2">
                    <div className="py-17.5 px-26 text-center">
                        <Link className="mb-5.5 inline-block">
                            <Logo />
                        </Link>

                        <p className="px-20">
                            Hey there, welcome back! Login to chat with your friends.
                        </p>

                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
