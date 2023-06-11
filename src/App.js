import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Characters from './components/Characters';
import Comics from './components/Comics';
import CharacterScreen from './components/CharacterScreen';
import Info from './components/Info';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Info />
          <Navbar />
          <Routes>
            <Route path="characters" element={<Characters />} />
            <Route path='comics' element={<Comics />} />
            <Route path=":page/:id" element={<CharacterScreen />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Provider>
      </Router>
    </>
  );
}

export default App;
