import React from 'react'
import './Table.css'
const Table = () => {
    return <div className='table-page'>
        <div className='table-prices'>
            <h1 className='h1-table'>Consulte nossos valores</h1>
            <table>
                <tr>
                    <th>Cortes</th>
                    <th>Preços</th>
                </tr>
                <tr>
                    <th>Corte tesoura + máquina</th>
                    <th>R$29,99</th>
                </tr> 
                <tr>
                    <th>Corte Navalhado</th>
                    <th>R$29,99</th>
                </tr>
                <tr>
                    <th>Corte Pigmentado</th>
                    <th>R$29,99</th>
                </tr>
                <tr>
                    <th>Corte + Alisamento</th>
                    <th>R$29,99</th>
                </tr>  
                <tr>
                    <th>Corte + Luzes</th>
                    <th>R$29,99</th>
                </tr> 
                <tr>
                    <th>Corte + Barba</th> 
                    <th>R$19,99</th> 
                </tr> 
                <tr>
                    <th>Alisamento</th>
                    <th>R$19,99</th>
                </tr> 
                <tr>
                    <th>Luzes</th>
                    <th>R$19,99</th>
                </tr> 
                <tr>
                    <th>Desenho</th>
                    <th>R$19,99</th>
                </tr> 
                <tr>
                    <th>Pezinho</th>
                    <th>R$9,99</th>
                </tr> 
                <tr>
                    <th>Sombrancelha</th>
                    <th>R$9,99</th>
                </tr>
            </table>
        </div>
        <div className='list-of-benefits'>
            <span className='text-benefits'>Nossa estrutura conta com:</span>
            <ul className='benefits-ul'>
                <li className='benefit'>Ambiente climatizado</li>
                <li className='benefit'>Sala de jogos com espera</li>
                <li className='benefit'>Cartão fidelidade</li>
                <li className='benefit'>Atendimento especial com bebida de cortesia</li>
                <li className='benefit'>Fácil acesso</li>
            </ul>
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

export default Table;