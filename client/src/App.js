import React, { useState } from 'react';
import Navbar from './Components/navbar';
import HomeView from './Components/homeview';
import LoginView from './Components/loginview';
import ServiceCard from './Components/servicecard';

function App() {
  // Simple state machine for switching pages before you add React Router
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // YOUR ARRAY REQUIREMENT: Defining the cleaning tiers and options
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
      title: 'Thermal Warp Flatting',
      description: 'Carefully restores warped or heat-damaged vintage records to proper tracking flatness.',
      tiers: [
        { label: 'Per Damaged Record (1 - 3 Vinyls)', price: 25 },
        { label: 'Archivist Bundle (4 - 8 Vinyls)', price: 75 }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: '#121214', color: '#f4ebd9', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      {/* Hide navigation on the dedicated login view screen */}
      {currentPage !== 'login' && (
        <Navbar setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}

      <main style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 1.5rem' }}>
        
        {currentPage === 'home' && <HomeView />}

        {currentPage === 'login' && (
          <LoginView setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />
        )}

        {currentPage === 'services' && (
          <div>
            <h2 style={{ color: '#d4af37', textTransform: 'uppercase', borderBottom: '1px solid #5c1d24', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
              Sonic Restoration Lab
            </h2>
            <p style={{ marginBottom: '2rem', color: '#a69c8a' }}>
              Select a professional conditioning service below to preserve your analog tracking quality.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {/* Mapping through our service data array into individual child components */}
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