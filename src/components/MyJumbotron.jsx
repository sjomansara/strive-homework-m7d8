import { Jumbotron, Container } from "react-bootstrap";

const MyJumbotron = () => {
    return (
        <Jumbotron id="bgImg" style={{backgroundColor: "black", color: "white"}}>
        <Container>
          <h1 className="text-center">Welcome to <span style={{color: "red"}}>Music Search Engine</span></h1>
        </Container>
      </Jumbotron>
    )
}

export default MyJumbotron