import type { PersonalProjects } from "@/types";
import { Title } from "../helpers/Title";
import { SkillList } from "../helpers/SkillList";

export function PersonalProjects({
  personalProjects,
}: {
  personalProjects: PersonalProjects;
}) {
  return (
    <section>
      <Title>Personal Projects</Title>

      <p className="leading-7 text-neutral-700">
        {personalProjects.description}
      </p>

      <div className="mt-7 flex flex-col gap-8">
        {personalProjects.projects.map((project) => (
          <article key={project.title}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-neutral-900">
                {project.title}
              </h3>

              {project.period && (
                <p className="text-sm text-neutral-500">{project.period}</p>
              )}
            </div>

            <p className="mt-3 leading-7 text-neutral-700">
              {project.description}
            </p>

            <SkillList skills={project.skill_tags} />

            {project.links && (
              <div className="mt-5 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-blue-600 transition-colors hover:text-blue-800"
                  >
                    <link.icon />
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
