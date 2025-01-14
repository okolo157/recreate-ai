import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  faBars,
  faTimes,
  faSearch,
  faCreditCard,
  faGear,
  faQuestionCircle,
  faSignOutAlt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../assets/images/unnamed.jpg";
import Upload from "../components/Upload";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState("project1");
  const [projects, setProjects] = useState([
    { id: "project1", name: "Default", history: [] },
  ]);
  const [projectModal, setProjectModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [searchModal, setSearchModal] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [dropdownProject, setDropdownProject] = useState(null);
  const dropdownRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [finalCode, setFinalCode] = useState("");

  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownProject(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDotsClick = (e, projectId) => {
    e.stopPropagation();
    setDropdownProject(dropdownProject === projectId ? null : projectId);
  };

  const handleAddProject = () => {
    setProjectModal(true);
    setNewProjectName("");
  };

  const handleProjectSave = () => {
    if (newProjectName.trim()) {
      const newProject = {
        id: `project${projects.length + 1}`,
        name: newProjectName,
        history: [],
      };
      setProjects([...projects, newProject]);
      setSelectedProject(newProject.id);
      setProjectModal(false);
      setSidebarOpen(true);
      setSelectedFile(null);
      setUploadedImage(null);
      setIsImageUploaded(false);
      setFinalCode("");
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

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchItemClick = (projectId) => {
    setSelectedProject(projectId);
    setSearchModal(false);
    setSearchTerm("");
  };

  const handleSearchCancel = () => {
    setSearchModal(false);
    setSearchTerm("");
  };

  const handleDelete = (projectId) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== projectId
    );
    setProjects(updatedProjects);

    if (selectedProject === projectId && updatedProjects.length > 0) {
      setSelectedProject(updatedProjects[0].id);
    } else if (updatedProjects.length === 0) {
      setSelectedProject(null);
    }
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
              <AvatarLink
                onClick={() => navigate("/settings")}
                title="View Profile"
              >
                <Avatar src={avatarPlaceholder} alt="User  Avatar" />
              </AvatarLink>
              <UserName>{email}</UserName>
              <PlanBadge>Free Plan</PlanBadge>
            </UserSection>

            <ProjectsSection>
              <SectionTitle>PROJECTS</SectionTitle>
              {projects.map((project) => (
                <ProjectItemWrapper
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <ProjectItem
                    isSelected={selectedProject === project.id}
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <ProjectName>{project.name}</ProjectName>
                    {(hoveredProject === project.id ||
                      dropdownProject === project.id) && (
                      <DotsButton
                        onClick={(e) => handleDotsClick(e, project.id)}
                        isActive={dropdownProject === project.id}
                      >
                        <svg
                          width="16"
                          height="4"
                          viewBox="0 0 16 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="white" />
                          <circle cx="8" cy="2" r="2" fill="white" />
                          <circle cx="14" cy="2" r="2" fill="white" />
                        </svg>
                      </DotsButton>
                    )}
                  </ProjectItem>
                  {dropdownProject === project.id && (
                    <DropdownMenu ref={dropdownRef}>
                      <DropdownItem>Rename</DropdownItem>
                      <DropdownItem>Duplicate</DropdownItem>
                      <DropdownItem>Archive</DropdownItem>
                      <DropdownItem
                        danger
                        onClick={() => handleDelete(project.id)}
                      >
                        Delete
                      </DropdownItem>
                    </DropdownMenu>
                  )}
                </ProjectItemWrapper>
              ))}
            </ProjectsSection>

            <IconNav>
              <IconNavItem onClick={() => navigate("/settings")}>
                <FontAwesomeIcon title="settings" icon={faGear} />
              </IconNavItem>
              <IconNavItem>
                <FontAwesomeIcon
                  onClick={() => navigate("/help-center")}
                  title="Help"
                  icon={faQuestionCircle}
                />
              </IconNavItem>

              <IconNavItem onClick={() => navigate("/home")}>
                <FontAwesomeIcon title="Logout" icon={faSignOutAlt} />
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
                <FontAwesomeIcon
                  onClick={() => navigate("/help-center")}
                  title="Help"
                  icon={faQuestionCircle}
                />
              </NavIcon>

              <NavIcon>
                <FontAwesomeIcon
                  onClick={() => navigate("/home")}
                  title="Logout"
                  icon={faSignOutAlt}
                />
              </NavIcon>
            </NavIconsWrapper>
          </CollapsedSidebar>
        )}
      </Sidebar>
      <Content isSidebarOpen={isSidebarOpen}>
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

        <Upload
          selectedProject={selectedProject}
          projects={projects}
          setProjects={setProjects}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          uploadedImage={uploadedImage}
          setUploadedImage={setUploadedImage}
          isImageUploaded={isImageUploaded}
          setIsImageUploaded={setIsImageUploaded}
          finalCode={finalCode}
          setFinalCode={setFinalCode}
        />

        {projectModal && (
          <ModalOverlay>
            <BaseModal>
              <ModalHeader>
                Create New Project
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={handleProjectCancel}
                  size="lg"
                />
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  placeholder="Enter project name..."
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  autoFocus
                />
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleProjectCancel}>Cancel</Button>
                <Button primary onClick={handleProjectSave}>
                  Create Project
                </Button>
              </ModalFooter>
            </BaseModal>
          </ModalOverlay>
        )}

        {searchModal && (
          <ModalOverlay>
            <BaseModal wide>
              <ModalHeader>
                Search Projects
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={handleSearchCancel}
                  size="lg"
                />
              </ModalHeader>
              <ModalBody>
                <SearchInput
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <SearchResults>
                  {filteredProjects.map((project) => (
                    <SearchProjectItem
                      key={project.id}
                      isSelected={selectedProject === project.id}
                      onClick={() => handleSearchItemClick(project.id)}
                    >
                      {project.name}
                    </SearchProjectItem>
                  ))}
                  {filteredProjects.length === 0 && (
                    <NoResults>No projects found</NoResults>
                  )}
                </SearchResults>
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleSearchCancel}>Close</Button>
              </ModalFooter>
            </BaseModal>
          </ModalOverlay>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  font-style: inherit;
  background:rgb(10, 10, 40); 

`;

const Sidebar = styled.aside`
  width: ${(props) => (props.isOpen ? "280px" : "80px")};
  background: #05051e;
  color: white;
  transition: width 0.3s ease;
  position: fixed; /* Change to fixed */
  left: 0; /* Align to the left */
  top: 0; /* Align to the top */
  height: 100%; /* Full height */
  z-index: 1000; /* Ensure it is above other content */
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.2);
  overflow: auto;

  /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
  ::-webkit-scrollbar {
    width: 0;
  }

  scrollbar-width: none;

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
  }
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
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const BaseModal = styled.div`
  background: white;
  width: ${(props) => (props.wide ? "500px" : "400px")};
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ModalHeader = styled.div`
  background: #05051e;
  color: white;
  padding: 20px 24px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

const ModalBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  width: 90%;
  justify-self: center;
  align-self: center;
  padding: 12px 16px;
  margin: 0px
  border: 2px solid #eaeaea;
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #05051e;
    box-shadow: 0 0 0 3px rgba(5, 5, 30, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

const SearchInput = styled(Input)`
  padding-left: 40px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E")
    no-repeat 12px center;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 24px;
  gap: 12px;
  background: #f8f9fa;
  border-top: 1px solid #eaeaea;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  font-size: 14px;

  ${(props) =>
    props.primary
      ? `
    background: #05051e;
    color: white;
    
    &:hover {
      background: #0f0f3d;
      transform: translateY(-1px);
    }
  `
      : `
    background: #eaeaea;
    color: #333;
    
    &:hover {
      background: #d5d5d5;
    }
  `}

  &:active {
    transform: translateY(1px);
  }
`;

const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 8px;
  margin-top: 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 3px;

    &:hover {
      background: #ccc;
    }
  }
`;

const SearchProjectItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  background: ${(props) =>
    props.isSelected ? "rgba(5, 5, 30, 0.05)" : "white"};
  color: ${(props) => (props.isSelected ? "#05051e" : "#333")};
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-size: 14px;

  &:hover {
    background: rgba(5, 5, 30, 0.02);
    border-color: #05051e;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #666;
  font-style: italic;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #ddd;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
`;

const PlanAlert = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  width: 100%;
  max-width: 800px; /* Set a max-width for better centering */
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

const ProjectItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  border: none;
  background: ${(props) =>
    props.isSelected ? "rgba(255, 255, 255, 0.2)" : "transparent"};
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ProjectItemWrapper = styled.div`
  position: relative;
`;

const ProjectName = styled.span`
  flex: 1;
  margin-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DotsButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
  opacity: ${(props) => (props.isActive ? 1 : 0.6)};

  &:hover {
    opacity: 1;
  }

  svg circle {
    fill: white;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 12px;
  top: 100%;
  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 160px;
  z-index: 100;
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 10px 16px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  color: ${(props) => (props.danger ? "#dc3545" : "#333")};
  transition: background 0.2s;

  &:hover {
    background: ${(props) => (props.danger ? "#ffebee" : "#f5f5f5")};
  }
`;

export default Dashboard;
