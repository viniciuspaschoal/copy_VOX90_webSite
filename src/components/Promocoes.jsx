import BoxPromo from '../components/BoxPromo.jsx'
import './promocoes.css'

function Promocoes(){
    return(
        <section className='promo-vox'>
            <h1 className='title-section'>Promoções da VOX</h1>

            <div className='divPromos'>
                <div className='box-promo'>
                    <BoxPromo/>
                    <BoxPromo/>
                    <BoxPromo/>
                </div>

                <a className='verMais-promo' href="">Ver Mais</a>
                </div>
        </section>
        
    )
}

export default Promocoes