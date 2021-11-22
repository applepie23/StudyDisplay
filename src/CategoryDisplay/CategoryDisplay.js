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
            num_classes: [3, 3, 3],
            classes: [["C1", "C1", "C1"], ["C2", "C2", "C2"], ["C3", "C3", "C3"]],
            starttimes: [["01:00", "01:00", "01:00"], ["02:00", "02:00", "02:00"], ["03:00", "03:00", "03:00"]],
            endtimes: [["01:50", "01:50", "01:50"], ["02:50", "02:50", "02:50"], ["03:50", "03:50", "03:50"]],
            days: [[["M", "M"], ["M", "M"],["M"]], [["T", "T"], ["T", "T"],["T"]], [["W", "W"], ["W", "W"],["W"]]]
        }
        this.onSubmitAddCategory = this.onSubmitAddCategory.bind(this)
        this.onChangeAddCategory = this.onChangeAddCategory.bind(this)
        this.removeCategory = this.removeCategory.bind(this)
        this.addClass = this.addClass.bind(this)
        this.removeClass = this.removeClass.bind(this)

    }

    removeCategory(num){
        //const target = event.target
        const number = num
        let newnames = this.state.categorynames
        newnames.splice(number, 1)
        alert(number)

        let new_num_classes = this.state.num_classes;
        new_num_classes.splice(number, 1)
        
        let new_classes = this.state.num_classes;
        new_classes.splice(number, 1)
        
        let new_starttimes = this.state.num_classes;
        new_starttimes.splice(number, 1)
        
        let new_endtimes = this.state.num_classes;
        new_endtimes.splice(number, 1)
        
        let new_days = this.state.num_classes;
        new_days.splice(number, 1)

//        ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);

        const new_children = [];
        for (var i = 0; i < this.state.cat_num-1; i += 1) {
            new_children.push(<div class="one-category-container" id={"cat"+i}> <CategoryX id={"cat"+i} number={i} categorynameinput={this.state.categorynames[i]} num_classes={this.state.num_classes[i]} classes={this.state.classes[i]} starttimes={this.state.starttimes[i]} endtimes={this.state.endtimes[i]} days={this.state.days[i]} removeCategory={this.removeCategory} addClass={this.addClass}/> </div>);
        };

 
        this.setState((prevState, props) => ({
            cat_num: prevState.cat_num - 1,
            categorynames: newnames,
            num_classes: new_num_classes,
            classes: new_classes,
            starttimes: new_starttimes,
            endtimes: new_endtimes,
            days: new_days,
            children: new_children
        }))
    
    }

//ADD CHILDREN CODE TO ADDCLASS AND RENMOVE CLASS

    onSubmitAddCategory(event){
        event.preventDefault() 
        const categoryname = this.state.categorynameinput;

        const new_children = [];
        for (var i = 0; i < (this.state.cat_num); i += 1) {
            new_children.push(<div class="one-category-container"> <CategoryX id={i} number={i} categorynameinput={this.state.categorynames[i]} num_classes={this.state.num_classes[i]} classes={this.state.classes[i]} starttimes={this.state.starttimes[i]} endtimes={this.state.endtimes[i]} days={this.state.days[i]} removeCategory={this.removeCategory} addClass={this.addClass} removeClass={this.removeClass}/> </div>);
        };
        new_children.push(<div class="one-category-container"> <CategoryX id={this.state.cat_num} number={this.state.cat_num} categorynameinput={categoryname} num_classes={1} classes={["Test"]} starttimes={["4:00"]} endtimes={["5:00"]} days={["M"]} removeCategory={this.removeCategory} addClass={this.addClass} removeClass={this.removeClass}/> </div>)
   
        this.setState((prevState, props) => ({
            cat_num: prevState.cat_num + 1,
            categorynames: [...prevState.categorynames, categoryname],
            num_classes: [...prevState.num_classes, 1],
            classes: [...prevState.classes, ["test"]],
            starttimes: [...prevState.starttimes, ["4:00"]],
            endtimes: [...prevState.endtimes, ["5:00"]],
            days: [...prevState.days, ["M"]],
            children: new_children
        })) 
    
    }

    onChangeAddCategory(event){
        event.preventDefault() 
        this.setState({
            categorynameinput: event.target.value,
        })    
    }

    addClass(num, dayarray, name, start, end, cat_num){
        
        //this.state.number, dayarray, classname, this.state.start, this.state.end
        alert(name)
        
        let new_num_classes = this.state.num_classes
        new_num_classes[num] = new_num_classes[num] + 1
        
        let new_classes = this.state.classes
        let mini_classes = this.state.classes[num]
        mini_classes.push(name)
        new_classes[num] = mini_classes
        
        let new_starttimes = this.state.starttimes
        new_starttimes[num].push(start)
        
        let new_endtimes = this.state.endtimes
        new_endtimes[num].push(end)
        
        let newdays = this.state.days
        newdays.push(dayarray)

        const new_children = [];
        for (var i = 0; i < (this.state.cat_num); i += 1) {
            new_children.push(<div class="one-category-container"> <CategoryX id={i} number={i} categorynameinput={this.state.categorynames[i]} num_classes={new_num_classes[i]} classes={new_classes[i]} starttimes={new_starttimes[i]} endtimes={new_endtimes[i]} days={newdays[i]} removeCategory={this.removeCategory} addClass={this.addClass} removeClass={this.removeClass}/> </div>);
        };
        
        this.setState((prevState) => ({
            num_classes: new_num_classes,
            classes: new_classes,
            starttimes: new_starttimes,
            endtimes: new_endtimes,
            days: newdays, 
            children: new_children
            //https://stackoverflow.com/questions/29537299/react-how-to-update-state-item1-in-state-using-setstate 
        }))
    }

    removeClass(cat_num, class_num){
        //this.state.number, dayarray, classname, this.state.start, this.state.end

        let new_num_classes = this.state.num_classes
        new_num_classes[class_num] = new_num_classes[class_num] - 1 
        
        let new_classes = this.state.classes
        let mini_classes = this.state.classes[cat_num]
        mini_classes.splice(class_num, 1)
        new_classes[cat_num] = mini_classes
        
        let new_starttimes = this.state.starttimes
        new_starttimes[cat_num].splice(class_num, 1)
        
        let new_endtimes = this.state.endtimes
        new_endtimes[cat_num].splice(class_num, 1)
        
        let newdays = this.state.days
        newdays[cat_num].splice(class_num, 1)

        const new_children = [];
        for (var i = 0; i < (this.state.cat_num); i += 1) {
            new_children.push(<div class="one-category-container"> <CategoryX id={i} number={i} categorynameinput={this.state.categorynames[i]} num_classes={new_num_classes[i]} classes={new_classes[i]} starttimes={new_starttimes[i]} endtimes={new_endtimes[i]} days={newdays[i]} removeCategory={this.removeCategory} addClass={this.addClass} removeClass={this.removeClass}/> </div>);
        };

        this.setState(prevState => ({
            num_classes: new_num_classes,
            classes: new_classes,
            starttimes: this.state.starttimes.splice(class_num, 1),
            endtimes: this.state.endtimes.splice(class_num, 1),
            days: this.state.days.splice(class_num, 1), 
            children: new_children
        }))

    }
/*
 num_classes: [3, 3, 3],
            classes: [["C1", "C1", "C1"], ["C2", "C2", "C2"], ["C3", "C3", "C3"]],
            starttimes: [["01:00", "01:00", "01:00"], ["02:00", "02:00", "02:00"], ["03:00", "03:00", "03:00"]],
            endtimes: [["01:50", "01:50", "01:50"], ["02:50", "02:50", "02:50"], ["03:50", "03:50", "03:50"]],
            days: [[["M", "M"], ["M", "M"],["M"]], [["T", "T"], ["T", "T"],["T"]], [["W", "W"], ["W", "W"],["W"]]]
*/
    render(){
        
        return(
            <div class="display-container">
                    <p class="main-title">
                        Categories
                    </p>
                
                <div>Number of Categories: {this.state.cat_num}</div>
                <div>Category Names: {this.state.categorynames}</div>
                <div>Class Names: {this.state.classes}</div>
                <div>Start Times: {this.state.starttimes}</div>
                <div>End Times: {this.state.endtimes}</div>
                <div>Days: {this.state.days}</div>


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
                        {this.state.children}   
                    </div>
                    
            </div>
        )
    }
};

//<CategoryX id={"cat_"+i} number={i} categorynameinput={this.state.categorynames[i]} num_classes={this.state.num_classes[i]} classes={this.state.classes[i]} starttimes={this.state.starttimes[i]} endtimes={this.state.endtimes[i]} days={this.state.days[i]} removeCategory={this.removeCategory} addClass={this.addClass}
class CategoryX extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            categoryname: props.categorynameinput,
            number: props.number,
           
            classname: "Add class name...",
            monday: false, 
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            
            start: "01:00",
            end: "02:00",

            num_classes: props.num_classes,
            classes: props.classes,
            starttimes: props.starttimes,
            endtimes: props.endtimes,
            days: props.days
        }
        this.onChangeAddDays = this.onChangeAddDays.bind(this)
        this.onSubmitAddClass = this.onSubmitAddClass.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.Child_removeClass = this.Child_removeClass.bind(this)
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
/*
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
        */

        this.props.addClass(this.props.number, dayarray, classname, this.state.start, this.state.end, this.props.number)

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

    Child_removeClass(event){
        event.preventDefault();
        event.stopPropagation()
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
        /*
        this.setState((prevState, props) => ({
            num_classes: prevState.num_classes - 1,
            classes: newclasses,
            starttimes: newstarts,
            endtimes: newends,
            days: newdays
        }))
        */
        let cat_num = this.props.number
        let class_num = event.target.id
        this.props.removeClass(cat_num, class_num)
    }
 
    render(){
        const children = []
        for (var i = 0; i < this.props.num_classes; i += 1) {
            children.push(<OneClass id={i} number={i} classname={this.props.classes[i]} start={this.props.starttimes[i]} end={this.props.endtimes[i]} days={this.props.days[i]} removeClass={this.Child_removeClass} />)
        };

        return(
            <div>
                    <div>Name: {this.props.categorynameinput}</div>
                    <div>Id: {this.props.number}</div>
                    <div>Number: {this.props.number}</div>
                    

                    <div>
                    Add Class to {this.props.categorynameinput} Category 
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
                    
                    <div class="classes-title">Classes in {this.props.categorynameinput}</div>
                    <div class="classes-container">
                        {children}
                    </div>
                    <button onClick={() => {this.props.removeCategory(this.props.id)}} id={this.props.id} number={this.props.number} >Remove Category</button>
            </div>
        )
    }
};
//onClick={() => {this.props.addClass(this.state.number,this.props.monday, this.props.tuesday)}

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