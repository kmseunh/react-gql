import { Route, Routes } from 'react-router-dom';
import './App.css';
import CharactersList from './page/CharactersList';
import Character from './page/Character';
import Search from './page/Search';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<CharactersList />} />
                <Route path='/search' element={Search} />
                <Route path='/:id' element={<Character />} />
            </Routes>
        </div>
    );
}

export default App;
