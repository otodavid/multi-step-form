"use client";

import { MultiStepForm } from "./components/MultiStepForm";

export default function Home() {
  return (
    <div className="">
      <main className="min-h-screen">
        <h1 className="sr-only">Multi-step form</h1>
        <MultiStepForm />
      </main>
    </div>
  );
}
