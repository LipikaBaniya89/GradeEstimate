import { useState, useRef, useEffect } from "react";
import './courses.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Table, Button } from "react-bootstrap";


const styles = {
    textCenter: {textAlign: 'center'},
    textRight: {textAlign: 'right'},
};

function courses({data, setDataItems}) {
    const [dataRows, setDataRows] = useState();

    useEffect(() => {
        const z = data.map ((v, i) => {
            return (
                <tr key={i}>
                    <td className= {styles.textCenter}>
                    </td>
                    <td style={styles.textRight}>{v.year}</td>
                    <td style={styles.textRight}>{v.sem}</td>
                    <td style={styles.textRight}>{v.name}</td>
                    <td style={styles.textRight}>{v.subject}</td>
                    <td style={styles.textRight}>{v.grade}</td>
                </tr>
            );
        });
        setDataRows(z);
    },[data]);

    return (
        <Container>
            <Row>
                <Col xs={5} style={{backgroundColor:'#D3D3D3'}}>
                    <h1>Grade List</h1>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>{dataRows}</tbody>
            </Table>
        </Container>

    );

}

export default courses;