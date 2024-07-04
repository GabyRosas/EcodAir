import React from 'react';
import useApi from '../../services/useApi';
import { Paper, Typography, Grid, Box, Card, CardContent } from '@mui/material';

import 'chart.js/auto';

function AirQuality() {
    const { data } = useApi('https://api.waqi.info/feed/madrid/?token=b9d964a07c93bfcde8fd48e0271666e6d36193b6');

    if (!data) {
        return <div>Cargando...</div>;
    }

    if (!data.data.forecast || !data.data.forecast.daily) {
        return <div>Datos de pronóstico no disponibles</div>;
    }

    const forecastData = {
        o3: data.data.forecast.daily.o3 || [],
        pm10: data.data.forecast.daily.pm10 || [],
        pm25: data.data.forecast.daily.pm25 || [],
    };

    
    const daysData = forecastData.o3.map((entry, index) => ({
        day: entry.day,
        o3: entry,
        pm10: forecastData.pm10[index],
        pm25: forecastData.pm25[index]
    }));

    return (
        <Paper elevation={3} style={{ padding: 16, maxWidth: 400, margin: '0 auto' }}>
            <Typography variant="h6">Calidad del Aire en {data.data.city.name}</Typography>
            <Box textAlign="center" marginBottom={2}>
                <Typography variant="h1" color="textPrimary">{data.data.aqi}</Typography>
                <Typography variant="h6">Moderado</Typography>
                <Typography variant="body2">Actualizado el {new Date(data.data.time.iso).toLocaleString()}</Typography>
            </Box>
            <Grid container spacing={2}>
                {daysData.map((dayData, index) => (
                    <Grid item xs={12} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{dayData.day}</Typography>
                                <Typography variant="body2">O3: Avg: {dayData.o3.avg}, Min: {dayData.o3.min}, Max: {dayData.o3.max}</Typography>
                                <Typography variant="body2">PM10: Avg: {dayData.pm10.avg}, Min: {dayData.pm10.min}, Max: {dayData.pm10.max}</Typography>
                                <Typography variant="body2">PM2.5: Avg: {dayData.pm25.avg}, Min: {dayData.pm25.min}, Max: {dayData.pm25.max}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}

export default AirQuality;
