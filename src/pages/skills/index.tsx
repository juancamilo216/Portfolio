//React
import { useRef, useState } from "react";

//Next

//Components
import {
  Button,
  CanvasComponent,
  MetaData,
} from "@components/shared/shared.components";

import {
  PAGE_METADATA,
  OPEN_GRAPH,
} from "@utilities/variables/shared/index-shared.variables";

//Variables
import {
  frontEndSkills,
  backEndSkills,
  aiSkills
} from "@utilities/variables/common/skills/skill.variables";

import {
  educationTimeline,
  experienceTimeline,
} from "@utilities/variables/common/skills/education-experience.variables";
import {
  SkillsCard,
  Timeline,
} from "@components/common/skills/skills-page.components";

/**
 * Skills page component: `/skills`
 *
 * This component represents the Skills page of the website. It showcases the developer's technical skills, including front-end and back-end skills. It also provides a timeline of the developer's education and experience.
 *
 * @returns {JSX.Element} The JSX element representing the Skills page.
 */
export default function Skills(): JSX.Element {
  const { skills } = PAGE_METADATA;
  const skillsPageSectionRef = useRef<HTMLElement>(null);

  const [isRotated, setIsRotated] = useState<boolean>(false);

  return (
    <>
      <MetaData
        title={skills.title}
        description={skills.description}
        pageUri={skills.pageUri}
        needsIndexation={skills.needsIndexation}
        allowRobotCrawlers={skills.allowRobotCrawlers}
        openGraph={OPEN_GRAPH}
      />
      <section className="skills-page page-section" ref={skillsPageSectionRef}>
        <CanvasComponent parentElement={skillsPageSectionRef} />
        <h1 className="skills-page__title">Skills</h1>
        <h2 className="skills-page__subtitle">My Technical Level</h2>
        <div className="skills-page__skills-container">
          <SkillsCard
            listClass="skills-page__skills-back-end"
            skillsArray={frontEndSkills}
            title="Front-end Skills"
          />

          <SkillsCard
            listClass="skills-page__skills-back-end"
            skillsArray={backEndSkills}
            title="Back-end Skills"
          />
          <SkillsCard
            listClass="skills-page__skills-back-end"
            skillsArray={aiSkills}
            title="AI Skills"
          />
        </div>
        
        
      </section>
    </>
  );
}
