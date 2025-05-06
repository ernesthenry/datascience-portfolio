import React from 'react';
import { Grid } from '@mui/material';
import CardItem from '../components/Cards/CardItem';
import blogConfig from '../assets/configs/blogConfig';

const Blogs = () => {
    return (
        <Grid container spacing={6} justifyContent="center">
            {blogConfig.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <CardItem item={item} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Blogs;
