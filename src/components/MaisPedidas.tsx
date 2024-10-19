import React from 'react'
import BoxMusic from '../components/BoxMusic.jsx'
import '../components/maisPedidas.css'


function MaisPedidas(){
    return(

        <section className='mais-pedidas'>
            <h1>Mais Pedidas</h1>
            <div>
            <BoxMusic artista="Zé Nétro & Cristiano" musica="Deu Moral" link="https://www.youtube.com/watch?v=CH8-4BbYSf4&pp=ygUJZGV1IG1vcmFs"/>
            <BoxMusic artista="Jorge & Matheus" musica="Dói" link="https://www.youtube.com/watch?v=CH8-4BbYSf4&pp=ygUJZGV1IG1vcmFs"/>
            </div>

        </section>
    )
}

export default MaisPedidas;