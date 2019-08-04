import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const colorMap = { 'Red': '#FF6384', 'Blue': '#36A2EB', 'Yellow': '#FFCE56' };

function createColors(length) {
    const labels = [],
        bgColors = [],
        hovBgColors = [];

    for (let i = 0; i < length; i++) {
        const curr_color = Object.keys(colorMap)[i];
        labels.push(curr_color);
        const curr_color_hex = colorMap[curr_color];
        bgColors.push(curr_color_hex);
        hovBgColors.push(curr_color_hex);
    }
    return { labels, bgColors, hovBgColors }
};

const NewDonut = (props) => {
    const { labels, bgColors, hovBgColors } = createColors(props.data.length);

    const data_to_pass_in = {
        labels: labels,
        datasets: [{
            data: props.data,
            backgroundColor: bgColors,
            hoverBackgroundColor: hovBgColors
        }]
    };

    return (
        <>
            <div>
                <h2>Dynamicly refreshed Doughnut</h2>
                <Doughnut data={data_to_pass_in} options={{
                    cutoutPercentage: 80,
                    rotation: 120
                }} />
            </div>
        </>
    );
};

export default NewDonut;
