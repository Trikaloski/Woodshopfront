import React from 'react';
import './navbar.css';
class Navbar extends React.Component {
  render() {
    return (
      <>
        <body>
          <nav>
            <a href="#" class="nav-enlace">Inicio</a>
            <a href="#" class="nav-enlace">Nosotros</a>
            <a href="#" class="nav-enlace">Productos</a>
            <a href="#" class="nav-enlace">Contacto</a>
          </nav>
        </body>
      </>
    )
  }
}
export default Navbar;