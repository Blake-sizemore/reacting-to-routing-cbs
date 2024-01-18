import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import Films from './pages/Films';
import People from './pages/People';
import Species from './pages/Species';
import Locations from './pages/Locations';
import Vehicles from './pages/Vehicles';
import Filmsdetails from './pages/Filmsdetails';
import Peopledetails from './pages/Peopledetails';
import Speciesdetails from './pages/Speciesdetails';
import Locationsdetails from './pages/Locationsdetails';
import Vehiclesdetails from './pages/Vehiclesdetails';
import PNF from './pages/PNF';

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/Home" element={<Home />} />

                <Route path="/Films" element={<Films />} />
                <Route path="/Filmsdetails/:filmid" element={<Filmsdetails />} />

                <Route path="/People" element={<People />} />
                <Route path="/Peopledetails/:personid" element={<Peopledetails />} />

                <Route path="/Species" element={<Species />} />
                <Route path="/Speciesdetails/:specieid" element={<Speciesdetails />} />

                <Route path="/Locations" element={<Locations />} />
                <Route path="/Locationsdetails/:locationid" element={<Locationsdetails />} />

                <Route path="/Vehicles" element={<Vehicles />} />
                <Route path="/Vehiclesdetails/:vehicleid" element={<Vehiclesdetails />} />

                <Route path="*" element={<PNF />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
