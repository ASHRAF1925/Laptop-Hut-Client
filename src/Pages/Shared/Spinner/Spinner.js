import React from 'react';
import {DotLoader} from "react-spinners"

const Spinner = () => {
    return (
        <div className='h-96 w-full  flex justify-center items-center mx-auto my-auto'><DotLoader color="#36d7b7" /></div>
    );
};

export default Spinner;