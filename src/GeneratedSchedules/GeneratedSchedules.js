import React from 'react'
import './generated-schedules.css'
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay'

class GeneratedSchedules extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div class="schedules-container">
                    <p class="title">
                        Schedules
                    </p>

                    <div>DATA:</div>

                    <div class="schedule-container">
                        <div class="schedule">
                            <Schedule />
                        </div>

                        <div class="schedule">
                            <Schedule />
                        </div>

                        <div class="schedule">
                            <Schedule />
                        </div>
                        
                    </div>
            </div>
        )
    }
};

class Schedule extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                This is a placeholder for a schedule

            </div>
        )
    }
};

export default GeneratedSchedules