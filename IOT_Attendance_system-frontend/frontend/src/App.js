
import './App.css';
import { BrowserRouter} from "react-router-dom";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import DateCalendarFormProps from './components/DateCalendarFormProps';
import Dashboard from './components/dashboard';
import AllModules from './components/AllModules';
import MyModules from './components/MyModules';









function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path = "/dashboard" element={<Dashboard/>} />
      <Route exact path = "/calender" element={<DateCalendarFormProps/>} />
      <Route exact path = "/mymodules" element={<AllModules/>} />
      <Route exact path = "/mymodule" element={<MyModules/>} />
      
      

      {/* <Route exact path = "/Services" element={<Services/>} />

      <Route exact path = "/Staff" element={<Staff/>} />

      <Route exact path = "/" element={<Home/>} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
