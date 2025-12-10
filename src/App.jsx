import { useState } from 'react'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-zinc-100 bg-black p-4">
        <NavBar />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default App
