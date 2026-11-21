import React, { useState, useMemo } from "react";

export type Screen =
  | "welcome"
  | "login"
  | "signup"
  | "home"
  | "wearhouse"
  | "desain"
  | "kain-flag"
  | "pricelist-flag"
  | "about";

const assets = {
  logo: "/assets/94691.png",
  primarySprite: "/assets/0ec91.png",
  secondarySprite: "/assets/30eee.png",
  getStarted: "/assets/74291.png",
  heroBackground: "/assets/19577.svg",
  heroOutline: "/assets/dde81.svg",
  welcomeOutline: "/assets/31847.svg",
  iconUser: "/assets/icon-user.png",
  iconMail: "/assets/icon-mail.png",
  catJersey: "/assets/cat-jersey.png",
  catTshirt: "/assets/cat-tshirt.png",
  catJacket: "/assets/cat-jacket.png",
  catFlag: "/assets/cat-flag.png",
  showcase1: "/assets/showcase-1.png",
  showcase2: "/assets/showcase-2.png",
  showcase3: "/assets/showcase-3.png",
  kainPolyester: "/assets/kain-polyester.png",
  kainSatin: "/assets/kain-satin.png",
  kainHyget: "/assets/kain-hyget.png",
  priceList1: "/assets/pricelist-1.png",
  priceList2: "/assets/pricelist-2.png",
};

/* =========================================================================
   1. Brand Hero Component (Header)
   ========================================================================= */
function BrandHero({
  showBack = false,
  onBack,
  showHome = false,
  onHome,
  showNext = false,
  onNext,
  compact = false,
}: {
  showBack?: boolean;
  onBack?: () => void;
  showHome?: boolean;
  onHome?: () => void;
  showNext?: boolean;
  onNext?: () => void;
  compact?: boolean;
}) {
  return (
    <header className={`brand-hero ${compact ? "h-[220px]" : "h-[300px]"} relative overflow-hidden rounded-b-[25px] bg-black text-white shrink-0 shadow-lg`}>
      <img
        className="absolute inset-x-0 -top-[165px] w-full h-[464px] object-cover pointer-events-none opacity-80"
        src={assets.heroBackground}
        alt=""
      />
      <img
        className="absolute inset-x-[10px] -top-[180px] w-[calc(100%-20px)] h-[464px] pointer-events-none z-[2]"
        src={assets.heroOutline}
        alt=""
      />

      {/* Top Action Buttons */}
      <div className="absolute top-3 inset-x-4 z-20 flex items-center justify-between pointer-events-auto">
        {showBack ? (
          <button
            className="flex flex-col items-center group cursor-pointer transition active:scale-95"
            type="button"
            onClick={onBack}
            aria-label="Back"
          >
            <div className="w-[58px] h-[50px] relative rounded-[20px] overflow-hidden border border-white/20 bg-black/60 backdrop-blur-sm group-hover:bg-white/10 transition">
              <img
                src={assets.primarySprite}
                alt=""
                className="absolute max-w-none w-[186%] h-[215%] -top-[90%] left-[1.4%]"
              />
            </div>
            <span className="text-[12px] font-bold font-['Montserrat:SemiBold'] tracking-wider text-white mt-0.5">
              BACK
            </span>
          </button>
        ) : (
          <div className="w-[58px]" />
        )}

        {showHome && (
          <button
            className="flex flex-col items-center group cursor-pointer transition active:scale-95"
            type="button"
            onClick={onHome}
            aria-label="Home"
          >
            <div className="w-[58px] h-[50px] relative rounded-[20px] overflow-hidden border border-white/20 bg-black/60 backdrop-blur-sm group-hover:bg-white/10 transition flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-[12px] font-bold font-['Montserrat:SemiBold'] tracking-wider text-white mt-0.5">
              HOME
            </span>
          </button>
        )}

        {showNext ? (
          <button
            className="flex flex-col items-center group cursor-pointer transition active:scale-95"
            type="button"
            onClick={onNext}
            aria-label="Next"
          >
            <div className="w-[58px] h-[50px] relative rounded-[20px] overflow-hidden border border-white/20 bg-black/60 backdrop-blur-sm group-hover:bg-white/10 transition flex items-center justify-center rotate-180">
              <img
                src={assets.primarySprite}
                alt=""
                className="absolute max-w-none w-[186%] h-[215%] -top-[90%] left-[1.4%]"
              />
            </div>
            <span className="text-[12px] font-bold font-['Montserrat:SemiBold'] tracking-wider text-white mt-0.5">
              NEXT
            </span>
          </button>
        ) : (
          <div className="w-[58px]" />
        )}
      </div>

      {/* Brand Tagline */}
      <h1 className={`absolute z-10 ${compact ? "bottom-5 left-5 text-[24px]" : "top-[115px] left-5 text-[28px]"} font-['Montserrat:ExtraBold_Italic'] font-extrabold italic leading-[0.92] text-white tracking-tight`}>
        DESIGNED
        <br />
        TO
        <br />
        PRODUCE.
      </h1>

      {/* Brand Logo Mark */}
      <img
        className={`absolute z-10 ${compact ? "right-2 -bottom-4 w-[140px] h-[140px]" : "right-1 top-[42px] w-[205px] h-[205px]"} rounded-full object-cover shadow-2xl transition-all`}
        src={assets.logo}
        alt="LD SG N. logo"
      />
    </header>
  );
}

/* =========================================================================
   2. Welcome Screen ("Get Startd" 2:3)
   ========================================================================= */
function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <main className="welcome-screen min-h-screen bg-white flex flex-col justify-between overflow-x-hidden">
      <section className="welcome-hero relative h-[min(72vh,480px)] min-h-[420px] bg-black rounded-b-[25px] overflow-hidden flex flex-col items-center justify-center">
        <img
          className="welcome-outline absolute inset-x-[10px] bottom-3 w-[calc(100%-20px)] h-[calc(100%+170px)] pointer-events-none z-10"
          src={assets.welcomeOutline}
          alt=""
        />
        <img
          className="welcome-logo absolute -top-3 left-1/2 -translate-x-1/2 w-[min(105vw,420px)] aspect-square object-cover"
          src={assets.logo}
          alt="LD SG N. logo"
        />
        <div className="welcome-copy absolute z-20 inset-x-0 bottom-12 text-center text-white px-4">
          <h1 className="font-['Montserrat:ExtraBold_Italic'] text-[38px] italic font-extrabold tracking-tight">
            WELCOME
          </h1>
          <p className="mt-1 font-['Montserrat:Light'] text-[14px] text-gray-300 font-light tracking-widest uppercase">
            Designed To Produce
          </p>
        </div>
      </section>

      <div className="p-8 pb-12 flex flex-col items-center">
        <button
          className="start-button w-[185px] h-[55px] rounded-full bg-black text-white shadow-xl flex items-center justify-center transition active:scale-95 hover:bg-neutral-900 cursor-pointer"
          type="button"
          onClick={onStart}
        >
          <img src={assets.getStarted} alt="Get Started" className="w-[136px] h-auto object-contain" />
        </button>
        <span className="text-xs text-neutral-400 mt-4 font-mono">App Version 1.0.0</span>
      </div>
    </main>
  );
}

/* =========================================================================
   3. Login Screen ("Login Page" 68:211)
   ========================================================================= */
function LoginScreen({
  onLoginSuccess,
  onNavigateToSignUp,
}: {
  onLoginSuccess: () => void;
  onNavigateToSignUp: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Silakan isi username/email dan password.");
      return;
    }
    setError("");
    onLoginSuccess();
  };

  return (
    <main className="min-h-screen bg-white flex flex-col justify-between overflow-x-hidden">
      <div>
        <BrandHero />

        <form onSubmit={handleSubmit} className="px-7 pt-8 max-w-md mx-auto w-full">
          <h2 className="text-xl font-bold font-['Montserrat:Bold_Italic'] italic mb-5 text-neutral-900 tracking-wide">
            MASUK KE AKUN
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-xs font-semibold">
              {error}
            </div>
          )}

          {/* Email / Username Input */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-200 flex items-center justify-center">
                <img src={assets.iconUser} alt="" className="w-5 h-5 object-contain" />
              </div>
            </div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username atau Email"
              className="w-full h-[54px] bg-[#d9d9d9]/70 hover:bg-[#d9d9d9] focus:bg-white focus:ring-2 focus:ring-black rounded-[10px] pl-14 pr-4 text-[14px] font-['Montserrat:SemiBold'] placeholder-neutral-500 transition outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Kata Sandi"
              className="w-full h-[54px] bg-[#d9d9d9]/70 hover:bg-[#d9d9d9] focus:bg-white focus:ring-2 focus:ring-black rounded-[10px] pl-14 pr-4 text-[14px] font-['Montserrat:SemiBold'] placeholder-neutral-500 transition outline-none"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-[48px] bg-black hover:bg-neutral-800 active:scale-98 text-white rounded-[10px] font-['Montserrat:Bold_Italic'] italic text-[20px] font-bold shadow-lg transition flex items-center justify-center cursor-pointer tracking-wider mb-3"
          >
            LOGIN
          </button>

          {/* Quick Demo Login */}
          <button
            type="button"
            onClick={() => onLoginSuccess()}
            className="w-full py-2 text-xs font-semibold text-neutral-500 hover:text-black transition text-center"
          >
            (Mode Tamu / Langsung Masuk)
          </button>
        </form>
      </div>

      {/* Sign Up Link */}
      <div className="p-6 pb-8 text-center">
        <p className="text-xs text-neutral-500 mb-2 font-['Montserrat:SemiBold']">Belum punya akun?</p>
        <button
          type="button"
          onClick={onNavigateToSignUp}
          className="inline-block px-8 py-2 bg-neutral-900 text-white rounded-[10px] font-['Montserrat:Bold_Italic'] italic text-[14px] font-bold cursor-pointer hover:bg-black transition active:scale-95"
        >
          SIGN UP
        </button>
      </div>
    </main>
  );
}

/* =========================================================================
   4. Sign Up Screen ("Sing Up" 68:267)
   ========================================================================= */
function SignUpScreen({
  onSignUpSuccess,
  onNavigateToLogin,
}: {
  onSignUpSuccess: () => void;
  onNavigateToLogin: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setMsg("Mohon lengkapi semua kolom pendaftaran.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setMsg("Kata sandi dan konfirmasi tidak cocok.");
      return;
    }
    alert("Pendaftaran berhasil! Silakan masuk dengan akun Anda.");
    onSignUpSuccess();
  };

  return (
    <main className="min-h-screen bg-white flex flex-col justify-between overflow-x-hidden">
      <div>
        <BrandHero compact />

        <form onSubmit={handleSubmit} className="px-7 pt-5 max-w-md mx-auto w-full">
          <h2 className="text-xl font-bold font-['Montserrat:Bold_Italic'] italic mb-4 text-neutral-900 tracking-wide">
            DAFTAR AKUN BARU
          </h2>

          {msg && (
            <div className="mb-4 p-3 bg-neutral-100 border border-neutral-300 text-neutral-800 rounded-lg text-xs font-semibold">
              {msg}
            </div>
          )}

          {/* Name */}
          <div className="relative mb-3">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Nama Lengkap"
              className="w-full h-[50px] bg-[#d9d9d9]/70 focus:bg-white focus:ring-2 focus:ring-black rounded-[10px] px-4 text-[14px] font-['Montserrat:SemiBold'] placeholder-neutral-500 transition outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative mb-3">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Alamat Email"
              className="w-full h-[50px] bg-[#d9d9d9]/70 focus:bg-white focus:ring-2 focus:ring-black rounded-[10px] px-4 text-[14px] font-['Montserrat:SemiBold'] placeholder-neutral-500 transition outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative mb-3">
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Kata Sandi"
              className="w-full h-[50px] bg-[#d9d9d9]/70 focus:bg-white focus:ring-2 focus:ring-black rounded-[10px] px-4 text-[14px] font-['Montserrat:SemiBold'] placeholder-neutral-500 transition outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative mb-5">
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder="Konfirmasi Kata Sandi"
              className="w-full h-[50px] bg-[#d9d9d9]/70 focus:bg-white focus:ring-2 focus:ring-black rounded-[10px] px-4 text-[14px] font-['Montserrat:SemiBold'] placeholder-neutral-500 transition outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-[48px] bg-black hover:bg-neutral-800 active:scale-98 text-white rounded-[10px] font-['Montserrat:Bold_Italic'] italic text-[18px] font-bold shadow-lg transition flex items-center justify-center cursor-pointer tracking-wider"
          >
            SIGN UP
          </button>
        </form>
      </div>

      <div className="p-6 pb-8 text-center">
        <p className="text-xs text-neutral-500 mb-2 font-['Montserrat:SemiBold']">Sudah memiliki akun?</p>
        <button
          type="button"
          onClick={onNavigateToLogin}
          className="inline-block px-8 py-2 bg-neutral-900 text-white rounded-[10px] font-['Montserrat:Bold_Italic'] italic text-[14px] font-bold cursor-pointer hover:bg-black transition active:scale-95"
        >
          LOGIN
        </button>
      </div>
    </main>
  );
}

/* =========================================================================
   5. Home Screen ("HOme" 2:16)
   ========================================================================= */
function HomeScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const [infoExpanded, setInfoExpanded] = useState(false);

  return (
    <main className="home-screen min-h-screen bg-white flex flex-col justify-between overflow-x-hidden">
      <div>
        <BrandHero />

        {/* 3 Main Navigation Cards */}
        <nav className="grid grid-cols-3 gap-3 px-3 pt-8 max-w-lg mx-auto" aria-label="Main Navigation">
          <button
            type="button"
            onClick={() => onNavigate("wearhouse")}
            className="relative flex flex-col items-center justify-center h-[105px] rounded-[10px] bg-black text-white border-2 border-white/60 shadow-md hover:-translate-y-1 active:scale-95 transition cursor-pointer overflow-hidden p-2"
          >
            <div className="w-[60px] h-[55px] relative -mt-3 rounded-[20px] overflow-hidden">
              <img
                src={assets.primarySprite}
                alt=""
                className="absolute max-w-none w-[210%] h-[238%] -top-[3%] -left-[109%]"
              />
            </div>
            <span className="absolute bottom-1.5 inset-x-1 text-center font-['Montserrat:Bold'] text-[11px] font-bold tracking-tight whitespace-nowrap">
              WEARHOUSE
            </span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate("desain")}
            className="relative flex flex-col items-center justify-center h-[105px] rounded-[10px] bg-black text-white border-2 border-white/60 shadow-md hover:-translate-y-1 active:scale-95 transition cursor-pointer overflow-hidden p-2"
          >
            <div className="w-[60px] h-[55px] relative -mt-3 rounded-[18px] overflow-hidden">
              <img
                src={assets.primarySprite}
                alt=""
                className="absolute max-w-none w-[210%] h-[238%] -top-[106%] -left-[106%]"
              />
            </div>
            <span className="absolute bottom-1.5 inset-x-1 text-center font-['Montserrat:Bold'] text-[11px] font-bold tracking-tight whitespace-nowrap">
              DESIGN
            </span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate("about")}
            className="relative flex flex-col items-center justify-center h-[105px] rounded-[10px] bg-black text-white border-2 border-white/60 shadow-md hover:-translate-y-1 active:scale-95 transition cursor-pointer overflow-hidden p-2"
          >
            <div className="w-[56px] h-[55px] relative -mt-3 overflow-hidden">
              <img
                src={assets.secondarySprite}
                alt=""
                className="absolute max-w-none w-[231%] h-[210%] -top-[5%] -left-[14%]"
              />
            </div>
            <span className="absolute bottom-1.5 inset-x-1 text-center font-['Montserrat:Bold'] text-[11px] font-bold tracking-tight whitespace-nowrap">
              ABOUT US
            </span>
          </button>
        </nav>

        {/* Information Board Card */}
        <section className="mx-3 mt-7 mb-6 p-4 rounded-[12px] bg-black border-2 border-white/40 shadow-xl max-w-lg md:mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-[55px] h-[48px] relative overflow-hidden shrink-0">
              <img
                src={assets.secondarySprite}
                alt=""
                className="absolute max-w-none w-[175%] h-[210%] -top-[98%] -left-[16%]"
              />
            </div>
            <h2 className="text-white font-['Montserrat:ExtraBold_Italic'] italic text-[22px] tracking-wide font-extrabold">
              INFORMATION
            </h2>
          </div>

          <div
            onClick={() => setInfoExpanded(!infoExpanded)}
            className="bg-white rounded-[10px] p-4 text-neutral-800 cursor-pointer hover:bg-neutral-50 transition"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono uppercase bg-neutral-900 text-white px-2 py-0.5 rounded">
                PENGUMUMAN TERBARU
              </span>
              <span className="text-[11px] text-neutral-400">11 Nov 2026</span>
            </div>
            <p className="mt-2 text-[13px] font-['Montserrat:SemiBold'] font-semibold leading-relaxed">
              Workshop cetak sablon & pembuatan jersey custom batch baru dibuka! Nikmati diskon khusus order partai besar.
            </p>
            {infoExpanded && (
              <div className="mt-3 pt-3 border-t border-neutral-200 text-xs text-neutral-600 leading-normal space-y-1 animate-fadeIn">
                <p>• Estimasi pengerjaan: 3 - 7 hari kerja tergantung kuantiti.</p>
                <p>• Layanan gratis konsultasi desain dan mockup 3D pakaian.</p>
                <p>• Pengiriman ke seluruh kota di Indonesia dengan ekspedisi terpercaya.</p>
              </div>
            )}
            <div className="mt-2 text-right">
              <span className="text-[11px] font-bold text-black underline">
                {infoExpanded ? "Tutup Detail" : "Baca Selengkapnya →"}
              </span>
            </div>
          </div>
        </section>
      </div>

      <footer className="text-center pb-6 text-xs text-neutral-400 font-mono">
        © Designed To Produce. All Rights Reserved.
      </footer>
    </main>
  );
}

/* =========================================================================
   6. WearHouse Screen ("WearHouse" 36:60)
   ========================================================================= */
function WearHouseScreen({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (screen: Screen) => void;
}) {
  const categories = [
    { id: "jersey", name: "JERSEY", img: assets.catJersey, screen: "wearhouse" as const, desc: "Dryfit & Sublimation" },
    { id: "tshirt", name: "TSHIRT", img: assets.catTshirt, screen: "wearhouse" as const, desc: "Cotton Combed 24s/30s" },
    { id: "jacket", name: "JACKET", img: assets.catJacket, screen: "wearhouse" as const, desc: "Fleece & Windbreaker" },
    { id: "flag", name: "FLAG", img: assets.catFlag, screen: "kain-flag" as const, desc: "Kain Bendera & Supporter", badge: "Lihat Bahan" },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col justify-between overflow-x-hidden">
      <div>
        <BrandHero showBack onBack={onBack} compact />

        <div className="px-5 pt-6 max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-['Montserrat:Bold_Italic'] italic font-bold tracking-tight text-black">
              KATALOG WEARHOUSE
            </h2>
            <button
              onClick={() => onNavigate("pricelist-flag")}
              className="text-xs bg-black text-white px-3 py-1.5 rounded-full font-bold hover:bg-neutral-800 transition active:scale-95"
            >
              Lihat Price List
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 pb-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  if (cat.screen === "kain-flag") {
                    onNavigate("kain-flag");
                  } else {
                    alert(`Kategori ${cat.name} dipilih! Menampilkan koleksi ${cat.desc}.`);
                  }
                }}
                className="group relative h-[195px] rounded-[16px] overflow-hidden bg-neutral-900 border-2 border-neutral-800 shadow-md cursor-pointer transition hover:-translate-y-1 hover:shadow-xl active:scale-98"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3">
                  {cat.badge && (
                    <span className="self-start text-[9px] font-bold bg-amber-400 text-black px-1.5 py-0.5 rounded-full uppercase mb-1">
                      {cat.badge}
                    </span>
                  )}
                  <h3 className="text-white font-['Montserrat:ExtraBold_Italic'] italic text-[18px] font-extrabold tracking-wider">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] text-gray-300 font-['Montserrat:SemiBold'] truncate">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 text-center border-t border-neutral-100">
        <button
          onClick={() => onNavigate("pricelist-flag")}
          className="w-full max-w-sm mx-auto h-[46px] bg-black text-white rounded-xl font-bold font-['Montserrat:SemiBold'] text-sm tracking-wide shadow-md active:scale-98 transition flex items-center justify-center gap-2"
        >
          <span>Daftar Harga & Spesifikasi Kain</span>
          <span>→</span>
        </button>
      </div>
    </main>
  );
}

/* =========================================================================
   7. Portfolio / Design Screen ("desain" 2:69)
   ========================================================================= */
function DesainScreen({ onBack }: { onBack: () => void }) {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const portfolioItems = [
    {
      id: "item-1",
      title: "Monochrome Geometric Pattern",
      brand: "URBAN HERITAGE APPAREL",
      year: "2024",
      rating: "5.0",
      fabric: "Heavy French Terry",
      tag: "BRAND",
      desc: "Kain Fleece & Terry tebal berbobot 330gsm dengan custom grafis sablon discharge tahan lama dan corak geometri monokrom eksklusif.",
      img: assets.showcase1,
    },
    {
      id: "item-2",
      title: "Botanical Earthy Series",
      brand: "SORA DAILYWEAR",
      year: "2024",
      rating: "4.9",
      fabric: "Cotton Combed 24s",
      tag: "BRAND",
      desc: "Katun combed printing reaktif bersertifikasi ramah lingkungan dengan tekstur super soft breathable untuk pemakaian harian beriklim tropis.",
      img: assets.showcase2,
    },
    {
      id: "item-3",
      title: "Soundwave Festival Jakarta 2024",
      brand: "OFFICIAL MERCHANDISE",
      year: "2024",
      rating: "4.8",
      fabric: "Poly-Cotton Anti-Pilling",
      tag: "EVENT",
      desc: "Merchandise festival serbaguna bertekstur anti-pilling, corak dinamis audio gelombang berfrekuensi tinggi dengan glow-in-the-dark finish.",
      img: assets.showcase3,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f5] flex flex-col justify-between overflow-x-hidden">
      <div>
        <BrandHero showBack onBack={onBack} compact />

        <div className="px-4 pt-5 pb-8 max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-['Montserrat:Bold_Italic'] italic font-bold tracking-tight text-black">
              SHOWCASE DESIGN
            </h2>
            <span className="text-xs bg-neutral-200 text-neutral-800 px-2.5 py-1 rounded-full font-bold">
              3 Koleksi
            </span>
          </div>

          <div className="space-y-5">
            {portfolioItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-neutral-200/80 transition hover:shadow-md"
              >
                {/* Image Section */}
                <div className="relative h-[190px] bg-neutral-900 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="backdrop-blur-md bg-black/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="backdrop-blur-md bg-white/90 text-black text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-3 right-3 backdrop-blur-md bg-black/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="text-[#facc15] text-[10px]">★</span>
                    <span className="text-white text-[10px] font-bold">{item.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase block">
                    {item.brand}
                  </span>
                  <h3 className="font-['Montserrat:ExtraBold'] text-[15px] font-extrabold text-black mt-0.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-[11px] font-['Montserrat:SemiBold'] bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-full">
                      {item.fabric}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="text-xs font-bold text-black flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>Lihat Detail</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Detail */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-t-[28px] sm:rounded-[28px] max-w-md w-full p-6 shadow-2xl animate-slideUp">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  {selectedItem.brand}
                </span>
                <h3 className="text-lg font-bold font-['Montserrat:ExtraBold'] text-black mt-0.5">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <img
              src={selectedItem.img}
              alt=""
              className="w-full h-44 object-cover rounded-xl mt-4 bg-neutral-100"
            />

            <p className="mt-4 text-xs text-neutral-700 leading-relaxed">
              {selectedItem.desc}
            </p>

            <div className="mt-4 p-3 bg-neutral-50 rounded-xl flex items-center justify-between text-xs">
              <span className="text-neutral-500">Material Rekomendasi:</span>
              <span className="font-bold text-black">{selectedItem.fabric}</span>
            </div>

            <button
              onClick={() => {
                alert(`Order konsultasi untuk desain "${selectedItem.title}" dibuka via WhatsApp!`);
                setSelectedItem(null);
              }}
              className="w-full mt-5 h-12 bg-black text-white font-bold rounded-xl active:scale-98 transition"
            >
              Konsultasi Produksi Desain Ini
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

/* =========================================================================
   8. Kain Flag Screen ("KAIN FLAG" 2:867)
   ========================================================================= */
function KainFlagScreen({
  onBack,
  onHome,
  onNext,
}: {
  onBack: () => void;
  onHome: () => void;
  onNext: () => void;
}) {
  const materials = [
    {
      id: "polyester",
      name: "POLIYESTER",
      price: "Rp 25.000,00/m",
      rating: "4.5",
      img: assets.kainPolyester,
      desc: "Kain ringan, cukup kuat, dan warna mudah dicetak. Cocok untuk bendera supporter, bendera komunitas, dan kebutuhan outdoor.",
    },
    {
      id: "satin",
      name: "SATIN",
      price: "Rp 35.000,00/m",
      rating: "4.5",
      img: assets.kainSatin,
      desc: "Memiliki permukaan halus dan sedikit mengilap sehingga warna terlihat cerah. Cocok untuk bendera custom indoor dan dekorasi.",
    },
    {
      id: "hyget",
      name: "HYGET",
      price: "Rp 20.000,00/m",
      rating: "4.5",
      img: assets.kainHyget,
      desc: "Kain berbahan sintetis yang ringan dan ekonomis. Cocok untuk bendera promosi, acara, dan supporter dengan anggaran terjangkau.",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const activeMat = materials[activeTab];

  return (
    <main className="min-h-screen bg-white flex flex-col justify-between overflow-x-hidden">
      <div>
        <BrandHero
          showBack
          onBack={onBack}
          showHome
          onHome={onHome}
          showNext
          onNext={onNext}
          compact
        />

        <div className="px-5 pt-4 max-w-lg mx-auto">
          {/* Tab Selector */}
          <div className="flex gap-2 p-1 bg-neutral-100 rounded-xl mb-4">
            {materials.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                  activeTab === idx ? "bg-black text-white shadow-sm" : "text-neutral-600 hover:text-black"
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          {/* Active Material Card */}
          <div className="border border-neutral-200 rounded-[22px] p-4 shadow-sm bg-neutral-50">
            <div className="relative h-[220px] rounded-[16px] overflow-hidden bg-neutral-900 mb-4">
              <img src={activeMat.img} alt={activeMat.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img src={assets.logo} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1">
                <span className="text-amber-500 text-xs">★</span>
                <span className="text-xs font-bold font-mono text-black">{activeMat.rating}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-['Montserrat:ExtraBold'] font-extrabold text-black tracking-tight">
                {activeMat.name}
              </h3>
              <span className="text-base font-['Montserrat:ExtraBold'] font-extrabold text-black bg-white px-3 py-1 rounded-full border border-neutral-200 shadow-sm">
                {activeMat.price}
              </span>
            </div>

            <div className="mt-3">
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-['Montserrat:Bold']">
                DESKRIPSI PRODUK
              </h4>
              <p className="mt-1 text-xs text-neutral-700 leading-relaxed font-['Montserrat:Regular']">
                {activeMat.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-neutral-100 flex gap-3 max-w-lg mx-auto w-full">
        <button
          onClick={onNext}
          className="flex-1 h-12 bg-black text-white font-bold rounded-xl active:scale-98 transition flex items-center justify-center gap-2"
        >
          <span>Buka Price List Lengkap</span>
          <span>→</span>
        </button>
      </div>
    </main>
  );
}

/* =========================================================================
   9. Price List Flag Screen ("PRICE LIST FLAG" 2:931)
   ========================================================================= */
function PriceListFlagScreen({
  onBack,
  onHome,
}: {
  onBack: () => void;
  onHome: () => void;
}) {
  const [activeSheet, setActiveSheet] = useState<1 | 2>(1);

  return (
    <main className="min-h-screen bg-white flex flex-col justify-between overflow-x-hidden">
      <div>
        <BrandHero showBack onBack={onBack} showHome onHome={onHome} compact />

        <div className="px-4 pt-4 pb-6 max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-['Montserrat:Bold_Italic'] italic font-bold tracking-tight text-black">
              PRICE LIST BENDERA & SERVICE
            </h2>
            <div className="flex gap-1 bg-neutral-100 p-1 rounded-lg text-xs font-bold">
              <button
                onClick={() => setActiveSheet(1)}
                className={`px-3 py-1 rounded-md transition ${activeSheet === 1 ? "bg-black text-white" : "text-neutral-600"}`}
              >
                Halaman 1
              </button>
              <button
                onClick={() => setActiveSheet(2)}
                className={`px-3 py-1 rounded-md transition ${activeSheet === 2 ? "bg-black text-white" : "text-neutral-600"}`}
              >
                Halaman 2
              </button>
            </div>
          </div>

          {/* Price List Graphic Viewer */}
          <div className="border border-neutral-200 rounded-[20px] overflow-hidden bg-neutral-50 shadow-md">
            <img
              src={activeSheet === 1 ? assets.priceList1 : assets.priceList2}
              alt="Price List"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Quick Price Table Summary */}
          <div className="mt-4 p-4 bg-neutral-900 text-white rounded-2xl shadow-lg">
            <h3 className="text-sm font-bold font-['Montserrat:ExtraBold'] mb-2 tracking-wide">
              RINGKASAN ESTIMASI HARGA CETAK
            </h3>
            <div className="space-y-1.5 text-xs text-neutral-300 font-mono">
              <div className="flex justify-between py-1 border-b border-neutral-800">
                <span>Kain Polyester</span>
                <span className="font-bold text-white">Rp 25.000 / meter</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800">
                <span>Kain Satin</span>
                <span className="font-bold text-white">Rp 35.000 / meter</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800">
                <span>Kain Hyget</span>
                <span className="font-bold text-white">Rp 20.000 / meter</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Finishing Tali & Jahit Keliling</span>
                <span className="font-bold text-emerald-400">FREE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-neutral-100 max-w-lg mx-auto w-full">
        <button
          onClick={() => alert("Menghubungkan ke layanan WhatsApp Order Designed To Produce...")}
          className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl active:scale-98 transition flex items-center justify-center gap-2 shadow-lg cursor-pointer"
        >
          <span>Hubungi Admin & Order Sekarang</span>
          <span>💬</span>
        </button>
      </div>
    </main>
  );
}

/* =========================================================================
   10. About Us Screen
   ========================================================================= */
function AboutScreen({ onBack }: { onBack: () => void }) {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-between overflow-x-hidden">
      <div>
        <BrandHero showBack onBack={onBack} compact />

        <div className="px-6 pt-6 pb-8 max-w-lg mx-auto">
          <div className="text-center mb-6">
            <img src={assets.logo} alt="Logo" className="w-24 h-24 mx-auto rounded-full object-cover shadow-xl border-4 border-black" />
            <h2 className="text-2xl font-extrabold font-['Montserrat:ExtraBold_Italic'] italic mt-3 text-black">
              DESIGNED TO PRODUCE
            </h2>
            <p className="text-xs text-neutral-400 font-mono">Apparel, Jersey, Flag & Merchandise Maker</p>
          </div>

          <div className="space-y-4 text-xs text-neutral-700 leading-relaxed">
            <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200">
              <h3 className="font-bold text-sm text-black mb-1">Tentang Kami</h3>
              <p>
                Designed To Produce (LD SG N.) adalah studio produksi apparel dan merchandise custom spesialis pembuatan jersey olahraga, t-shirt, jaket, dan bendera supporter dengan kualitas standar industri.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200">
              <h3 className="font-bold text-sm text-black mb-1">Layanan Utama</h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>Custom Sublimation & Full Print Jersey</li>
                <li>Sablon Plastisol & Discharge T-Shirt</li>
                <li>Digital Printing Bendera Polyester & Satin</li>
                <li>Free Mockup 3D & Konsultasi Desain</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 text-center text-xs text-neutral-400 font-mono border-t border-neutral-100">
        Designed To Produce v1.0 • Made with Antigravity
      </div>
    </main>
  );
}

/* =========================================================================
   Root App Component with Router State
   ========================================================================= */
export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");

  switch (screen) {
    case "welcome":
      return <WelcomeScreen onStart={() => setScreen("login")} />;
    case "login":
      return (
        <LoginScreen
          onLoginSuccess={() => setScreen("home")}
          onNavigateToSignUp={() => setScreen("signup")}
        />
      );
    case "signup":
      return (
        <SignUpScreen
          onSignUpSuccess={() => setScreen("login")}
          onNavigateToLogin={() => setScreen("login")}
        />
      );
    case "home":
      return <HomeScreen onNavigate={setScreen} />;
    case "wearhouse":
      return <WearHouseScreen onBack={() => setScreen("home")} onNavigate={setScreen} />;
    case "desain":
      return <DesainScreen onBack={() => setScreen("home")} />;
    case "kain-flag":
      return (
        <KainFlagScreen
          onBack={() => setScreen("wearhouse")}
          onHome={() => setScreen("home")}
          onNext={() => setScreen("pricelist-flag")}
        />
      );
    case "pricelist-flag":
      return (
        <PriceListFlagScreen
          onBack={() => setScreen("kain-flag")}
          onHome={() => setScreen("home")}
        />
      );
    case "about":
      return <AboutScreen onBack={() => setScreen("home")} />;
    default:
      return <HomeScreen onNavigate={setScreen} />;
  }
}
