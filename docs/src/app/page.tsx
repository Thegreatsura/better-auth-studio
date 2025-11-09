import { Suspense } from "react";
import { Hero } from "@/components/ui/void-hero";
import Navigation from "@/components/Navigation";
async function getLatestStudioVersion(): Promise<string | null> {
  try {
    const response = await fetch("https://registry.npmjs.org/better-auth-studio/latest", {
      next: { revalidate: 60 * 60 },
      cache: "force-cache",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return typeof data.version === "string" ? data.version : null;
  } catch (error) {
    console.error("Failed to fetch better-auth-studio version:", error);
    return null;
  }
}

export default async function Home() {
  const version = await getLatestStudioVersion();

  return (
    <div className="h-svh w-screen relative">
      <Navigation currentPage="home" />
      <Suspense fallback={null}>
        <Hero
          title="Better-Auth Studio"
          description="An admin dashboard for Better Auth. Manage users, sessions, organizations, teams , database along with testing tools and much more with an intuitive interface."
          links={[]}
          version={version}
        />
      </Suspense>
    </div>
  );
}