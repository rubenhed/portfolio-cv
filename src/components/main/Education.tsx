import type { Education } from "@/types";
import { Title } from "../helpers/Title";
import { SkillList } from "../helpers/SkillList";

export function Education({ education }: { education: Education[] }) {
  return (
    <section>
      <Title>Education</Title>

      <div className="flex flex-col gap-8">
        {education.map((entry) => (
          <article key={`${entry.institution}-${entry.period}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {entry.institution}
                </h3>

                <p className="text-neutral-600">{entry.degree}</p>
              </div>

              <p className="text-sm text-neutral-500">{entry.period}</p>
            </div>

            <p className="mt-3 leading-7 text-neutral-700">
              {entry.description}
            </p>

            <SkillList skills={entry.skill_tags} />
          </article>
        ))}
      </div>
    </section>
  );
}
