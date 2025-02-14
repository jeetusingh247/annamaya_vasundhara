import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Lottie from 'react-lottie';
import animationData from '../assets/animations/environment.json'; // Adjust the path to your Lottie animation JSON file

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const cardStyle = {
        backgroundColor: '#a3c293', // Darker green background
        transition: 'transform 0.3s, box-shadow 0.3s',
        ...(isHovered && {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        })
    };

    return (
        <Container maxWidth="lg" style={{ marginTop: '50px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Typography variant="h2" style={{ color: '#8B4513' }}> {/* Dark soil color */}
                    Annamaya Vasundhara
                </Typography>
            </div>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Lottie options={defaultOptions} height={400} width={400} />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        style={cardStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <CardContent>
                            <Typography variant="h3" color='white' component="h1" gutterBottom>
                                Embrace Nature
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Discover the beauty of the natural world and learn how we can work together to protect our environment. Join us in our mission to create a sustainable future for generations to come.
                            </Typography>
                            <Button variant="contained" color="primary" size="large" style={{ backgroundColor: '#333', color: '#fff' }}>
                                Learn More
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeroSection;