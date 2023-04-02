import '../css/banner.css'

import logo from '../images/logo.svg'

import Button from './global/button'

function Banner() {
    return (
        <div className="banner">
            <img src={logo} className="mb-8" />
            <h1 className='text-3xl font-bold '>A history of everything you copy</h1>
            <p className='w-2/5 text-center my-5'>
                Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.
            </p>

            <div className="flex gap-5 flex-wrap">
                <Button bg="hsl(171, 66%, 44%)" borderColor="hsl(171, 66%, 30%)" text="Mac"></Button>
                <Button bg="hsl(233, 100%, 69%)" borderColor="#2f41c7" text="IOS" ></Button>
            </div>
        </div>
    )
}

export default Banner
