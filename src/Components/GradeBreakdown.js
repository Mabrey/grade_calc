import React from 'react';


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
        <div>
            <p>{props.name}</p>
            <p>{props.grade}</p>
            <p>{props.weight}</p>
            <p>{props.gradeContribution}</p>
        </div>
    );
   
    
}

export default GradeBreakdown;