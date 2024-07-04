import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import AirQuality from './AirQuality';
import useApi from '../../services/useApi';

vi.mock('../../services/useApi');

describe('AirQuality Component', () => {
  it('renders loading state when data is null', () => {
    useApi.mockReturnValue({ data: null });

    render(<AirQuality />);
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it('renders error state when data forecast is not available', () => {
    useApi.mockReturnValue({ data: { data: {} } });

    render(<AirQuality />);
    expect(screen.getByText('Datos de pronóstico no disponibles')).toBeInTheDocument();
  });

  it('renders air quality data when data is available', () => {
    const mockData = {
      data: {
        aqi: 50,
        city: { name: 'Madrid' },
        time: { iso: '2024-07-04T14:00:00+02:00' },
        forecast: {
          daily: {
            o3: [{ avg: 30, day: '2024-07-04', max: 50, min: 10 }],
            pm10: [{ avg: 20, day: '2024-07-04', max: 30, min: 5 }],
            pm25: [{ avg: 25, day: '2024-07-04', max: 40, min: 10 }],
          }
        }
      }
    };

    useApi.mockReturnValue({ data: mockData });

    render(<AirQuality />);
    expect(screen.getByText('Calidad del Aire en Madrid')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('Moderado')).toBeInTheDocument();
    expect(screen.getByText('2024-07-04')).toBeInTheDocument();
    expect(screen.getByText(/O3: Avg: 30, Min: 10, Max: 50/)).toBeInTheDocument();
    expect(screen.getByText(/PM10: Avg: 20, Min: 5, Max: 30/)).toBeInTheDocument();
    expect(screen.getByText(/PM2.5: Avg: 25, Min: 10, Max: 40/)).toBeInTheDocument();
  });
});