import React, { useState } from "react";
import styled from "styled-components";
import {
  faBars,
  faTimes,
  faSearch,
  faCreditCard,
  faGear,
  faQuestionCircle,
  faHistory,
  faSignOutAlt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../assets/images/unnamed.jpg";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState("project1");
  const [projects, setProjects] = useState([
    { id: "project1", name: "Default" },
  ]);
  const [projectModal, setProjectModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [searchModal, setSearchModal] = useState(false);

  const navigate = useNavigate();

  const handleAddProject = () => {
    setProjectModal(true);
    setNewProjectName("");
  };

  const handleProjectSave = () => {
    if (newProjectName.trim()) {
      const newProject = {
        id: `project${projects.length + 1}`,
        name: newProjectName,
      };
      setProjects([...projects, newProject]);
      setSelectedProject(newProject.id);
      setProjectModal(false);
      setSidebarOpen(true);
    } else {
      alert("Project name cannot be empty.");
    }
  };

  const handleProjectCancel = () => {
    setProjectModal(false);
  };

  const handleSearch = () => {
    setSearchModal(true);
  };

  const handleSearchSubmit = () => {
    // Filter projects based on searchTerm
    const filteredProjects = projects.filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the projects list with filtered results
    setProjects(filteredProjects);
    setSearchModal(false);
  };

  const handleSearchCancel = () => {
    setSearchModal(false);
    setSearchTerm("");
  };

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen}>
        <ToggleIcon onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
        </ToggleIcon>

        {isSidebarOpen ? (
          <SidebarContent>
            <Icons>
              <SearchIcon onClick={handleSearch}>
                <FontAwesomeIcon title="Search" icon={faSearch} />
              </SearchIcon>
              <NewIcon title="New Project" onClick={handleAddProject}>
                <FontAwesomeIcon title="New Project" icon={faEdit} />
              </NewIcon>
            </Icons>
            <UserSection>
              <AvatarLink onClick={() => navigate("/settings")} title="View Profile">
                <Avatar src={avatarPlaceholder} alt="User Avatar" />
              </AvatarLink>
              <UserName>User 0</UserName>
              <PlanBadge>Free Plan</PlanBadge>
            </UserSection>

            <ProjectsSection>
              <SectionTitle>PROJECTS</SectionTitle>
              {projects.map((project) => (
                <ProjectItem
                  key={project.id}
                  isSelected={selectedProject === project.id}
                  onClick={() => setSelectedProject(project.id)}
                >
                  {project.name}
                </ProjectItem>
              ))}
            </ProjectsSection>

            <IconNav>
              <IconNavItem onClick={() => navigate("/settings")}>
                <FontAwesomeIcon title="settings" icon={faGear} />
              </IconNavItem>
              <IconNavItem>
                <FontAwesomeIcon title="help" icon={faQuestionCircle} />
              </IconNavItem>
              <IconNavItem>
                <FontAwesomeIcon title="history" icon={faHistory} />
              </IconNavItem>
              <IconNavItem onClick={() => navigate("/home")}>
                <FontAwesomeIcon title="logout" icon={faSignOutAlt} />
              </IconNavItem>
            </IconNav>
          </SidebarContent>
        ) : (
          <CollapsedSidebar>
            <NavIconsWrapper>
              <NavIcon>
                <FontAwesomeIcon
                  onClick={() => navigate("/settings")}
                  icon={faGear}
                  title="settings"
                />
              </NavIcon>
              <NavIcon>
                <FontAwesomeIcon title="Help" icon={faQuestionCircle} />
              </NavIcon>
              <NavIcon>
                <FontAwesomeIcon title="History" icon={faHistory} />
              </NavIcon>
              <NavIcon>
                <FontAwesomeIcon title="Log out" icon={faSignOutAlt} />
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
            <UpgradeButton onClick={() => navigate("/settings")}>
              Upgrade Now
            </UpgradeButton>
            <Credits>You have 10 credits remaining</Credits>
          </AlertText>
        </PlanAlert>

        {projectModal && (
          <ModalOverlay>
            <Modal>
              <ModalHeader>Add New Project</ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  placeholder="Project Name"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleProjectSave}>Save</Button>
                <Button secondary onClick={handleProjectCancel}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ModalOverlay>
        )}

        {searchModal && (
          <ModalOverlay>
            <Modal>
              <ModalHeader>Search Projects</ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleSearchSubmit}>Search</Button>
                <Button secondary onClick={handleSearchCancel}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ModalOverlay>
        )}
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
  background: #05051e;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  width: 400px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
  background: #0b6fcb;
  color: white;
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
`;

const ModalBody = styled.div`
  padding: 16px;
  justify-self: center;
`;

const Input = styled.input`
  width: 90%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  gap: 10px;
  background: #f9f9f9;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${(props) => (props.secondary ? "#ccc" : "#0b6fcb")};
  color: ${(props) => (props.secondary ? "black" : "white")};

  &:hover {
    background: ${(props) => (props.secondary ? "#b3b3b3" : "#084b96")};
  }
`;

const NewIcon = styled.div`
  color: white;
  margin-left: 14px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  font-size: 20px;
`;

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px;
  margin-top: -20px;
`;

const AvatarLink = styled.div`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
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

const ProjectsSection = styled.div`
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

const ProjectItem = styled.button`
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

const IconNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: auto;
  margin-bottom: 20px;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const IconNavItem = styled.div`
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

const Credits = styled.button`
  color: rgb(99, 99, 99);
  border: none;
  background: none;
  justify-self: flex-end;
  align-self: flex-end;
`;

const SearchIcon = styled.div`
  color: white;
  cursor: pointer;
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

export default Dashboard;
