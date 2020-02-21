import React from "react";
import { Card, CardText, CardBody, CardTitle, CardHeader } from 'reactstrap';
import './App.css';

const StarCard = (props) => {

    console.log(props)
    return (
        <Card body outline color="danger" body width="30%" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardBody>
                <CardHeader tag="h3">
                    <CardTitle>{props.name}</CardTitle>
                </CardHeader>
                <CardText>
                    Birth Year: {props.age} {<br></br>}
                    Home World: {props.homeworld} {<br></br>}
                    Gender: {props.gender} {<br></br>}
                    Height: {props.height} {<br></br>}
                    Mass: {props.mass} {<br></br>}
                    Hair-Color: {props.hair} {<br></br>}
                    Eye-Color: {props.eye} {<br></br>}
                    Skin-Color: {props.skin} {<br></br>}
                </CardText>
            </CardBody>
        </Card>
    );
};

export default StarCard;