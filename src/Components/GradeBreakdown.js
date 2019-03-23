import React, {Component} from 'react';


//holds the list of entries provided by the user.


class GradeBreakdown extends Component {

    constructor(props){
        super(props);
        this.state = {
            gradeList: []
        }
    }    

    componentDidMount() {
        this.initialize();
    }
  
    componentWillUnmount() {
  
    }

    //get the state of component from the passed props.
    createGradeList(){
        let gradeList = [];
        this.props.entryName.forEach((name, i) => {
            gradeList[i].name = name;
        });
        this.props.entryGrade.forEach((grade, i) => {
            gradeList[i].grade = grade;
        });
        this.props.entryWeight.forEach((weight, i) => {
            gradeList[i].weight = weight;
        });
        this.props.totalGradeContribution.forEach((grade, i) => {
            gradeList[i].gradeContribution = grade;
        });

        this.setState({...this.state, gradeList: gradeList});
    }

    createGradeListComponents(){
        let gradeListComponents = [];
        this.props.gradeList.forEach((entry,i) => {
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


    render(){

        return (
            <div id="breakdownContainer">
                {this.state.gradeListComponents}
            </div>
        );
    }    
    
}

export default GradeBreakdown;