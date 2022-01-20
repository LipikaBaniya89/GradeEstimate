import {useState, useRef, useEffect, Component} from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { dataContents } from "./data/data.js";
// import Dataform1 from "./data/data-form.js";
import './App.css'


// var gradesList= dataContents.subjects;

// function List() {
//     useEffect(() =>{
//         return (                                                                               
//             gradesList.map((s,i) => {
//                 <tr key={i}>
//                     <div>
//                     <div>
//                         <div>{s.gradesList_code}</div>
//                         <div>{s.gradesList_name}</div>
//                     </div>
//                 </div>

//                 </tr>
                
//              })      
//         )
//     }
//     )
        
// }

export default List;

    



const styles = {
    textCenter: {textAlign: 'center'},
    textRight: {textAlign: 'right'},
    textLeft: {textAlign:'left'}
};

const  datas = dataContents;

function List({data, setDataItems}) {
    const [dataRows, setDataRows] = useState();
    useEffect(() => {
        const z= datas.map((v,i) => {
            return (
                <tr key={i}>
                    {/* <td style={styles.textLeft}>{v.year}</td>
                    <td style={styles.textLeft}>{v.sem}</td> */}
                    <td style={styles.textLeft}>{v.name}</td>
                    <td style={styles.textLeft}>{v.code}</td>
                    {/* <td style={styles.textLeft}>{v.subject}</td>
                    <td style={styles.textLeft}>{v.grade}</td> */}
                </tr>
            );
        });
        setDataRows(z);
    }, [datas])

    const clearTable = () => {
        setDataItems([]);
        setDataRows([]);
      }; 

    // const obj = JSON.parse(data1)
    // console.log(obj)

        return (
            <div style={{backgroundcolor: "#F5F5F5", paddingBottom:"30px"}}>
            <Container className="center-alignment">
                <Row>
                    <Col>
                    <h3 style={{paddingTop:"20px", paddingBottom:"10px"}}>GradeList</h3>
                    <h2 style={{paddingBottom:"11px"}}>CGPA:</h2>
                    </Col>
                </Row>
                <div style={{backgroundcolor:"#FAFAFA", borderRadius:"15px", width:"650px"}}>
                    <Table  style={{width:"650px"}}>
                    <thead style={{backgroundcolor:'#C1C1C1', color:"#FAFAFA"}}>
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
                    <Button className="button-size" backgroundcolor="#87CEEB" onClick={clearTable}>
                    Clear
                    </Button>
                </Col>
            </Container>
            </div>
        );
   
}

