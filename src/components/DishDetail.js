import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';



function RenderComments({ comments }) {
    if (comments != null) {
        const comments1 = comments.map((comm) => {
            return (
                <div key={comm.id} >
                    <p>{comm.comment}</p>
                    <p>--{comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comm.date)))}</p>
                </div>
            );
        });
        return (<div className="ml-3">
            <h1>Comments</h1>
            {comments1}
        </div>);
    } else {
        return (<div></div>)
    }
}
function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
const DishDetail = (props) => {
    if (props.dish !== null) {
        return (<div className="container">
            <div className="row ">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>
        </div >
        )
    }
    else {
        return (<span></span>)
    }
}


export default DishDetail; 
