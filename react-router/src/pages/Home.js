import './Home.css'

const Home = () => {
    return <div >
        <div className="first-page full-page">
            <h1>Welcome to <span className='word-key'>Gentleman's</span> barbershop, create your own style and become a <span className='word-key'>new man</span> with us</h1>
            <img 
                className="image-home"
                src="https://img.freepik.com/fotos-gratis/jovem-na-barbearia-aparando-cabelo_1303-26256.jpg?w=1380&t=st=1695328003~exp=1695328603~hmac=fb49605db355b1dd93087da9b09e23ccb8c29623aa055b0d42d0c9b3a7a8e2e4" 
                alt="imagem-de-desenvolvedor">
            </img>
        </div>
        <div className='full-page second-page'>
            <h2 className="home-h2">choose who you want to be</h2>
            <div className='card-image-styles'>
                <button className="button-go-back">-</button>
                <img className="card-one" src='https://cdn-icons-png.flaticon.com/128/4734/4734016.png?ga=GA1.1.2089675641.1676983403&track=ais' alt='one'></img>
                <img className="card-two" src='https://cdn-icons-png.flaticon.com/128/4734/4734016.png?ga=GA1.1.2089675641.1676983403&track=ais' alt='two'></img>
                <img className="card-three" src='https://cdn-icons-png.flaticon.com/128/4734/4734016.png?ga=GA1.1.2089675641.1676983403&track=ais' alt='three'></img>
                <button className="button-go-back">+</button>
            </div>
            <span className='card-counter'>1/3</span>
        </div>
        <div className="third-page full-page">
            <div className="invite-text">
                <h3 className="home-h3">Come <span className="word-key">visit us</span> and <span className="word-key">be part</span> of our community</h3>
                <button className="button-invite"><img className="invite-img-whats" src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png?ga=GA1.1.2089675641.1676983403&track=ais" alt="WhatsApp icon"/> WhatsApp</button>
            </div>
            <div className="gallery-image">
                <img className="img-glr" src="https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="gallery"></img>
                <img className="img-glr" src="https://images.pexels.com/photos/2521978/pexels-photo-2521978.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="gallery"></img>
                <img className="img-glr" src="https://images.pexels.com/photos/2014809/pexels-photo-2014809.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="gallery"></img>
                <img className="img-glr" src="https://images.pexels.com/photos/1804638/pexels-photo-1804638.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="gallery"></img>
                <img className="img-glr" src="https://images.pexels.com/photos/2076932/pexels-photo-2076932.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="gallery"></img>
                <img className="img-glr" src="https://images.pexels.com/photos/1813346/pexels-photo-1813346.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="gallery"></img>
                <img className="img-glr" src="https://images.pexels.com/photos/2068672/pexels-photo-2068672.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="gallery"></img>
            </div>
        </div>
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

export default Home;