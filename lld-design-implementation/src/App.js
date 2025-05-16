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
import WeatherContainer from './Components/WeatherApp/WeatherContainer';
import Countdown from './Components/Countdown/Countdown';
import TodoContainer from './Components/Todo/TodoContainer';
import KanbanContainer from './Components/Kanban/KanbanContainer';
import WysiwygContainer from './Components/Wysiwyg/WysiwygContainer';
import MainContainer from './Components/MainContainer';
import StonePaperScissorContainer from './Components/StonePaperScissor/StonePaperScissorContainer';
import CodeContainer from './Components/CodePlayground/CodeContainer';
import ColorPickerContainer from './Components/ColorPicker/ColorPickerContainer';
import TicTacToeContainer from './Components/TicTacToe/TicTacToeContainer';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<MainContainer/>}/>
          <Route path="/color-picker" element={<ColorPickerContainer/>}/>
          <Route path="/code-playground" element={<CodeContainer/>}/>
          <Route path="/stone-paper-scissor" element={<StonePaperScissorContainer/>}/>
          <Route path="/wysiwyg" element={<WysiwygContainer/>}/>
          <Route path="/tic-tac-toe" element={<TicTacToeContainer/>}/>
          <Route path="/kanban" element={<KanbanContainer/>}/>
          <Route path="/todo" element={<TodoContainer/>}/>
          <Route path="/countdown" element={<Countdown/>}/>
          <Route path="/weather" element={<WeatherContainer/>}/>
          <Route path="/autocomplete-search" element={<SearchContainer/>}/>
          <Route path="/live" element={<VideoContainer/>}/>
          <Route path="/live-chat" element={<VideoContainer/>}/>
          <Route path="/pagination" element={<PaginationContainer/>}/>
          <Route path="/image-slider" element={<Slider/>}/>
          <Route path="/nested-comments" element={<CommentsContainer/>}/>
          <Route path="/accordian" element={<AccordianContainer/>}/>
          <Route path="/recipes" element={<RecipeContainer/>}/>
          <Route path="/shimmer-ui" element={<ProductContainer/>}/>
          <Route path="/multi-language" element={<About/>}/>
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
