'use client'

// login page

import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";


const page = () => {
    return (
        <main className='gradient-bg h-screen w-screen grid place-items-center'>
            <section className="flex flex-col items-center justify-between gap-[40px] w-[85vw] md:w-[30vw] border border-red-700">
                <h4>
                    LOGIN
                </h4>
                <Input
                    key='username'
                    type="text"
                    label="Username"
                    labelPlacement="outside"
                />
                <Input
                    key='password'
                    type="text"
                    label="Password"
                    labelPlacement="outside"
                    className='rounded-sm'
                />
                <ReCAPTCHA
                    sitekey="6LcSuzAoAAAAAGpQ5Xx7CDy-flo0QzmI4KimrvwR"
                />
                <Button className='bg-[#144173] text-white font-bold uppercase w-full'>
                    Submit
                </Button>
            </section>
        </main>
    )
}

export default page

// site: 6LcSuzAoAAAAAGpQ5Xx7CDy-flo0QzmI4KimrvwR
// secret: 6LcSuzAoAAAAAHjLMyeJxXDnxSL8JOxh6LBNtcLD