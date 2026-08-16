import type { Profile } from "@/types";

export function Profile({ profile }: { profile: Profile }) {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            {profile.name}
          </h1>

          <p className="mt-2 text-xl text-neutral-600">{profile.title}</p>
        </div>

        <p className="max-w-2xl text-base leading-7 text-neutral-700">
          {profile.summary}
        </p>

        <div className="flex flex-col gap-1 text-sm text-neutral-500">
          <span>{profile.location}</span>
          <span>{profile.languages.join(", ")}</span>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="text-blue-600 transition-colors hover:text-blue-800"
          >
            {profile.email}
          </a>

          <a
            href={`tel:${profile.phone}`}
            className="text-blue-600 transition-colors hover:text-blue-800"
          >
            {profile.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
