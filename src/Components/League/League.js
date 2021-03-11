import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {  useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './League.css'
const League = (props) => {
    const { idLeague, strLeague, strSport, strBadge } = props.leagues;
    const history = useHistory();
    const handleExlore = (idLeague) => {
        const url = `leagueDteails/${idLeague}`;
        history.push(url);
    }
    return (
        <div>
            <div className="row league">
                <div className="col-md-4 m-5">
                    <Card style={{ width: '18rem' }} className="p-4">
                        <Card.Img variant="top" src={strBadge} />
                        <Card.Body>
                            <Card.Title>{strLeague}</Card.Title>
                            <Card.Text>
                                Sports type: {strSport}
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleExlore(idLeague)}>Explore</Button>


                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>

    );
};

export default League;