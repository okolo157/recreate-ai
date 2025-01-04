import React, { useState } from "react";
import styled from "styled-components";
import { faBars, faDoorOpen, faGear, faGears, faHome, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const projects = [
    { id: 1, name: "Project 1", thumbnail: "https://via.placeholder.com/150" },
    { id: 2, name: "Project 2", thumbnail: "https://via.placeholder.com/150" },
    { id: 3, name: "Project 3", thumbnail: "https://via.placeholder.com/150" },
  ];

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen}>
        <ToggleIcon onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </ToggleIcon>
        {isSidebarOpen ? (
          <>
            <Nav>
              <NavItem href="#">Settings</NavItem>
              <NavItem href="#">Help</NavItem>
              <NavItem href="#">Logout</NavItem>
            </Nav>
          </>
        ) : (
          <>
            <Nav>
              <NavItem href="#">
                <FontAwesomeIcon icon={faHome} />
              </NavItem>
              <NavItem href="#">
                <FontAwesomeIcon icon={faGear} />
              </NavItem>
              <NavItem href="#">
                <FontAwesomeIcon icon={faDoorOpen} />
              </NavItem>
            </Nav>
          </>
        )}
      </Sidebar>
      <Content>
        <Header>
          <Title>Your Projects</Title>
          <CreateButton>Create New Project</CreateButton>
        </Header>
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <Thumbnail src={project.thumbnail} alt={project.name} />
              <ProjectName>{project.name}</ProjectName>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Content>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(120deg, #f0f4ff, #ffffff);
  font-family: "Poppins", sans-serif;
`;

const Sidebar = styled.aside`
  width: ${(props) => (props.isOpen ? "250px" : "80px")};
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isOpen ? "center" : "flex-start")};
  padding: 20px;
  transition: width 0.3s ease;
  position: relative;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.2);
`;

const ToggleIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
  position: absolute;
  top: 20px;
  color:  #0b6fcb;
  align-self: flex-end;
  z-index: 10;
  &:hover {
    color: #1d3557;
  }
`;


const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NavItem = styled.a`
  font-size: ${(props) => (props.isOpen ? "18px" : "16px")};
  text-decoration: none;
  color: white;
  text-align: ${(props) => (props.isOpen ? "left" : "center")};
  padding: ${(props) => (props.isOpen ? "10px 15px" : "10px 0")};
  border-radius: 5px;
  transition: background 0.3s, transform 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(10px);
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 30px;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #1d3557;
`;

const CreateButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ProjectName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #1d3557;
  text-align: center;
  padding: 15px 10px;
`;

export default Dashboard;
