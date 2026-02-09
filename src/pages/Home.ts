import { html } from "hono/html";
import HeroSection from "../components/Home/HeroSection";

const Home = (props?: any) => html` ${HeroSection()} `;

export default Home;
