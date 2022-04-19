import { NavAndSidebar } from './NavAndSidebar';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';


export default function Layout ({ children }) {
    return (
        <div className='App'>
        <NavAndSidebar/>
           {children}
        <Footer/>
        </div>
    )
}