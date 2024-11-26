import IntroductionPageComponent from "@/app/components/IntroductionPageComponent";
import WorkExpPageComponent from "./components/ExperiencePage/WorkExpPageComponent";
import ProjectsPageComponent from "./components/ProjectsPage/ProjectsPageComponent";

export default function Home() {
    return (
    <main>
        <IntroductionPageComponent />
        <WorkExpPageComponent />
        <ProjectsPageComponent />
    </main>
  );
}
