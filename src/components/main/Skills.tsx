import type { Education, Project } from "@/types";
import { Title } from "../helpers/Title";

export function Skills({
  skillReferences,
}: {
  skillReferences: Map<string, Project | Education>;
}) {
  return (
    <section>
      <Title>Skills Quick View</Title>

      <div className="flex flex-wrap gap-2">
        {[...skillReferences.keys()]
          .sort((a, b) => a.localeCompare(b))
          .map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-700"
            >
              {skill}
            </span>
          ))}
      </div>
    </section>
  );
}
