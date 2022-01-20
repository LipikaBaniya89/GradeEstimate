import { dataContents } from "./data/data.js";
import Dataform1 from "./data/data-form.js";
import { Component } from "react";


var gradesList= dataContents.subjects;

class List extends Component() {
    return (
        <ul>
        return (                                                                               
            gradesList.map((s,i) => {
                <tr key={i}>
                    <div>
                    <div>
                        <div>{s.gradesList_code}</div>
                        <div>{s.gradesList_name}</div>
                    </div>
                </div>

                </tr>
                }
            ) 
        )
    }
        </ul>

            
        )

    )
    
        
}

    // const obj = JSON.parse(data1)
    // console.log(obj)

export default List;