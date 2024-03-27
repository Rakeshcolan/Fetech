// import { Button } from 'react-bootstrap'
import { Button } from '@mui/material';

import React from 'react'
import "../commonComp.css";

const AddButton = ({buttonText,handleClick}) => {
  return (
    <div >
        <Button variant="contained" color="primary" className='addBtn' onClick={handleClick}>+{buttonText}</Button>
    </div>
  )
}

export default AddButton