import IntroductionPageComponent from "@/app/components/IntroductionPageComponent";
import WorkExpPageComponent from "./components/WorkExpPageComponent";
import ProjectsPageComponent from "./components/ProjectsPageComponent";

export default function Home() {
    return (
    <main>
        <IntroductionPageComponent />
        <WorkExpPageComponent />
        <ProjectsPageComponent />
    </main>
  );
}
