import type { PropsWithChildren } from "react";

export function Section({ children }: PropsWithChildren) {
  return <div className="bg-white p-8 shadow-sm sm:p-12">{children}</div>;
}
