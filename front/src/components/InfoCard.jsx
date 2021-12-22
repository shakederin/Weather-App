import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
export default function InfoCard(props){
    const sunrise = new Date(props.data.sys.sunrise * 1000).toString().substring(15, 24);
    const sunset = new Date(props.data.sys.sunset * 1000).toString().substring(16, 24);
    const wind = props.data.wind.speed
    const temp = (props.data.main.temp).toString().substring(0,4)
    const tempMax = props.data.main.temp_max.toString().substring(0,4)
    const tempMin = props.data.main.temp_min.toString().substring(0,4)
    const icon = props.data.weather[0].icon
    return(
        <Card className="card" >
            <Card.Body className="cardBody">
                <Card.Title className="title">{props.data.name}</Card.Title>
                <Card.Text className="temp">{temp}℃</Card.Text>
                <Card.Img variant="top" className="img" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            </Card.Body>
            <ListGroup  className="list-group-flush">
                <ListGroupItem className="params"> Feels-Like {props.data.main.feels_like}</ListGroupItem>
                <ListGroupItem className="params"> Wind-Speed - {wind}</ListGroupItem>
                <ListGroupItem className="params">{tempMin}℃ - {tempMax}℃</ListGroupItem>
                <ListGroupItem className="params">Sunrise {sunrise}</ListGroupItem>
                <ListGroupItem className="params">Sunset {sunset}</ListGroupItem>
            </ListGroup>
            
        </Card>
    )
}