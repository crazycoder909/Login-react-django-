import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Login } from './components/Login';
import { Home } from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
