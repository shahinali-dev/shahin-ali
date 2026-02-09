import { html } from "hono/html";
import AboutSection from "../components/Home/AboutSection";
import ExperienceSection from "../components/Home/ExperienceSection";
import HeroSection from "../components/Home/HeroSection";
import ProjectsSection from "../components/Home/ProjectsSection";
import SkillsSection from "../components/Home/SkillsSection";

const Home = (props?: any) => html`
  ${HeroSection()} ${AboutSection()} ${ExperienceSection()} ${SkillsSection()}
  ${ProjectsSection()}
`;

export default Home;
