import {useState, useRef, useEffect, Component} from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import './App.css'
import { FaTrash } from 'react-icons/fa';

    
const styles = {
    textCenter: {textAlign: 'center',  fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'},
    textRight: {textAlign:'right', fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'},
    textLeft: {textAlign:'left', fontSize: '14px' ,fontFamily:'Segoe UI', color:'#525050'}
};

var semCount= new Map();
var semCount1= new Map();
var semCount2=new Map();
var semCount3=new Map();
var semCount4=new Map();
var semCount5=new Map();
var semCount6=new Map();
var semCount7=new Map();


function Grade({data,setDataItems}){
    const [dataRows, setDataRows] = useState();
    const [dataTotal,setDataTotal] = useState(0);

    const [dataSem,setDataTotalSem] = useState(0);
    const [dataSem1,setDataTotalSem1] = useState(0);
    const [dataSem2,setDataTotalSem2] = useState(0);
    const [dataSem3,setDataTotalSem3] = useState(0);
    const [dataSem4,setDataTotalSem4] = useState(0);
    const [dataSem5,setDataTotalSem5] = useState(0);
    const [dataSem6,setDataTotalSem6] = useState(0);
    const [dataSem7,setDataTotalSem7] = useState(0);

    useEffect(() => {
        let finalScore=0;
        let total =0;
        let credit=3;

        let sem=0;
        let semFinal=0;
        let sem1=0;
        let semFinal1=0;
        let sem2=0;
        let semFinal2=0;
        let sem3=0;
        let semFinal3=0;
        let sem4=0;
        let semFinal4=0;
        let sem5=0;
        let semFinal5=0;
        let sem6=0;
        let semFinal6=0;
        let sem7=0;
        let semFinal7=0;

        const z= data.map((v,i) => {

            if (v.grade==="A") {
                v.grade=4.0;
            } 
            if (v.grade==="A-") {
                v.grade= 3.75;
            } 
            if (v.grade==="B+") {
                v.grade=3.25;
            } 
             if (v.grade==="B") {
                v.grade=3.0;
            } 
            if (v.grade==="B-") {
                v.grade=2.75;
            } 
            if (v.grade==="C+") {
                v.grade=2.25;
            } 
            if (v.grade==="C") {
                v.grade=2;
            } 
            if (v.grade==="C-") {
                v.grade=1.75;
            } 
            if (v.grade==="D") {
                v.grade=1.0;
            } 
            if (v.grade==="F"){
                v.grade=0.0;
            }
            
            if (v.year==="SEMESTER 2/2018") {
                semFinal+=v.grade * credit;
                semCount.set(semFinal)
                sem=semFinal/(credit*semCount.size);
                  
            }

            if (v.year==="SEMESTER 1/2019") {
                semFinal1+=v.grade * credit;
                semCount1.set(semFinal1)
                sem1=semFinal1/(credit*semCount1.size);
            }
      
            if (v.year==="SEMESTER 2/2019") {
                semFinal2+=v.grade * credit;
                semCount2.set(semFinal2)
                sem2=semFinal2/(credit*semCount2.size);
            }

            if (v.year==="SEMESTER 1/2020") {
                semFinal3+=v.grade * credit;
                semCount3.set(semFinal3)
                sem3=semFinal3/(credit*semCount3.size);
            }

            if (v.year==="SEMESTER 2/2020") {
                semFinal4+=v.grade * credit;
                semCount4.set(semFinal4)
                sem4=semFinal4/(credit*semCount4.size);
            }

            if (v.year==="SEMESTER 3/2020") {
                semFinal5+=v.grade * credit;
                semCount5.set(semFinal5)
                sem5=semFinal5/(credit*semCount5.size);
            }

            if (v.year==="SEMESTER 1/2021") {
                semFinal6+=v.grade * credit;
                semCount6.set(semFinal6)
                sem6=semFinal6/(credit*semCount6.size);
            }

            if (v.year==="SEMESTER 2/2021") {
                semFinal7+=v.grade * credit;
                semCount7.set(semFinal7)
                sem7=semFinal7/(credit*semCount7.size);
            }

            finalScore+=v.grade * credit;
            total=finalScore/(credit*data.length);
  
            if (v.grade===4.0) {
                v.grade="A";
            } 
            if (v.grade===3.75) {
                v.grade= "A-";
            } 
            if (v.grade===3.25) {
                v.grade="B+";
            } 
             if (v.grade===3.0) {
                v.grade="B";
            } 
            if (v.grade===2.75) {
                v.grade="B-";
            } 
            if (v.grade===2.25) {
                v.grade="C+";
            } 
            if (v.grade===2) {
                v.grade="C";
            } 
            if (v.grade===1.75) {
                v.grade="C-";
            } 
            if (v.grade===1.0) {
                v.grade="D";
            } 
            if (v.grade===0.0){
                v.grade="F";
            }

            return (
                <tr key={i}>
                     <td className={styles.textLeft}><FaTrash onClick={() => deleteClick(i)}/>
                    </td>
                    <td style={styles.textLeft}>{v.year}</td>
                    <td style={styles.textLeft}>{v.subject}</td>
                    <td style={styles.textLeft}>{v.grade}</td>
                </tr>
            );
        });
        // setDataRows(z);
        setDataRows(z)
        setDataTotal(total);

        setDataTotalSem(sem);
        setDataTotalSem1(sem1);
        setDataTotalSem2(sem2);
        setDataTotalSem3(sem3);
        setDataTotalSem4(sem4);
        setDataTotalSem5(sem5);
        setDataTotalSem6(sem6);
        setDataTotalSem7(sem7);
    }, [data])

    const clearTable = () => {
        setDataItems([]);
        setDataRows([]);
    }; 
    
  const deleteClick = (i) => {
    data.splice(i,1)
    setDataItems([...data])
  }

    const formatNumber = (x) => {
        x = Number.parseFloat(x)
        return x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

        return (
            <div style={{backgroundColor: "#F5F5F5", paddingBottom:"30px"}}>
            <Container className="center-alignment">
                <Row>
                    <Col>
                    <h3 style={{paddingTop:"20px", paddingBottom:"10px", fontSize: '15px' ,fontFamily:'Segoe UI', color:'#525050'}}>ESTIMATE GRADE</h3>
                    </Col>
                </Row>
                <div style={{backgroundColor:"#FAFAFA", borderRadius:"20px", width:"650px"}}>
                    <Table  style={{width:"650px"}}>
                    <thead>
                        <tr> 
                            <th style={styles.textLeft}>CGPA </th>
                            <th style={styles.textLeft}>  {(formatNumber(dataTotal))}</th>
                            <th colSpan={8}></th>
                        </tr>
                    </thead>
                    <tbody>{dataRows}</tbody>
                   
                </Table>
                </div>

                <div style={{backgroundColor:"#FAFAFA", borderRadius:"20px", width:"650px"}}>
                    <Table  style={{width:"650px"}}>
                    <thead>
                        <tr> 
                            <th style={styles.textLeft}> SEMESTER 2/2018 : {(formatNumber(dataSem))}</th>
                            <th colSpan={8}></th>
                        </tr>
                    </thead>
                  
                </Table>
                </div>

                <div style={{backgroundColor:"#FAFAFA", borderRadius:"20px", width:"650px"}}>
                    <Table  style={{width:"650px"}}>
                    <thead>
                        <tr > 
                            <th style={styles.textLeft}> SEMESTER 1/2019 : {(formatNumber(dataSem1))}</th>
                            <th style={styles.textRight}> SEMESTER 2/2019 : {(formatNumber(dataSem2))}</th>
                            <th colSpan={3}></th>
                        </tr >
                    </thead>
                </Table>
                </div>

                {/* <div style={{backgroundColor:"#FAFAFA", borderRadius:"20px", width:"650px"}}>
                    <Table  style={{width:"650px"}}>
                    <thead>
                        <tr > 
                            <th style={styles.textLeft}> SEMESTER 2/2019 : {(formatNumber(dataSem2))}</th>
                            <th colSpan={3}></th>
                        </tr >
                    </thead>
                </Table>
                </div> */}

                <div style={{backgroundColor:"#FAFAFA", borderRadius:"20px", width:"650px"}}>
                    <Table  style={{width:"650px"}}>
                    <thead>
                        <tr > 
                            <th style={styles.textLeft}> SEMESTER 1/2020 : {(formatNumber(dataSem3))}</th>
                            <th style={styles.textRight}> SEMESTER 2/2020 : {(formatNumber(dataSem4))}</th>
                          
                            <th colSpan={3}></th>
                        </tr >
                    </thead>
                </Table>
                </div>

                <div style={{backgroundColor:"#FAFAFA", borderRadius:"20px", width:"650px"}}>
                    <Table  style={{width:"650px"}}>
                    <thead>
                        <tr > 
                        <th style={styles.textLeft}> SEMESTER 3/2020 : {(formatNumber(dataSem5))}</th>
                            <th colSpan={3}></th>
                        </tr >
                    </thead>
                </Table>
                </div>

                <div style={{backgroundColor:"#FAFAFA", borderRadius:"20px", width:"650px"}}>
                    <Table  style={{width:"650px"}}>
                    <thead>
                        <tr > 
                            <th style={styles.textLeft}> SEMESTER 1/2021 : {(formatNumber(dataSem6))}</th>
                            <th style={styles.textRight}> SEMESTER 2/2021 : {(formatNumber(dataSem7))}</th>
                            <th colSpan={3}></th>
                        </tr >
                    </thead>
                </Table>
                </div>

                {/* <div style={{backgroundColor:"#FAFAFA", borderRadius:"20px", width:"650px"}}>
                    <Table  style={{width:"650px"}}>
                    <thead>
                        <tr > 
                            <th style={styles.textLeft}> SEMESTER 2/2021 : {(formatNumber(dataSem7))}</th>
                            <th colSpan={3}></th>
                        </tr >
                    </thead>
                </Table>
                </div> */}

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

   {/* <thead style={{backgroundColor:'#C1C1C1', color:"#000000", borderRadius:"15px"}}>
                        <tr>
                            <th>Year</th>
                            <th>Semester</th>
                            <th>Course Code</th> 
                            <th>Course Name</th>
                            <th>Grade</th> 
                        </tr>
                    </thead> */}

    
// function groupArrayOfObjects(list, key) {
//     return list.reduce(function(rv, x) {
//       (rv[x[key]] = rv[x[key]] || []).push(x);
//       return rv;
//     }, {});
//   };

// var array=[}]

// var groupedArray=groupArrayOfObjects(array,"year")
// console.log(groupedArray.SEMESTER)