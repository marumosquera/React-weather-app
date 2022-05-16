import React, { Fragment } from 'react';

import Header from '../Header';

import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

import styles from './Page.module.css';

import useForecast from '../../hooks/useForecast';


const Page = () => {

    const{ isError, isLoading, forecast, submitRequest } = useForecast();

    const onSubmit = (value) => {
        //call fn here   
        submitRequest(value)
    };

    return (
        <Fragment>
            <Header />
            {!forecast &&(
                        <div className={ `${styles.box} position-relative `}>
                            {/* Form */}
                            {!isLoading && <Form submitSearch={onSubmit}>  </Form>}
                            {/* Error */} 
                            {isError && <Error message={isError}></Error>}
                            {/* Loader */} 
                            {isLoading && <Loader />}
                        </div>
            )}
                {/* Forecast */}  
                {forecast && <Forecast forecast={forecast} />}
            
        </Fragment>
    );
};

export default Page;
