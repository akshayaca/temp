import React from 'react';
import Header from './Header'
import ServiceDetailsComponent from './ServiceDetailsComponent'
import Footer from './Footer';


const App = () => {
  return (
    <div className="App">
      <Header /> 
      <ServiceDetailsComponent/>
      <Footer />
  
    </div>
  );
}

export default App;
