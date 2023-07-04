import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const cards = [
    {
        img: "https://www.snehsattva.in/assets/img/bottle-image-slider-1440x792.jpg",
        title: "OUR VISION",
        description:
            "Provide healthy food ingredients to indians at affordable price",
    },
    {
        img: "https://www.snehsattva.in/assets/img/bottle-image-slider-1440x792.jpg",
        title: "OUR MISSION",
        description:
            "To help customers to live healthy life with affordable prices, by innovative manufacturing processes and quality management",
    },
    {
        img: "https://www.snehsattva.in/assets/img/bottle-image-slider-1440x792.jpg",
        title: "VALUES",
        description: `Integrity
        Innovation
        Customer Focus
        Best in Quality`,
    },
];
const Vision = () => {
    return (
        <>
            <h2>Vision, Mission and values</h2>
            <CardGroup>
                {cards.map((card, i) => (
                    <Card style={{ width: "18rem" }} key={i}>
                        <Card.Img variant="top" src={card.img} />
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.description}</Card.Text>
                    </Card>
                ))}
            </CardGroup>
        </>
    );
};

export default Vision;
