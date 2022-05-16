import { Route, Routes } from 'react-router-dom'
import Game from './components/Game/Game';
import Main from './components/Main/Main';
import MyNavbar from './components/navbar/MyNavbar';
import MyBody from './components/body/MyBody'
import './App.css';

function App() {
  return (
    <div className="App">
      
        <MyNavbar />
        <MyBody />
          <Routes>
      <Route path='/' element={<Main />} />
      <Route path="/Game/:id" element={<Game/>}/>
          </Routes>
        

    </div>
  );
}

export default App;
