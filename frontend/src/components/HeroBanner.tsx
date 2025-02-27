import React, { useState } from 'react';
import { ArrowDropDown } from '@mui/icons-material';
import { Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material';

const HeroBanner: React.FC = () => {
  const [status, setStatus] = useState('Going');

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value as string);
  };

  const getStatusColor = () => {
    switch (status) {
      case 'Going':
        return ['limegreen', 'white'];
      case 'Maybe':
        return ['yellow', 'black'];
      case 'Not Going':
        return ['red', 'white'];
      default:
        return ['grey', 'white'];
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Trip Planner</h1>
      <FormControl size="small" style={{ ...styles.selectContainer, backgroundColor: getStatusColor()[0] }}>
        <Select
          value={status}
          onChange={handleStatusChange}
		  sx={{minWidth: 120, color: getStatusColor()[1], borderRadius: 100, textAlign: 'center'}}
          IconComponent={ArrowDropDown}
        >
          <MenuItem value={"Going"}>Going</MenuItem>
          <MenuItem value={"Not Going"}>Not Going</MenuItem>
          <MenuItem value={"Maybe"}>Maybe</MenuItem>
        </Select>
      </FormControl>
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
    fontSize: '1.8rem',
    textTransform: 'uppercase',
    fontWeight: '600',
    paddingTop: '1rem',
  },
  selectContainer: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '100px',
    marginTop: '1rem',
  },
};

export default HeroBanner;
