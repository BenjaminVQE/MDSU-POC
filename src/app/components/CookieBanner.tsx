"use client";

import { useState, useEffect } from "react";

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return undefined;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookie-consent");
    if (!consent) setShowBanner(true);
  }, []);

  const handleAccept = () => {
    setCookie("cookie-consent", "accepted", 365);
    setShowBanner(false);

    window.gtag?.('consent', 'update', {
      'analytics_storage': 'granted'
    });
  };

  const handleReject = () => {
    setCookie("cookie-consent", "rejected", 365);
    setShowBanner(false);

    window.gtag?.('consent', 'update', {
      'analytics_storage': 'denied'
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-lg bg-white p-3 shadow-md">
      <p className="text-xs text-slate-800">
        Nous utilisons des cookies pour analyser le trafic et améliorer l’expérience utilisateur. Vous pouvez accepter ou refuser.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="rounded-xl px-4 py-2 text-xs font-semibold text-white shadow-lg transition"
          style={{
            backgroundColor: "#eb5850",
            boxShadow: "0 5px 10px -2px rgba(235,88,85,0.4)",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#d94c73")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#eb5850")}
        >
          Accepter
        </button>
        <button
          onClick={handleReject}
          className="rounded-xl px-4 py-2 text-xs font-semibold text-slate-800 border border-rose-200 hover:bg-rose-50 transition"
        >
          Refuser
        </button>
      </div>
    </div>
  );
}
