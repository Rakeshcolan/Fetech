import { Button } from '@mui/material'
import React from 'react'
import "../commonComp.css";

const AddButton = ({buttonText,handleClick}) => {
  return (
    <div >
        <Button className='addBtn' onClick={handleClick}>{buttonText}</Button>
    </div>
  )
}

export default AddButton