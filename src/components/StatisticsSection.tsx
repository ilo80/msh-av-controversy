import statisticsData from '../data/statisticsData';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import type { Statistic } from '../models/statistic/statistic';

export default function StatisticsSection() {
  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30) + 70;
    const lightness = Math.floor(Math.random() * 20) + 40;
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
          <div key={stat.id} className="statistic-card">
            {renderPieChart(value, 100 - value)}
            <p className="statistic-percentage">{stat.value}%</p>
            <p className="statistic-description">{stat.description}</p>
          </div>
        );
      }

      case 'range': {
        const [minValue, maxValue] = stat.value.split('-').map(Number);
        const averageValue = (minValue + maxValue) / 2;
        return (
          <div key={stat.id} className="statistic-card">
            {renderPieChart(averageValue, 100 - averageValue)}
            <p className="statistic-percentage">
              {minValue}% - {maxValue}%
            </p>
            <p className="statistic-description">{stat.description}</p>
          </div>
        );
      }

      default:
        return (
          <div key={stat.id} className="statistic-card">
            <p className="statistic-value">{stat.value}</p>
            <p className="statistic-description">{stat.description}</p>
          </div>
        );
    }
  };

  return (
    <section className="statistics-section" id="statistics">
      <div className="statistics-section-container">
        <h2 className="statistics-title">Chiffres clés sur les voitures autonomes</h2>
        <div className="statistics-grid">
          {statisticsData.map(renderStatistic)}
        </div>
      </div>
    </section>
  );
}
