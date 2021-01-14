import React, { Component } from 'react';
import todoService from './../lib/todo-service';

class AddTodoForm extends Component {

    state = {
        title: "",
        body: ""
    }

    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {title, body} = this.state;
        todoService.createTodo(title, body)
            .then(response => {console.log('response, response.data', response, response.data)})
            .catch((err) => console.log(err)); //to display error msg on FE
    }



    render() {
        return (
            <>
            <h2>Add New Task</h2>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>Title:</label>
                <input type="text" name="title" onChange={this.handleInput}></input>
                <label>Description:</label>
                <textarea name="body" onChange={this.handleInput}></textarea>
                <button type="submit">Save</button>
            </form>
        </>
        )
    }
}

export default AddTodoForm;