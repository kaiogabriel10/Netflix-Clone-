import { useState } from "react"
import logo from './Images/netflix-logo.png'
import styles from './Styles/Search.module.css'
import { FaSearch } from "react-icons/fa"
import Loading from "react-loading"

function Search(){

    const [film, setFilm] = useState('')
    const [resposta, setResposta] = useState({})
    const [carregamento,setCarregamento] = useState(false)

    const atualizationFilm = (e) => setFilm(e.target.value)

    const SearchFilm = async() => {
        try{
            const TrimFilme = film.trim()
            setCarregamento(true)
            const response = await fetch(`http://www.omdbapi.com/?t=${TrimFilme}&apikey=ce949758`)
            if(!response.ok){
                throw new Error('Não foi possível localizar o filme')
            }
            else{
                const data = await response.json()
                setResposta(data)
            }
        }
        catch(err){
            console.error(`[ERRO] ${err}`)
        }
        finally{
            setCarregamento(false)
        }
    }

    return(
        <div className={styles.busca}>
            <div className={styles.header}>
                <a href="/">
                    <img src={logo} alt="Logo Netflix" className={styles.logo}/>
                </a>
                <input type="text" value={film} onChange={atualizationFilm} className={styles.input} placeholder='Procure por filmes'></input>
                <button onClick={SearchFilm} className={styles.input}><FaSearch color="red"/></button>
            </div>
            {carregamento?(
                <Loading type="spin" color="red" height={100} width={100} className={styles.load}/> 
            ):(
                (resposta && resposta.Title && resposta.Poster && resposta.Year && resposta.Genre && resposta.Actors && resposta.Director ?(
                    <div className={styles.resposta}>
                    <img src={resposta.Poster} alt={`Poster:${resposta.Title}`} className={styles.poster}/>
                    <h2 className={styles.title}>{resposta.Title}</h2>
                    <h2 className={styles.Year}>{resposta.Year}</h2>
                    <h2>Genre: {resposta.Genre}</h2>
                    <h2>{resposta.Plot}</h2>
                    <h2>Actors: {resposta.Actors}</h2>
                    <h2>Director: {resposta.Director}</h2>
                </div>  
                ):(
                    ""
                ))
                
            )}
        </div>
    )    
}

export default Search