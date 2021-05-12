import React,{Component} from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';

class Menu extends Component{

    constructor(props){
        super(props);

    }

    render() {

        const menu = this.props.dishes.map((dish) =>{
            return(
                <div key={dish.id} className="col-12 md-5">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log('Menu Component render is invoked');

        return( 
            <div className="container">
                <div className="row">
                        {menu}
                </div>
            </div>
        );
    }
}
export default Menu;