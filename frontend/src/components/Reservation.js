import React,{useState} from 'react';
import { Container,Form,Row,Col }from 'react-bootstrap';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";

export const Reservation = () => {
    const [username,setUsername] = useState('');
    const [table,setTable] = useState('');
    const [date,SetDate] = useState(new Date());
    const [time,setTime] = useState('11:00')
    return (
        <Container fluid>
            <div >
            <h1>Reservation</h1>
            <h2>Welcome {username}</h2>

            <Form >
                <Form.Row>
                <Col sm={4}>
            <Form.Control
        as="select"
        className="sm-1"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Choose table</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </Form.Control>
      </Col>
      </Form.Row>
      
      <DatePicker selected={date} onChange={(date) => SetDate(date)}/><br />
        <TimePicker value={time} onChange={(time) => setTime(time)} />
            </Form>
            </div>
        </Container>
    )
}
