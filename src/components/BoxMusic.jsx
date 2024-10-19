import './boxMusic.css'

function BoxMusic({artista, musica, link}){
    return(

        <div>
            <div className='imgBoxMusic'> 
                <p>1</p>
            </div>
            
            <p className='nameArtist'>{artista}</p>
            <p className='nameMusic'>{musica}</p>

            <div className='botao-pai'>
                <button className='botao'>
                    <a href={link}>Ouça agora</a>
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>

        </div>
    )
}

export default BoxMusic;