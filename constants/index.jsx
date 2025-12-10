import { BarChart3, ShieldCheck, Wallet, ArrowUpDown } from "lucide-react";

const navLinks = [
  {
    id: "Features",
    title: "Features",
  },
  {
    id: "Prices",
    title: "Prices",
  },
  {
    id: "Testimonials",
    title: "Testimonials",
  },
];

const logos = ["/log1.png", "/log2.png", "/log3.png", "/log4.png", "/log5.png"];
const extendedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

const features = [
  {
    title: "Advanced Trading Interface",
    description:
      "Professional-grade trading tools with real-time market data and advanced charting capabilities.",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "/fit1.png",
    isActive: true,
  },
  {
    title: "Portfolio Management",
    description:
      "Track your investments and monitor your gains with our comprehensive portfolio dashboard.",
    icon: <Wallet className="w-6 h-6" />,
    image: "/fit3.png",
    isActive: false,
  },
  {
    title: "Security & Verification",
    description:
      "Industry-leading security measures with KYC verification process to protect your assets.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "/fit4.png",
    isActive: false,
  },
  {
    title: "Performance Analytics",
    description:
      "Detailed analytics and credit scoring system to help you make informed decisions.",
    icon: <ArrowUpDown className="w-6 h-6" />,
    image: "/fit2.png",
    isActive: false,
  },
];



const pricingData = [
  {
    _id: "starter-001",
    name: "Starter",
    description:
      "Essential tools to begin trading. Perfect for new traders learning the ropes.",
    price: "₹499",
    features: [
      "Real-time market data",
      "Basic order types (market, limit)",
      "Portfolio overview",
      "Email support",
    ],
  },
  {
    _id: "pro-002",
    name: "Pro",
    description:
      "Advanced tools and analytics for active traders. Our most popular plan.",
    price: "₹1,499",
    features: [
      "All Starter features",
      "Advanced charting & indicators",
      "Trailing stop & OCO orders",
      "Priority email & chat support",
      "Strategy backtesting (limited)",
    ],
  },
  {
    _id: "premium-003",
    name: "Premium",
    description:
      "Full-featured plan for professional traders and small teams.",
    price: "₹3,999",
    features: [
      "All Pro features",
      "API access & automated strategies",
      "Advanced order routing & algos",
      "Dedicated account manager (limited)",
      "Extended backtesting & export",
    ],
  },
];

const testimonials = [
  {
    name: "Michael Chen",
    role: "Professional Trader",
    image: "/av1.png",
    content:
      "The real-time market data and advanced trading features have significantly improved my trading performance. The platform's security measures give me peace of mind.",
  },
  {
    name: "Sarah Johnson",
    role: "Crypto Fund Manager",
    image: null,
    content:
      "ForexTrade's institutional-grade tools have transformed our trading strategy. The API integration and automated features have saved us countless hours.",
  },
  {
    name: "David Wilson",
    role: "Early Forex Investor",
    image: "/av2.png",
    content:
      "The customer support is exceptional, and the platform's intuitive design made getting started with crypto trading seamless. A game-changer for both beginners and pros.",
  },
  {
    name: "Emily Zhang",
    role: "DeFi Developer",
    image: "/av4.png",
    content:
      "We've seen remarkable improvements in our trading efficiency since switching to ForexTrade. The smart order routing and liquidity aggregation are particularly impressive.",
  },
  {
    name: "James Rodriguez",
    role: "Forex Security Expert",
    image: "/av3.png",
    content:
      "The security features are robust and the regular updates keep us ahead of emerging threats. It's exactly what the Forex industry needed.",
  },
  {
    name: "Lisa Thompson",
    role: "Portfolio Manager",
    image: "/av1.png",
    content:
      "The platform's ability to handle complex trading strategies while maintaining simplicity in its interface is remarkable. It's been invaluable for our portfolio management.",
  },
  {
    name: "Olivia Martinez",
    role: "Forex Analyst",
    image: "/av2.png",
    content:
      "ForexTrade provides unmatched chart accuracy and order execution speed. My daily workflow is far more efficient now.",
  },
  {
    name: "Hiroshi Tanaka",
    role: "Algorithmic Trader",
    image: null,
    content:
      "The platform’s low latency execution and backtesting tools allow my trading algorithms to perform at their best.",
  },
  {
    name: "Amara Singh",
    role: "Options Trader",
    image: null,
    content:
      "I appreciate how clean and simple the UI is despite offering advanced trading features. Perfect balance of form and function.",
  },
  {
    name: "William Parker",
    role: "Market Strategist",
    image: "/av3.png",
    content:
      "The insights and analytics dashboards hugely improved our strategy decision process. Very reliable data feeds.",
  },
  {
    name: "Nina Petrova",
    role: "Crypto Day Trader",
    image: "/av1.png",
    content:
      "The order book depth and transparency give me an edge in volatile markets. Highly recommended for serious traders.",
  },
  {
    name: "Carlos Mendes",
    role: "Institutional Trader",
    image: null,
    content:
      "What impressed me most is the platform’s stability. Even during peak volatility, execution is smooth and predictable.",
  },
  {
    name: "Sofia Reynolds",
    role: "Risk Management Expert",
    image: "/av2.png",
    content:
      "Risk analysis tools are top-tier. Position tracking and exposure insights help eliminate costly mistakes.",
  },
  {
    name: "Jonas Weber",
    role: "Fund Analyst",
    image: null,
    content:
      "The reporting tools and performance metrics are incredibly detailed. Our fund operations improved significantly.",
  },
];

const footerLinks = [
  {
    _id: "001",
    title: "Trading",
    links: ["Markets", "Trading Fees"],
  },
  {
    _id: "002",
    title: "Resources",
    links: ["Trading Guide", "Market Analysis"],
  },
  {
    _id: "003",
    title: "Legal",
    links: ["Privacy Policy", "Terms of Services"],
  },
];

export { navLinks, logos, extendedLogos,features,pricingData,testimonials,footerLinks }
