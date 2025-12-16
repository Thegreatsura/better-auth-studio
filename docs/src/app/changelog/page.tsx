import PixelLayout from "@/components/PixelLayout";
import PixelCard from "@/components/PixelCard";

const versionHistory = [
  { version: "v1.0.31", date: "2025-01-31", description: "Enhanced email editor with code export, field simulator, and alignment icons. Added Password Strength Checker tool with comprehensive validation. Improved navigation with dynamic count badges." },
  { version: "v1.0.30", date: "2025-11-08", description: "Released the refreshed analytics dashboard, Tools workspace with OAuth testing/migration/database utilities, Geist typography polish, and widespread UI clean-up." },
  { version: "v1.0.26", date: "2025-01-09", description: "Major release with Shadcn UI components, admin functionality for user banning/unbanning, advanced filtering system with date range picker, and pure black & white theme overhaul." },
  { version: "v1.0.23", date: "2025-01-30", description: "Release with Database Schema Visualizer - an interactive ReactFlow-powered tool for visualizing Better Auth database schemas with plugin-based configuration." },
  { version: "v1.0.22", date: "2025-01-29", description: "Release with enhanced session management and improved user interface components." },
  { version: "v1.0.21", date: "2025-01-28", description: "Major beta release with advanced session management, IP geolocation, Biome integration, and comprehensive CI/CD pipeline." },
  { version: "v1.0.20-beta.5", date: "2025-01-27", description: "Beta release with CSV export functionality and enhanced user management interface." },
  { version: "v1.0.16", date: "2025-01-27", description: "Added CSV export functionality and enhanced user management interface with pixel-perfect design." },
  { version: "v1.0.15", date: "2025-01-25", description: "Enhanced user interface with improved navigation and performance optimizations." },
  { version: "v1.0.14", date: "2025-01-20", description: "Added comprehensive session management and organization features." },
  { version: "v1.0.13", date: "2025-01-15", description: "Initial stable release with core authentication management capabilities." }
];

export default function Changelog() {
  return (
    <PixelLayout
      currentPage="changelog"
      title="CHANGLOG"
      description="Track the Better Auth Studio development with detailed release updates."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-light tracking-tight mb-6 text-white">LATEST RELEASE</h2>
          <PixelCard variant="highlight" className="relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                      fill="currentColor"
                    />
                  </svg>
                  v1.0.30 <span className="text-white/50 ml-2">• 2025-11-08</span>
                </span>
              </h3>
            </div>
            <p className="text-sm font-light tracking-tight text-white/70 mb-4 pt-4">
              Massive studio refresh featuring a rebuilt analytics dashboard, refined black & white interface, and an all-new Tools command center with guided OAuth diagnostics, migration helpers, and database connectivity checks.
            </p>
            <div className="space-y-3">
              <h4 className="font-light tracking-tight text-white">✨ New Features</h4>
              <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                <li className="flex items-start">
                  <span className="text-white/50 mr-3">•</span>
                  <strong className="pr-2">Dashboard 2.0</strong> with configurable period chips, and live organization / team metrics synced to backend endpoints
                </li>
                <li className="flex items-start">
                  <span className="text-white/50 mr-3">•</span>
                  <strong className="pr-2">Tools Workspace</strong> with housing Test OAuth, Run Migration, and Test Database actions.
                </li>
                <li className="flex items-start">
                  <span className="text-white/50 mr-3">•</span>
                  Migration Blueprint for Clerk plus placeholders for Supabase, Auth0, and NextAuth with copy-ready scripts and custom playground
                </li>
                <li className="flex items-start">
                  <span className="text-white/50 mr-3">•</span>
                  <strong className="pr-2">Database Smoke Tests</strong> leveraging adapter introspection to preview sample records and confirm connectivity
                </li>
              </ul>
            </div>
          </PixelCard>
        </section>

        <section>
          <h2 className="text-2xl font-light tracking-tight mb-6 text-white">RECENT UPDATES</h2>
          <PixelCard className="mb-6 relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                      fill="currentColor"
                    />
                  </svg>
                  Email Editor & Database Enhancements <span className="text-white/50 ml-2">• 2025-02-12</span>
                </span>
              </h3>
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">📧 Advanced Email Editor</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Visual drag-and-drop email builder with real-time preview and customization
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Template testing functionality with dynamic placeholder replacement and Resend integration
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Code export with syntax highlighting and one-click auth config application
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Field simulator for testing email templates with custom values before deployment along with Resend in
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Resend API key verification based on your api key
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🗄️ Advanced Database Visualization</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Interactive schema visualizer with table highlighting and relationship mapping
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Focus mode for isolating table connections and exploring database relationships
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Dynamic schema loading from Better Auth context with plugin-aware table detection
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Collapsible field lists with preserved node positioning for optimal workflow
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>
          <PixelCard className="mb-6 relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                      fill="currentColor"
                    />
                  </svg>
                  Email Enhancements & Password Tool <span className="text-white/50 ml-2">• 2025-01-31</span>
                </span>
              </h3>
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">📧 Email Editor Improvements</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Code export modal with syntax highlighting.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Field simulator for real-time preview of email templates with dynamic placeholders
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🔐 Password Strength Checker</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    New utility tool for validating passwords against Better Auth configuration
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Comprehensive strength scoring (1-5) with visual indicators
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Checks for length, uppercase, lowercase, numbers, special characters, and common patterns
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Validates against configured min/max password length requirements
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🎯 Navigation Enhancements</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Dynamic count badges for Database (schema count), Emails (template count), and Tools (total tools)
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Real-time schema count fetching from database API
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>

          <PixelCard className="mb-6 relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                      fill="currentColor"
                    />
                  </svg>
                  Dashboard Overhaul & Tool Suite <span className="text-white/50 ml-2">• 2025-11-08</span>
                </span>
              </h3>
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">📊 Dashboard Enhancements</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Period controls wired to analytics endpoints for organizations, teams, and subscriptions with custom range support
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Refined stat cards with live percentages, hover tooltips, and constraint-aware chart tooltips
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🧰 Tools Command Center</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Test OAuth flow with provider selection modal, Better Auth state validation, popup orchestration, and account polling
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Run Migration dialog featuring Clerk blueprint, syntax-highlighted custom editor, and Coming Soon placeholders
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Test Database connectivity via `/api/database/test` with inline sample row preview and concise terminal logs
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>

          <PixelCard className="mb-6 relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                      fill="currentColor"
                    />
                  </svg>
                  Shadcn UI & Admin Functionality <span className="text-white/50 ml-2">• 2025-01-09</span>
                </span>
              </h3>
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🎨 Shadcn UI Components</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Calendar component with react-day-picker v9 integration and dual-month view
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    DateRangePicker component for advanced date filtering with auto-close functionality
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🛡️ Admin Functionality</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Comprehensive user banning/unbanning system with admin plugin detection
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Ban reason and expiration date support for temporary and permanent bans
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Visual ban indicators with warning banners and status badges
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    API endpoints for ban-user, unban-user, and admin status checking
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🔍 Advanced Filtering</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Dynamic filter system with Email Verified, Banned Status, Created Date, and Role filters
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>

          <PixelCard className="mb-6 relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                      fill="currentColor"
                    />
                  </svg>
                  Advanced Session Management <span className="text-white/50 ml-2">• 2025-01-28</span>
                </span>
              </h3>
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🔐 Session Seeding</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    User-specific session seeding with customizable count (1-50 sessions)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">📊 Session Display</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Session ID, status, IP address, and expiration date display
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Individual session revocation functionality
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>

          <PixelCard className="mb-6 relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                      fill="currentColor"
                    />
                  </svg>
                  Database Schema Visualizer <span className="text-white/50 ml-2">• 2025-01-30</span>
                </span>
              </h3>
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🗄️ Interactive Schema Visualization</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    ReactFlow-powered interactive database schema diagrams
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Drag-and-drop table positioning with zoom and pan controls
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Mini-map navigation for large schema overviews
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🔌 Plugin-Based Configuration</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Dynamic plugin selection (Organization, Teams, Two Factor, API Key, Passkey)
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Schema statistics showing table count, relationships, and active plugins
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>

          <PixelCard className="mb-6 relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                      fill="currentColor"
                    />
                  </svg>
                  IP Geolocation & MaxMind <span className="text-white/50 ml-2">• 2025-01-28</span>
                </span>
              </h3>
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🌍 Geolocation Resolution</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    MaxMind GeoLite2-City database integration for accurate IP geolocation
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Fallback to comprehensive default IP database covering 12 countries
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Country flag emoji display next to location information
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Real-time IP resolution with city, country, and region data
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">⚙️ CLI Integration</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    --geo-db CLI option for custom MaxMind database path
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Default MMDB file included in package distribution
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Backend API endpoint for IP geolocation resolution
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>

          <PixelCard className="mb-6 relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                      fill="currentColor"
                    />
                  </svg>
                  Biome Integration & CI/CD <span className="text-white/50 ml-2">• 2025-01-28</span>
                </span>
              </h3>
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🔧 Modern Tooling</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Biome integration for fast linting and formatting
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Comprehensive linting rules with appropriate warning levels
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Automatic code formatting with consistent style
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    TypeScript and JavaScript support with modern configurations
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🚀 CI/CD Pipeline</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    GitHub Actions workflow for automated testing and building
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    pnpm package manager integration for consistent dependency management
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Automated security auditing and vulnerability scanning
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Build artifact verification and deployment readiness checks
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>
          <PixelCard className="mb-6 relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                      fill="currentColor"
                    />
                  </svg>
                  CSV Export Feature <span className="text-white/50 ml-2">• 2025-01-27</span>
                </span>
              </h3>
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">📊 Data Export</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Added CSV export functionality for Users page with ID, name, email, verification status, and timestamps
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Added CSV export functionality for Organizations page with ID, name, slug, and timestamps
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Automatic timestamped filename generation (e.g., users-export-2025-01-27.csv)
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Proper CSV formatting with quoted fields and UTF-8 encoding for compatibility
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🎯 User Experience</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Export buttons positioned next to "Add User" and "Add Organization" buttons
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Success toast notifications showing number of records exported
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Error handling for empty datasets with appropriate user feedback
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>

          <PixelCard className="mb-6 relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                      fill="currentColor"
                    />
                  </svg>
                  API Improvements <span className="text-white/50 ml-2">• 2025-01-26</span>
                </span>
              </h3>
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🔧 Fixed Issues</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Resolved "organization not found" errors with improved API response consistency
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Fixed "team not found" errors with better routing structure
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Improved database query performance with targeted WHERE clauses
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">⚡ Performance</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Optimized database queries to use limits instead of fetching all records
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Enhanced frontend routing for better organization structure
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>

          {/* UI/UX Enhancements */}
          <PixelCard className="mb-6 relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                      fill="currentColor"
                    />
                  </svg>
                  UI/UX Enhancements <span className="text-white/50 ml-2">• 2025-01-25</span>
                </span>
              </h3>
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🎨 Design System</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Unified black and white color scheme across all pages
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Integrated Geist Mono font for consistent typography
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">📱 Responsive Design</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Mobile-first responsive navigation system
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Optimized layouts for all screen sizes
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>

          {/* Documentation Updates */}
          <PixelCard className="relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                      fill="currentColor"
                    />
                  </svg>
                  Documentation <span className="text-white/50 ml-2">• 2025-01-24</span>
                </span>
              </h3>
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">📚 Content</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Complete README.md integration for installation guide
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Added comprehensive changelog with version tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Enhanced code examples with syntax highlighting
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">🛠️ Developer Experience</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Added TypeScript syntax highlighting for code blocks
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Improved code readability with proper formatting
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>
        </section>

        {/* Upcoming Features */}
        <section>
          <h2 className="text-2xl font-light tracking-tight mb-6 text-white">UPCOMING FEATURES</h2>
          <PixelCard variant="highlight" className="relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M16 5v2h-2V5h2zm-4 4V7h2v2h-2zm-2 2V9h2v2h-2zm0 2H8v-2h2v2zm2 2v-2h-2v2h2zm0 0h2v2h-2v-2zm4 4v-2h-2v2h2z"
                      fill="currentColor"
                    />
                  </svg>
                  🚀 Roadmap
                </span>
              </h3>
            </div>
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">v1.1.0 - Enhanced Analytics</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    User activity dashboards with real-time metrics
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Session analytics and usage patterns
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Advanced export formats (JSON, Excel) and filtering options
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">v1.2.0 - Advanced Security</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Role-based access control (RBAC) management
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Security audit logs and monitoring
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Two-factor authentication management
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-light tracking-tight mb-2 text-white">v2.0.0 - Plugin System</h4>
                <ul className="list-none space-y-2 text-sm font-light tracking-tight text-white/70 ml-4">
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Extensible plugin architecture
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Custom dashboard widgets
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/50 mr-3">•</span>
                    Third-party integrations marketplace
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>
        </section>

        {/* Version History */}
        <section>
          <h2 className="text-2xl font-light tracking-tight mb-6 text-white">VERSION HISTORY</h2>
          <div className="space-y-8">
            {versionHistory.map((item) => (
              <PixelCard key={item.version} className="relative">
                <div className="absolute -top-10 left-0">
                  <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                    <span className="relative z-10 inline-flex gap-[2px] items-center">
                      <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-3 h-3 inline-flex mr-1 text-white/50"
                      >
                        <path
                          d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h8v2H7v-2zm4 6v-2H7v2h4z"
                          fill="currentColor"
                        />
                      </svg>
                      {item.version} <span className="text-white/50 ml-2">• {item.date}</span>
                    </span>
                  </h3>
                </div>
                <p className="text-sm font-light tracking-tight text-white/70 pt-4">
                  {item.description}
                </p>
              </PixelCard>
            ))}
          </div>
        </section>

        <section>
          <PixelCard className="relative">
            <div className="absolute -top-10 left-0">
              <h3 className="relative text-[12px] font-light uppercase tracking-tight text-white/90 border border-white/20 bg-[#0a0a0a] px-2 py-[6px] overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_6px)] opacity-[2.5%]" />
                <span className="relative z-10 inline-flex gap-[2px] items-center">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 inline-flex mr-1 text-white/50"
                  >
                    <path
                      d="M9 2h6v2H9V2zM7 6V4h2v2H7zm0 8H5V6h2v8zm2 2H7v-2h2v2zm6 0v2H9v-2h6zm2-2h-2v2h2v2h2v-6h-2v2zm0-8h2v8h-2V6zm0 0V4h-2v2h2zm-6 10v2h-2v-2h2zm0 0h2v-2h-2v2zm-2-4H7v2h2v-2zm8 0h-2v2h2v-2z"
                      fill="currentColor"
                    />
                  </svg>
                  Contributing
                </span>
              </h3>
            </div>
            <p className="text-sm font-light tracking-tight text-white/70 mb-4 pt-4">
              Better Auth Studio is open source and welcomes contributions from the community.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm font-light tracking-tight text-white/70">
                <span className="text-white/50 mr-3">→</span>
                Report bugs and request features on GitHub Issues
              </div>
              <div className="flex items-center text-sm font-light tracking-tight text-white/70">
                <span className="text-white/50 mr-3">→</span>
                Submit pull requests for bug fixes and enhancements
              </div>
              <div className="flex items-center text-sm font-light tracking-tight text-white/70">
                <span className="text-white/50 mr-3">→</span>
                Help improve documentation and examples
              </div>
              <div className="flex items-center text-sm font-light tracking-tight text-white/70">
                <span className="text-white/50 mr-3">→</span>
                Share feedback and suggestions with the community
              </div>
            </div>
          </PixelCard>
        </section>
      </div>
    </PixelLayout>
  );
}
