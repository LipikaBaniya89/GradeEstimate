import React from "react";
import { Table } from "react-bootstrap";

const styles = {
    textCenter: {textAlign: 'center'},
    textRight: {textAlign: 'right'},
    textLeft: {textAlign:'left'}
};

const dataa = {
            "subjects" : [
                {
                    "groupName": "Language Courses",
                    "subjects": [
                        {
                            "code" : "BG 1001",
                            "name" : "English I"
                        },
                        {
                            "code" : "BG 1002",
                            "name" : "English II"
                        },
                        {
                            "code" : "BG 2000",
                            "name" : "English III"
                        },
                        {
                            "code" : "BG 2001",
                            "name" : "English IV"
                        }
                    ]
                },
                {
                    "groupName":"Humanities Courses",
                    "subjects": [
                        {
                            "code" : "LAW 1201",
                            "name" : "Intellectual Property"
                        }
                    ]
                },
                {
                    "groupName":"General Education",
                    "subjects": [
                        {
                            "code" : "GE 2202",
                            "name" : "Ethics"
                        },
                        {
                            "code" : "GE 2101",
                            "name" : "World Civilization"
                        }
    
                    ]
                },
                {
                    "groupName":"Science and Mathematics Courses",
                    "subjects" : [
                        {
                            "code" : "DA 1121",
                            "name" : "Basic Mathematics and Statistics"
                        },
                        {
                            "code" : "DA 2103",
                            "name" : "Principle of Statistics"
                        }, 
                        {
                            "code" : "DA 2203",
                            "name" : "Probabbility and Statistical Methods"
                        },
                        {
                            "code" : "DA 2102",
                            "name" : "Calculus I"
                        }
    
                    ]
                },
                {
                    "groupName": "Basic Courses",
                    "subjects" : [
                        {
                            "code": "IT 2231",
                            "name": "Information Technology"
                        }, 
                        {
                            "code" : "IT 2130",
                            "name" : "System Science"
                        }, 
                        {
                            "code" : "CS 1201",
                            "name" : "Computer Programming I"
                        }, 
                        {
                            "code" : "IT 2220", 
                            "name" : "Computer System Concepts"
                        },
                        {
                            "code" : "IT 1251",
                            "name" : "Business Systems" 
                        },
                        {
                            "code" : "IT 2157",
                            "name" : "Human Computer Interaction"
                        }
                    ]
                }, 
                {
                    "groupName" : "Major Required Courses",
                    "subjects" : [
                        {
                            "code" : "IT 2230",
                            "name" : "Information Structures"
                        },
                        {  
                            "code" : "IT 3253",
                            "name" : "Data Communication and Networking"
                        },
                        {
                            "code" : "IT 2211",
                            "name" : "Requirement Engineering"
                        },
                        {
                            "code" : "IT 3211",
                            "name" : "User Interface Design"
                        },
                        {
                            "code" : "IT 3232",
                            "name" : "Information Systems Design"
                        }, 
                        {
                            "code" : "IT 3231",
                            "name" : "Information Systems Analysis"
                        },
                        {
                            "code" : "IT 4315",
                            "name" : "Object Oriented Software Analysis and Design"
                        },
                        {
                            "code" : "IT 4314",
                            "name" : "Software Engineering Concepts"
                        }, 
                        {
                            "code" : "IT 4291",
                            "name" : "Senior Project 1"
                        }
                    ]
                },
                {
                    "groupName" : "Major Elective Courses",
                    "subjects" : [
                        {
                            "code" : "IT 3211",
                            "name" : "Information Storage and Retrieval"
                        },
                        {
                            "code" : "IT 2371",
                            "name" : "Object Oriented Programming I"
                        },
                        {
                            "code" : "IT 4443",
                            "name" : "Selected Topic in Presentation and Data Visualization Technique"
                        },
                        {
                            "code" : "IT 4422",
                            "name" : "Selected in Design Thinking"
                        }, 
                        {
                            "code" : "IT 3230" ,
                            "name" : "Management Information Systems"
                        }, 
                        {
                            "code" : "IT 4425",
                            "name" : "Selected Topic In Network Security"
                        }, 
                        {
                            "code" : "IT 3355",
                            "name" : "Mobile Applications Development"
                        }, 
                        {
                            "code" : "IT 4438",
                            "name" : "Selected Topic in Data Science"
                        },
                        {
                            "code" : "IT 4425",
                            "name" : "Selected Topic in Enterpreneurship in Technology and Business"
                        }, 
                        {
                            "code": "IT 4292",
                            "name" : "Web Design and Development I"
                        },
                        {
                            "code" : "MT 4201",
                            "name" : "Social Interestd, Government Policies and Technology"
                        }
                       
                    ]
                }
    
    
    
            ]
        }

export default function Dataform1() {
    return (
        <div>
            <Table>{
                  dataa.curriculum.subjects.map(tableData => {
                    return(
                        <div>
                            <td style={styles.textLeft}>{tableData.curriculum}</td>
                            {
                                tableData.name.map(inputData => {
                                    return (
                                        <div>
                                            <label>{inputData.name}</label>
                                            <label>{inputData.subjects}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
                }
            
            </Table>
        </div>
    )
}