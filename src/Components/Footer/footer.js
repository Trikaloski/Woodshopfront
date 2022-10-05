import React from 'react';
import './footer.css';
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
class Footer extends React.Component {
render() {
    return (
      <>
        <body>
            <footer class="pie-pagina">
                <div class="grupo-1">
                    <div class="box">
                        <figure>
                            <a href="#">
                                <img src="./img/Camion.png" alt="Camion"/>
                            </a>
                        </figure>
                    </div>
                    <div class="box">
                        <h2>SOBRE NOSOTROS</h2>
                        <p>Somos una empresa que se dedica a producir juguetes de madera artesanales</p>
                        <p>Nos enfocamos en que nuestros productos sean de la mayor calidad posible para generar un entretenimiento sin limites</p>
                    </div>
                    <div class="box">
                        <h2>SEGUINOS</h2>
                        <div class="red-social">
                            <a href="#" class=""><FaFacebookF/></a>
                            <a href="#" class=""><FaInstagram/></a>
                            <a href="#" class=""><FaTwitter/></a>
                            <a href="#" class=""><FaYoutube/></a>
                        </div>
                    </div>
                </div>
                <div class="grupo-2">
                    <small>&copy; 2022 <b>Woodshop</b> - Todos los Derechos Reservados.</small>
                </div>
            </footer>
        </body>
      </>
    );
  }
}
export default Footer
