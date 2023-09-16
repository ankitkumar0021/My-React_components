import React from 'react'
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@material-ui/core'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';


const Registration = () => {
  const paperStyle = { padding: '30px 20px', height: '90vh', width: '300px', margin: '20px auto' }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const heading = { margin: 0 }
  const marginTop = { marginTop: 5 }
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><AddCircleOutlinedIcon /></Avatar>
          <h1 style={heading}>Register Here</h1>
          <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>
        <form>
          <TextField fullWidth required label='Name' placeholder="Enter your name" />
          <TextField fullWidth label='Email' placeholder="Enter your email" />
          <FormControl component="fieldset" style={{marginTop:'15px'}}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
          <TextField fullWidth label='Password' type='password' placeholder="Enter your password" required />
          <TextField fullWidth label='Confirm Password' type='password' placeholder="Confirm your password" required />
          <FormControlLabel
           style={marginTop}
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Grid align='center' style={marginTop}>
          <Button type='submit' variant='contained' color='primary'>Register</Button>
          </Grid>
        </form>

      </Paper>
    </Grid>
  )
}

export default Registration