import React, {Component} from 'react';
import GradeEntry from './GradeEntry'

//holds the list of entries provided by the user.


class GradeList extends Component {

    constructor(props){
        super(props);
        this.state = {
            listSize: 5,
            entryList: [],
            entryProps: [],
        }
        this.state.entryProps = this.initialEntryState(this.state.listSize);
        this.state.entryList = this.initialList(this.state.listSize);
        
    }    

    componentDidMount() {

    }
  
    componentWillUnmount() {
  
    }
    //handle initial list of props
    getGradeEntries(size){
        let entries = [];
        for(let i = 0; i < size; i++){
            entries.push(
                <GradeEntry 
                    key = {i} 
                    listID ={i}
                    gradeVal = {this.state.entryProps[i].grade}
                    name = {this.state.entryProps[i].name} 
                    weightVal = {this.state.entryProps[i].weight} 
                    id = {`entry${i}`} 
                    className = {'gradeEntry'}
                    handleNameChange = {this.props.handleNameChange}
                    handleGradeChange = {this.props.handleGradeChange}
                    handleWeightChange = {this.props.handleWeightChange}/>)
        }
        return entries;
    }    

    initialList(size){return this.getGradeEntries(size)};

    

    //handle initial state of the entries
    initialEntryState(size){return this.getEntryState(size)};

    getEntryState(size){
        let entryState = [];
        for(let i = 0; i < size; i++){
            entryState.push({name: i+1, grade: 0, weight: 0})
        }
        return entryState;
    }
    

    

    render(){

        return (
            <div >
                <div id = 'gradeList'>{this.state.entryList}</div>
                <form>
                    <input 
                        id={`desiredGrade`}
                        className='desiredGrade' 
                        type='number' 
                        step='0.1' min='0' max='100' 
                        defaultValue={''} 
                        onInput={e => this.props.handleDesiredGradeChange(e.target.value)}/>
                </form>
            </div>
        );
    }    
    
}

export default GradeList;