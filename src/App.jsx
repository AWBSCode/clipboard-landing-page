// import assets
import './App.css'
import devices from './images/image-devices.png'
import google from './images/logo-google.png'
import ibm from './images/logo-ibm.png'
import hp from './images/logo-hp.png'
import microsoft from './images/logo-microsoft.png'
import vec from './images/logo-vector-graphics.png'

// import component
import Advantages from './components/advantages/Advantages'
import Banner from './components/Banner'
import Paragraph from './components/Paragraph'
import Cards from './components/cards/Cards'
import Button from './components/global/button'

function App() {
  const logos = [
    google,
    ibm,
    hp,
    microsoft,
    vec
  ];

  return (
    <div className="App">
      <Banner />
      <Paragraph heading="Keep track of your snippets" paragraph="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything." />
      <Advantages />
      <Paragraph heading="Access Clipboard anywhere" paragraph="Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks." />

      <main className='flex w-full justify-center'>
        <img src={devices} alt="" />
      </main>

      <Paragraph heading="Supercharge your workflow" paragraph="We 've got the tools to boost you productivity." />

      <Cards />

      <div className="logos-container">
        {
          logos.map((el, idx) => {
            return <img src={el} alt="company logo" key={idx} />
          })
        }
      </div>

      <Paragraph heading="Clipboard for iOS and Mac OS" paragraph="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard." />

      <div className="flex gap-5 flex-wrap justify-center">
        <Button bg="hsl(171, 66%, 44%)" borderColor="hsl(171, 66%, 30%)" text="Mac"></Button>
        <Button bg="hsl(233, 100%, 69%)" borderColor="#2f41c7" text="IOS" ></Button>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default App
