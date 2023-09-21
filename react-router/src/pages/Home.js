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
        
    </div>
};

export default Home;