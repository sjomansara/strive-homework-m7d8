import { Form } from "react-bootstrap";
import MyNavbar from './MyNavbar';
import MyJumbotron from "./MyJumbotron";

const SearchPage = () => {
    return (
        <div>
        <MyNavbar />
        <MyJumbotron />
        <Form className="">
            <Form.Control type="text" autoComplete="off" placeholder="Search for a song" style={{width: "800px", marginLeft: "auto", marginRight: "auto"}}/>
        </Form>
        </div>
    )
  }
  
  export default SearchPage;