import React from "react";

const Overview = (props) => {
    const {tasks} = props;

    return (
        <ul>
            {tasks.map((task) => {
                return <li>{task.next}</li>;
            })}
        </ul>
    );
};

export default Overview;