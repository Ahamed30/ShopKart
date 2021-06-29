import React from 'react'
import { Card,  CardText, CardBody} from 'reactstrap';
import './ProductList.css';
import { MdAddShoppingCart } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
 
const ProductCard = (props) =>{    
    const{ addToCart, id, inCart } = props;
    return (
        <div>
            <Card className="mt-3">
                <img className="card-img-top"  width="100%" src={props.link} alt="Img" />
                <CardBody className="h-100">
                    <CardText>{props.name}</CardText>
                    <CardText>${props.price}</CardText>
                    <div>
                        <div className="element1">
                            <p className="rating rating3">{props.rating}</p>
                        </div>
                        <div className="element2">
                        {(inCart === false)?
                            <button onClick={() => addToCart(id)} type="button" className="btnProduct default1">
                                <MdAddShoppingCart />
                            </button>
                            :<button type="button" className="btnProduct default1">
                            <FaCartArrowDown />
                            </button>
                        }
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
export default ProductCard
