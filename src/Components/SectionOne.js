import styles from './Styles/SectionOne.module.css'
import { useState,useEffect } from "react"
import { FaPlay, FaInfoCircle} from 'react-icons/fa'
import Loading from "react-loading"

function SectionOne(){

    const [respostaApi ,setRespostaApi] = useState(null)
    const [carregamento, setCarregamento] = useState(false)

    useEffect(() => {
        setCarregamento(true)
        fetch(`http://www.omdbapi.com/?t=Taxi+Driver&apikey=ce949758`)
        .then((response) => {
            if(!response.ok){
                throw new Error('Não possível ligar-se a Api')
            }
            else{
                return response.json()
            }
        })
        .then((data) => setRespostaApi(data))
        .catch((err) => console.error(`[ E  R  R  O ] ${err}`))
        .finally(setCarregamento(false))
    },[])
    
    return( 
        <div className={styles.section1}>
            {carregamento?(
                <Loading type='spin' color='red' width={100} height={100}/>
            ):(
                (respostaApi && respostaApi.Title && respostaApi.Year && respostaApi.Plot &&(
                <section>
                    <h1  className={styles.Titulo}>{respostaApi.Title}</h1>
                    <div className={styles.Year}>
                        <p className={styles.relevance}><strong>88% relevante</strong></p>
                        <p>{respostaApi.Year}</p>
                        <p className={styles.Runname}>{respostaApi.Runtime}</p>
                    </div>
                    <p className={styles.Plot}>{respostaApi.Plot}</p>
                    <div className={styles.buttons}>
                        <a href="https://www.google.com/search?q=taxi+drive&oq=taxi+drive+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDsyBwgDEC4YgAQyBwgEEAAYgAQyBwgFEC4YgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYjwLSAQg4NzMwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#wptab=si:ALGXSlbU0DVwhpst6EEcnRoy3KuIhhGdh2ahy-sLN7Pgvu--vlJHVSSFWJ2qdq_QzPt89ORohbO_DPIF3YCS4Xn8xM7nbPW4QfZ3Eyxux6QwaqjCG9PcWLFK9fpEh9au0HwZUittY6X1WFmGdNcrDAD6gVcwaQk-Awv--i8lStK6tiLh8J4WdPw%3D" target='_blank' className={styles.link}><span><p className={styles.button1}><FaPlay color='black'/> Watch</p></span></a>
                        <br></br>
                        <span><p className={styles.button2}><FaInfoCircle color='white'/> Information</p></span>
                    </div>
                </section>
            )    
        )
    )}        
        </div>
    )
}

export default SectionOne 