import { html } from "hono/html";
import AboutSection from "../components/Home/AboutSection";
import ExperienceSection from "../components/Home/ExperienceSection";
import HeroSection from "../components/Home/HeroSection";

const Home = (props?: any) => html`
  ${HeroSection()} ${AboutSection()} ${ExperienceSection()}
`;

export default Home;
