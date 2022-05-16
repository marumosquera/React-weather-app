import React from 'react';
import PropTypes from 'prop-types';
import styles from './UpcomingDaysForecast.module.css';
import { NavItem } from 'react-bootstrap';
import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem/UpcomingDaysForecastItem';

const UpcomingDaysForecast = ({days}) => 
<ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
    {days.map((day) => (
        <UpcomingDaysForecastItem {...day} key={day.weekday}/>
    ))}
</ul>;

export default UpcomingDaysForecast;
