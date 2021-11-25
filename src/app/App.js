import Navbar from './dashboard/home/Navbar';

import Footer from './dashboard/home/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetails from './dashboard/view/ItemDetails';
import Main from './dashboard/home/Main';
import EachDepartment from './dashboard/view/EachDepartment';
import Signup from './signup/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route path="/details/:id" element={<ItemDetails />} />

          <Route path="/:id" element={<EachDepartment />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
