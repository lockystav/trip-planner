import { ArrowDropDown } from '@mui/icons-material';
import React, { useState } from 'react';

const HeroBanner: React.FC = () => {
  const [status, setStatus] = useState('going');

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const getStatusColor = () => {
    switch (status) {
      case 'going':
        return ['limegreen', 'white'];
      case 'maybe':
        return ['yellow', 'black'];
      case 'not-going':
        return ['red', 'white'];
      default:
        return ['grey', 'white'];
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Trip Planner</h1>
      <div style={{ ...styles.dropdownContainer, backgroundColor: getStatusColor()[0] }}>
        <ArrowDropDown sx={{color:getStatusColor()[1],  marginLeft: '-0.35rem'}}/>
        <select
          value={status}
          onChange={handleStatusChange}
          style={{ ...styles.dropdown, color: getStatusColor()[1] }}
        >
          <option value="going">Going</option>
          <option value="not-going">Not Going</option>
          <option value="maybe">Maybe</option>
        </select>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '25vh',
    width: '100%',
    backgroundColor: 'lightgrey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
},
title: {
	color: 'grey',
    fontSize: '2rem',
    marginBottom: '1rem',
	textTransform: 'uppercase',
	fontWeight: 'bold',
},
dropdownContainer: {
	display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    borderRadius: '100px',
    marginTop: '1rem',
},
dropdown: {
	border: 'none',
    background: 'none',
	textAlign: 'center',
    fontSize: '1rem',
    appearance: 'none',
    padding: 0,
},
};

export default HeroBanner;
