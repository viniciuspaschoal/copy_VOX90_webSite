import './heroSection.css'

import sabadou from '../assets/SABADOU.png'
import img_music from '../assets/music.jpg'

function HeroSection(){
    return(

        <section>
            <div class="propagandas">
                {/*<img class="images-propagandas" src={sabadou} alt="" />*/}

                <div class="container-music">
                    <div class="controle-playpause">

                        <div class="play-pause">
                            <i class="fa-solid fa-play"></i>
                        </div>

                        <div class="aoVivo">
                            <p>AO VIVO</p>
                        </div>

                    </div>

                    <div class="controler">

                        <div class="volume">
                                <i class="fa-solid fa-volume-high"></i>
                                <input type="range" min="0" max="100" value="100"/>
                                 
                        </div>
                    
                        <div class="cam-icon">
                            <i class="fa-solid fa-video"></i>

                        </div>

                        <div class="music">
                            <img src={img_music} alt="" />
                            <div>
                                <p class="name-music">A Culpa É Nossa - Ao Vivo</p>
                                <p>VOX MIX com MARCÃO</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>

    )
}

export default HeroSection