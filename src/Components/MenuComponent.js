import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderMenuItem({ dish, onClick }) {
        return(
                <Card>
                    <Link to={`/menu/${dish.id}`} >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
        );
    }

    const Menu = (props, onClick) => {

        const menu = props.dishes.map((dish) =>{
            return(
                <div key={dish.id} className="col-12 md-5">
                    <Card onClick={() => onClick(dish.id)}>
                        <CardImg className="img-fluid" src={dish.image} alt={dish.name}/>
                    </Card>
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });

        return( 
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                        {menu}
                </div>
            </div>
        );
    }
export default Menu;