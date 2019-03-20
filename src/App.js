import React, { Component } from 'react';
import './App.css';
import GradeList from './Components/GradeList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      listSize: 5,
      entryNames: [],
      entryGrades: [],
      entryWeights: [],
      totalGrade: 0,
      totalGradeBreakdown: [],
      currentGrade: 0,
      desiredGrade: 0,
      totalWeight: 0,
      gradeNeeded: 0,
      remainingWeight: 100,
    }
  }

  componentDidMount(){
    this.initializeEntries();
  }

  // -------------- Functions for data initialization -------------- //

  initializeEntries(){
    let entryNames = [], entryGrades = [], entryWeights = [], totalGradeBreakdown = [];

    for(let i = 0; i < this.state.listSize; i++){
      entryNames[i] = i+1;
      entryGrades[i] = 0;
      entryWeights[i] = 0;
      totalGradeBreakdown[i] = 0;
    }

    this.setState({
      ...this.state,
      entryNames: entryNames,
      entryGrades: entryGrades,
      entryWeights: entryWeights,
      totalGradeBreakdown: totalGradeBreakdown,
    });
  }

  reset(){
    this.initializeEntries();
    for(let i = 0; i < this.state.listSize; i++){
      document.getElementById(`entryName${i}`).value = i+1;
      document.getElementById(`entryGrade${i}`).value = 0;
      document.getElementById(`entryWeight${i}`).value = 0;
    }  
    document.getElementById('desiredGrade').value = '';
  }

  // -------------- Functions for data calculations -------------- //


  async calculateSubmit(){
    await this.calculateWeight();
    this.calculateGrade();
  }

  calculateGrade(){
    //create a "zip" using map to calculate breakdown of the percent makeup of total grade.
    let totalGradeBreakdown = this.state.entryGrades.map((grade, index) => {
      //console.log(typeof grade);
      return grade * this.state.entryWeights[index];
    })

    //sum the grade breakdown values for total grade
    let totalGrade = totalGradeBreakdown.reduce((gradeAccumulator, currentGradeCategory) =>{
      return gradeAccumulator + currentGradeCategory;
    })

    let currentGrade = totalGrade / this.state.totalWeight;
    if (isNaN(currentGrade)) currentGrade = 0;
    
    // Convert grade to percent
    totalGrade = Math.round(totalGrade)/100;

    let gradeNeeded = (this.state.desiredGrade - totalGrade) / this.state.remainingWeight * 100;
    
    this.setState({
      ...this.state,
      totalGrade: totalGrade, 
      totalGradeBreakdown: totalGradeBreakdown,
      currentGrade: currentGrade,
      gradeNeeded: gradeNeeded,
    })
  }

  calculateWeight(){
    return new Promise((res, reject) => {
      let totalWeight = this.state.entryWeights.reduce((weightAccumulator, entryWeight) => {
        return parseFloat(weightAccumulator) + parseFloat(entryWeight);
      })
      let remainingWeight = 100 - totalWeight;
      //console.log(totalWeight);
      this.setState({...this.state, totalWeight: totalWeight, remainingWeight: remainingWeight}); 
      res(); 
    })
  }

 

  // -------------- Handlers for data change -------------- //

  handleNameChange = (index, name) => {
    let newEntryNames = [...this.state.entryNames];
    newEntryNames[index] = name;

    this.setState({
      ...this.state, 
      entryNames: newEntryNames
    });
  }

  handleGradeChange = (index, grade) => {
    let newEntryGrades = [...this.state.entryGrades];
    newEntryGrades[index] = grade;
    
    this.setState({
      ...this.state, 
      entryGrades: newEntryGrades
    });
  }

  handleDesiredGradeChange = (grade) => {
    let newDesiredGrade = grade;
    
    this.setState({
      ...this.state, 
      desiredGrade: newDesiredGrade
    });
  }

  handleWeightChange = (index, weight) => {
    let newEntryWeight = [...this.state.entryWeights];
    newEntryWeight[index] = weight;
    
    this.setState({
      ...this.state, 
      entryWeights: newEntryWeight
    });
  }

  // ---------------------- Render ---------------------- //

  render() {
    let entryInfo = {
      listSize: this.state.listSize,
      entryNames: this.state.entryNames,
      entryGrades: this.state.entryGrades,
      entryWeights: this.state.entryWeights,
    }

    return (
      <div className="App">
        <header>
          <h1>Final Grade Calculator</h1>
        </header>
        <GradeList 
          entryInfo={entryInfo} 
          handleNameChange = {this.handleNameChange}
          handleGradeChange = {this.handleGradeChange}
          handleWeightChange = {this.handleWeightChange}
          handleDesiredGradeChange = {this.handleDesiredGradeChange}
        />
        <button onClick={this.calculateSubmit.bind(this)}>Calculate</button>
        <button onClick={this.reset.bind(this)}>Reset</button>
        <div>
          <p>Current Grade: {this.state.currentGrade}</p>
          <p>Total Grade: {this.state.totalGrade}</p>
          <p>Remaining Weight: {this.state.remainingWeight}</p>
          <p>Grade Needed for Desired: {this.state.gradeNeeded}</p>
        </div>
      </div>
    );
  }
}

export default App;
