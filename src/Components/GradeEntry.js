import React from 'react';
import '../Styles/gradeEntry.css';

function GradeEntry(props) {
    
    function nameChange(name){
        // console.log(props.listID);
        // console.log(name);
        props.handleNameChange(props.listID, name);
    }

    function gradeChange(grade){
        // console.log(props.listID);
        // console.log(grade);
        props.handleGradeChange(props.listID, grade);
    }

    function weightChange(weight){
        // console.log(props.listID);
        // console.log(weight);
        props.handleWeightChange(props.listID, weight);
    }
    return (
        <div>
            <form> 
            <input 
                id={`entryName${props.listID}`} 
                className='entryName' 
                type='text' 
                defaultValue={props.name} 
                onInput={e => nameChange(e.target.value)}/>
            <input 
                id={`entryGrade${props.listID}`}
                className='entryGrade' 
                type='number' 
                step='0.1' min='0' max='200' 
                defaultValue={props.gradeVal} 
                onInput={e => gradeChange(e.target.value)}/>
            <input 
                id={`entryWeight${props.listID}`}
                className='entryWeight' 
                type='number' 
                step='0.5' min='0' max='100' 
                defaultValue={props.weightVal} 
                onInput={e => weightChange(e.target.value)}/>
            </form>
        </div>
    );
}

export default GradeEntry;

//onInput={e => setGrade(e.target.value)}

// return (
//     <div>
//         <form> 
//         <input className='entryName' type='text' value={name} onInput={e => setName(e.target.value)}/>
//         <input className='entryGrade' type='number' step='0.1' min='0' max='200' value={grade} onInput={e => setGrade(e.target.value)}/>
//         <input className='entryWeight' type='number' value={weight} step='0.5' min='0' max='100' onInput={e => setWeight(e.target.value)}/>
//         </form>
//     </div>
// );