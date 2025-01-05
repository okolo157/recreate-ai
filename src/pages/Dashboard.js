import React, { useState } from "react";
import styled from "styled-components";
import {
  faBars,
  faTimes,
  faSearch,
  faSort,
  faCreditCard,
  faGear,
  faQuestionCircle,
  faHistory,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/mylogo.png";
import avatarPlaceholder from "../assets/images/unnamed.jpg";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedWorkspace, setSelectedWorkspace] = useState("personal");

  const navigate = useNavigate();

  const workspaces = [
    { id: "personal", name: "Personal" },
    { id: "team1", name: "Team Alpha" },
    { id: "team2", name: "Team Beta" },
  ];

  const projects = [
    {
      id: 1,
      name: "Project 1",
      thumbnail: "https://via.placeholder.com/400",
      workspace: "personal",
    },
    {
      id: 2,
      name: "Project 2",
      thumbnail: "https://via.placeholder.com/400",
      workspace: "team1",
    },
    {
      id: 3,
      name: "Project 3",
      thumbnail: "https://via.placeholder.com/400",
      workspace: "personal",
    },
  ];

  const handleNavigate = () => {
    navigate("/upload");
  };

  const filteredProjects = projects
    .filter(
      (project) =>
        project.workspace === selectedWorkspace &&
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "recent") return b.id - a.id;
      return 0;
    });

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen}>
        <ToggleIcon onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
        </ToggleIcon>

        {isSidebarOpen ? (
          <SidebarContent>
            <UserSection>
              <Avatar src={avatarPlaceholder} alt="User Avatar" />
              <UserName>John Doe</UserName>
              <PlanBadge>Pro Plan</PlanBadge>
            </UserSection>

            <WorkspacesSection>
              <SectionTitle>WORKSPACES</SectionTitle>
              {workspaces.map((workspace) => (
                <WorkspaceItem
                  key={workspace.id}
                  isSelected={selectedWorkspace === workspace.id}
                  onClick={() => setSelectedWorkspace(workspace.id)}
                >
                  {workspace.name}
                </WorkspaceItem>
              ))}
            </WorkspacesSection>

            <Nav>
              <NavItem href="#">
                <FontAwesomeIcon icon={faGear} />
                <span>Settings</span>
              </NavItem>
              <NavItem href="#">
                <FontAwesomeIcon icon={faQuestionCircle} />
                <span>Help</span>
              </NavItem>
              <NavItem href="#">
                <FontAwesomeIcon icon={faHistory} />
                <span>History</span>
              </NavItem>
              <NavItem href="#">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span>Logout</span>
              </NavItem>
              <p>Logo</p>
            </Nav>
          </SidebarContent>
        ) : (
          <CollapsedSidebar>
            <NavIconsWrapper>
              <NavIcon>
                <FontAwesomeIcon icon={faGear} />
              </NavIcon>
              <NavIcon>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </NavIcon>
              <NavIcon>
                <FontAwesomeIcon icon={faHistory} />
              </NavIcon>
              <NavIcon>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </NavIcon>
            </NavIconsWrapper>
          </CollapsedSidebar>
        )}
      </Sidebar>

      <Content>
        <PlanAlert>
          <AlertIcon>
            <FontAwesomeIcon icon={faCreditCard} />
          </AlertIcon>
          <AlertText>
            Upgrade to Pro Plan to unlock advanced features!
            <UpgradeButton>Upgrade Now</UpgradeButton>
          </AlertText>
        </PlanAlert>

        <ControlsCard>
          <SearchWrapper>
            <SearchIcon>
              <FontAwesomeIcon icon={faSearch} />
            </SearchIcon>
            <SearchInput
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchWrapper>

          <SortSelect
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
          >
            <option value="name">Sort by Name</option>
            <option value="recent">Sort by Recent</option>
          </SortSelect>

          <CreateButton onClick={handleNavigate}>Create New</CreateButton>
        </ControlsCard>

        <ProjectGrid>
          {filteredProjects.map((project) => (
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
`;

const Sidebar = styled.aside`
  width: ${(props) => (props.isOpen ? "280px" : "80px")};
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  color: white;
  transition: width 0.3s ease;
  position: relative;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.2);
`;

const SidebarContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
`;

const CollapsedSidebar = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 100%;
`;

// const LogoContainer = styled.div`
//   padding: ${(props) => (props.small ? "10px 0" : "20px 0")};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
// `;

// const Logo = styled.img`
//   width: ${(props) => (props.small ? "40px" : "120px")};
//   height: auto;
//   object-fit: contain;
// `;

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const UserName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: white;
`;

const PlanBadge = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  color: white;
`;

const WorkspacesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SectionTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  padding: 0 12px;
  margin-bottom: 4px;
`;

const WorkspaceItem = styled.button`
  text-align: left;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  background: ${(props) =>
    props.isSelected ? "rgba(255, 255, 255, 0.2)" : "transparent"};
  color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const NavIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: auto;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const NavIcon = styled.div`
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s;
  color: white;

  &:hover {
    transform: scale(1.1);
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 30px;
  overflow-y: auto;
`;

const PlanAlert = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AlertIcon = styled.div`
  color: #0b6fcb;
`;

const AlertText = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UpgradeButton = styled.button`
  color: #0b6fcb;
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ControlsCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchWrapper = styled.div`
  flex: 1;
  position: relative;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0b6fcb;
  }
`;

const SortSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  min-width: 140px;

  &:focus {
    outline: none;
    border-color: #0b6fcb;
  }
`;

const CreateButton = styled.button`
  padding: 8px 16px;
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const ProjectName = styled.h3`
  padding: 16px;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const ToggleIcon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  span {
    font-size: 14px;
  }
`;

export default Dashboard;
