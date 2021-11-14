import React from 'react'
import './generated-schedules.css'

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