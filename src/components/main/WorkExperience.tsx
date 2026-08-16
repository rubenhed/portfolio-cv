import type { WorkExperience as WorkExperienceType } from "@/types";
import { Title } from "../helpers/Title";
import { SkillList } from "../helpers/SkillList";

export function WorkExperience({
  workExperience,
}: {
  workExperience: WorkExperienceType[];
}) {
  return (
    <section>
      <Title>Work Experience</Title>

      <div className="flex flex-col gap-12">
        {workExperience.map((experience) => (
          <article key={`${experience.company}-${experience.period}`}>
            <header className="border-l-4 border-blue-600 bg-neutral-50 px-5 py-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {experience.company}
                  </h3>

                  <p className="text-neutral-600">{experience.role}</p>
                </div>

                <p className="text-sm text-neutral-500">{experience.period}</p>
              </div>
            </header>

            <p className="mt-5 leading-7 text-neutral-700">
              {experience.description}
            </p>

            <div className="mt-7 flex flex-col gap-8 pl-2">
              {experience.projects.map((project) => (
                <div key={project.title}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="font-medium text-neutral-900">
                      {project.title}
                    </h4>

                    {project.period && (
                      <p className="text-sm text-neutral-500">
                        {project.period}
                      </p>
                    )}
                  </div>

                  <p className="mt-2 leading-7 text-neutral-700">
                    {project.description}
                  </p>

                  <SkillList skills={project.skill_tags} />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
