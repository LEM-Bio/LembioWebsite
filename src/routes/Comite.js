import '../styles/coordenadores.css'
import data from '../data/components-mock.json'

function Comite(){
    return(
        <div>
            <h2 className='categoriaTitle'>Comitê de usuários</h2>
            <div className="Corpo">
                {data.comite.map((usuario, index) => (
                    <div className="coord">
                        <h5>{usuario.name}</h5>
                        <a href={usuario.curriculo} target="_blank" rel="noreferrer">
                            <p>Currículo Lattes</p>
                        </a>
                        <p>{usuario.posicao}</p>
                        <p>{usuario.dep}</p>
                        <p>{usuario.uni}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comite