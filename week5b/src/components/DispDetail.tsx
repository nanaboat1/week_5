import 
{ 
    CardContent,
    CardHeader, 
    CardMedia, 
    Typography, 
    CardActions, 
    IconButton, 
    Avatar, 
    Button, 

} from "@mui/material";
import Card from "@mui/material/Card";
import { DispCardProps } from "./DispCard";
import { lightBlue } from "@mui/material/colors";
import { BackHand, ExpandMoreRounded, Home } from "@mui/icons-material";
import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import red from "@mui/material/colors";


const DispDetail  = () => {

    const id = 0;
    const images : string[] = ["test"];
    const desc = "ffel"; 
    const title = "hello";
    const price = 0;

    // 
    const param = useParams(); 
    const [details, setDetails] = useState({
        "id" : 0, 
        "title" : "", 
        "desc" : " ",
        "rating" : 0,
        "stock"  : 0, 
        "image" : "", 
        "price" : 0

    }); 

    useEffect( () => { 

        const data : any = getDispDetail().catch( console.error ); 
        console.log( data )
        

        console.log ( data  )
        

    }, []); 

    const getDispDetail = async ( ) =>  { 

        const payload = await fetch( 
            `https://dummyjson.com/products/${param.symbol}`
        ).then((response) => response.json()
         .then((data) => {
            console.log(data);
            setDetails ( { 
                "id" : data.id, 
                "title" : data.title, 
                "desc" : data.description,
                "rating" : data.rating,
                "stock"  : data.stock, 
                "image" : data.images[0],
                "price" : data.price

            });
            
         })
        ); 

    }

    return ( 

        <Card sx={{ width: 500, height:600, padding:10, backgroundColor:"lightblue"}} >
        <CardContent>
            <CardHeader 
                avatar= { 
                    <Avatar sx={{ bgcolor: lightBlue[500]}} aria-aria-label='recipe'> 
                        {details.id}
                    </Avatar>
                } 
            />
            <CardMedia 
                component="img"
                height="400"
                width="400"
                image={details.image}
                alt={details.desc}

            />
            <Typography sx={{fontSize: 18, }} color="text.secondary" gutterBottom>
                {details.title}
            </Typography>
            <Typography sx={{fontSize: 16}} color="black" gutterBottom>
                $ {details.price}
            </Typography>
            <Typography sx={{fontSize : 15 }} color="black" >
                {details.desc}
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton aria-label="go back" > <Home  /> </IconButton>
            <Button variant="contained" size="small" href="http://localhost:5173"> Go to Home </Button>
        </CardActions>
    </Card>


    ); 

}; 

export default DispDetail; 