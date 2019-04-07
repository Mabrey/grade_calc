import React from 'react';
import '../Styles/gradeBreakdown.css';



//holds the list of entries provided by the user.


function GradeBreakdown(props){
/* 
    componentDidMount() {
        this.createGradeList();
        this.createGradeListComponents();
    }

    componentDidUpdate(){
        this.createGradeList();
        this.createGradeListComponents();
    }
  
    componentWillUnmount() {
  
    }

    
    createGradeListComponents(){
    let gradeListComponents = [];
    this.state.gradeList.forEach((entry,i) => {
        let component = 
        <div id={`breakdown${i}`}>
            <p>{entry.name}</p>
            <p>{entry.grade}</p>
            <p>{entry.weight}</p>
            <p>{entry.gradeContribution}</p>
        </div>;

        gradeListComponents[i] = component;
    })
}
*/

    
    return (
        <div id='breakDownRow'>
            <p id= 'breakDownName'>{props.name}:</p>
            <p id= 'breakDownGrade'>{props.grade}%</p>
            <p>*</p> 
            <p id= 'breakDownWeight'>{props.weight}%</p>
            <p>=</p>
            <p id= 'breakDownGradeContribution'>{props.gradeContribution}%</p>
        </div>
    );
   
    
}

export default GradeBreakdown;