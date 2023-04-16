import './components/categories/categories.styles.scss'
import { CategorisList } from './components/categories/categoriesList';

const App=()=> {
  const categories =[
   "Women","Men","Kids"
  ]
  return (
    <div className="App">
      <CategorisList className="categories-list" categories={categories}/>
    </div>
  );
}

export default App;
