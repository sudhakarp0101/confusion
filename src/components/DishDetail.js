import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


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
        <Card>
            <CardImg src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}
const DishDetail = (props) => {
    if (props.dish !== null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (<span></span>)
    }
}


export default DishDetail; 
