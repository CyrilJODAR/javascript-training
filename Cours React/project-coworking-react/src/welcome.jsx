import { useState } from "react";

const Welcome = () =>{
    const welcomeHandler = () =>{
        setDisplayWelcome(!displayWelcome)
    }

    const [displayWelcome,setDisplayWelcome] = useState(false)

    return(
        <>
        <a onClick={welcomeHandler} className="specialA" href="#blank">{displayWelcome === false ? 'Afficher message': 'Cacher message'}</a>
        {displayWelcome &&
            <h1>BIENVENUE HOMIE</h1>
        }
        </>
    )

}

export default Welcome;