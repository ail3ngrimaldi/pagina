import Navbar from './Header';
import Footer from './Footer';

export default function Layout ({ children }) {
    return (
        <div className='App'>
        <Navbar/>
           {children}
        <Footer/>
        </div>
    )
}