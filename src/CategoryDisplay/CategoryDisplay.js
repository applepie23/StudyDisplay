import React from 'react'
import ReactDOM from 'react-dom'
import './category-display.css'

class CategoryDisplay extends React.Component {
    constructor(){
        super()
        this.state = {
            categorynameinput: "Add Category Name...",
            cat_num: 3,
            categorynames: ["French", "WGS", "EECS"],
            children: [],
            num_classes: 3,
            classes: [["C1", "C1", "C1"], ["C2", "C2", "C2"], ["C3", "C3", "C3"]],
            starttimes: [["01:00", "01:00", "01:00"], ["02:00", "02:00", "02:00"], ["03:00", "03:00", "03:00"]],
            endtimes: [["01:50", "01:50", "01:50"], ["02:50", "02:50", "02:50"], ["03:50", "03:50", "03:50"]],
            days: [[["M", "M"], ["M", "M"],["M"]], [["T", "T"], ["T", "T"],["T"]], [["W", "W"], ["W", "W"],["W"]]]
        }
        this.onSubmitAddCategory = this.onSubmitAddCategory.bind(this)
        this.onChangeAddCategory = this.onChangeAddCategory.bind(this)
        this.removeCategory = this.removeCategory.bind(this)

    }

    removeCategory(event){
        const target = event.target
        const number = target.number
        const newnames = this.state.categorynames
        newnames.splice(number, 1)
        this.setState((prevState, props) => ({
            cat_num: prevState.cat_num - 1,
            categorynames: newnames
        }))
        ReactDOM.unmountComponentAtNode(this.getElementById("cat_"+number));
        alert(this.state.categorynames)
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
            children.push(<div class="one-category-container"> <CategoryX id={"cat_"+i} number={i} categorynameinput={this.state.categorynames[i]} removeCategory={this.removeCategory} /> </div>);
            
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
           
            classname: "Add class name...",
            monday: false, 
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            
            start: "01:00",
            end: "02:00",

            num_classes: 3,
            classes: ["Time1", "Time2", "Time3"],
            starttimes: ["01:00", "02:00", "03:00"],
            endtimes: ["01:00", "02:00", "03:00"],
            days: [["M", "W"], ["T", "Th"],["F"]]
        }
        this.onChangeAddDays = this.onChangeAddDays.bind(this)
        this.onSubmitAddClass = this.onSubmitAddClass.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.removeClass = this.removeClass.bind(this)
    }

    onSubmitAddClass(event){
        event.preventDefault() 
        const classname = this.state.classname;

        const dayarray = []
        if (this.state.monday){
            dayarray.push("M");
        }
        if (this.state.tuesday){
            dayarray.push("Tu");
        }
        if (this.state.wednesday){
            dayarray.push("W");
        }
        if (this.state.thursday){
            dayarray.push("Th");
        }
        if (this.state.friday){
            dayarray.push("F");
        }

        this.setState((prevState, props) => ({
            num_classes: prevState.num_classes + 1,
            classes: [...prevState.classes, classname],
            starttimes: [...prevState.starttimes, this.state.start],
            endtimes: [...prevState.endtimes, this.state.end],
            days: [...prevState.days, dayarray],
            monday:false ,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false
        })) 

    }

    onChangeAddDays(event){
        const target = event.target
        const value = target.checked
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handleChange(event){
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    removeClass(event){
        const target = event.target
        const id = target.id
        const newclasses = this.state.classes
        const newstarts = this.state.starttimes
        const newends = this.state.endtimes
        const newdays = this.state.days
        newclasses.splice(id, 1)
        newstarts.splice(id, 1)
        newends.splice(id, 1)
        newdays.splice(id, 1)
        this.setState((prevState, props) => ({
            num_classes: prevState.num_classes - 1,
            classes: newclasses,
            starttimes: newstarts,
            endtimes: newends,
            days: newdays
        }))
    }
 
    render(){
        const children = []
        for (var i = 0; i < this.state.num_classes; i += 1) {
            children.push(<OneClass id={i} number={i} classname={this.state.classes[i]} start={this.state.starttimes[i]} end={this.state.endtimes[i]} days={this.state.days[i]} removeClass={this.removeClass} />)
        };

        return(
            <div>
                    <div>Name: {this.state.categoryname}</div>
                    <div>Id: {this.props.id}</div>
                    <div>Number: {this.props.number}</div>
                    

                    <div>
                    Add Class to {this.state.categoryname} Category 
                    <div>
                        <form onSubmit={this.onSubmitAddClass} class="forms-container">
                            <label>
                                Name of Class: 
                                <input type="text" name="classname" value={this.state.classname} onChange={this.handleChange}/>
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
                                    <input type="time" value={this.state.start} name="start" onChange={this.handleChange}/>
                                </label>
                                <label class="time"> End Time
                                    <input type="time" value={this.state.end} name="end" onChange={this.handleChange}/>
                                </label>
                            </div>

                            <input type="submit" value="Add Class" />
                            
                        </form>
                    </div>

            </div>
                    
                    <div class="classes-title">Classes in {this.state.categoryname}</div>
                    <div class="classes-container">
                        {children}
                    </div>
                    <button onClick={this.props.removeCategory} id={this.props.id}>Remove Category</button>
            </div>
        )
    }
};

class OneClass extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div class="one-class-display">
                <div class="class-info">{this.props.classname}</div>
                <div class="class-info">Start: {this.props.start}</div>
                <div class="class-info">End: {this.props.end}</div>
                <div class="class-info">{this.props.days}</div>
                <button class="class-info" id={this.props.id} onClick={this.props.removeClass} >Remove</button>
            </div>
        )
    }
}

export default CategoryDisplay