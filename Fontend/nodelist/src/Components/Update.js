import React, { useEffect, useState } from 'react'
import {Autocomplete, Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup, Slider, Stack, TextareaAutosize, TextField, Typography} from '@mui/material';
// import DatePicker from "react-datepicker";  
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
  
import "react-datepicker/dist/react-datepicker.css";  
import axios from 'axios';
import { convertLength } from '@mui/material/styles/cssUtils';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

let AllState=[];
let Api1=""

function Update() {
    const [value, setValue] = React.useState(new Date());
    const [IndState, setIndState] = React.useState([]);
    const [City, setCity] = React.useState([]);
    const [name, setname] = React.useState("");
    const [mobile, setmobile] = React.useState();
    const [email, setemail] = React.useState();
    const [password, setpassword] = React.useState();
    const [address, setaddress] = React.useState();
    const [date1, setdate1] = React.useState("");
    const [states, setstates] = React.useState("");
    const [Citys, setCitys] = React.useState("");
    const [hobbies, sethobbies] = React.useState([]);
    const [rate, setrate] = React.useState(1);













    


useEffect(()=>{
  const fun=async()=>{
    const headers={
       "Accept": "application/json",
       "api-token": "lHJFq58Fnit58xcQbz4RENR54KtpRjSlF5beqWnlhVMf_LktcjBG8TAsIJ-3m-4QaJs",
       "user-email": "navinsmileraj@gmail.com"
     }
    const res1= await axios.get("https://www.universal-tutorial.com/api/getaccesstoken",{headers})
   
   Api1= `Bearer ${res1.data.auth_token}`;
   
   const response= await  axios.get('https://www.universal-tutorial.com/api/states/India', {headers: { authorization: Api1 }})
        
           setIndState(response.data)
           AllState=response.data
   }

  fun();
},[]);




    


    // console.log(AllState);
    const flatProps = {
        options:AllState.map((option) => option.state_name),
      };

      const flatcity = {

      
        options:City.map((option) => option.city_name),
      
      };

 
   const CityHandler=async(e,value)=>{
   

    const response= await axios.get(`https://www.universal-tutorial.com/api/cities/${value}`, {headers: { authorization: Api1 }})
         setCity(response.data);
         flatcity();
         console.log(response.data);

   }

      const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
      });
    
      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

    
      const { gilad, jason, antoine } = state;
      const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
    


  return (
   <>
   <Box
      component="form"
      sx={{
        p:2,
        m: 2,
       maxWidth: '50ch' ,
        boxShadow: 2,
        margin:"auto"

      }}
      noValidate
      autoComplete="off"
    >

      {/* name */}
<div ClassName="display">

          <TextField
           sx={{m:1}}
          label="Name "
          defaultValue="Name"
          helperText="Requried Fields *"
          variant="standard"
        />
        <TextField
        sx={{m:1}}
          id="standard-helperText"
          label="Mobile"
          defaultValue="mobile"
          helperText="Requried Fields *"
          variant="standard"
        />
         
</div>

{/* email */}
<div>

<TextField
           sx={{m:1}}
          label="Email "
          defaultValue="email"
          helperText="Requried Fields *"
          variant="standard"
        />

      <TextField
           sx={{m:1}}
          label="Password "
          defaultValue="password"
          type="password"
          helperText="Requried Fields *"
          variant="standard"
        />
</div>
  {/* address */}

<div>
<TextareaAutosize
      aria-label="minimum height"
      minRows={4}
      placeholder="Address"
     
      style={{ width: "95%",m:2 }}
    />
</div>
{/* Date */}
<div>
<LocalizationProvider dateAdapter={AdapterDateFns}>
       <DesktopDatePicker
          label="DOB"
          value={value}
          minDate={new Date('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField sx={{mt:2,width:"95%"}} {...params} />}

        />
        </LocalizationProvider>
</div>

{/* city state */}
<div style={{display: 'flex',justifyContent: 'center'}} >
  <Autocomplete
       sx={{ minWidth: '20ch',m:2}}  
        {...flatProps}
        onChange={(e,value)=>{CityHandler(e,value)}}
        id="flat-demo"
        renderInput={(params) => (
          <TextField {...params} label="State" variant="standard" />
        )}
      />
      <Autocomplete
      sx={{  minWidth: '20ch',m:2}}
        {...flatcity}
        id="flat-demo"
        renderInput={(params) => (
          <TextField {...params} label="City" variant="standard" />
        )}
      />
</div >


{/* check box */}
<div style={{display: 'flex',justifyContent: 'center' }}>


        <FormControl sx={{ mx: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Hobbies</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" color="secondary" />
            }
            label="Cricket"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" color="secondary"/>
            }
            label="Football"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" color="secondary" />
            }
            label="Music"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>


  <FormControl sx={{mx:3}}>
      <FormLabel >Gender</FormLabel>
      <RadioGroup
        defaultValue="female"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />      
      </RadioGroup>
    </FormControl>

</div>

{/* slider */}
<div>
<Box sx={{ m: 3 }} />
      <Typography gutterBottom>Communication Skill</Typography>
      <Slider
      defaultValue={3}
      max={5}
      sx={{
        width: "100%",
        color: 'success.main',
        '& .MuiSlider-thumb': {
          borderRadius: '1px',
        },
      }}
    />
</div>
{/* buuton  */}
<div>
<Stack spacing={2} direction="row" >
 
      <Button variant="text">Cancel</Button>
      <Button variant="contained">Save</Button>
    </Stack>
</div>

</Box>
   </>

  )
}

export default Update