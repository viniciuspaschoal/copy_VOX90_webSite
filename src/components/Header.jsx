import logo from "../assets/logo.png"
import './header.css'

function Header(){
    return(
        <header>

            <img class="img-logo" src={logo} alt=""/>

            <nav class="menu">
                <a href="">Promoções</a>
                <a href="">Blogs</a>
                <a href="">Programação</a>
                <a href="">Anuncie</a>
            </nav>

            <aside class="time">
                <i class="fa-regular fa-clock"></i>
                <p>12:00</p>
            </aside>

        </header>
    )
}

export default Header