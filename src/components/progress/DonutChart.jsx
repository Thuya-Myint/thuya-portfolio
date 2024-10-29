import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

// Register required chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const languageData = {
    japanese: {
        reading: 80,
        writing: 70,
        listening: 80,
        speaking: 60,
    },
    english: {
        reading: 80,
        writing: 70,
        listening: 80,
        speaking: 70,
    },
};

// Prepare data for the chart
const getDataForChart = (language) => {
    const proficiency = languageData[language];
    return {
        labels: Object.keys(proficiency),
        datasets: [
            {
                label: `${language.charAt(0).toUpperCase() + language.slice(1)} Proficiency`,
                data: Object.values(proficiency),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };
};

const DonutChart = ({ language }) => {
    const data = getDataForChart(language);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `${language.charAt(0).toUpperCase() + language.slice(1)} Language Proficiency`,
            },
        },
    };

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DonutChart;
