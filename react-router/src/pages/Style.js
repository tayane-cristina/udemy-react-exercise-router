import './Style.css'
import Styles from '../Data/Data'

const Style = () => {

    return <div className="style-page">
        <h1 className='style-title'>Cortes para todos os gostos e estilos</h1>
        <ul className='type-cuts'>
            {Styles.map((item) => <li key={item.id}>
                <img className="cort-image" width="300" height="300" src={item.img} alt="imagem do corte"></img>
                <div className='card-style-cuts'>
                    <h2>{item.type}</h2>
                    <p>{item.description}</p>
                </div>
            </li>)}
        </ul>
    </div>
};

export default Style;