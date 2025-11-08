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
      <Hero
        title="Better-Auth Studio"
        description="A powerful admin dashboard for Better Auth. Manage users, sessions, organizations, and more with an intuitive interface. Built with modern web technologies and designed for developers who demand excellence."
        links={[]}
        version={version}
      />
    </div>
  );
}