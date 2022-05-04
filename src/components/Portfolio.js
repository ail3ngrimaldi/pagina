import '../styles/Portfolio.css'
import Card from './Card';
import { data } from './data';

console.log(data)

function Portfolio () {
    return (
        <div className='portfolio-container'>
                <h2 className='portfolio-title'>Portfolio</h2>           
                    <div className='cards-container'>
                    {data.map(data => (
                        <Card key={data.id} data={data} />
                    ))}  
                   
                    </div>
                    </div>
    )
}

export default Portfolio;