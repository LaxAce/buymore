import Navbar from './Navbar';

import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetails from './ItemDetails';
import Main from './Main';
import EachDepartment from './EachDepartment';
// import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route path="/details/:id" element={<ItemDetails />} />

          <Route path="/:id" element={<EachDepartment />} />

          {/* <Route exact path="/sidebar" element={<Sidebar />} /> */}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
