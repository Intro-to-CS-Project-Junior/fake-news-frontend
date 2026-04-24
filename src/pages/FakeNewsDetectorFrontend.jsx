import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Search,
  Link as LinkIcon,
  Image as ImageIcon,
  Clock3,
  Globe,
  AlertTriangle,
  CheckCircle2,
  History,
  Info,
  Mail,
  Upload,
  Filter,
  ExternalLink,
  Languages,
  Lock,
  BarChart3,
  Newspaper,
  Video,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { Separator } from "../components/ui/separator";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";

const navItems = ["Home", "Results", "History", "About", "Contact"];

const demoHistory = [
  {
    id: 1,
    query: "https://news-site.example/breaking-story",
    status: "verified",
    time: "2026-04-22 14:20",
  },
  {
    id: 2,
    query: "https://social.example/viral-post/9281",
    status: "unverified",
    time: "2026-04-22 12:10",
  },
  {
    id: 3,
    query: "https://video.example/watch?v=abcd",
    status: "verified",
    time: "2026-04-21 20:05",
  },
  {
    id: 4,
    query: "https://image-share.example/claim.png",
    status: "unverified",
    time: "2026-04-21 09:42",
  },
];

const verifiedSources = [
  {
    name: "Official Government Website",
    label: "Official",
    type: "International",
    date: "21 Apr 2026",
    url: "https://official-source.example",
  },
  {
    name: "BBC Monitoring",
    label: "Media",
    type: "International",
    date: "21 Apr 2026",
    url: "https://bbc.example",
  },
  {
    name: "Local Independent Fact Check",
    label: "Fact-checker",
    type: "Independent",
    date: "22 Apr 2026",
    url: "https://factcheck.example",
  },
  {
    name: "Regional Newsroom",
    label: "Media",
    type: "Local",
    date: "21 Apr 2026",
    url: "https://regional-news.example",
  },
];

const relatedStories = [
  "Election rumor debunked by official publication",
  "Original article confirms altered screenshot was misleading",
  "Independent reviewers traced the claim to an edited repost",
];

function StatusPill({ status }) {
  const isVerified = status === "verified";
  return (
    <Badge
      className={
        isVerified
          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
          : "bg-red-100 text-red-700 hover:bg-red-100"
      }
    >
      {isVerified ? "Verified" : "Unverified"}
    </Badge>
  );
}

function StatCard({ icon: Icon, title, value, sub }) {
  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500">{title}</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">{value}</h3>
            <p className="mt-1 text-sm text-slate-500">{sub}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-3">
            <Icon className="h-5 w-5 text-slate-700" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Hero({ url, setUrl, onVerify, language, setLanguage }) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-10 shadow-sm sm:px-10 sm:py-14">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-100 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-emerald-100 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Badge className="rounded-full bg-blue-100 px-4 py-1 text-blue-700 hover:bg-blue-100">
          Neutral • Informative • Privacy-first
        </Badge>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Verify Before You Trust
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Check the authenticity of news, images, videos, and social media posts in seconds.
        </p>

        <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/50">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <LinkIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste a link to a news article, image, or post…"
                className="h-14 rounded-2xl border-slate-200 pl-12 text-base"
              />
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="h-14 rounded-2xl border-slate-200 px-5"
              >
                <Upload className="mr-2 h-4 w-4" /> Upload Image
              </Button>
              <Button
                onClick={onVerify}
                className="h-14 rounded-2xl bg-blue-600 px-6 text-white hover:bg-blue-700"
              >
                <Search className="mr-2 h-4 w-4" /> Verify Now
              </Button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 outline-none"
              >
                <option>English</option>
                <option>Russian</option>
                <option>Persian/Dari</option>
                <option>Arabic</option>
                <option>Turkish</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4" /> We do NOT store your search queries
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { icon: LinkIcon, title: "Paste", text: "Add a link, screenshot, or post URL." },
            { icon: Search, title: "Analyze", text: "Our system compares it against credible sources." },
            { icon: ShieldCheck, title: "Results", text: "See match confidence, source labels, and warnings." },
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl border-slate-200 text-left shadow-sm">
              <CardContent className="p-5">
                <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3">
                  <item.icon className="h-5 w-5 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function VerifiedResult({ query }) {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden rounded-3xl border-emerald-200 shadow-sm">
        <div className="bg-emerald-600 p-6 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-50">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">Verification Status</span>
              </div>
              <h2 className="mt-2 text-3xl font-bold">Verified Source Found</h2>
              <p className="mt-2 max-w-2xl text-emerald-50">
                This content closely matches reliable reporting and traceable original publications.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
              <p className="text-sm text-emerald-50">Match reliability</p>
              <p className="mt-2 text-4xl font-extrabold">85%</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Submitted Content</CardTitle>
            <CardDescription>Preview of the original user input</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Submitted link</p>
              <p className="mt-2 break-all font-medium text-slate-900">{query || "https://example.com/post/or/article"}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-4">
                <Newspaper className="mb-3 h-5 w-5 text-blue-600" />
                <p className="text-sm font-medium text-slate-900">Article</p>
                <p className="mt-1 text-sm text-slate-500">Text content analyzed</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <ImageIcon className="mb-3 h-5 w-5 text-blue-600" />
                <p className="text-sm font-medium text-slate-900">Image cues</p>
                <p className="mt-1 text-sm text-slate-500">Screenshot patterns checked</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <Video className="mb-3 h-5 w-5 text-blue-600" />
                <p className="text-sm font-medium text-slate-900">Cross-platform</p>
                <p className="mt-1 text-sm text-slate-500">Origin signals compared</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Original Publication Trace</CardTitle>
            <CardDescription>Most likely credible origin</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm text-emerald-700">Primary source</p>
              <div className="mt-2 flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-semibold text-slate-900">Official Government Website</h4>
                  <p className="mt-1 text-sm text-slate-600">Originally posted on 21 Apr 2026</p>
                </div>
                <Button variant="outline" className="rounded-xl border-emerald-200 bg-white">
                  <ExternalLink className="mr-2 h-4 w-4" /> Visit
                </Button>
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2 text-slate-700">
                <Clock3 className="h-4 w-4" />
                <span className="text-sm font-medium">Timeline</span>
              </div>
              <div className="space-y-3">
                {[
                  "Original post published on 21 Apr 2026",
                  "Mirrored by major media outlets later that day",
                  "Fact-checker reviewed repost variations on 22 Apr 2026",
                ].map((t, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <p className="text-sm text-slate-600">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-3xl border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Multi-Source Comparison</CardTitle>
          <CardDescription>Showing diverse perspectives to reduce source bias</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {verifiedSources.map((source, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="outline" className="rounded-full border-slate-200 text-slate-700">
                    {source.type}
                  </Badge>
                  <Badge className="rounded-full bg-blue-100 text-blue-700 hover:bg-blue-100">
                    {source.label}
                  </Badge>
                </div>
                <h4 className="mt-4 font-semibold text-slate-900">{source.name}</h4>
                <p className="mt-2 text-sm text-slate-500">Published: {source.date}</p>
                <Button variant="link" className="mt-3 h-auto p-0 text-blue-600">
                  Open source <ExternalLink className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Why this matters</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="max-w-4xl leading-7 text-slate-600">
            Verification helps users distinguish original reporting from edited screenshots, recycled media, and misleading reposts. This result suggests the claim can be traced to credible publication paths, but users should still compare sources and context before sharing.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function UnverifiedResult({ query }) {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden rounded-3xl border-red-200 shadow-sm">
        <div className="bg-red-600 p-6 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-red-50">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">Verification Status</span>
              </div>
              <h2 className="mt-2 text-3xl font-bold">No Reliable Source Found</h2>
              <p className="mt-2 max-w-2xl text-red-50">
                Content may be misleading, out of context, altered, or fabricated.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
              <p className="text-sm text-red-50">Confidence in warning</p>
              <p className="mt-2 text-4xl font-extrabold">72%</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Submitted Content</CardTitle>
            <CardDescription>Item that could not be reliably traced</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Submitted link</p>
              <p className="mt-2 break-all font-medium text-slate-900">{query || "https://unknown-source.example/post"}</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <p className="font-medium text-amber-900">Explanation</p>
              <p className="mt-2 text-sm leading-6 text-amber-800">
                We could not trace this content to a credible original source. It may be a repost without context, a manipulated screenshot, or a fabricated claim.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="font-medium text-slate-900">Verification limitations</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Image and video verification may be limited for deepfakes, cropped media, or content in unsupported languages.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Suggested Next Steps</CardTitle>
            <CardDescription>Helpful guidance before sharing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                "Search exact keywords in trusted media",
                "Look for the earliest upload date or official source",
                "Compare with fact-checking organizations",
                "Be careful with screenshots that hide the original URL",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-red-600" />
                  <p className="text-sm text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-3xl border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Related Verified Stories</CardTitle>
          <CardDescription>Suggested topics and similar coverage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedStories.map((story, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-4">
                <p className="font-medium text-slate-900">{story}</p>
                <p className="mt-2 text-sm text-slate-500">Suggested for cross-checking</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Before sharing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-7 text-slate-600">
            Before sharing, consider verifying with trusted sources. A missing reliable match does not always mean the content is false, but it does mean users should be cautious and avoid overconfidence.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function HistoryDashboard() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return demoHistory.filter((item) => {
      const statusOk = filter === "all" ? true : item.status === filter;
      const searchOk = item.query.toLowerCase().includes(search.toLowerCase());
      return statusOk && searchOk;
    });
  }, [filter, search]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard icon={History} title="Total checks" value="128" sub="Stored locally on this device" />
        <StatCard icon={CheckCircle2} title="Verified" value="76" sub="Reliable source found" />
        <StatCard icon={AlertTriangle} title="Unverified" value="52" sub="Needs caution or more review" />
      </div>

      <Card className="rounded-3xl border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>History Dashboard</CardTitle>
          <CardDescription>Your search history is stored locally and not shared.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search past checks..."
                className="rounded-2xl border-slate-200 pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-slate-500" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 outline-none"
              >
                <option value="all">All</option>
                <option value="verified">Verified</option>
                <option value="unverified">Unverified</option>
              </select>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="hidden grid-cols-[1.4fr_0.5fr_0.7fr] gap-4 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600 md:grid">
              <div>Query</div>
              <div>Status</div>
              <div>Timestamp</div>
            </div>
            {filtered.map((item) => (
              <div
                key={item.id}
                className="grid gap-3 border-t border-slate-200 px-4 py-4 md:grid-cols-[1.4fr_0.5fr_0.7fr] md:items-center"
              >
                <div className="break-all text-sm text-slate-800">{item.query}</div>
                <div>
                  <StatusPill status={item.status} />
                </div>
                <div className="text-sm text-slate-500">{item.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="rounded-3xl border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>About Fake News Detector</CardTitle>
          <CardDescription>Built to combat misinformation and promote media literacy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 leading-7 text-slate-600">
          <p>
            Fake News Detector is a privacy-first verification platform designed to help users assess the credibility of online content including articles, screenshots, posts, and videos.
          </p>
          <div>
            <h3 className="mb-2 font-semibold text-slate-900">How verification works</h3>
            <p>
              We compare submitted content with traceable publication signals, source reputation indicators, and similar coverage from multiple perspectives. Results show confidence levels instead of absolute claims.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-900">Mission</h3>
            <p>
              Reduce the spread of misinformation through clear design, transparent methodology, and simple user guidance for non-technical audiences.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-900">Team transparency</h3>
            <p>
              Presenting the people and methodology behind the platform helps build trust and encourages responsible use. Accuracy has limits, especially with edited media and unsupported languages.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
            <CardDescription>Example data visualization blocks for the platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-slate-600">Viral content with misleading elements</span>
                <span className="font-semibold text-slate-900">61%</span>
              </div>
              <Progress value={61} className="h-3 rounded-full" />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-slate-600">Users who trust screenshots without checking</span>
                <span className="font-semibold text-slate-900">48%</span>
              </div>
              <Progress value={48} className="h-3 rounded-full" />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-slate-600">Cross-checked items with multi-source confirmation</span>
                <span className="font-semibold text-slate-900">74%</span>
              </div>
              <Progress value={74} className="h-3 rounded-full" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Design principles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-blue-600" /> Trust-focused, not sensational
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4">
              <Globe className="mt-0.5 h-4 w-4 text-blue-600" /> Multi-language MVP support
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4">
              <BarChart3 className="mt-0.5 h-4 w-4 text-blue-600" /> Confidence-based results, not overclaiming
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ContactPage() {
  const [consent, setConsent] = useState(false);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <Card className="rounded-3xl border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Contact & Feedback</CardTitle>
          <CardDescription>Share a report, bug, or suggestion</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Username</Label>
            <Input placeholder="Enter your username" className="rounded-2xl border-slate-200" />
          </div>
          <div className="space-y-2">
            <Label>Date of birth</Label>
            <Input type="date" className="rounded-2xl border-slate-200" />
          </div>
          <div className="space-y-2">
            <Label>Gender (optional)</Label>
            <Input placeholder="Optional" className="rounded-2xl border-slate-200" />
          </div>
          <div className="space-y-2">
            <Label>Message</Label>
            <Textarea placeholder="Tell us what happened or what you want to report..." className="min-h-[140px] rounded-2xl border-slate-200" />
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4">
            <Checkbox checked={consent} onCheckedChange={(v) => setConsent(Boolean(v))} />
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-900">Consent checkbox</p>
              <p className="text-sm text-slate-500">I agree to submit my contact information for support purposes.</p>
            </div>
          </div>
          <Button className="w-full rounded-2xl bg-blue-600 text-white hover:bg-blue-700">
            <Mail className="mr-2 h-4 w-4" /> Send Feedback
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Privacy-first policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-600">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-medium text-slate-900">We do NOT store your search queries</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-medium text-slate-900">We do NOT track browsing behavior</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-medium text-slate-900">Only minimal profile data is collected with consent</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Challenges & limitations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            <div className="rounded-2xl border border-slate-200 p-4">False positives and negatives can happen, so confidence levels are shown instead of absolute certainty.</div>
            <div className="rounded-2xl border border-slate-200 p-4">Source bias is reduced by displaying multiple perspectives instead of a single source.</div>
            <div className="rounded-2xl border border-slate-200 p-4">Deepfake and edited media detection can be limited for low-quality or highly manipulated content.</div>
            <div className="rounded-2xl border border-slate-200 p-4">Language support is intentionally limited in the MVP to improve reliability.</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function FakeNewsDetectorFrontend() {
  const [page, setPage] = useState("Home");
  const [url, setUrl] = useState("");
  const [language, setLanguage] = useState("English");
  const [resultMode, setResultMode] = useState("verified");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);

  const goVerify = async () => {
    if (!url) return;
    
    setLoading(true);
    setError(null);
    setPage("Results");

    try {
      const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze content. Please make sure the backend is running.");
      }

      const data = await response.json();
      setAnalysisData(data);
      setResultMode(data.verdict.toLowerCase().includes("true") ? "verified" : "unverified");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={() => setPage("Home")} className="flex items-center gap-3 text-left">
            <div className="rounded-2xl bg-blue-600 p-2.5 text-white shadow-sm">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">Fake News Detector</p>
              <p className="text-xs text-slate-500">Verification platform</p>
            </div>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Button
                key={item}
                variant={page === item ? "default" : "ghost"}
                onClick={() => setPage(item)}
                className={
                  page === item
                    ? "rounded-2xl bg-blue-600 text-white hover:bg-blue-700"
                    : "rounded-2xl text-slate-600 hover:bg-slate-100"
                }
              >
                {item}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {page === "Home" && (
          <div className="space-y-8">
            <Hero
              url={url}
              setUrl={setUrl}
              onVerify={goVerify}
              language={language}
              setLanguage={setLanguage}
            />

            <div className="grid gap-4 md:grid-cols-4">
              <StatCard icon={ShieldCheck} title="Trust-centered UI" value="100%" sub="Designed for clear verification flow" />
              <StatCard icon={Languages} title="Languages" value="5" sub="Focused MVP support" />
              <StatCard icon={Globe} title="Multi-source" value="3–5" sub="Perspectives per claim" />
              <StatCard icon={Lock} title="Privacy" value="Local" sub="History stored on device" />
            </div>

            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle>Preview result states</CardTitle>
                <CardDescription>Use the tabs below to review both UX outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="verified" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 rounded-2xl bg-slate-100">
                    <TabsTrigger value="verified" className="rounded-2xl">Verified result</TabsTrigger>
                    <TabsTrigger value="unverified" className="rounded-2xl">Unverified result</TabsTrigger>
                  </TabsList>
                  <TabsContent value="verified" className="mt-6">
                    <VerifiedResult query={url} />
                  </TabsContent>
                  <TabsContent value="unverified" className="mt-6">
                    <UnverifiedResult query={url || "https://viral-post.example/fake-claim"} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {page === "Results" && (
          <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Verification Results</h1>
                <p className="mt-1 text-slate-500">Confidence-based output with source comparison and transparent warnings</p>
              </div>
            </div>

            {loading ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-12 text-center">
                <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
                <h2 className="mt-4 text-xl font-semibold">Analyzing Content...</h2>
                <p className="mt-2 text-slate-500">Comparing with credible sources and fact-check databases.</p>
              </div>
            ) : error ? (
              <Card className="rounded-3xl border-red-200 bg-red-50 p-12 text-center">
                <AlertTriangle className="mx-auto h-12 w-12 text-red-600" />
                <h2 className="mt-4 text-xl font-semibold text-red-900">Analysis Failed</h2>
                <p className="mt-2 text-red-700">{error}</p>
                <Button onClick={() => setPage("Home")} className="mt-6 rounded-2xl bg-red-600 text-white hover:bg-red-700">
                  Try Again
                </Button>
              </Card>
            ) : analysisData ? (
              <div className="space-y-6">
                <Card className={`overflow-hidden rounded-3xl border-${resultMode === "verified" ? "emerald" : "red"}-200 shadow-sm`}>
                  <div className={`bg-${resultMode === "verified" ? "emerald" : "red"}-600 p-6 text-white`}>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className={`flex items-center gap-2 text-${resultMode === "verified" ? "emerald" : "red"}-50`}>
                          {resultMode === "verified" ? <CheckCircle2 className="h-5 w-5" /> : <AlertTriangle className="h-5 w-5" />}
                          <span className="text-sm font-medium uppercase tracking-wide">Verdict: {analysisData.verdict}</span>
                        </div>
                        <h2 className="mt-2 text-3xl font-bold">{resultMode === "verified" ? "Verified Information" : "Potential Misinformation"}</h2>
                        <p className={`mt-2 max-w-2xl text-${resultMode === "verified" ? "emerald" : "red"}-50`}>
                          {analysisData.summary}
                        </p>
                      </div>
                      <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
                        <p className={`text-sm text-${resultMode === "verified" ? "emerald" : "red"}-50`}>Confidence Score</p>
                        <p className="mt-2 text-4xl font-extrabold">{analysisData.confidence_score}%</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <Card className="rounded-3xl border-slate-200 shadow-sm">
                    <CardHeader>
                      <CardTitle>Analysis Reasoning</CardTitle>
                      <CardDescription>Deep dive into why this verdict was reached</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <p className="leading-7 text-slate-700 whitespace-pre-wrap">{analysisData.reasoning}</p>
                      </div>
                      
                      {analysisData.red_flags.length > 0 && (
                        <div className="mt-4">
                          <h4 className="mb-3 font-semibold text-slate-900">Red Flags Detected</h4>
                          <div className="flex flex-wrap gap-2">
                            {analysisData.red_flags.map((flag, i) => (
                              <Badge key={i} variant="outline" className="rounded-full border-red-200 bg-red-50 text-red-700 py-1 px-3">
                                {flag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-slate-200 shadow-sm">
                    <CardHeader>
                      <CardTitle>Source Credibility</CardTitle>
                      <CardDescription>Domain reputation assessment</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {analysisData.source_credibility ? (
                        <div className={`rounded-2xl border border-${analysisData.source_credibility.rating === "high" ? "emerald" : "amber"}-200 bg-${analysisData.source_credibility.rating === "high" ? "emerald" : "amber"}-50 p-6`}>
                          <div className="flex items-center justify-between mb-4">
                             <h4 className="text-lg font-bold text-slate-900">{analysisData.source_credibility.domain}</h4>
                             <Badge className={`rounded-full ${analysisData.source_credibility.rating === "high" ? "bg-emerald-600" : "bg-amber-600"} text-white`}>
                                {analysisData.source_credibility.rating.toUpperCase()} Reliability
                             </Badge>
                          </div>
                          <div className="grid gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Bias Rating</p>
                                <p className="text-sm font-medium text-slate-700 mt-1">{analysisData.source_credibility.bias}</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Description</p>
                                <p className="text-sm text-slate-600 mt-1 leading-relaxed">{analysisData.source_credibility.description}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 italic text-slate-500">
                          No specific domain data available.
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {analysisData.fact_checks.length > 0 && (
                  <Card className="rounded-3xl border-slate-200 shadow-sm">
                    <CardHeader>
                      <CardTitle>Supporting Evidence & Fact Checks</CardTitle>
                      <CardDescription>Direct findings from independent fact-checking organizations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        {analysisData.fact_checks.map((check, i) => (
                          <div key={i} className="rounded-2xl border border-slate-200 p-5 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-3">
                                <Badge variant="outline" className={`rounded-full ${check.status.toLowerCase().includes("true") ? "border-emerald-200 text-emerald-700" : "border-red-200 text-red-700"}`}>
                                  {check.status}
                                </Badge>
                                <span className="text-xs text-slate-400 font-medium">{check.source}</span>
                              </div>
                              <p className="font-semibold text-slate-900 mt-1">"{check.claim}"</p>
                            </div>
                            {check.url && (
                              <Button variant="link" className="mt-4 p-0 h-auto self-start text-blue-600" onClick={() => window.open(check.url, '_blank')}>
                                Read Full Review <ExternalLink className="ml-1 h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ) : (
              <div className="text-center p-12">
                <p className="text-slate-500">No results to display. Please verify a link from the home page.</p>
                <Button onClick={() => setPage("Home")} className="mt-4 rounded-xl">Back Home</Button>
              </div>
            )}
          </div>
        )}

        {page === "History" && <HistoryDashboard />}
        {page === "About" && <AboutPage />}
        {page === "Contact" && <ContactPage />}
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="font-semibold text-slate-900">Fake News Detector</p>
            <p className="mt-2 leading-6">
              A concept frontend focused on trust, source transparency, and clear verification UX.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Languages</p>
            <p className="mt-2">English • Russian • Persian/Dari • Arabic • Turkish</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Disclaimer</p>
            <p className="mt-2 leading-6">
              Results should support critical thinking, not replace it. Verification accuracy may vary for edited media, deepfakes, and limited-source claims.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
