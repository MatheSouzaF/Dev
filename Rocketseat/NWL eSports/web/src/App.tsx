import './styles/main.css'
import logoImg from './assets/logoNlweSports.svg';

function App() {
    return (
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
            <img src={logoImg} />

            <h1 className='text-6xl text-white font-black mt-20'>
                Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
            </h1>
            <div className='grid grid-cols-6 gap-6 mt-16'>
                <a href="">
                    <img src='/game-1.png'/>
                </a>
                <a href="">
                    <img src='/game-2.png'/>
                </a>
                <a href="">
                    <img src='/game-3.png'/>
                </a>
                <a href="">
                    <img src='/game-4.png'/>
                </a>
                <a href="">
                    <img src='/game-5.png'/>
                </a>
                <a href="">
                    <img src='/game-6.png'/>
                </a>
               
            </div>
        </div>
    )
}

export default App
