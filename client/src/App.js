import './App.css';
import Content from './components/Content/Content';
import Narbar from './components/Navbar/Narbar';
import Slogan from './components/Slogan/Slogan';

function App() {
    return (
        <div>
            <h1 className='h-screen overflow-y-auto overflow-x-hidden px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 text-white'>
                <Narbar />
                <Slogan />
                <Content />
            </h1>
        </div>
    );
}

export default App;
