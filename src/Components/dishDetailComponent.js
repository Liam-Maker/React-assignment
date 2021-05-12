import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const list = this.props.dish.comments.map((comment) => {
            return (
                <div class="container">
                <div>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
                </div>
            );
        })
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.data.image} alt={this.props.data.name} />
                        <CardBody>
                            <CardTitle>{this.props.data.name}</CardTitle>
                            <CardText>{this.props.data.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {list}
                </div>
            </div>
        );
    }
}
export default DishDetail;