import { BrowserRouter , Routes, Route,Link } from 'react-router-dom';
import React from "react";
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
// import UpdateProductComponent from './componentss/UpdateProductComponent';
// import ViewProductComponent from './componentss/ViewProductComponent';
// import CreateProductComponent from './componentss/CreateProductComponent';
// import ListProductComponent from './componentss/ListProductComponent';
// import ListEmployeeComponent from './components/ListEmployeeComponent';
// import CreateEmployeeComponent from './components/CreateEmployeeComponent';
// import ViewEmployeeComponent from './components/ViewEmployeeComponent';
// import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import CreateBankComponent from './component/CreateBankComponent';

import ListBankComponent from './component/ListBankComponent';
import ViewBankComponent from './component/ViewBankComponent';
import UpdateBankComponent from './component/UpdateBankComponent';

import DepositComponent from './component/DepositComponent';
import WithdrawComponent from './component/WithdrawComponent';




function App() {
  return (
    <div>
      
    <BrowserRouter>
      <div>
        <nav>
          <HeaderComponent></HeaderComponent>
          <ul>
            {/* <li>
            <Link to ='/products' element ={<ListProductComponent></ListProductComponent>}>Product Table </Link>
            </li>
            </ul>
            <ul>
            <li>
            <Link to ='/employees' element={<ListEmployeeComponent> </ListEmployeeComponent>}>Employee Table</Link>
            </li> */}
            <li>
            <Link to ='/bankAccounts' element={<ListBankComponent/>}>bankTable</Link>
          
            </li>
           
           
          </ul>
          <FooterComponent></FooterComponent>
        </nav>
        <Routes>
{/*        
            <Route path="/products" element={<ListProductComponent />} />
            <Route path="/add-product/:id" element={<CreateProductComponent />} />
            <Route path="/view-product/:id" element={<ViewProductComponent />} />
            <Route path="/update-product/:id" element={<UpdateProductComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
         
            <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
            <Route path="/view-employee/:id" element={<ViewEmployeeComponent/>} />
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>} /> */}





            <Route path="/add-bankAccount/:id"element={<CreateBankComponent/>}/>
            <Route path ="/bankAccounts" element={<ListBankComponent/>}/>
            <Route path="/view-bankAccount/:id" element={<ViewBankComponent/>} />
            <Route path ="/update-bankAccount/:id" element={<UpdateBankComponent></UpdateBankComponent>}/>
            <Route path ="/bankAccounts " element={<ListBankComponent></ListBankComponent>}></Route>
            
                <Route path="/deposit/:id" element={<DepositComponent />} />
                     <Route path="/" element={<ListBankComponent />} />
                      <Route path="/withdraw/:id" element={<WithdrawComponent />} />
                     <Route path="/" element={<ListBankComponent />} />
             
           
       </Routes>
    
      </div>
    </BrowserRouter>
  </div>


    
  );
}
export default App;
