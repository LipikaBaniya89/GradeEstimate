import {useState, useRef, useEffect} from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import {data} from './data';

const styles = {
    textCenter: {textAlign: 'center'},
    textRight: {textAlign: 'right'},
    textLeft: {textAlign:'left'}
};

function List({data, setDataItems}) {
    const [dataRows, setDataRows] = useState();
    useEffect(() => {
        const z= data.map((v,i) => {
            return (
                <tr key={i}>
                    <td style={styles.textLeft}>{v.year}</td>
                    <td style={styles.textLeft}>{v.sem}</td>
                    <td style={styles.textLeft}>{v.name}</td>
                    <td style={styles.textLeft}>{v.subject}</td>
                    <td style={styles.textLeft}>{v.grade}</td>
                </tr>
            );
        });
        setDataRows(z);
    }, [data])

    const clearTable = () => {
        setDataItems([]);
        setDataRows([]);
      }; 

    return (
        <div style={{backgroundColor: "#F5F5F5", paddingBottom:"30px"}}>
        <Container className="center-alignment">
            <Row>
                <Col>
                <h3 style={{paddingTop:"20px", paddingBottom:"20px"}}>GradeList</h3>
                </Col>
            </Row>
            <div style={{backgroundColor:"#FAFAFA", borderRadius:"15px", width:"650px"}}>
                <Table  style={{width:"650px"}}>
                <thead style={{backgroundColor:'#C1C1C1', color:"#FAFAFA"}}>
                    <tr>
                        <th>Year</th>
                        <th>Semester</th>
                        <th>Course Code</th> 
                        <th>Course Name</th>
                        <th>Grade</th> 
                    </tr>
                </thead>
                <tbody>{dataRows}</tbody>
            </Table>
            </div>
            <Col>
                <Button className="button-size" backgroundColor="#87CEEB" onClick={clearTable}>
                Clear
                </Button>
            </Col>
        </Container>
        </div>
    );
}

export default List;