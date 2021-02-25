import React,{ useState } from 'react';
import {v4 as uuid} from 'uuid';



const Home = () => {
    const [resources, setResources] = useState([
        {id: uuid(), type: 'Online', website: 'Udemy.com', remarks: 'Wide range of Development courses available at discounted prices during their frequent sales promotions.'},
        {id: uuid(), type: 'Online', website: 'Udacity.com', remarks: 'Larger, semester type of courses available. However, the prices are somewhat higher than Udemy.'},
        {id: uuid(), type: 'Online', website: 'youtube.com', remarks: "several free courses mainly acting as a prelude to paid courses in other platforms such as Udemy"},
        {id: uuid(), type: 'book', website: 'packt.com', remarks: "Professional Javascript by Hugo De Franscisco"},
        {id: uuid(), type: 'book', website: 'packt.com', remarks: 'Node.js Web Development by David Herron'}
    ])

    const addItems = () => {
        setResources([...resources, {id: uuid(), type: 'book', website: 'wrox.com', remarks: 'Professional Javascript for Web Developers by Matt Frisbie'},
            {id: uuid(), type: 'book', website: 'packt.com', remarks: 'Full Stack React Projects by Shoma Hoque'},
            {id: uuid(), type: 'book', website: 'mhprofessional.com', remarks:"Javascript A Beginner's Guide by John Pollock"}
        ])
    }
    return (
        <div className="container my-5">
            <h1 className="text-center">Resources to become Full Stack Developers</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis deleniti eum saepe laborum sapiente, rem ratione beatae nisi quos similique blanditiis velit nam fugiat aliquid ducimus possimus. Inventore, ad assumenda, corporis eum numquam eaque quasi nihil maiores earum consequatur, expedita voluptatibus est dicta ab cumque dignissimos doloribus veritatis hic. Ea, harum deserunt. Rerum, atque eos!</p>
            <ul>
                <table className="table bg-white">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Website</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                {resources.map ((curElem) => {
                    return (
                        <tr key={curElem.id}>
                            <td>{curElem.id}</td>
                            <td>{curElem.type}</td>
                            <td>{curElem.website}</td>
                            <td>{curElem.remarks}</td>
                        </tr>
                    )
                })}
                </tbody>
                <button onClick={addItems} className="btn btn-success mx-auto">AddItems</button>
                </table>
            </ul>
        </div>
    )
}

export default Home;
