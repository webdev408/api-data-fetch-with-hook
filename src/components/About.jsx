import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import image1 from '../images/justme.jpg'
import image2 from '../images/beautifulwoman-4.jpg'
import image3 from '../images/blueshirt.jpeg'
import image4 from '../images/picTwo.jpg'



const About = () => {
    const [skills, setSkills] = useState([
        {id: uuid(), name: 'James Baldwin', profession: 'Full stack Developer', Expertise: 'MERN stack', image: <img src={image1} alt= 'one' className='about_Pics' />},
        {id: uuid(), name: 'Jen Mitchell', profession: 'Front End Developer', Expertise: 'Bootstrap, reactjs', image: <img src={image2} alt='two' className='about_Pics' />},
        {id: uuid(), name: 'Daina Sanders', profession: 'A I Specialist', Expertise: 'Python, RNN, CNN', image: <img src={image3} alt='three' className='about_Pics' />},
    ])
    const addItems = () => {
        setSkills([...skills, {id: uuid(), name: 'Heather Smith', profession: 'Web Developer', Expertise: 'CSS,SCSS, react hooks, react native', image: <img src={image4} className='about_Pics' alt='four' />}])
    }

    

    return (
        <div className="container my-5">
            <h1 className="text-center">We are Your Tech Solutions</h1>
            <p>We are highly qualified experienced tech pro. Our team consists of software developers, web developers, full stack developers, Machine learning Engineers and Artificial Intelligence Experts. We deploy a range of technologies, modern frameworks and cross-platform compatible libraries. Our programming languages revolve around Javascript and Python in addition to the foundational languages such as HTML5 and CSS3. Where imperative, we use modern cloud CDNs.</p>
            <hr/>
            
                <table className="table bg-dark text-light">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Profession</th>
                        <th>Expertise</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                    <tbody>
                    {skills.map ((curElem) => {
                        return (
                            <tr key={curElem.id}>
                                <td>{curElem.id}</td>
                                <td>{curElem.name}</td>
                                <td>{curElem.profession}</td>
                                <td>{curElem.Expertise}</td>
                                <td>{curElem.image}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                 <button onClick={addItems} className="btn btn-primary mx-auto">AddItems</button>
            
        </div>
    )
}

export default About;

