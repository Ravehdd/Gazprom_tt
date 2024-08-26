
import './App.css'
import Header from './components/Header/Header';
import MainTable from './components/MainTable/MainTable'
import Footer from './components/Footer/Footer';

export const apiBaseUrl = "http://127.0.0.1:8000/api/v1/";

function App() {

  return (
    <>
      <Header />
      <MainTable />
      <Footer />
    </>
  )
}

export default App
