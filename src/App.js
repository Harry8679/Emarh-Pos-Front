import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Items from './pages/Items';
// Tu pourras ajouter Bills, Customers, etc. aussi ici

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main layout */}
      <div className="flex-1 md:ml-64">
        <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            {/* Tu peux ajouter plus de routes ici comme : */}
            {/* <Route path="/bills" element={<Bills />} /> */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
