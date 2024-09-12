import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Single_product } from './pages/Single_Products';
import { Products } from './pages/Products';
import { CategoryProducts } from './pages/CategoryProducts';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { Protected } from './pages/Protected';
import { Ordernow } from './pages/Ordernow';
import { Delivery } from './pages/Delivery';
function App(){
    return(
        <BrowserRouter>
        <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/Products' element={<Products/>}></Route>
                    <Route path='/single-product/:uid' element={<Single_product/>}></Route>
                    <Route path='/Ordernow/' element={<Ordernow/>}></Route>
                    <Route path='/categoryproducts/:cnm' element={<CategoryProducts/>}></Route>
                    <Route path='delivery' element={<Delivery/>}></Route>
                    <Route path='/Cart' element={<Protected component={Cart}/>}></Route>
                    <Route path='/Login' element ={<Login/>}></Route>
                </Routes>
        </BrowserRouter>
    );
}
export default App;