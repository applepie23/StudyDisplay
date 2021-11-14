import React from 'react'
import ReactDOM from 'react-dom'
import './category-display.css'

class CategoryDisplay extends React.Component {
    constructor(){
        super()
        this.state = {
            categorynameinput: "Add Category Name...",
            cat_num: 3,
            categorynames: ["One", "Two", "Three"]
        }
        this.onSubmitAddCategory = this.onSubmitAddCategory.bind(this)
        this.onChangeAddCategory = this.onChangeAddCategory.bind(this)

    }

    onSubmitAddCategory(event){
        event.preventDefault() 
        const categoryname = this.state.categorynameinput;
        this.setState((prevState, props) => ({
            cat_num: prevState.cat_num + 1,
            categorynames: [...prevState.categorynames, categoryname]
        })) 
    }

    onChangeAddCategory(event){
        event.preventDefault() 
        this.setState({
            categorynameinput: event.target.value,
        })    
    }

    render(){
        const children = [];
        for (var i = 0; i < this.state.cat_num; i += 1) {
            children.push(<div class="one-category-container"> <CategoryX id={i} number={i} categorynameinput={this.state.categorynames[i]} /> </div>);
        };
        
        return(
            <div class="display-container">
                    <p class="main-title">
                        Categories
                    </p>
                
                <div>Number of Categories: {this.state.cat_num}</div>

                <div class="add-category-form">
                    <form onSubmit={this.onSubmitAddCategory}>
                        <label>
                            Name of Category: 
                            <input type="text" name="categorynameinput" value={this.state.categorynameinput} onChange={this.onChangeAddCategory}/>
                        </label>
                        <input type="submit" value="Add Category" />
                    </form>   
                </div>

                    <div class="categories-container" id="categories">
                        {children}   
                    </div>
            </div>
        )
    }
};

class CategoryX extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            categoryname: props.categorynameinput,
            num_classes: 3,
            classes: ["Time1", "Time2", "Time3"]
        }
    }

    onSubmitAddClass(event){
        event.preventDefault() 
        const classname = this.state.categorynameinput;
        this.setState((prevState, props) => ({
            num_classes: prevState.cat_num + 1,
            classes: [...prevState.classes, classname]
        })) 
    }
 
    render(){
        const children = []
        for (var i = 0; i < this.state.num_classes; i += 1) {
            children.push(<OneClass id={i} number={i} classname={this.state.classes[i]} />)
        };

        return(
            <div>
                    <div>Name: {this.state.categoryname}</div>
                    <div>Id: {this.props.id}</div>
                    <div>Number: {this.props.number}</div>
                    <AddClass name={this.state.categoryname}/>
                    
                    <div class="classes-title">Classes in {this.props.categoryname}</div>
                    <div class="classes-container">
                        {children}
                    </div>
            </div>
        )
    }
};

class AddClass extends React.Component {
    constructor(props){
        super()
        this.state ={
            classname: "Add class name...",
            monday: false, 
            tueday: false,
            wednesday: false,
            thursday: false,
            friday: false,
        }
        this.onChangeAddDays = this.onChangeAddDays.bind(this)
        this.onChangeAddClassName = this.onChangeAddClassName.bind(this)
        this.onSubmitAddClass = this.onSubmitAddClass.bind(this)
    }

    onChangeAddDays(event){
        const target = event.target
        const value = target.checked
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    onChangeAddClassName(event){
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    onSubmitAddClass(event){
        const alertString = "class name is " + this.state.classname
        

        alert(alertString)
    }

    render(){
        return(
            <div>
                    Add Class to {this.props.name} Category 
                    <div>
                        <form onSubmit={this.onSubmitAddClass} class="forms-container">
                            <label>
                                Name of Class: 
                                <input type="text" name="classname" value={this.state.classname} onChange={this.onChangeAddClassName}/>
                            </label>

                            <div class="days-checkbox">
                                <label class="day-checkbox"> Monday
                                    <input type="checkbox" name="monday" checked={this.state.monday} onChange={this.onChangeAddDays}/>
                                </label>
                                <label class="day-checkbox"> Tuesday
                                    <input type="checkbox" name="tuesday" checked={this.state.tuesday} onChange={this.onChangeAddDays}/>
                                </label>
                                <label class="day-checkbox"> Wednesday
                                    <input type="checkbox" name="wednesday" checked={this.state.wednesday} onChange={this.onChangeAddDays}/>
                                </label>
                                <label class="day-checkbox">Thursday
                                    <input type="checkbox" name="thursday" checked={this.state.thursday} onChange={this.onChangeAddDays}/>
                                </label>
                                <label class="day-checkbox">Friday
                                    <input type="checkbox" name="friday" checked={this.state.friday} onChange={this.onChangeAddDays}/>
                                </label>
                            </div>

                            <div class="time-container">
                                <label class="time"> Start Time
                                    <input type="time"/>
                                </label>
                                <label class="time"> End Time
                                    <input type="time"/>
                                </label>
                            </div>

                            <input type="submit" value="Add Class" />
                            
                        </form>
                    </div>

            </div>
        )
    }
};

class DisplayedClasses extends React.Component{
    constructor(props){
        super()
    }

    render(){
        const children = []
        for (var i = 0; i < this.props.num_classes; i += 1) {
            children.push(<OneClass id={i} number={i} classname={this.props.classes[i]} />);
        };



        return(
            <div>
                    <div class="classes-title">Classes in {this.props.categoryname}</div>
                    <div class="classes-container">
                        {children}
                    </div>
            </div>
        )
    }
}

class OneClass extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div class="one-class-display">
                <div class="class-info">{this.props.classname}</div>
                <div class="class-info">Meeting Times</div>
                <div class="class-info">Meeting Days</div>
                <div class="class-info">Remove</div>
            </div>
        )
    }
}

export default CategoryDisplay