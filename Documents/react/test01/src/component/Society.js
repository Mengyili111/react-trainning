import React from 'react'

export default class Society extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'mengyi',
            age:'18'
        }
    }
    render(){
        return (
            <React.Fragment>
                {this.state.age}
                <Family age={this.state.age}/>  
            </React.Fragment>
        )
    }
}
function Family(props){
    const birthday = '1990';
        return(
            <React.Fragment>
                {props.age}
                <Person age = {props.age} birthday = {birthday}/>
               
            </React.Fragment>
        )
}
function Person(props){
   console.log(props)
    return(
        <React.Fragment>
            {props.age}
            {props.birthday}
        </React.Fragment>
    )
}

