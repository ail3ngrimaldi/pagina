import { NavAndSidebar } from './NavAndSidebar';
import Footer from './Footer';


export default function Layout ({ children }) {
    return (
        <div className='App'>
        <NavAndSidebar/>
           {children}
        <Footer/>
        </div>
    )
}