import './boxPromo.css'
import promo1 from '../assets/promo1.jpg'

function Promocoes(){
    return(

        <div className='atual-promocao'>

            <img  src={promo1} alt="" />
            <div className='title-promotion'>
                <p className='promote-title'>Segunda - Butique de Carnes e Conveniência Terra América</p>
            </div>

            <div className='data-button'>
                <div className='validade'>
                <p>válido até</p>
                <p>31/12/2024</p>
                </div>
                <a className='participe-but' href="">PARTICIPE</a>
            </div>
            

        </div>
    )
}

export default Promocoes