'use client'
import React, { useEffect, useState } from 'react';
import calculateRectangleRoofPanels from "@/utils/tarea";
import { Box, Container, TextField, Button, Typography } from '@mui/material';

export default function MaxPanelsCalculationLayout() {
  const [panelWidth, setPanelWidth] = useState<number>(0);
  const [panelHeight, setPanelHeight] = useState<number>(0);
  const [roofWidth, setRoofWidth] = useState<number>(0);
  const [roofHeight, setRoofHeight] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  const handleCalculate = () => {
    const dimensions = { panelWidth, panelHeight, roofWidth, roofHeight };
    const panels = calculateRectangleRoofPanels(dimensions);
    setResult(panels);
    setIsReady(true)
  };
  

  return (
    <Container component="main" maxWidth="xs">
      <Box 
        sx={{
            marginTop: 8
            }}>
        <Typography component='h1' variant='h4'>
            Calculemos la cuantos paneles caben en tu techo!
        </Typography>
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3
            }}
            >
            <TextField
                label="Panel Width"
                type="number"
                value={panelWidth}
                onChange={(e) => setPanelWidth(Number(e.target.value))}
                fullWidth
                />
            <TextField
                label="Panel Height"
                type="number"
                value={panelHeight}
                onChange={(e) => setPanelHeight(Number(e.target.value))}
                fullWidth
                />
            <TextField
                label="Roof Width"
                type="number"
                value={roofWidth}
                onChange={(e) => setRoofWidth(Number(e.target.value))}
                fullWidth
                />
            <TextField
                label="Roof Height"
                type="number"
                value={roofHeight}
                onChange={(e) => setRoofHeight(Number(e.target.value))}
                fullWidth
                />
            <Button variant="contained" onClick={handleCalculate}>
                Calculate
            </Button>
            { isReady && (
            <Typography variant="h6">Total Panels: {result}</Typography>
            )}
        </Box>    
      </Box>
    </Container>
  );
}
