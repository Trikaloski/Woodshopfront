import React from 'react';
import './body.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class Body extends React.Component {
    render() {
        return (
            <>
                <body>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                </body>
            </>
        )
    }
}
export default Body;