import './App.css';
import Header from './Header/Header'
import Description from './Description/Description'
import CategoryDisplay from './CategoryDisplay/CategoryDisplay'
import GeneratedSchedules from './GeneratedSchedules/GeneratedSchedules'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <CategoryDisplay />
      <GeneratedSchedules />
      <Footer />
    </div>
  );
}


export default App;
