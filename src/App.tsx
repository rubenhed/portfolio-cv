import {
  Education,
  PersonalProjects,
  Profile,
  Skills,
  WorkExperience,
} from "@/components/main";
import { Section } from "@/components/helpers/Section";

import {
  profile,
  workExperience,
  personalProjects,
  education,
  skillReferences,
} from "@/data";

function App() {
  return (
    <main className="min-h-screen bg-neutral-100 py-4">
      <div className="mx-auto flex max-w-5xl flex-col gap-4">
        <Section>
          <Profile profile={profile} />
        </Section>

        <Section>
          <WorkExperience workExperience={workExperience} />
        </Section>

        <Section>
          <PersonalProjects personalProjects={personalProjects} />
        </Section>

        <Section>
          <Education education={education} />
        </Section>

        <Section>
          <Skills skillReferences={skillReferences} />
        </Section>
      </div>
    </main>
  );
}

export default App;
