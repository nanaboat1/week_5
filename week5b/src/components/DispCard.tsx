import React from 'react'; 
import Card from '@mui/material/Card'; 
import CardActions from '@mui/material/CardActions';
import { CardContent, Button, Typography, CardHeader, Avatar, CardMedia, IconButton } from '@mui/material';
import { blueGrey, red, lightBlue } from '@mui/material/colors';
import { BorderAll } from '@mui/icons-material';
import { ExpandMoreRounded } from '@mui/icons-material';

export interface DispCardProps { 

    id : number; 
    title: string; 
    price: number; 
    desc : string;  
    images : string[]; 
};


const DispCard  : React.FC<DispCardProps> = ( {id, title, price, desc, images } : DispCardProps ) => { 

    const imgSrc = images[0];
    return ( 
        <Card sx={{ width: 500, height:250, padding:10}} >
            <CardContent>
                <CardHeader 
                    avatar= { 
                        <Avatar sx={{ bgcolor: lightBlue[500]}} aria-aria-label='recipe'> 
                            {id}
                        </Avatar>
                    } 
                />
                <CardMedia 
                    component="img"
                    height="100"
                    width="100"
                    image={images[0]}
                    alt={desc}

                />
                <Typography sx={{fontSize: 16, }} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography sx={{fontSize: 14}} color="black" gutterBottom>
                    $ {price}
                </Typography>
                <Typography sx={{mb : 1.5}} color="text.secondary" >
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="details" > <ExpandMoreRounded  /> </IconButton>
                <Button variant="contained" size="small" href={`http://localhost:5173/DispDetail/${id}`}> Click for Details </Button>
            </CardActions>
        </Card>
    ); 

};

export default DispCard; 