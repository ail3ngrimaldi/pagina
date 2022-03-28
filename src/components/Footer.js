import '../styles/Footer.css';

export default function Footer () {

    const date = new Date().getFullYear()
    return (
        <div className='Footer'>
            Site created by <a href='https://www.linkedin.com/in/ailenrociogrimaldi/'> Ailén Grimaldi</a> | {date}
        </div>
    )
}