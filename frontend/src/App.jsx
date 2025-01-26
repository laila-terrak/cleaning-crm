import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Customers from './pages/customers';
import CreateCustomer from './pages/CreateCustomer';
import CustomerDetails from './pages/CustomerDetail';

 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/customers/:id" element={<CustomerDetails/>}/>
            <Route path="/customers/create" element={<CreateCustomer/>}/>
         </Routes>
      </>
   );
};
 
export default App;
