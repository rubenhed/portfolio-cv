export function SkillList({ skills }: { skills: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-600"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
