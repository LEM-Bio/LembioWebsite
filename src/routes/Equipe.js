import '../styles/coordenadores.css'
import data from '../data/components-mock.json'

function Equipe(){
    return(
        <div>
            <h2 className='categoriaTitle'>Docentes</h2>
            <div  className="Corpo">
                {data.docentes.map((docente, index) => (
                    <div className="coord">
                        <h5>{docente.name}</h5>
                        <a href={docente.curriculo} target="_blank" rel="noreferrer">
                            <p>Currículo Lattes</p>
                        </a>
                        <p>{docente.posicao}</p>
                        {docente.dep !== "" &&
                            <p>{docente.dep}</p>
                        }
                        <p>{docente.uni}</p>
                    </div>
                ))}
            </div>
            <br></br>
            <h2 className='categoriaTitle'>Equipe Técnica</h2>
            <div  className="Corpo">
                {data.eqTecnica.map((tecnico, index) => (
                    <div className="coord">
                        <h5>{tecnico.name}</h5>
                        <a href={tecnico.curriculo} target="_blank" rel="noreferrer">
                            <p>Currículo Lattes</p>
                        </a>
                        <p>{tecnico.dep}</p>
                        <p>{tecnico.uni}</p>
                    </div>
                ))}
            </div>
            <br></br>
            <h2 className='categoriaTitle'>Estudantes</h2>
            <div  className="Corpo">
                {data.estudantes.map((estudante, index) => (
                    <div className="coord">
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Equipe