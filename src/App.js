import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './App.css';
// import BorderWrapper from 'react-border-wrapper'
import courses from "./Course/courses";
import useLocalStorage from 'react-localstorage-hook'
// import data from './data/data.json'

function App() {
  const yearRef= useRef();
  const semRef = useRef();
  const idRef=useRef();
  const subjectRef=useRef();
  const freeRef=useRef();
  const gradeRef=useRef();

  // const [dataItems, setDataItems] =useState([]);
  const [dataItems, setDataItems] = useLocalStorage("dataItems",[]);
  // const newdata=data.map ((data) => {
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
  
    const gradeList = [
      {idGrade: "g001", grade: "A"},
      {idGrade: "g002", grade: "A-"},
      {idGrade: "g003", grade: "B+"},
      {idGrade: "g004", grade: "B"},
      {idGrade: "g005", grade: "B-"},
      {idGrade: "g006", grade: "C+"},
      {idGrade: "g007", grade: "C"},
      {idGrade: "g008", grade: "C-"},
      {idGrade: "g009", grade: "D"},
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
      grade: gradeRef.current.value
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
      return <option value={v.idSem} key={v.idSem}>{v.nameSem}</option>
    })
  
    const optionGrade = gradeList.map ( v=> {
      return <option value={v.idGrade} key={v.idGrade}>{v.grade}</option>
    })
  
    const optionID = idList.map (v => {
      return <option value={v.id} key={v.id}>{v.name}</option>
    })
  
    
    return (
        <Container >
        <img src="/image/vms-2.jpg" alt=""/>
        <h1 className="left-alignment"> ADD DESIRED COURSES : </h1>
        <Row>
          <Col xs={5} >
  
          <Form className="left-alignment"> 
          <div className="side-by-side">
            <Form.Group className="mb-3" controlId="formYear">
                <Form.Label>Year</Form.Label>
                <Form.Select 
                  aria-label="Default select example"
                  style={{backgroundColor:'#F5F5F5'}} 
                  ref={yearRef} 
                >
                  {optionYear}
                </Form.Select>
              </Form.Group>
                    
            <Form.Group className="mb-3" controlId="formSem">
                <Form.Label>Semester</Form.Label>
                <Form.Select 
                  aria-label="Default select example" 
                  style={{backgroundColor:'#F5F5F5'}}
                  ref={semRef} 
                >
                  {optionSem}
                </Form.Select>  
              </Form.Group>
              </div>
  
              <Form.Group className="mb-3" controlId="formYear">
                <Form.Label>Course ID</Form.Label>
                <Form.Select 
                  aria-label="Default select example" 
                  style={{backgroundColor:'#F5F5F5'}}
                  ref={idRef} 
                  onChange={productChange}
                >
                  {optionID}
                  </Form.Select>
              </Form.Group>
  
           
            <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label> Course Name  </Form.Label>
                <Form.Control style={{backgroundColor:'#F5F5F5'}} type="text" placeholder="Add desired courses " ref={subjectRef}/>
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formElective">
                <Form.Label> Free Elective </Form.Label>
                <Form.Control style={{backgroundColor:'#F5F5F5'}} className="form-control" type="text" placeholder="Add free elective courses" ref={freeRef}/>
              </Form.Group>
              
            <Form.Group className="mb-3" controlId="formGrade">
                <Form.Label>Grade</Form.Label>
                <Form.Select 
                  aria-label="Default select example" 
                  style={{backgroundColor:'#F5F5F5'}}
                  ref={gradeRef} 
                >
                  {optionGrade}
                  </Form.Select>
            </Form.Group> 
  
              <Button className="button-size" variant="outline-dark" size ="60px" onClick={addItem }>
                Add
              </Button>
  
              </Form>
            </Col>
  
            <Col>
                <courses data={dataItems} setDataItems={setDataItems}/>
            </Col>
          </Row>
        </Container>
         );
 
    }
      export default App;
     
