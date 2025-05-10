import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ProductContainer from './Components/Product/ProductContainer'
import About from './Components/About'
import RecipeContainer from './Components/Recipes/RecipeContainer'
import LanguageProvider from './contexts/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/recipes" element={<RecipeContainer/>}/>
          <Route path="/shimmer-ui" element={<ProductContainer/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
