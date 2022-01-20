import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Navbar } from "react-bootstrap";
import './App.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import List from "./List";
import useLocalStorage from 'react-localstorage-hook'

function App() {
  const yearRef= useRef();
  const semRef = useRef();
  const idRef=useRef();
  const subjectRef=useRef();
  const freeRef=useRef();
  const gradeRef=useRef();

  // const [dataItems, setDataItems] =useState([]);
  const [dataItems, setDataItems] = useLocalStorage("dataItems",[]);
  
    const yearList = [
      {idYear : "y001" , name: 2016},
      {idYear : "y002" , name: 2017},
      {idYear : "y003" , name: 2018},
      {idYear : "y004" , name: 2019},
      {idYear : "y005" , name: 2020},
      {idYear : "y006" , name: 2021},
      {idYear : "y007" , name: 2022},
    ];
  
    const semList = [
      {idSem : "s001", nameSem: 1},
      {idSem : "s002", nameSem: 2},
      {idSem : "s003", nameSem: 3},
    ];
  
    const idList = [
      {id: "i001", name: 2231 , subject: "Information Technology"},
      {id: "i002", name: 2130, subject: "Systems Science"},
      {id: "i003", name: 1121, subject: "Basic Mathematics and Statistics"},
      {id: "i004", name: 1201, subject: "Computer Programming 1"},
      {id: "i005", name: 14031, subject: "Professional Ethics Seminar 1"},
      {id: "i006", name: 1101, subject: "Introduction To Business"},
    ]
  
    const addItem = () => {
      if (idRef.current.value == "") {
        alert("Item name is empty");
        return;
      }
  
    const sId= idRef.current.value
    const subject = idList.find( e => e.id == sId)
  
    var subjectObj = {
      year: yearRef.current.value,
      sem: semRef.current.value,
      sId: sId,
      name: subject.name,
      subject: subjectRef.current.value,
      grade: gradeRef.current.value,
    };
  
    dataItems.push(subjectObj);
    setDataItems([...dataItems]);
    //setDataItems(dataItems);
  };
  
    const productChange = (e) => {
      const sId= idRef.current.value;
      const subject=idList.find((e) => e.id == sId);
      subjectRef.current.value= subject.subject
    }
  
    const optionYear= yearList.map ( v=> {
      return <option value={v.id} key={v.id}>{v.name}</option>
    })
  
    const optionSem = semList.map ( v=> {
      return <option value={v.idSem} key={v.id}>{v.nameSem}</option>
    })
  
    const optionID = idList.map (v => {
      return <option value={v.id} key={v.id}>{v.name}</option>
    })
  
    
    return (
    <div style={{backgroundcolor: "#F5F5F5", paddingBottom:"30px"}}>
      <Container>
        <img src="/image/logo.png"></img>
          <div className="wrapper" style={{ display: 'block', width: 1000}}>
            <Tabs className="center-alignment" defaultActiveKey="second">
              <Tab eventKey="first" title="Estimate Grade" >
                <h3 className="center-alignment" style={{paddingTop:"20px", paddingBottom:"20px"}}>Add desired Courses</h3>
                  <div className="center-alignment" style={{backgroundColor:"#F5F5F5", marginRight:"10px", borderRadius:"15px"}}>
                    <Row>
                      <Col xs={12} >
                        <Form className="left-alignment"> 
                          <Form.Group className="mb-3" controlId="formYear">
                            <Form.Label>Year</Form.Label>
                              <Form.Select 
                                aria-label="Default select example" style={{backgroundcolor:'#C1C1C1'}} ref={yearRef} >
                                {optionYear}
                              </Form.Select>
                            </Form.Group>
                    
                          <Form.Group className="mb-3" controlId="formSem">
                            <Form.Label>Semester</Form.Label>
                              <Form.Select 
                                aria-label="Default select example" style={{backgroundcolor:'#C1C1C1'}}ref={semRef} >
                                {optionSem}
                              </Form.Select>  
                          </Form.Group>
            
                        <Form.Group className="mb-3" controlId="formYear">
                          <Form.Label>Course ID</Form.Label>
                            <Form.Select 
                              aria-label="Default select example" 
                              style={{backgroundcolor:'#C1C1C1'}}
                              ref={idRef} 
                              onChange={productChange}
                            >
                            {optionID}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formSubject">
                            <Form.Label> Course Name  </Form.Label>
                            <Form.Control style={{backgroundcolor:'#C1C1C1'}} type="text" placeholder="Add desired courses " ref={subjectRef}/>
                          </Form.Group>
              
                          <Form.Group className="mb-3" controlId="formElective">
                            <Form.Label> Free Elective </Form.Label>
                            <Form.Control style={{backgroundcolor:'#C1C1C1'}} className="form-control" type="text" placeholder="Add free elective courses" ref={freeRef}/>
                          </Form.Group>
           
                          <Form.Group className="mb-3" controlId="formGrade">
                              <Form.Label>Grade</Form.Label>
                              <Form.Control style={{backgroundcolor:'#C1C1C1'}} className="form-control" type="text" placeholder="Estimate your grade" ref={gradeRef}/>
                          </Form.Group> 
  
                        <Button className="button-size" backgroundcolor="#87CEEB" onClick={addItem }>
                          Add
                        </Button>
                      </Form>
                    </Col>
                  </Row>
              </div>
              </Tab>
                <Tab eventKey="second" title="Grade List">
                  <Col>
                    <div><List/></div>
                    {/* <List data={dataItems} setDataItems={setDataItems}/> */}
                  </Col>
              </Tab>
            </Tabs>
          </div>
        </Container>
        </div>
         );
 
    }
      export default App;
     
