import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/navibar';
import Pagecategory from './pages/PageCatego';
import BooksPage from './pages/PageBook';
import NoMatch from './pages/nomatch';
import Footer from './Component/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BooksPage />} />
          <Route path="/Bookstore/PageCatego" element={<Pagecategory />} />
          <Route path="/Bookstore/nomatch" element={<NoMatch />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
