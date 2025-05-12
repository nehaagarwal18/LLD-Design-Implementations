import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ProductContainer from './Components/Product/ProductContainer'
import About from './Components/About'
import RecipeContainer from './Components/Recipes/RecipeContainer'
import CommentsContainer from './Components/Comments/CommentContainer'
import LanguageProvider from './contexts/LanguageProvider';
import AccordianContainer from './Components/Accordian/AccordianContainer';
import Slider from './Components/ImageSlider/Slider';
import PaginationContainer from './Components/Pagination/PaginationContainer';
import VideoContainer from './Components/LiveChat/VideoContainer';
import SearchContainer from './Components/AutocompleteSearch/SearchContainer'

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/autocomplete-search" element={<SearchContainer/>}/>
          <Route path="/live" element={<VideoContainer/>}/>
          <Route path="/live-chat" element={<VideoContainer/>}/>
          <Route path="/pagination" element={<PaginationContainer/>}/>
          <Route path="/image-slider" element={<Slider/>}/>
          <Route path="/nested-comments" element={<CommentsContainer/>}/>
          <Route path="/accordian" element={<AccordianContainer/>}/>
          <Route path="/recipes" element={<RecipeContainer/>}/>
          <Route path="/shimmer-ui" element={<ProductContainer/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
