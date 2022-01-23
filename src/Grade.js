import {useState, useRef, useEffect, Component} from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import './App.css'

    
const styles = {
    textCenter: {textAlign: 'center',  fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'},
    textRight: {textAlign:'right'},
    textLeft: {textAlign:'left', fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'}
};

function Grade({data, setDataItems}) {
    const [dataRows, setDataRows] = useState();
    const [dataTotal,setDataTotal] = useState(0);

    useEffect(() => {
        let finalScore=0;
        let total =0;
        let credit=3;
        const z= data.map((v,i) => {

            if (v.grade=="A") {
                v.grade=4.0;
            } 
            if (v.grade=="A-") {
                v.grade= 3.75;
            } 
            if (v.grade=="B+") {
                v.grade=3.25;
            } 
             if (v.grade=="B") {
                v.grade=3.0;
            } 
            if (v.grade=="B-") {
                v.grade=2.75;
            } 
            if (v.grade=="C+") {
                v.grade=2.25;
            } 
            if (v.grade=="C") {
                v.grade=2;
            } 
            if (v.grade=="C-") {
                v.grade=1.75;
            } 
            if (v.grade=="D") {
                v.grade=1.0;
            } 
            if (v.grade=="F"){
                v.grade=0.0;
            }

            finalScore+=v.grade * credit;
            total=finalScore/(credit*data.length);
            return (
                <tr key={i}>
                    <td style={styles.textLeft}>{v.year}</td>
                    {/* <td style={styles.textLeft}>{v.name}</td> */}
                    <td style={styles.textLeft}>{v.subject}</td>
                    <td style={styles.textLeft}>{v.grade}</td>
                </tr>
            );
        });
        setDataRows(z);
        setDataTotal(total);
    }, [data])

    const clearTable = () => {
        setDataItems([]);
        setDataRows([]);
      }; 

    const formatNumber = (x) => {
        x = Number.parseFloat(x)
        return x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

        return (
            <div style={{backgroundColor: "#F5F5F5", paddingBottom:"30px"}}>
            <Container className="center-alignment">
                <Row>
                    <Col>
                    <h3 style={{paddingTop:"20px", paddingBottom:"10px"}}>ESTIMATE GRADE</h3>
                    </Col>
                </Row>
                <div style={{backgroundColor:"#FAFAFA", borderRadius:"20px", width:"650px"}}>
                    <Table  style={{width:"650px"}}>
                    {/* <thead style={{backgroundColor:'#C1C1C1', color:"#000000", borderRadius:"15px"}}>
                        <tr>
                            <th>Year</th>
                            <th>Semester</th>
                            <th>Course Code</th> 
                            <th>Course Name</th>
                            <th>Grade</th> 
                        </tr>
                    </thead> */}
                    <thead>
                        <tr> 
                            <th style={styles.textLeft}>CGPA</th>
                            <th style={styles.textLeft}>{(formatNumber(dataTotal))}</th>
                            <th colSpan={3}></th>
                        </tr>
                    </thead>
                    <tbody>{dataRows}</tbody>
                </Table>
                </div>
                <Col>
                    <Button className="button-size" backgroundcolor="#87CEEB" onClick={clearTable}>
                    Clear
                    </Button>
                </Col>
            </Container>
            </div>
        );
   
}

export default Grade;

