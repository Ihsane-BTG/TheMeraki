import React, { useState } from "react";

const Form = ()=> {
    const [id, setId] = useState("..")
    const [mdp, setMdp] = useState("")
    const [dateN, setDateN] = useState("..")
    const [ville, setVille] = useState("Casablanca")
    const [genre, setGenre] = useState("")
    const [loisirs, setLoisirs] = useState([])
    function handleLoisirs(e) {
        if (!loisirs.includes(e.target.value)) {
            setLoisirs([...loisirs, e.target.value]);
        } else {
            setLoisirs([...loisirs.filter((item) => item !== e.target.value)]);
        }
    }
    const handleSubmit = (event) =>{
        alert(`Je suis Mr/Mme ${id} ne le ${dateN} a ${ville} et mes loisirs sont: ${loisirs}`);
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} >
            <h2 style={{marginLeft: '25%'}}>Inscription</h2> <br />
            L'identifiant <input type="text" name="id" onChange={(e) => setId(e.target.value)} /><br />
            Mot de passe <input type="password" name="mdp" onChange={(e) => setMdp(e.target.value)} /><br />
            Date de naissance <input type="date" name="dateN" onChange={(e) => setDateN(e.target.value)} /><br />
            Ville <select name="ville" onChange={(e) => setVille(e.target.value)}>
                <option value="Casablanca" >Casablanca</option>
                <option value="Tangier" >Tanger</option>
                <option value="Rabat" >Rabat</option>
                <option value="Marrakesh" >Marrakesh</option></select><br />
            Genre <input type="radio" name="genre" value="H" onChange={(e) => setGenre(e.target.value)} /> Homme <input type="radio" name="genre" value="F" onChange={(e) => setGenre(e.target.value)} /> Femme<br />
            Loisirs <input type="checkbox" name="Sport" value="Sport" onChange={(e)=>handleLoisirs(e)} /> Sport <input type="checkbox" name="Lecture" value="Lecture" onChange={(e)=>handleLoisirs(e)} /> Lecture <input type="checkbox" name="Musique" value="Musique" onChange={(e)=>handleLoisirs(e)} /> Musique
            <br/><br/>
            <input style={{marginLeft: '35%'}} type="submit" value="S'inscrire"/>
        </form>
    )
}
export default Form;