import Header from './utilities/header';
import Footer from './utilities/footer';
import Pages from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {

  return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <Pages />
          <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App;
