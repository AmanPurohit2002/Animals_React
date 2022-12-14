import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './css/App.css';

const App=()=>{
    const [animal,setAnimal]=useState([]);

    const getRandomAnimal=()=>{
        const animals=['cow','bird','cat','dog','horse','gator'];

        return animals[Math.floor(Math.random() *animals.length)];

    }

    //console.log(getRandomAnimal());

    const handleClick=()=>{
        setAnimal([...animal,getRandomAnimal()]);
    }

    const renderedAnimal=animal.map((val,indx)=>{
        return (
            <AnimalShow type={val} key={indx}/>
        )
    })
    

    return (
        <div className="app">
            <p>Show Animal List here</p>
            {/* <AnimalShow type={getRandomAnimal()}/> */}
            
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimal}</div>
            {/* <ol>
                {animal.map((val,indx)=>{
                    return (
                        <li key={indx}>{val}</li>
                    )
                })}
            </ol> */}
        </div>
    )
}

export default App;