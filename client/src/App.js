import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import HomeView from './Components/homeview';
import LoginView from './Components/loginview';
import RegisterView from './Components/registerview';
import ServiceCard from './Components/servicecard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const restorationServices = [
    {
      id: 'ultrasonic-clean',
      title: 'Ultrasonic Deep Wash',
      description: 'Removes deep-groove microscopic dust and static pops using professional fluid tanks.',
      tiers: [
        { label: 'Single Album (1 Vinyl)', price: 15 },
        { label: 'Small Batch (2 - 5 Vinyls)', price: 45 },
        { label: 'Collector Bundle (6 - 12 Vinyls)', price: 90 }
      ]
    },
    {
      id: 'warp-repair',
      title: 'Thermal Warp Flattening',
      description: 'Carefully restores warped or heat-damaged vintage records to proper tracking flatness.',
      tiers: [
        { label: 'Per Damaged Record (1 - 3 Vinyls)', price: 25 },
        { label: 'Archivist Bundle (4 - 8 Vinyls)', price: 75 }
      ]
    }
  ];

  return (
    <div className="app-container">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
      />

      <main className="main-content">
        {currentPage === 'home' && <HomeView />}

        {currentPage === 'login' && (
          <LoginView setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />
        )}

        {currentPage === 'register' && (
          <RegisterView setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />
        )}

        {currentPage === 'services' && (
          <div>
            <h2 className="services-header-title">
              Sonic Restoration Lab
            </h2>
            <p className="services-subtext">
              Select a professional conditioning service below to preserve your analog tracking quality.
            </p>
            
            <div className="services-grid">
              {restorationServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;