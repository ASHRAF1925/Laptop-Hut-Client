import React from 'react';
import Spinner from '../../Shared/Spinner/Spinner';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>Welcome to Dashboard</h1>
            <Spinner></Spinner>
        </div>
    );
};

export default Dashboard;