import type { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
  return (
    <h2 className="mb-8 text-2xl font-semibold text-neutral-900">{children}</h2>
  );
}
