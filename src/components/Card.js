import '../styles/Card.css'
import { FaSearch } from 'react-icons/fa';

function Card ({data}) {
    return (
        <div className='card-main-container'>
            <a href={data.url}>
                <nav className='card-nav'>
                    <section className='dot-section'>
                        <div className='dot-red'></div>
                        <div className='dot-yellow'></div>
                        <div className='dot-green'></div>
                    </section>
                    <section className='card-bar-section'>
                        <div className='card-bar'></div>
                    </section>
                </nav>
            <div className='card-body'>
                <div className='search-bar'>
                    <div className='white-space'><i>{<FaSearch/>}</i>{data.title}</div>
                </div>
                    <div className='card-container'>
                        <div className='container-one'>{data.content}</div>
                        <div className='container-two'></div>
                        <div className='container-three'></div>
                    </div>
            </div>
            </a>
        </div>
    )
}

export default Card;