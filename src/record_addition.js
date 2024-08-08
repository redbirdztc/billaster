import React from "react";
import propTypes from 'prop-types';

const RecordAddition = ({ onCancel, onSave }) => {

    return (
        <div className="flex flex-col h-full justify-around">
            <div className="flex flex-row justify-between h-14">
                <div onClick={onCancel}>Cancel</div>
                <div onClick={onSave()}>Save</div>
            </div>
            <div className="flex flex-row justify-around h-14">
                <div>INCOME</div>
                <div>EXPENSE</div>
                <div>TRANSFER</div>
            </div>
            <div className="flex flex-row flex-grow justify-between h-16">
                <div>Account</div>
                <div>Category</div>
            </div>
            <div className="h-64">
                <input className="h-full w-full" multiple></input>
            </div>
            <div className="h-80">

            </div>
            <div className="flex flex-row h-14">
                <div>Date</div>
                <div>Time</div>
            </div>
        </div>
    )
}

RecordAddition.propTypes = {
    onCancel: propTypes.func.isRequired,
    onSave: propTypes.func.isRequired
}

export default RecordAddition;