import '../../css/advantages.css'
import screen from '../../images/image-computer.png'
import Advantage from './Advantage'

export default function Advantages() {
    const advantages = [
        {
            heading: "Quick Search",
            description: "Easily search your snippets by content, category, web address, application, and more.",
        },
        {
            heading: "iCloud Sync",
            description: "Instantly saves and syncs snippets across all your devices.",
        },
        {
            heading: "Complete History",
            description: "Retrieve any snippets from the first moment you started using the app.",
        }
    ]
    return (
        <div className="advantages flex gap-[40px] items-center" >
            <img className='translate-x-[-60px]' src={screen} />
            <main className='w-1/3'>
                {
                    advantages.map( (el, idx) => <Advantage key={idx} heading={el.heading} description={el.description} /> )
                }
            </main>
        </div>
    )
}