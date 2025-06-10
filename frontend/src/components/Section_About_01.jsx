import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const SectionAbout01 = () => {
    const items = [
        { title: 'Reduce, Reuse, Recycle', description: 'Learn the importance of reducing waste, reusing items, and recycling materials.', link: '/reduce-reuse-recycle' },
        { title: 'Conserve Water', description: 'Discover ways to conserve water and protect this precious resource.', link: '/conserve-water' },
        { title: 'Plant Trees', description: 'Understand the benefits of planting trees and how they help the environment.', link: '/plant-trees' },
        { title: 'Use Renewable Energy', description: 'Explore the advantages of using renewable energy sources like solar and wind power.', link: '/use-renewable-energy' },
        { title: 'Reduce Carbon Footprint', description: 'Find out how to reduce your carbon footprint and combat climate change.', link: '/reduce-carbon-footprint' },
        { title: 'Support Eco-friendly Products', description: 'Learn about eco-friendly products and how they contribute to a sustainable future.', link: '/support-eco-friendly-products' },
        { title: 'Save Soil', description: 'Discover the importance of soil conservation and how it supports life on Earth.', link: '/save-soil' },
    ];

    return (
        <Box
            component="section"
            className="py-16"
            css={css`
                background: cyan;
                border-radius: 2rem;
                @media (prefers-color-scheme: dark) {
                    background: #a3c293;
                }
            `}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography variant="h2" align="center" className="text-4xl font-extrabold mb-12">
                        Our Mission
                    </Typography>
                </motion.div>
                <Grid container spacing={4} marginTop={2} >
                    {items.map((item, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <a href={item.link} style={{ textDecoration: 'none' }}>
                                    <Paper
                                        className="p-8 rounded-4xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                                        css={css`
                                            background-color: #2d3748;
                                            transition: background-color 0.3s ease;
                                            &:hover {
                                                background-color: #f0e68c; /* Light color for hover effect */
                                                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                                            }
                                        `}
                                    >
                                        <Typography variant="h5" className="text-[#8B4513] mb-4">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="h6" className="text-black">
                                            {item.description}
                                        </Typography>
                                    </Paper>
                                </a>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default SectionAbout01;
