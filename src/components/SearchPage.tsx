import { Button, Form, Row } from "react-bootstrap";
import MyNavbar from './MyNavbar';
import MyJumbotron from "./MyJumbotron";
import { ChangeEvent, useState } from "react";
import DropdownItem from "./DropdownItem";

const SearchPage = () => {
    const [queryString, setQueryString] = useState("")
    const [data, setData] = useState<any[]>([])
    const baseString: string = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

    const handleSearchChange = (event: ChangeEvent) => {
        const target = event.target as HTMLTextAreaElement

        if (target) {
            setQueryString(target.value)
            console.log(queryString)
        }
    }

    const onSearch = async () => {
        try {
            const response: Response = await fetch(baseString + queryString)

            if (response.ok) {
                const decoded = await response.json()
                console.log("type is: ", typeof(decoded))
                console.log(decoded.data)
                const decodedArray: Array<object> = decoded.data
                setData(decodedArray)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <MyNavbar />
            <MyJumbotron />
            <Form className="ml-5">
                <Row>
                <textarea value={queryString} onChange={handleSearchChange} autoComplete="off" placeholder=" Search for a song or an artist" style={{borderRadius: "5px", width: "800px", height: "40px", display: "block", marginLeft: "250px", outline: "none", resize: "none"}}/>
                <Button className="ml-2" variant="outline-light" onClick={onSearch}>Search</Button>
                </Row>
            </Form>
            {data && data.map(result => {
                    return <DropdownItem picture={result.album.cover_small} title={result.title} artist={result.artist.name} />
            })}
        </div>
    )
  }
  
export default SearchPage;