import { html } from "hono/html";
import AboutSection from "../components/Home/AboutSection";
import HeroSection from "../components/Home/HeroSection";

const Home = (props?: any) => html` ${HeroSection()} ${AboutSection()} `;

export default Home;
