import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from './pages/Index'
import Contacts from './pages/Contacts'
import Plants from './pages/PLANTS'
import College from './pages/College'
import Cult from './pages/CULT'
import Inside from './pages/INSIDE'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="cases">
            <Route index element={<Index />} />
            <Route path="plants" element={<Plants />} />
            <Route path="college" element={<College />} />
            <Route path="cult" element={<Cult />} />
            <Route path="inside" element={<Inside />} />
          </Route>
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
