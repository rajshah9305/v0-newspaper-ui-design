import {
  Newspaper,
  MapPin,
  Calendar,
  Award,
  Briefcase,
  Code2,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
  Heart,
  ExternalLink,
  Github,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function NewspaperPortfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-[3px] border-t-[3px] border-foreground bg-background pt-8 pb-6 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-wider mb-4 pb-4 border-b border-foreground/30">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-news-navy font-medium">
                <MapPin className="w-3 h-3" />
                San Francisco, CA
              </span>
              <span className="flex items-center gap-1.5 text-news-forest font-medium">
                <Calendar className="w-3 h-3" />
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="font-mono text-xs bg-news-bronze text-white hover:bg-news-burgundy transition-colors"
              >
                EST. 2020
              </Badge>
              <Badge
                variant="outline"
                className="font-mono text-xs border-news-navy text-news-navy hover:bg-news-navy hover:text-white transition-all"
              >
                ONLINE EDITION
              </Badge>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-news-burgundy to-transparent"></div>
              <Newspaper className="w-8 h-8 text-news-navy animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-news-burgundy to-transparent"></div>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-black tracking-tight mb-2 text-balance text-gradient-navy animate-scale-in">
              The Raj Shah Chronicle
            </h1>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] border-y border-foreground/30 py-2 font-mono text-foreground/80">
              A Developer's Portfolio in Editorial Form
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <article className="border-b-[3px] border-foreground pb-12 mb-12 animate-slide-up">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-news-burgundy text-white font-mono text-xs animate-pulse shadow-lg">
                  ⚡ BREAKING
                </Badge>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Lead Story</span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-black leading-none mb-6 text-balance hover:text-gradient-burgundy transition-all duration-300 cursor-default">
                Local Developer Transforms Digital Landscape with Innovative Web Solutions
              </h2>
              <p className="text-xl md:text-2xl font-serif leading-relaxed mb-6 text-muted-foreground">
                Frontend maestro <span className="text-news-navy font-bold">Raj Shah</span> continues to push boundaries
                in modern web development, specializing in <span className="text-news-forest font-bold">React</span>,{" "}
                <span className="text-news-bronze font-bold">Next.js</span>, and cutting-edge animation technologies.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge
                  variant="outline"
                  className="border-news-navy text-news-navy hover:bg-news-navy hover:text-white transition-all cursor-default"
                >
                  <Code2 className="w-3 h-3 mr-1" />
                  React Specialist
                </Badge>
                <Badge
                  variant="outline"
                  className="border-news-burgundy text-news-burgundy hover:bg-news-burgundy hover:text-white transition-all cursor-default"
                >
                  <Zap className="w-3 h-3 mr-1" />
                  Next.js Expert
                </Badge>
                <Badge
                  variant="outline"
                  className="border-news-bronze text-news-bronze hover:bg-news-bronze hover:text-white transition-all cursor-default"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  GSAP Animator
                </Badge>
                <Badge
                  variant="outline"
                  className="border-news-forest text-news-forest hover:bg-news-forest hover:text-white transition-all cursor-default"
                >
                  <Award className="w-3 h-3 mr-1" />
                  UI/UX Designer
                </Badge>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="font-mono bg-news-navy hover:bg-primary text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  <a href="https://github.com/rajshah9305" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-mono border-news-burgundy text-news-burgundy hover:bg-news-burgundy hover:text-white transition-all hover:-translate-y-0.5 bg-transparent"
                >
                  <a href="https://linkedin.com/in/rajshah9305" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-mono border-news-forest text-news-forest hover:bg-news-forest hover:text-white transition-all hover:-translate-y-0.5 bg-transparent"
                >
                  <a href="mailto:raj.shah@example.com">
                    <Heart className="w-4 h-4 mr-2" />
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:col-span-4">
              <Card className="newspaper-border-thick border-news-navy p-6 bg-muted hover-lift cursor-pointer">
                <div className="aspect-square bg-foreground/5 mb-4 overflow-hidden border-2 border-news-navy relative group">
                  <img
                    src="/professional-developer-portrait-black-and-white-ed.jpg"
                    alt="Raj Shah - Developer Portrait"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-news-navy to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <p className="text-xs uppercase tracking-wider text-news-burgundy mb-2 font-bold">
                  Portfolio Highlights
                </p>
                <h3 className="font-serif text-2xl font-bold mb-4 text-gradient-bronze">20+ Projects Delivered</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-news-navy/20 pb-2 hover:border-news-navy transition-colors">
                    <span>React Applications</span>
                    <span className="font-mono font-bold text-news-navy">10</span>
                  </div>
                  <div className="flex justify-between border-b border-news-burgundy/20 pb-2 hover:border-news-burgundy transition-colors">
                    <span>Next.js Sites</span>
                    <span className="font-mono font-bold text-news-burgundy">7</span>
                  </div>
                  <div className="flex justify-between border-b border-news-forest/20 pb-2 hover:border-news-forest transition-colors">
                    <span>Web Tools</span>
                    <span className="font-mono font-bold text-news-forest">8</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold">Total Clients</span>
                    <span className="font-mono font-bold text-news-bronze">15+</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </article>

        <section className="border-b-[3px] border-foreground pb-12 mb-12">
          <div className="text-center mb-8 pb-6 border-b-2 border-foreground/30">
            <div className="flex items-center justify-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-news-burgundy" />
              <h2 className="font-serif text-5xl md:text-6xl font-black text-gradient-burgundy">
                Featured Projects Gallery
              </h2>
              <Sparkles className="w-6 h-6 text-news-bronze" />
            </div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Latest Work in the Spotlight</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Aura Cosmic Weave */}
            <Card className="newspaper-border-thick border-news-navy overflow-hidden group hover-lift">
              <div className="aspect-video overflow-hidden bg-foreground/5 relative">
                <img
                  src="/cosmic-abstract-website-design-purple-blue-gradien.jpg"
                  alt="Aura Cosmic Weave Project"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-news-navy via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                <Badge className="absolute top-4 right-4 bg-news-bronze text-white font-mono text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ⭐ FEATURED
                </Badge>
              </div>
              <div className="p-6 bg-gradient-to-br from-background to-muted/30">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-news-navy text-white">FEATURED</Badge>
                  <span className="text-xs uppercase tracking-wider text-news-navy font-medium">Web Design</span>
                </div>
                <h3 className="font-serif text-3xl font-bold mb-3 group-hover:text-news-navy transition-colors">
                  Aura Cosmic Weave
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                  A modern, responsive website redesign featuring cosmic aesthetics and smooth animations that pushed
                  the boundaries of web design. Built with cutting-edge technologies and optimized for performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono bg-news-navy/10 text-news-navy px-3 py-1 border border-news-navy/30 hover:bg-news-navy hover:text-white transition-all cursor-default">
                    Next.js 14
                  </span>
                  <span className="text-xs font-mono bg-news-burgundy/10 text-news-burgundy px-3 py-1 border border-news-burgundy/30 hover:bg-news-burgundy hover:text-white transition-all cursor-default">
                    TypeScript
                  </span>
                  <span className="text-xs font-mono bg-news-forest/10 text-news-forest px-3 py-1 border border-news-forest/30 hover:bg-news-forest hover:text-white transition-all cursor-default">
                    Tailwind CSS
                  </span>
                  <span className="text-xs font-mono bg-news-bronze/10 text-news-bronze px-3 py-1 border border-news-bronze/30 hover:bg-news-bronze hover:text-white transition-all cursor-default">
                    GSAP
                  </span>
                </div>
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="font-mono text-xs bg-news-navy hover:bg-primary text-white hover:shadow-lg transition-all"
                  >
                    <a href="https://aura-cosmic-weave.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="font-mono text-xs border-news-navy text-news-navy hover:bg-news-navy hover:text-white transition-all bg-transparent"
                  >
                    <a href="https://github.com/rajshah9305/aura-cosmic" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* AgentGPT Platform */}
            <Card className="newspaper-border-thick border-news-burgundy overflow-hidden group hover-lift">
              <div className="aspect-video overflow-hidden bg-foreground/5 relative">
                <img
                  src="/ai-artificial-intelligence-dashboard-interface-mod.jpg"
                  alt="AgentGPT Platform"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-news-burgundy via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                <Badge className="absolute top-4 right-4 bg-news-navy text-white font-mono text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  🤖 AI POWERED
                </Badge>
              </div>
              <div className="p-6 bg-gradient-to-br from-background to-muted/30">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-news-burgundy text-white">AI PLATFORM</Badge>
                  <span className="text-xs uppercase tracking-wider text-news-burgundy font-medium">
                    Artificial Intelligence
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-bold mb-3 group-hover:text-news-burgundy transition-colors">
                  AgentGPT Platform
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                  Full-stack application for creating autonomous AI agents powered by cutting-edge AI models. Features
                  real-time agent monitoring, task management, and seamless API integrations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono bg-news-burgundy/10 text-news-burgundy px-3 py-1 border border-news-burgundy/30 hover:bg-news-burgundy hover:text-white transition-all cursor-default">
                    React
                  </span>
                  <span className="text-xs font-mono bg-news-navy/10 text-news-navy px-3 py-1 border border-news-navy/30 hover:bg-news-navy hover:text-white transition-all cursor-default">
                    OpenAI API
                  </span>
                  <span className="text-xs font-mono bg-news-forest/10 text-news-forest px-3 py-1 border border-news-forest/30 hover:bg-news-forest hover:text-white transition-all cursor-default">
                    Node.js
                  </span>
                  <span className="text-xs font-mono bg-news-bronze/10 text-news-bronze px-3 py-1 border border-news-bronze/30 hover:bg-news-bronze hover:text-white transition-all cursor-default">
                    MongoDB
                  </span>
                </div>
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="font-mono text-xs bg-news-burgundy hover:bg-destructive text-white hover:shadow-lg transition-all"
                  >
                    <a href="https://agentgpt-platform.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="font-mono text-xs border-news-burgundy text-news-burgundy hover:bg-news-burgundy hover:text-white transition-all bg-transparent"
                  >
                    <a href="https://github.com/rajshah9305/agentgpt" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* MinimalMatrix */}
            <Card className="newspaper-border-thick border-news-forest overflow-hidden group hover-lift">
              <div className="aspect-video overflow-hidden bg-foreground/5 relative">
                <img
                  src="/minimalist-design-studio-website-modern-clean-aest.jpg"
                  alt="MinimalMatrix Design Studio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-news-forest via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                <Badge className="absolute top-4 right-4 bg-news-burgundy text-white font-mono text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  🎨 DESIGN
                </Badge>
              </div>
              <div className="p-6 bg-gradient-to-br from-background to-muted/30">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-news-forest text-white">DESIGN</Badge>
                  <span className="text-xs uppercase tracking-wider text-news-forest font-medium">
                    Studio Portfolio
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-bold mb-3 group-hover:text-news-forest transition-colors">
                  MinimalMatrix Design Studio
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                  Sleek design studio website focused on crafting inspiring digital experiences with seamless
                  functionality. Features smooth scrolling animations and interactive portfolio showcases.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono bg-news-forest/10 text-news-forest px-3 py-1 border border-news-forest/30 hover:bg-news-forest hover:text-white transition-all cursor-default">
                    React
                  </span>
                  <span className="text-xs font-mono bg-news-navy/10 text-news-navy px-3 py-1 border border-news-navy/30 hover:bg-news-navy hover:text-white transition-all cursor-default">
                    Framer Motion
                  </span>
                  <span className="text-xs font-mono bg-news-bronze/10 text-news-bronze px-3 py-1 border border-news-bronze/30 hover:bg-news-bronze hover:text-white transition-all cursor-default">
                    CSS3
                  </span>
                </div>
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="font-mono text-xs bg-news-forest hover:bg-accent text-white hover:shadow-lg transition-all"
                  >
                    <a href="https://minimalmatrix.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="font-mono text-xs border-news-forest text-news-forest hover:bg-news-forest hover:text-white transition-all bg-transparent"
                  >
                    <a href="https://github.com/rajshah9305/minimalmatrix" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Ethereal Experience */}
            <Card className="newspaper-border-thick border-news-bronze overflow-hidden group hover-lift">
              <div className="aspect-video overflow-hidden bg-foreground/5 relative">
                <img
                  src="/ethereal-pink-minimalist-immersive-web-experience.jpg"
                  alt="Ethereal Experience"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-news-bronze via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                <Badge className="absolute top-4 right-4 bg-news-forest text-white font-mono text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ✨ CREATIVE
                </Badge>
              </div>
              <div className="p-6 bg-gradient-to-br from-background to-muted/30">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-news-bronze text-white">CREATIVE</Badge>
                  <span className="text-xs uppercase tracking-wider text-news-bronze font-medium">Immersive Web</span>
                </div>
                <h3 className="font-serif text-3xl font-bold mb-3 group-hover:text-news-bronze transition-colors">
                  Ethereal Experience
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                  An immersive web experience combining minimalist aesthetics with engaging interactions. Features
                  parallax scrolling, micro-interactions, and captivating visual storytelling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono bg-news-bronze/10 text-news-bronze px-3 py-1 border border-news-bronze/30 hover:bg-news-bronze hover:text-white transition-all cursor-default">
                    Next.js
                  </span>
                  <span className="text-xs font-mono bg-news-navy/10 text-news-navy px-3 py-1 border border-news-navy/30 hover:bg-news-navy hover:text-white transition-all cursor-default">
                    Three.js
                  </span>
                  <span className="text-xs font-mono bg-news-burgundy/10 text-news-burgundy px-3 py-1 border border-news-burgundy/30 hover:bg-news-burgundy hover:text-white transition-all cursor-default">
                    WebGL
                  </span>
                </div>
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="font-mono text-xs bg-news-bronze hover:bg-accent text-white hover:shadow-lg transition-all"
                  >
                    <a href="https://ethereal-experience.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="font-mono text-xs border-news-bronze text-news-bronze hover:bg-news-bronze hover:text-white transition-all bg-transparent"
                  >
                    <a href="https://github.com/rajshah9305/ethereal" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Three Column Layout - Main Stories */}
        <section className="grid md:grid-cols-3 gap-8 border-b border-foreground/30 pb-12 mb-12">
          {/* Column 1 */}
          <article className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-news-navy" />
                <span className="text-xs uppercase tracking-wider font-mono">Experience</span>
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4 leading-tight text-gradient-navy">
                Five Years of Crafting Digital Excellence
              </h3>
              <div className="drop-cap">
                <p className="text-sm leading-relaxed mb-4">
                  Since embarking on this journey in 2020, Raj has established himself as a formidable force in frontend
                  development. His expertise spans the entire spectrum of modern web technologies, from responsive
                  design to complex state management and performance optimization.
                </p>
                <p className="text-sm leading-relaxed mb-4">
                  "Clean code and beautiful design aren't mutually exclusive," Shah notes in a recent interview.
                  "They're two sides of the same coin in creating exceptional user experiences that both delight users
                  and maintain developer sanity."
                </p>
                <p className="text-sm leading-relaxed">
                  His portfolio speaks volumes: from immersive AI platforms to stunning design showcases, each project
                  demonstrates a commitment to excellence that has earned him recognition in the developer community.
                </p>
              </div>
            </div>

            <div className="border-t border-foreground/30 pt-6">
              <h4 className="font-serif text-xl font-bold mb-4">Technical Arsenal</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Frontend</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-xs">
                      HTML5
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      CSS3
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      JavaScript
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      TypeScript
                    </Badge>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Frameworks</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-xs">
                      React
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Tailwind
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      shadcn/ui
                    </Badge>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Animation</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-xs">
                      GSAP
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Framer Motion
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Three.js
                    </Badge>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Backend & Tools</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-xs">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Git
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Vercel
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Column 2 */}
          <article className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-news-bronze" />
                <span className="text-xs uppercase tracking-wider font-mono">Expertise</span>
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4 leading-tight text-gradient-bronze">
                Specializations That Set Him Apart
              </h3>

              <div className="space-y-4">
                {/* Applied unified navy border and gradient */}
                <Card className="newspaper-border-thick border-news-navy p-4 bg-muted hover-lift">
                  <div className="flex items-start gap-3 mb-3">
                    <Code2 className="w-5 h-5 mt-1 flex-shrink-0 text-news-navy" />
                    <div>
                      <h4 className="font-serif text-lg font-bold mb-2">React & Next.js Mastery</h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        Deep expertise in React ecosystem, including hooks, context, server components, and advanced
                        patterns. Specialized in Next.js 14+ with App Router, server actions, and edge functions.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Applied unified gold border and gradient */}
                <Card className="newspaper-border-thick border-news-burgundy p-4 bg-muted hover-lift">
                  <div className="flex items-start gap-3 mb-3">
                    <Sparkles className="w-5 h-5 mt-1 flex-shrink-0 text-news-burgundy" />
                    <div>
                      <h4 className="font-serif text-lg font-bold mb-2">Animation & Interaction Design</h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        Creating fluid, engaging animations with GSAP, Framer Motion, and native CSS. Expertise in
                        scroll-triggered animations, parallax effects, and micro-interactions that enhance UX.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="newspaper-border-thick border-news-forest p-4 bg-muted hover-lift">
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase className="w-5 h-5 mt-1 flex-shrink-0 text-news-forest" />
                    <div>
                      <h4 className="font-serif text-lg font-bold mb-2">Performance Optimization</h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        Obsessed with speed and efficiency. Implementing code splitting, lazy loading, image
                        optimization, and caching strategies to deliver lightning-fast web experiences.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Applied unified green border and gradient */}
                <Card className="newspaper-border-thick border-news-bronze p-4 bg-muted hover-lift">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 mt-1 flex-shrink-0 text-news-bronze" />
                    <div>
                      <h4 className="font-serif text-lg font-bold mb-2">UI/UX Design</h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        Bridging the gap between design and development. Creating intuitive interfaces that look
                        beautiful and function flawlessly across all devices and screen sizes.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </article>

          {/* Column 3 */}
          <article className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-news-bronze" />
                <span className="text-xs uppercase tracking-wider font-mono">Achievements</span>
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4 leading-tight text-gradient-navy">
                Milestones & Recognition
              </h3>

              <div className="space-y-4">
                <div className="border-l-4 border-news-navy pl-4 pb-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">2024</div>
                  <h4 className="font-serif text-base font-bold mb-1">20+ Production Projects</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Successfully delivered over 20 production-ready web applications serving thousands of users
                  </p>
                </div>

                <div className="border-l-4 border-news-burgundy pl-4 pb-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">2023</div>
                  <h4 className="font-serif text-base font-bold mb-1">Next.js Expert Certification</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Recognized as a Next.js expert with deep knowledge of server-side rendering and optimization
                  </p>
                </div>

                <div className="border-l-4 border-news-forest pl-4 pb-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">2022</div>
                  <h4 className="font-serif text-base font-bold mb-1">Open Source Contributions</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Active contributor to major open-source projects with 500+ contributions on GitHub
                  </p>
                </div>

                <div className="border-l-4 border-news-bronze pl-4 pb-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">2021</div>
                  <h4 className="font-serif text-base font-bold mb-1">Design Award Winner</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Received recognition for innovative web design at regional developer conference
                  </p>
                </div>

                <div className="border-l-4 border-foreground pl-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">2020</div>
                  <h4 className="font-serif text-base font-bold mb-1">Career Launch</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Began professional journey as a frontend developer, quickly gaining traction in the industry
                  </p>
                </div>
              </div>

              {/* Applied unified navy border and gradient */}
              <Card className="newspaper-border-thick border-news-navy p-6 bg-muted mt-6 hover-lift">
                <h4 className="font-serif text-xl font-bold mb-4 text-center text-gradient-navy">By The Numbers</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-foreground/20">
                    <span>Lines of Code</span>
                    <span className="font-mono font-bold text-news-navy">500K+</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-foreground/20">
                    <span>GitHub Stars</span>
                    <span className="font-mono font-bold text-news-burgundy">1.2K</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-foreground/20">
                    <span>Client Satisfaction</span>
                    <span className="font-mono font-bold text-news-forest">98%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-foreground/20">
                    <span>Coffee Consumed</span>
                    <span className="font-mono font-bold text-news-bronze">∞</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Years Experience</span>
                    <span className="font-mono font-bold text-news-navy">5+</span>
                  </div>
                </div>
              </Card>
            </div>
          </article>
        </section>

        {/* Full Width Feature Section */}
        <section className="border-b border-foreground/30 pb-12 mb-12">
          <div className="text-center mb-8">
            <h2 className="font-serif text-5xl font-black mb-4 text-gradient-burgundy">Philosophy & Approach</h2>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">The Developer's Manifesto</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {/* Applied unified navy border and gradient */}
              <Card className="newspaper-border-thick border-news-navy p-8 bg-muted hover-lift">
                <h3 className="font-serif text-3xl font-bold mb-4 text-gradient-navy">Design Principles</h3>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="border-l-4 border-news-navy pl-4">
                    <h4 className="font-bold mb-2 uppercase tracking-wider text-xs">User-Centric Design</h4>
                    <p>
                      Every pixel serves a purpose. Every interaction tells a story. The user experience isn't just
                      important—it's everything. Design decisions are made with the end user in mind, ensuring intuitive
                      navigation and delightful interactions.
                    </p>
                  </div>
                  <div className="border-l-4 border-news-burgundy pl-4">
                    <h4 className="font-bold mb-2 uppercase tracking-wider text-xs">Performance First</h4>
                    <p>
                      Beautiful design means nothing if it loads slowly. Optimization and aesthetics go hand-in-hand in
                      creating truly exceptional experiences. Every asset is optimized, every request is necessary, and
                      every byte counts.
                    </p>
                  </div>
                  <div className="border-l-4 border-news-forest pl-4">
                    <h4 className="font-bold mb-2 uppercase tracking-wider text-xs">Accessibility Matters</h4>
                    <p>
                      The web should be accessible to everyone. Inclusive design isn't optional—it's a fundamental
                      responsibility of every developer. Semantic HTML, proper ARIA labels, and keyboard navigation are
                      standard practice.
                    </p>
                  </div>
                  <div className="border-l-4 border-news-bronze pl-4">
                    <h4 className="font-bold mb-2 uppercase tracking-wider text-xs">Mobile-First Approach</h4>
                    <p>
                      With mobile traffic dominating the web, responsive design starts with mobile. Progressive
                      enhancement ensures beautiful experiences across all device sizes and capabilities.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="space-y-6">
              {/* Applied unified red border */}
              <Card className="newspaper-border-thick border-news-burgundy p-8 bg-muted hover-lift">
                <h3 className="font-serif text-3xl font-bold mb-4 text-gradient-burgundy">Development Ethos</h3>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="border-l-4 border-news-navy pl-4">
                    <h4 className="font-bold mb-2 uppercase tracking-wider text-xs">Clean Code Philosophy</h4>
                    <p>
                      Code is read more than it's written. Maintaining clarity, consistency, and documentation ensures
                      longevity and collaboration. Every function has a single responsibility, every variable has a
                      meaningful name.
                    </p>
                  </div>
                  <div className="border-l-4 border-news-burgundy pl-4">
                    <h4 className="font-bold mb-2 uppercase tracking-wider text-xs">Continuous Learning</h4>
                    <p>
                      The web evolves daily. Staying current with technologies, patterns, and best practices isn't
                      optional—it's mandatory for excellence. Regular experimentation with new tools keeps skills sharp
                      and projects innovative.
                    </p>
                  </div>
                  <div className="border-l-4 border-news-forest pl-4">
                    <h4 className="font-bold mb-2 uppercase tracking-wider text-xs">Community Contribution</h4>
                    <p>
                      Open source isn't just about code—it's about knowledge sharing, collaboration, and elevating the
                      entire developer community. Active participation through contributions, mentorship, and knowledge
                      sharing strengthens the ecosystem.
                    </p>
                  </div>
                  <div className="border-l-4 border-news-bronze pl-4">
                    <h4 className="font-bold mb-2 uppercase tracking-wider text-xs">Test-Driven Development</h4>
                    <p>
                      Quality assurance isn't an afterthought. Writing tests ensures reliability, catches bugs early,
                      and provides confidence when refactoring or adding new features.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-b-[3px] border-foreground pb-12 mb-12">
          <div className="text-center mb-8 pb-6 border-b-2 border-foreground/30">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Star className="w-6 h-6 text-news-bronze" />
              <h2 className="font-serif text-5xl md:text-6xl font-black text-gradient-navy">What Clients Say</h2>
              <Star className="w-6 h-6 text-news-navy" />
            </div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Testimonials & Reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Applied unified blue border */}
            <Card className="newspaper-border-thick border-news-navy p-6 hover-lift">
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-news-bronze fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic mb-4">
                  "Raj transformed our vision into a stunning reality. His attention to detail and technical expertise
                  are unmatched. The website he built for us has exceeded all our expectations."
                </p>
              </div>
              <div className="border-t border-foreground/30 pt-4">
                <p className="font-serif font-bold text-gradient-navy">Sarah Chen</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">CEO, TechStart Inc.</p>
              </div>
            </Card>

            {/* Applied unified red border */}
            <Card className="newspaper-border-thick border-news-burgundy p-6 hover-lift">
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-news-navy fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic mb-4">
                  "Working with Raj was a game-changer. He not only delivered a beautiful product but also educated our
                  team on best practices. Highly recommended for any web project."
                </p>
              </div>
              <div className="border-t border-foreground/30 pt-4">
                <p className="font-serif font-bold text-gradient-burgundy">Michael Rodriguez</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Founder, Design Studio Pro</p>
              </div>
            </Card>

            {/* Applied unified green border */}
            <Card className="newspaper-border-thick border-news-forest p-6 hover-lift">
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-news-burgundy fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic mb-4">
                  "Exceptional developer! Raj's ability to translate complex requirements into elegant solutions is
                  remarkable. Our application performs flawlessly and looks incredible."
                </p>
              </div>
              <div className="border-t border-foreground/30 pt-4">
                <p className="font-serif font-bold text-gradient-forest">Emily Watson</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Product Manager, InnovateCo</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Skills Grid - Newspaper Classified Style */}
        <section className="border-b border-foreground/30 pb-12 mb-12">
          <h2 className="font-serif text-5xl font-black mb-8 text-center text-gradient-navy">
            Complete Skill Inventory
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Applied unified navy border and gradient */}
            <Card className="newspaper-border border-news-navy p-6 hover-lift">
              <h3 className="font-serif text-xl font-bold mb-4 pb-3 border-b-2 border-news-navy text-gradient-navy">
                Frontend Dev
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">HTML5</span>
                  <span className="text-xs font-mono bg-news-navy text-white px-2 py-0.5">Expert</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">CSS3</span>
                  <span className="text-xs font-mono bg-news-navy text-white px-2 py-0.5">Expert</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">JavaScript</span>
                  <span className="text-xs font-mono bg-news-navy text-white px-2 py-0.5">Expert</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">TypeScript</span>
                  <span className="text-xs font-mono bg-news-burgundy text-white px-2 py-0.5">Advanced</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm">React</span>
                  <span className="text-xs font-mono bg-news-navy text-white px-2 py-0.5">Expert</span>
                </div>
              </div>
            </Card>

            {/* Applied unified burgundy border and gradient */}
            <Card className="newspaper-border border-news-burgundy p-6 hover-lift">
              <h3 className="font-serif text-xl font-bold mb-4 pb-3 border-b-2 border-news-burgundy text-gradient-burgundy">
                Frameworks
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">Next.js</span>
                  <span className="text-xs font-mono bg-news-burgundy text-white px-2 py-0.5">Expert</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">Tailwind CSS</span>
                  <span className="text-xs font-mono bg-news-burgundy text-white px-2 py-0.5">Expert</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">shadcn/ui</span>
                  <span className="text-xs font-mono bg-news-forest text-white px-2 py-0.5">Advanced</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">Node.js</span>
                  <span className="text-xs font-mono bg-news-burgundy text-white px-2 py-0.5">Advanced</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm">Express</span>
                  <span className="text-xs font-mono bg-news-bronze text-white px-2 py-0.5">Advanced</span>
                </div>
              </div>
            </Card>

            {/* Applied unified forest border and gradient */}
            <Card className="newspaper-border border-news-forest p-6 hover-lift">
              <h3 className="font-serif text-xl font-bold mb-4 pb-3 border-b-2 border-news-forest text-gradient-forest">
                Animation
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">GSAP</span>
                  <span className="text-xs font-mono bg-news-bronze text-white px-2 py-0.5">Expert</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">Framer Motion</span>
                  <span className="text-xs font-mono bg-news-navy text-white px-2 py-0.5">Advanced</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">Three.js</span>
                  <span className="text-xs font-mono bg-news-burgundy text-white px-2 py-0.5">Intermediate</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">ScrollTrigger</span>
                  <span className="text-xs font-mono bg-news-forest text-white px-2 py-0.5">Expert</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm">WebGL</span>
                  <span className="text-xs font-mono bg-news-navy text-white px-2 py-0.5">Intermediate</span>
                </div>
              </div>
            </Card>

            {/* Applied unified bronze border and gradient */}
            <Card className="newspaper-border border-news-bronze p-6 hover-lift">
              <h3 className="font-serif text-xl font-bold mb-4 pb-3 border-b-2 border-news-bronze text-gradient-bronze">
                Tools & More
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">Git/GitHub</span>
                  <span className="text-xs font-mono bg-news-navy text-white px-2 py-0.5">Expert</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">Vercel</span>
                  <span className="text-xs font-mono bg-news-burgundy text-white px-2 py-0.5">Expert</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">Python</span>
                  <span className="text-xs font-mono bg-news-forest text-white px-2 py-0.5">Advanced</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-foreground/10">
                  <span className="text-sm">Figma</span>
                  <span className="text-xs font-mono bg-news-bronze text-white px-2 py-0.5">Advanced</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm">REST APIs</span>
                  <span className="text-xs font-mono bg-news-navy text-white px-2 py-0.5">Expert</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Additional Projects - Newspaper Listings */}
        <section className="border-b border-foreground/30 pb-12 mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-4xl font-black text-gradient-burgundy">Project Archives</h2>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Complete Portfolio</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="newspaper-border border-news-navy/30 p-6 hover:bg-muted transition-colors hover-lift">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <Badge variant="outline" className="mb-2 font-mono text-xs border-news-navy text-news-navy">
                    Featured
                  </Badge>
                  <h3 className="font-serif text-2xl font-bold group-hover:text-news-navy transition-colors">
                    Megan Fox Fanpage
                  </h3>
                </div>
                <span className="text-xs font-mono text-muted-foreground">2024</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Dynamic and visually rich fanpage concept with futuristic, classified mission theme featuring advanced
                UI patterns.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  HTML
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  CSS
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  JavaScript
                </Badge>
              </div>
            </Card>

            <Card className="newspaper-border border-news-burgundy/30 p-6 hover:bg-muted transition-colors hover-lift">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <Badge variant="outline" className="mb-2 font-mono text-xs border-news-burgundy text-news-burgundy">
                    Utility
                  </Badge>
                  <h3 className="font-serif text-2xl font-bold group-hover:text-news-burgundy transition-colors">
                    Batteryyy
                  </h3>
                </div>
                <span className="text-xs font-mono text-muted-foreground">2024</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Clean utility to check device battery status using Web Battery API with minimalist interface design.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  HTML5
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Battery API
                </Badge>
              </div>
            </Card>

            <Card className="newspaper-border border-news-forest/30 p-6 hover:bg-muted transition-colors hover-lift">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <Badge variant="outline" className="mb-2 font-mono text-xs border-news-forest text-news-forest">
                    Platform
                  </Badge>
                  <h3 className="font-serif text-2xl font-bold group-hover:text-news-forest transition-colors">
                    System Prompt Hub
                  </h3>
                </div>
                <span className="text-xs font-mono text-muted-foreground">2024</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Comprehensive hub for managing and optimizing AI system prompts with advanced tools and templates.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  AI Tools
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Vercel
                </Badge>
              </div>
            </Card>

            <Card className="newspaper-border border-news-bronze/30 p-6 hover:bg-muted transition-colors hover-lift">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <Badge variant="outline" className="mb-2 font-mono text-xs border-news-bronze text-news-bronze">
                    Community
                  </Badge>
                  <h3 className="font-serif text-2xl font-bold group-hover:text-news-bronze transition-colors">
                    Kushweed Platform
                  </h3>
                </div>
                <span className="text-xs font-mono text-muted-foreground">2024</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Modern platform for cannabis enthusiasts featuring community features and educational content.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Community
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Modern UI
                </Badge>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact Section - Classified Ad Style */}
        <section className="mb-12">
          {/* Applied unified navy border and gradient */}
          <Card className="newspaper-border-double border-news-navy p-12 bg-muted hover-lift">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-6xl font-black mb-6 text-gradient-navy">Let's Create Together</h2>
              <div className="h-1 w-32 bg-news-navy mx-auto mb-6"></div>
              <p className="text-lg leading-relaxed mb-8">
                Currently accepting new opportunities for freelance projects and full-time positions. Whether you have a
                question, want to discuss potential collaborations, or just want to connect, my inbox is always open.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  size="lg"
                  className="font-mono text-base px-8 bg-news-navy hover:bg-primary text-white shadow-lg hover:shadow-xl transition-all"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-mono text-base px-8 border-news-burgundy text-news-burgundy hover:bg-news-burgundy hover:text-white transition-all bg-transparent"
                >
                  <a href="#">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Resume
                  </a>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 text-sm">
                <a href="mailto:rajshah9305@gmail.com" className="hover:underline font-mono text-news-navy">
                  rajshah9305@gmail.com
                </a>
                <span className="text-muted-foreground">•</span>
                <a
                  href="https://github.com/rajshah9305"
                  className="hover:underline font-mono text-news-burgundy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer - Newspaper Style */}
      <footer className="border-t-[3px] border-foreground bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-gradient-forest">About This Chronicle</h3>
              <p className="text-xs leading-relaxed">
                A digital portfolio presented in classic newspaper editorial style, showcasing the work of frontend
                developer Raj Shah.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-gradient-navy">Quick Links</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#" className="hover:underline text-news-navy">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-news-burgundy">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-news-forest">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-news-bronze">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-gradient-burgundy">Connect</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="mailto:rajshah9305@gmail.com" className="hover:underline text-news-navy">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rajshah9305" className="hover:underline text-news-burgundy">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-news-forest">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-news-bronze">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              {/* Applied unified gold gradient */}
              <h3 className="font-serif text-xl font-bold mb-4 text-gradient-bronze">Newsletter</h3>
              <p className="text-xs leading-relaxed mb-3">
                Subscribe for updates on new projects and web development insights.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="text-xs bg-transparent border-news-navy text-news-navy hover:bg-news-navy hover:text-white transition-all"
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className="border-t border-foreground/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground font-mono">
              © 2025 The Raj Shah Chronicle. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground font-mono">Crafted with React, Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
