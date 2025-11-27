import Image from "next/image";
import Link from "next/link";

const topStories = {
  main: {
    category: "TECH",
    title: "Why I Quit Netflix, and You Should Too",
    excerpt:
      "Price hikes, canceled shows, and a crackdown on password sharing. Is it finally time to cut the cord on the streaming giant?",
    author: "David Nield",
    image: "https://placehold.co/1200x800/222/34d399?text=Netflix+Deep+Dive",
  },
  sub: [
    {
      category: "SECURITY",
      title: "This New Scam Is Leaving Voicemails Saying You Owe $1,000",
      author: "Jake Peterson",
      image: "https://placehold.co/800x500/333/a78bfa?text=Scam+Alert",
    },
    {
      category: "DEALS",
      title: "The Best Early Black Friday Tech Deals Available Right Now",
      author: "Jake Peterson",
      image: "https://placehold.co/800x500/166534/4ade80?text=Black+Friday",
    },
  ],
};

const latestStories = [
  {
    category: "AUDIO",
    title: "The Best Over-Ear Headphones You Can Buy in 2025",
    date: "Nov 24, 2025",
    image: "https://placehold.co/200x200/333/34d399?text=Audio",
  },
  {
    category: "REVIEWS",
    title: "These Are the Best Wireless Earbuds to Buy in 2025",
    date: "Nov 24, 2025",
    image: "https://placehold.co/200x200/333/34d399?text=Buds",
  },
  {
    category: "FITNESS",
    title: "The Powerbeats Pro 2 Are My New Favorite Workout Headphones",
    date: "Nov 24, 2025",
    image: "https://placehold.co/200x200/f97316/fff?text=Beats",
  },
  {
    category: "TRAVEL",
    title: "Nine of My Favorite Products to Make Traveling Easier",
    date: "Nov 24, 2025",
    image: "https://placehold.co/200x200/0ea5e9/fff?text=Travel",
  },
  {
    category: "GAMING",
    title: "I Love VR, and Here's Why I Think the Meta Quest 3S is Better",
    date: "Nov 24, 2025",
    image: "https://placehold.co/200x200/555/fff?text=VR",
  },
  {
    category: "HOME",
    title: "The Best Air Fryers of 2025",
    date: "Nov 24, 2025",
    image: "https://placehold.co/200x200/f59e0b/fff?text=Kitchen",
  },
];

const trendingNews = [
  {
    category: "SECURITY",
    title: "How to Browse the Dark Web Safely",
    author: "David Nield",
    image: "https://placehold.co/600x400/111/fff?text=Dark+Web",
  },
  {
    category: "DEALS",
    title: "Black Friday Sale on Refurbished reMarkable Notebooks",
    author: "Joel Cunningham",
    image: "https://placehold.co/600x400/f5f5f5/333?text=reMarkable",
  },
  {
    category: "AI",
    title: "What Happened When I Gave 'Vibe Coding' a Try",
    author: "David Nield",
    image: "https://placehold.co/600x400/14b8a6/fff?text=Coding",
  },
  {
    category: "REVIEWS",
    title: "I'm a Comics Reader, and I Can't Recommend the Kindle Colorsoft",
    author: "Michelle Ehrhardt",
    image: "https://placehold.co/600x400/f97316/fff?text=Kindle",
  },
  {
    category: "COMMUNITY",
    title: "How to Share Your Story and Connect with Millions",
    author: "Community Team",
    image: "https://placehold.co/600x400/3b82f6/fff?text=Community",
  },
];

// New Data for DEALS Section
const dealsData = {
  main: {
    category: "TECH",
    title: "The Ace Sonos Headphones Are 30% Off for Black Friday",
    author: "Pradershika Sharma",
    image: "https://placehold.co/1000x600/db2777/fff?text=Sonos+Deal",
  },
  list: [
    {
      category: "ANDROID",
      title: "The New Galaxy Watch 8 Classic Is $100 Off for Black Friday",
      author: "Pradershika Sharma",
      image: "https://placehold.co/200x200/0ea5e9/fff?text=Watch",
    },
    {
      category: "TECH",
      title:
        "Black Friday Tech Deals Live Blog 2025: Early Discounts on Phones",
      author: "Daniel Oropeza",
      image: "https://placehold.co/200x200/16a34a/fff?text=Live+Blog",
    },
    {
      category: "APPLE",
      title:
        "This Black Friday Deal Cuts 50% Off a Six-Month Apple TV Subscription",
      author: "Jake Peterson",
      image: "https://placehold.co/200x200/333/fff?text=Apple+TV",
    },
    {
      category: "HOME & GARDEN",
      title: "My Favorite Heater/Fan Combo Is $150 Off Ahead of Black Friday",
      author: "Lindsey Ellefson",
      image: "https://placehold.co/200x200/e11d48/fff?text=Heater",
    },
    {
      // New Item 1
      category: "GAMING",
      title: "Save $50 on the PlayStation 5 Slim Console Bundle",
      author: "Jake Peterson",
      image: "https://placehold.co/200x200/000/fff?text=PS5",
    },
    {
      // New Item 2
      category: "SMART HOME",
      title: "The Best Robot Vacuums Are on Sale for Up to 40% Off",
      author: "Lindsey Ellefson",
      image: "https://placehold.co/200x200/555/fff?text=Vacuum",
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-green-100">
      {/* Main Content Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* --- MAIN LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-24">
          {/* LEFT COLUMN: Top Stories */}
          <section className="lg:col-span-8 flex flex-col gap-10">
            <SectionHeader title="TOP STORIES" />

            {/* 1. HERO STORY card section */}
            <article className="group cursor-pointer flex flex-col gap-4">
              <div className="relative w-full overflow-hidden rounded-md shadow-sm">
                <div className="aspect-video lg:aspect-16/8 w-full bg-gray-200">
                  <img
                    src={topStories.main.image}
                    alt={topStories.main.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-3 mt-2">
                <CategoryTag text={topStories.main.category} large />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tighter group-hover:text-gray-700 transition-colors">
                  {topStories.main.title}
                </h2>
                <p className="text-xl text-gray-600 font-medium max-w-2xl leading-relaxed">
                  {topStories.main.excerpt}
                </p>
                <div className="pt-2">
                  <AuthorLine name={topStories.main.author} />
                </div>
              </div>
            </article>

            <hr className="border-gray-200" />

            {/* 2. SUB STORIES (Larger 2-column Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {topStories.sub.map((story, index) => (
                <article
                  key={index}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <div className="relative w-full aspect-3/2 overflow-hidden rounded-md bg-gray-200 mb-4 shadow-sm">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col grow space-y-2">
                    <CategoryTag text={story.category} />
                    <h3 className="text-2xl md:text-3xl font-black leading-tight tracking-tight group-hover:text-gray-700">
                      {story.title}
                    </h3>
                    <div className="mt-auto pt-2">
                      <AuthorLine name={story.author} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* RIGHT COLUMN: Sidebar. I use sticky position on a desktop screen */}
          <aside className="lg:col-span-4 relative">
            <div className="sticky top-8">
              <div className="flex items-center justify-between mb-6 border-b-[3px] border-black pb-2">
                <h2 className="text-xl font-black uppercase tracking-widest text-black">
                  LATEST
                </h2>
                <Link
                  href="/about"
                  className="text-xs font-bold text-green-600 hover:text-green-800 uppercase tracking-widest"
                >
                  VIEW ALL
                </Link>
              </div>

              <div className="flex flex-col bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                {latestStories.map((item, index) => (
                  <Link
                    href="#"
                    key={index}
                    className="group flex gap-5 py-5 border-b border-gray-200 last:border-0 hover:bg-white transition-colors p-2 -mx-2 rounded-lg"
                  >
                    <div className="flex-1 flex flex-col justify-center space-y-1.5">
                      <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">
                        {item.category}
                      </span>
                      <h4 className="text-base font-bold leading-snug group-hover:text-gray-600 transition-colors line-clamp-3">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">
                        {item.date}
                      </p>
                    </div>
                    <div className="w-24 h-24 shrink-0 bg-gray-300 rounded-lg overflow-hidden shadow-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* --- TRENDING NEWS SECTION --- */}
        <section className="mb-24">
          <SectionHeader title="TRENDING NEWS" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {trendingNews.map((news, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="relative w-full aspect-4/3 bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-sm border border-gray-100">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-green-600 uppercase tracking-widest">
                    {news.category}
                  </div>
                  <h3 className="text-lg font-bold leading-snug group-hover:underline decoration-2 decoration-green-500 underline-offset-4">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    By {news.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- ABOUT US SECTION --- */}
        <section className="mb-32">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-4">
              ABOUT US
            </h2>
            <div className="h-1.5 w-24 bg-green-500 rounded-full"></div>
          </div>

          <div className="border border-green-200 bg-linear-to-br from-green-50/50 to-white rounded-3xl p-8 md:p-16 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
              {/* Mission */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b-2 border-black/10 pb-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-black">
                    Our Mission
                  </h3>
                  <ArrowLink href="/about" />
                </div>
                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
                  We are building a blog post website where creativity flows
                  freely. This is a space where people can share anything and
                  say anything they want. Our vision is to empower every voice.
                </p>
              </div>

              {/* Team */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b-2 border-black/10 pb-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-black">
                    Our Team
                  </h3>
                  <ArrowLink href="/profile" />
                </div>
                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
                  Our team is driven by a passion for connection and quality. We
                  work tirelessly to ensure we earn your trust every single day.
                  We are dedicated to making this your go-to destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- DEALS SECTION --- */}
        <section className="pb-20">
          {/* Deals Header with Link, I updated text to "VIEW ALL" */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4 grow">
              <h2 className="text-2xl font-black uppercase tracking-widest text-black whitespace-nowrap">
                DEALS
              </h2>
              <div className="h-0.5 w-full bg-green-500"></div>
            </div>
            <Link
              href="/blog"
              className="text-xs font-bold text-green-500 hover:text-green-700 uppercase tracking-widest ml-6 whitespace-nowrap"
            >
              VIEW ALL
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Featured Deal */}
            <div className="lg:col-span-8">
              <article className="group cursor-pointer h-full flex flex-col">
                <div className="relative w-full grow overflow-hidden rounded-md shadow-sm bg-gray-100 min-h-[400px]">
                  <img
                    src={dealsData.main.image}
                    alt={dealsData.main.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 mt-4">
                  <CategoryTag text={dealsData.main.category} />
                  <h3 className="text-3xl md:text-4xl font-black leading-tight tracking-tight group-hover:text-gray-700">
                    {dealsData.main.title}
                  </h3>
                  <AuthorLine name={dealsData.main.author} />
                </div>
              </article>
            </div>

            {/* Right: Deal List */}
            <div className="lg:col-span-4">
              <div className="flex flex-col bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm h-full">
                {dealsData.list.map((deal, index) => (
                  <article
                    key={index}
                    className="group cursor-pointer flex gap-4 items-start py-4 border-b border-gray-200 last:border-0 hover:bg-white transition-colors p-2 -mx-2 rounded-lg"
                  >
                    <div className="w-20 h-20 shrink-0 bg-gray-200 rounded-md overflow-hidden shadow-sm">
                      <img
                        src={deal.image}
                        alt={deal.title}
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <div className="space-y-1">
                      <CategoryTag text={deal.category} />
                      <h4 className="text-sm font-bold leading-snug group-hover:text-gray-600 line-clamp-2">
                        {deal.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase pt-1">
                        {deal.author}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

// --- REUSABLE UI COMPONENTS ---

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-xl font-black uppercase tracking-widest text-black whitespace-nowrap">
        {title}
      </h2>
      <div className="h-0.5 w-full bg-black/10"></div>
    </div>
  );
}

function CategoryTag({
  text,
  large = false,
}: {
  text: string;
  large?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <span className={`text-green-500 ${large ? "scale-110" : ""}`}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      </span>
      <span
        className={`font-bold text-green-600 uppercase tracking-widest ${
          large ? "text-sm" : "text-xs"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

function AuthorLine({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 font-bold uppercase tracking-wide">
      <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs border border-gray-200">
        👤
      </span>
      {name}
    </div>
  );
}

function ArrowLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:-rotate-45 transition-transform duration-300"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </Link>
  );
}
