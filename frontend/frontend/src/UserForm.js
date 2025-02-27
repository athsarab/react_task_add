import{ Button, Grid, Input, Typography } from '@mui/material';
import { useState } from 'react';

const UserForm = props => {

    const [id,setID] = useState(0);
    const [name,setName] = useState('');

    return (
        <Grid 
            container
            spasing={2}
            sx={{
                display: 'block',
                backgroundColor: 'white',
                padding: '20px',
            }}
            >
                
                <Grid item xs={12} sm={6} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography variant="h4" align="center">User Form</Typography>
                    </Grid>

                    <Grid>
                        <Typography
                        component={'label'}
                        htmlFor="id"
                        sx={{
                            color: 'black',
                            display: 'block',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            marginTop: '10px',
                        }}
                        >
                            ID
                        </Typography>
                        <Input
                        type="number"
                        id="id"
                        name="id"
                        value={id}
                        onChange={e => setID(e.target.value)}
                        sx={{
                            display: 'block',
                            width: '400px',
                            padding: '10px',
                            marginTop: '5px',
                        }}
                        />
                    </Grid>

     

                    <Grid>
                        <Typography
                        component={'label'}
                        htmlFor="id"
                        sx={{
                            color: 'black',
                            display: 'block',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            marginTop: '10px',  
                        }}
                        > 
                            Name
                        </Typography>
                        <Input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        sx={{
                            display: 'block',
                            width: '400px',
                            padding: '10px',
                            marginTop: '5px',
                        }}
                        />
                    </Grid>

                    <Button
                     sx={{
                            display: 'block',
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '10px',
                            marginTop: '10px',
                            marginleft: 'auto',
                            marginRight: 'auto',
                            '&:hover': {
                                backgroundColor: 'black',
                                opacity: '0.8',
                            },
                            

                        }}
                        >
                            Submit
                        </Button>
            </Grid>

    );
    }
    export default UserForm;