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
        <footer>
            <div className="social-midia">
                <img className="social-midia-icon" alt="WhatsApp" src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png?ga=GA1.1.2089675641.1676983403&track=ais" ></img>
                <img className="social-midia-icon" alt="instagram" src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png?ga=GA1.1.2089675641.1676983403&track=ais" ></img>
                <img className="social-midia-icon" alt="facebook" src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png?ga=GA1.1.2089675641.1676983403&track=ais" ></img>
                <img className="social-midia-icon" alt="twitter" src="https://cdn-icons-png.flaticon.com/128/3670/3670211.png?ga=GA1.1.2089675641.1676983403&track=ais" ></img>
            </div>
            <p className="adress">Centro / Copacabana / Leblon / Tijuca / Ipanema</p>
            <p>Página desenvolvida por Tayane Cristina em 25 de setembro de 2023 - créditos de imagem a freepik e pixels</p>
        </footer>
    </div>
};

export default Style;