import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ProductContainer from './Components/Product/ProductContainer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/shimmer-ui" element={<ProductContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
