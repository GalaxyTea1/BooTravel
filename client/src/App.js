import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Narbar from './components/Navbar/Narbar';
import Slogan from './components/Slogan/Slogan';

function App() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleSize);
        handleSize();
        return () => window.removeEventListener('resize', handleSize);
    }, []);

    useEffect(() => {
        if (windowSize.width < 500) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [windowSize]);

    return (
        <div>
            <h1 className='h-screen overflow-y-auto overflow-x-hidden px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-purple-500 dark:text-white text-black md:[20px]'>
                <Narbar isMobile={isMobile} />
                <Slogan />
                <Content />
            </h1>
        </div>
    );
}

export default App;
