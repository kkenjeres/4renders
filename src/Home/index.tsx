import { ModalForm } from "@/src/ModalForm";

export const HomePage = () => {
  return (
    <main className="layout-px layout-py space-y-8">
      <section aria-labelledby="project-heading">
        <h1 id="project-heading">Next.js Rendering Playground</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          This demo application showcases different rendering strategies in Next.js - SSR, SSG, ISR,
          and CSR. Explore how data is fetched and displayed in various ways, and see the
          differences in action.
        </p>
      </section>

      <section>
        <ModalForm />
      </section>
    </main>
  );
};
