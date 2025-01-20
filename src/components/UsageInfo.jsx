import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faHdd,
  faClock,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

function UsageInfo() {
  // Temp data
  const usageData = [
    { month: "Jan", usage: 45 },
    { month: "Feb", usage: 52 },
    { month: "Mar", usage: 38 },
    { month: "Apr", usage: 65 },
    { month: "May", usage: 48 },
    { month: "Jun", usage: 59 },
  ];

  const stats = [
    {
      icon: <FontAwesomeIcon icon={faChartLine} size="sm" />,
      label: "API Calls",
      value: "12,543",
      change: "+23%",
    },
    {
      icon: <FontAwesomeIcon icon={faHdd} size="sm" />,
      label: "Storage Used",
      value: "1.2 GB",
      change: "80%",
    },
    {
      icon: <FontAwesomeIcon icon={faClock} size="sm" />,
      label: "Runtime",
      value: "45.2 hrs",
      change: "+12%",
    },
    {
      icon: <FontAwesomeIcon icon={faBolt} size="sm" />,
      label: "Response Time",
      value: "235 ms",
      change: "-5%",
    },
  ];

  return (
    <Container>
      <Header>
        <Title>Usage Information</Title>
        <TimeSelect>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </TimeSelect>
      </Header>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <StatHeader>
              <StatLabel>
                <IconWrapper>{stat.icon}</IconWrapper>
                <span>{stat.label}</span>
              </StatLabel>
              <StatChange isPositive={stat.change.startsWith("+")}>
                {stat.change}
              </StatChange>
            </StatHeader>
            <StatValue>{stat.value}</StatValue>
          </StatCard>
        ))}
      </StatsGrid>

      <ChartSection>
        <ChartTitle>Usage Trends</ChartTitle>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={usageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #333",
                  borderRadius: "4px",
                  color: "#fff",
                }}
              />
              <Bar dataKey="usage" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </ChartSection>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  height: 68vh;
  margin: 40px;
  padding: 44px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: "Plus Jakarta Sans", sans-serif;

  @media (max-width: 1024px) {
    padding: 32px;
    margin: 20px;
    // height: 100vh;
  }

  @media (max-width: 768px) {
    height: auto;
    height: 100vh;
    padding: 20px;
    margin: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const Title = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const TimeSelect = styled.select`
  background: transparent;
  color: white;
  border: 1px solid #4a4a4a;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 0.875rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 6px 10px;
  }

  option {
    background: #1a1a1a;
    color: white;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatChange = styled.span`
  font-size: 0.875rem;
  color: ${(props) => (props.isPositive ? "#4ade80" : "#ef4444")};
`;

const StatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #a0a0a0;
  font-size: 0.875rem;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  color: #a0a0a0;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const StatValue = styled.div`
  color: white;
  font-size: 1.25rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ChartSection = styled.div`
  flex-grow: 1;
  min-height: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ChartContainer = styled.div`
  height: calc(100% - 40px);
  width: 100%;


`;
const ChartTitle = styled.h3`
  color: white;
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 12px;
  }
`;

export default UsageInfo;
