import React, { useState } from 'react'
import {Autocomplete, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextareaAutosize, TextField} from '@mui/material';
// import DatePicker from "react-datepicker";  
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
  
import "react-datepicker/dist/react-datepicker.css";  

function Update() {
    // const [startDate, setStartDate] = useState(new Date());  
    const [value, setValue] = React.useState(new Date());
    const top100Films=["1","5","8","78"]
    const flatProps = {
        options: top100Films.map((option) => option),
      };
      const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
    
  return (
   <>
   <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch'}

      }}
      noValidate
      autoComplete="off"
    >
<div ClassName="display">

          <TextField
          id="standard-helperText"
          label="Name "
          defaultValue="Name"
          helperText="Requried Fields *"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Mobile"
          defaultValue="mobile"
          helperText="Requried Fields *"
          variant="standard"
        />
         
</div>
<div>

<TextField
          id="standard-helperText"
          label="Email "
          defaultValue="email"
          helperText="Requried Fields *"
          variant="standard"
        />

      <TextField
          id="standard-helperText"
          label="Password "
          defaultValue="password"
          type="password"
          helperText="Requried Fields *"
          variant="standard"
        />
</div>
<div>
<TextareaAutosize
      aria-label="minimum height"
      minRows={4}
      placeholder="Address"
     
      style={{ width: "38%" }}
    />
</div>
<div style={{display: 'flex',justifyContent: 'center'}} >
  <Autocomplete
        {...flatProps}
        id="flat-demo"
        renderInput={(params) => (
          <TextField {...params} label="State" variant="standard" />
        )}
      />
      <Autocomplete
        {...flatProps}
        id="flat-demo"
        renderInput={(params) => (
          <TextField {...params} label="City" variant="standard" />
        )}
      />
</div >

<div style={{display: 'flex',justifyContent: 'center' }}>

 <LocalizationProvider dateAdapter={AdapterDateFns}>
       <DesktopDatePicker
          label="DOB"
          value={value}
          minDate={new Date('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>

  <FormControl>
      <FormLabel sx={{p:3}}>Gender</FormLabel>
      <RadioGroup
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />      
      </RadioGroup>
    </FormControl>

</div>

</Box>
   </>

  )
}

export default Update