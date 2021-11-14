import React from 'react'
import './description.css'

class Description extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div class="description">
                    <p class="text">
                        Overwhelemed by the amount of sections and discussion or labs each of your potential classes have? No worries! Add a category for each set of classes that you need exactly one class from. And times for each class(es) for each of your categories. Generate your schedule and you will have a list of viable schedules that have exactly one class from each category and no time conflicts that you can choose from. 
                    </p>
            </div>
        )
    }
};

export default Description