import { useCallback, useState } from "react";

type Screen = "welcome" | "home" | "warehouse" | "design" | "about";

const assets = {
  logo: "/assets/94691.png",
  primarySprite: "/assets/0ec91.png",
  secondarySprite: "/assets/30eee.png",
  getStarted: "/assets/74291.png",
  heroBackground: "/assets/19577.svg",
  heroOutline: "/assets/dde81.svg",
  welcomeOutline: "/assets/31847.svg",
};

function BrandHero({ showBack = false, onBack }: { showBack?: boolean; onBack?: () => void }) {
  return (
    <header className={`brand-hero ${showBack ? "brand-hero--with-back" : ""}`}>
      <img className="brand-hero-background" src={assets.heroBackground} alt="" />
      <img className="brand-hero-outline" src={assets.heroOutline} alt="" />
      {showBack && (
        <button className="back-button" type="button" onClick={onBack} aria-label="Back">
          <span className="sprite-window back-icon" aria-hidden="true">
            <img src={assets.primarySprite} alt="" />
          </span>
          <span>BACK</span>
        </button>
      )}

      <h1 className="brand-tagline">
        DESIGNED
        <br />
        TO
        <br />
        PRODUCE.
      </h1>
      <img className="brand-mark" src={assets.logo} alt="LD SG N. logo" />
    </header>
  );
}

function Welcome({ onStart }: { onStart: () => void }) {
  return (
    <main className="welcome-screen">
      <section className="welcome-hero">
        <img className="welcome-outline" src={assets.welcomeOutline} alt="" />
        <img className="welcome-logo" src={assets.logo} alt="LD SG N. logo" />
        <div className="welcome-copy">
          <h1>WELCOME</h1>
          <p>DESKRIPSI NANTINYA</p>
        </div>
      </section>

      <button className="start-button" type="button" onClick={onStart}>
        <img src={assets.getStarted} alt="Gets Started" />
      </button>
    </main>
  );
}

function PrimaryIcon({
  className,
  source = assets.primarySprite,
}: {
  className: string;
  source?: string;
}) {
  return (
    <span className={`sprite-window ${className}`} aria-hidden="true">
      <img src={source} alt="" />
    </span>
  );
}

function Home({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <main className="home-screen">
      <BrandHero />

      <nav className="home-nav" aria-label="Main navigation">
        <button type="button" onClick={() => onNavigate("warehouse")}>
          <PrimaryIcon className="shirt-icon" />
          <span>WEARHOUSE</span>
        </button>
        <button type="button" onClick={() => onNavigate("design")}>
          <PrimaryIcon className="design-icon" />
          <span>DESIGN</span>
        </button>
        <button type="button" onClick={() => onNavigate("about")}>
          <PrimaryIcon className="about-icon" source={assets.secondarySprite} />
          <span>ABOUT US</span>
        </button>
      </nav>

      <section className="information-card" aria-labelledby="information-heading">
        <div className="information-title">
          <PrimaryIcon className="speaker-icon" source={assets.secondarySprite} />
          <h2 id="information-heading">INFORMATION</h2>
        </div>
        <div className="information-content" aria-label="Information content" />
      </section>
    </main>
  );
}

const detailNames: Record<Exclude<Screen, "welcome" | "home">, string> = {
  warehouse: "Wearhouse",
  design: "Design",
  about: "About us",
};

function DetailScreen({
  screen,
  onBack,
}: {
  screen: Exclude<Screen, "welcome" | "home">;
  onBack: () => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="detail-screen">
      <BrandHero showBack onBack={onBack} />
      <section className="slot-grid" aria-label={`${detailNames[screen]} items`}>
        {[0, 1, 2, 3].map((slot) => (
          <button
            className={`content-slot ${selected === slot ? "content-slot--selected" : ""}`}
            key={slot}
            type="button"
            aria-label={`${detailNames[screen]} item ${slot + 1}`}
            aria-pressed={selected === slot}
            onClick={() => setSelected(selected === slot ? null : slot)}
          >
            <span className="slot-preview" />
            <span className="slot-label" />
          </button>
        ))}
      </section>
    </main>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");

  const navigate = useCallback((destination: Screen) => setScreen(destination), []);
  const goBack = useCallback(() => setScreen("home"), []);

  if (screen === "welcome") {
    return <Welcome onStart={() => navigate("home")} />;
  }

  if (screen === "home") {
    return <Home onNavigate={navigate} />;
  }

  return <DetailScreen screen={screen} onBack={goBack} />;
}
