import { useContext } from 'react';
import './App.css';
import ArticleSection from './ArticleSection';
import Sidenavbar from './Sidenavbar/Sidenavbar';

function App() {

  //const DataContext = createContext([]);
  return (
   // <DataContext.Provider >
      <div className="App">
        <Sidenavbar articleSources={['NY Times Most Popular']} />
        <ArticleSection />
      </div>
   // </DataContext.Provider>
  );
}

export default App;
