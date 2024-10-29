import React from 'react';
import { Radar } from 'react-chartjs-2';
import { useRecoilValue } from 'recoil';
import { darkState } from '../state/atom';

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const AbRadar = ({ ability }) => {
    const dark = useRecoilValue(darkState);



    const data = {
        labels: Object.keys(ability),
        datasets: [
            {
                label: 'Proficiency (%)',
                data: Object.values(ability),
                backgroundColor: dark ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 255, 255, 0.2)',
                borderColor: dark ? 'rgba(255,0,0,1)' : 'rgba(0,185,255,1)',
                borderWidth: 1,
                pointBackgroundColor: dark ? 'white' : 'black',
                pointBorderColor: '#fff',
            },
        ],
    };

    const options = {
        scales: {
            r: {
                ticks: {
                    beginAtZero: true,
                    max: 100,
                },
                grid: {
                    color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                },
                angleLines: {
                    color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                },
                pointLabels: {
                    color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                },
            },
        },
        plugins: {
            title: {
                display: true,
                text: 'Programming Language Proficiency',
                font: {
                    size: 18,
                },
                color: dark ? 'white' : 'black',
            },
        },
        animation: {
            duration: 700,
            easing: 'easeInOutQuad',
            loop: false,
            animateRotate: true,
            animateScale: true,
        },
    };

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Radar data={data} options={options} key={JSON.stringify(ability)} />
        </div>
    );
};

export default AbRadar;
