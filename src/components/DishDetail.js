import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

class DishDetail extends Component {
    render() {
        let dish = this.props.dish;
        const comments = dish.comments.map((comm) => {
            return (
                <div key={comm.id} >
                    <p>{comm.comment}</p>
                    <p>--{comm.author}, {comm.date}</p>
                </div>
            );
        });
        return (<div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="ml-3">
                <h1>Comments</h1>
                {comments}
            </div>
        </div>)
    }
}
export default DishDetail;