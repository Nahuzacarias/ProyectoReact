import "./Item.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, description,category }) => {
    return (
        <Card className="card1 card2" style={{ width: "19rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body className="color1">
                <Card.Title>{name}</Card.Title>
                <Card.Text className="color3">{price}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Link to={`/item/${id}`}> <Button variant="primary">Ver Detalles</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default Item;
