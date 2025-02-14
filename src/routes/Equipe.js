import '../styles/coordenadores.css'

function Equipe(){
    return(
        <div>
            <h2 className='categoriaTitle'>Docentes</h2>
            <div  className="Corpo">
                <div className="coord">
                    <h5>Prof. Dr. Marcos Sergio de Toledo</h5>
                    <a href='http://lattes.cnpq.br/3308810633774571' target="_blank" rel="noreferrer">
                        <p>Currículo Lattes</p>
                    </a>
                    <p>Departamento de Bioquímica</p>
                    <p>Escola Paulista de Medicina/UNIFESP</p>
                </div>
                <div className="coord">
                    <h5>Prof. Dr. André Zelanis</h5>
                    <a href='http://lattes.cnpq.br/8149569348608834' target="_blank" rel="noreferrer">
                        <p>Currículo Lattes</p>
                    </a>
                    <p>Professor Adjunto</p>
                    <p>ICT/UNIFESP</p>
                </div>
            </div>
            <br></br>
            <h2 className='categoriaTitle'>Equipe Técnica</h2>
            <div  className="Corpo">
                <div className="coord">
                    <h5>Juliana Valentim Oliveira de Azevedo </h5>
                    <a href='http://lattes.cnpq.br/0376229633918852' target="_blank" rel="noreferrer">
                        <p>Currículo Lattes</p>
                    </a>
                    <p>Departamento de Bioquímica</p>
                    <p>Escola Paulista de Medicina/UNIFESP</p>
                </div>
                <div className="coord">
                    <h5>Dra. Michelle Tiveron Passos Riguetti</h5>
                    <a href='http://lattes.cnpq.br/8395380518958842' target="_blank" rel="noreferrer">
                        <p>Currículo Lattes</p>
                    </a>
                    <p>Departamento de Medicina</p>
                    <p>Escola Paulista de Medicina/UNIFESP</p>
                </div>
            </div>
            <br></br>
            <h2 className='categoriaTitle'>Estudantes</h2>
        </div>
    )
}

export default Equipe