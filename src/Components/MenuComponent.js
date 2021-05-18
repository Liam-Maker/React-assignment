import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';

    function RenderMenuItem({dish}) {
        return(
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
        );
    }

    const Menu = (props, onClick) => {
        const menu = props.dishes.map((dish) =>{
            return(
                <div key={dish.id} className="col-12 md-5">
                    <Card onClick={() => onClick(this.dish.id)}>
                        <CardImg className="img-fluid" src={dish.image} alt={dish.name}/>
                    </Card>
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );
        });

        return( 
            <div className="container">
                <div className="row">
                        {menu}
                </div>
            </div>
        );
    }
export default Menu;