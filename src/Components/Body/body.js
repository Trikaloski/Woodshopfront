import React from 'react';
import './body.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class Body extends React.Component {
    render() {
        return (
            <>
                <body>
                    <header class="bodydefault">
                        <h2>Productos</h2>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./img/Juguetes.png" />
                            <Card.Body>
                                <Card.Title>Juguetes</Card.Title>
                                <Card.Text>
                                    Todo tipo de juguetes...
                                </Card.Text>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./img/Decoración.png" />
                            <Card.Body>
                                <Card.Title>Decoración</Card.Title>
                                <Card.Text>
                                    Artículos decorativos, souvenires, carteles...
                                </Card.Text>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./img/Personalizados.png" />
                            <Card.Body>
                                <Card.Title>Personalizados</Card.Title>
                                <Card.Text>
                                    Mostranos tu idea y nosotros la produciremos...
                                </Card.Text>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </header>
                </body>
            </>
        )
    }
}
export default Body;