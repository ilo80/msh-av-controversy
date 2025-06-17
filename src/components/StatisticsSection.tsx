import statisticsData from '../data/statisticsData';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import type { Statistic } from '../models/statistic/statistic';

export default function StatisticsSection() {
  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30) + 70; // 70-100% saturation
    const lightness = Math.floor(Math.random() * 20) + 40; // 40-60% lightness
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const renderPieChart = (value: number, remaining: number) => (
    <ResponsiveContainer width="100%" height={120}>
      <PieChart>
        <Pie
          data={[
            { name: 'Value', value },
            { name: 'Remaining', value: remaining },
          ]}
          innerRadius={40}
          outerRadius={55}
          dataKey="value"
        >
          <Cell fill={getRandomColor()} />
          <Cell fill="#eee" />
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );

  const renderStatistic = (stat: Statistic) => {
    switch (stat.type) {
      case 'percentage': {
        const value = parseFloat(stat.value);
        return (
          <div key={stat.id} style={{
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            margin: '12px',
          }}>
            {renderPieChart(value, 100 - value)}
            <p style={{ fontWeight: 'bold', fontSize: '1.25rem', marginTop: '8px' }}>{stat.value}%</p>
            <p style={{ fontSize: '0.875rem', color: '#555' }}>{stat.description}</p>
          </div>
        );
      }

      case 'range': {
        const [minValue, maxValue] = stat.value.split('-').map(Number);
        const averageValue = (minValue + maxValue) / 2;
        return (
          <div key={stat.id} style={{
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            margin: '12px',
          }}>
            {renderPieChart(averageValue, 100 - averageValue)}
            <p style={{ fontWeight: 'bold', fontSize: '1.25rem', marginTop: '8px' }}>
              {minValue}% - {maxValue}%
            </p>
            <p style={{ fontSize: '0.875rem', color: '#555' }}>{stat.description}</p>
          </div>
        );
      }
      default:
        return (
          <div key={stat.id} style={{
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            margin: '12px',
          }}>
            <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{stat.value}</p>
            <p style={{ fontSize: '0.875rem', color: '#555' }}>{stat.description}</p>
          </div>
        );
    }
  };

  return (
    <section className='statistics-section' id="statistics" style={{ padding: '32px 16px', backgroundColor: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '32px', color: '#333' }}>
          Chiffres clés sur les voitures autonomes
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '24px',
        }}>
          {statisticsData.map(renderStatistic)}
        </div>
      </div>
    </section>
  );
}
