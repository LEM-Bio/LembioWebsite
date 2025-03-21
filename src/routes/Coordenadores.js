import '../styles/coordenadores.css'
import data from '../data/components-mock.json'

function Coordenadores(){
    return(
        <div>
            <h2 className='categoriaTitle'>Coordenadores</h2>
            <div className="Corpo">
                {data.coordenadores.map((coord, index) => (
                        <div className="coord">
                            <h5>{coord.name}</h5>
                            <a href={coord.curriculo} target="_blank" rel="noreferrer">
                                <p>Currículo Lattes</p>
                            </a>
                            <p>{coord.posicaoLab}</p>
                            <p>{coord.posicaoUni}</p>
                            <p>{coord.dep}</p>
                            <p>{coord.uni}</p>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Coordenadores