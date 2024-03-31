import React from "react";
import "./index.css"
import *as calendar from "./calendar"
import classnames from "classnames";


export default class Calendar extends React.Component{
    static defaultProps = {
        date: new Date (),
        years: [ 2020, 2021, 2022, 2023, 2024, 2025, 2026],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        
        onChange:Function.prototype
    };
    
    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    }
     get month() {
        return this.state.date.getMonth();
    }
    get day() {
        return this.state.date.getDate();
    }




    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year,this.month - 1);
        this.setState({ date });
        console.log(date);
        
    };

    handleNextMonthButtonClick = () => {
         const date = new Date(this.year,this.month + 1);
        this.setState({ date });
        console.log(date);
        
    };
    
    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);
        console.log(date);
        this.setState({ date });
     };

    
    handleDayClick = date => {
       
        this.setState({ selectedDate: date });
        this.props.onChange(date)
        console.log(date);
     };



    render() {

        const { years, monthNames } = this.props;
        const { currentDate, selectedDate } = this.state;
        const monthData = calendar.getMonthData(this.year, this.month);

        return (
            <div className="calendar" >
                <header>
                    <button onClick={this.handlePrevMonthButtonClick}>{"<"} </button>
                    <select
                        ref={element => this.monthSelect = element}
                        value={this.month}
                        onChange={this.handleSelectChange}>
                        {monthNames.map((name, index) =>
                            <option key={name} value={index}>{name }</option>
                        )}
                    </select>
                    <select
                        ref={element => this.yearSelect = element}
                        value={this.year}
                        onChange={this.handleSelectChange}>
                     {years.map(year =>
                            <option key={year} value={year}>{year}</option>
                        )}
                    </select>
                    <button onClick={this.handleNextMonthButtonClick}>{">"} </button>
                </header>

                <table>
                    
                    <tbody>
                        {monthData.map((week, index) =>
                            <tr className="week" key={index}>
                                {week.map((date, index) => date ?
                                    <td key={index}
                                        className={classnames("day", {
                                            "today": calendar.areEqual(date, currentDate),
                                            "selected":calendar.areEqual(date, selectedDate)
                                        })}
                                        onClick={()=>this.handleDayClick(date)}
                                    > {date.getDate()}</td>
                                    :
                                    <td key={index} />
                                )
                                }
                            </tr>
    )}
                    </tbody>
                </table>
                
           </div>
        );
    }
}





