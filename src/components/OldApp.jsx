import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'//files in public are accessed directly
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function OldApp() {
    const [count, setCount] = useState(0)

    const navigate = useNavigate();//can't use useNavigate unless inside component that can reached by Route tag
    function navToCard() {
        navigate('/card/nestedcard');
    }

    function back() {
        navigate(-1);
    }

    return (
        <>
            <button onClick={back}>Back</button>
            <button onClick={navToCard}>Navgate to CardNested</button>
            <div>
                <a href="https://vite.dev">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default OldApp