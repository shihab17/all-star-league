import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const League = (props) => {
    //  console.log(props.leagues)
    const { idLeague, strLeague, strSport, strBadge } = props.leagues;
    const history = useHistory();
    const handleExlore = (idLeague) => {
        const url =`clubDteails/${idLeague}`;
        history.push(url);
    }
    console.log(strLeague)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
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
    );
};

export default League;