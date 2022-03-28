import '../styles/Paragraph.css'

function Projects () {
    return (
        <div className='paragraph'>
            <h2>Projects</h2>
            <p>My firsts projects were developed as a student in 'Soy Henry', there's been a long way from that moment to my present, so there's an updated list:
            </p>
            <ul className='ul_projects'>
                <li> An e-commerce for a candle store located in Córdoba, Argentina.</li>
                <li> An e-commerce for a clothing store located in Buenos Aires, Argentina.</li>
                <li> <a href='https://www.instagram.com/tachito.compost/?hl=es-la'>Tachito Compost</a>. A project in development. My job here is to develop an app that brings people closer to compost and ecology issues.</li>
            </ul>
        </div>
    )
}

export default Projects;