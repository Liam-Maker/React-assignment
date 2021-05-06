import React,{Component} from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import{Media} from 'reactstrap';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) =>{
            return(
                <div key={dish.id} className="col-12 md-5">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return( 
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;