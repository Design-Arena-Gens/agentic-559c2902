"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // No-op; placeholder for future analytics
  }, []);

  function validateEmail(value) {
    return /[^@\s]+@[^@\s]+\.[^@\s]+/.test(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Veuillez saisir une adresse e-mail valide.");
      return;
    }
    try {
      const existing = JSON.parse(localStorage.getItem("mayimava_waitlist") || "[]");
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem("mayimava_waitlist", JSON.stringify(existing));
      }
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      // Fallback: mailto if localStorage is unavailable
      window.location.href = `mailto:waitlist@mayimavastore.com?subject=Inscription%20liste%20d'attente&body=${encodeURIComponent(
        `Bonjour,\n\nJe souhaite rejoindre la liste d'attente MayimavaStore.\nMon e-mail: ${email}\n\nMerci !`
      )}`;
    }
  }

  return (
    <main className="page">
      <header className="header">
        <div className="logo">
          <img src="/logo.svg" alt="MayimavaStore" />
          <span>MayimavaStore</span>
        </div>
        <nav className="nav">
          <a href="#attente" className="nav-link">Liste d?attente</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>
      </header>

      <section className="hero">
        <div className="badge">Bient?t disponible</div>
        <h1>MayimavaStore d?barque bient?t !</h1>
        <p className="sub">
          La marketplace panafricaine con?ue pour connecter vendeurs, acheteurs et
          entrepreneurs ? travers toute l?Afrique.
        </p>
        <div className="cta">
          <a href="#attente" className="btn primary">Rejoindre la liste d?attente</a>
          <a
            className="btn ghost"
            href="#"
            aria-disabled="true"
            onClick={(e) => e.preventDefault()}
            title="Disponible tr?s bient?t sur Google Play"
          >
            Bient?t sur Google Play
          </a>
        </div>
        <div className="hero-art" aria-hidden>
          <div className="glow" />
          <img src="/africa-illustration.svg" alt="Afrique - illustration" />
        </div>
      </section>

      <section id="attente" className="waitlist">
        <h2>Rejoignez d?s maintenant la liste d?attente</h2>
        <p>
          Soyez inform?(e) du lancement et acc?dez aux premi?res invitations.
        </p>

        {submitted ? (
          <div className="notice success">
            Merci ! Vous ?tes bien inscrit(e). Nous vous tiendrons au courant.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="email" className="label">Adresse e-mail</label>
            <div className="row">
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
              />
              <button type="submit" className="btn primary">Je m?inscris</button>
            </div>
            {error && <div className="notice error">{error}</div>}
            <p className="fine">
              En vous inscrivant, vous acceptez de recevoir des emails li?s au lancement.
            </p>
          </form>
        )}

        <div className="alt">
          Pr?f?rez WhatsApp ?
          <a className="link" href="https://wa.me/0000000000" target="_blank" rel="noreferrer">Ecrivez-nous</a>
        </div>
      </section>

      <section id="faq" className="faq">
        <h2>Questions fr?quentes</h2>
        <details>
          <summary>Quel est l?objectif de MayimavaStore ?</summary>
          <p>
            Cr?er un espace unique pour d?couvrir, vendre et acheter des produits
            africains de qualit?, partout sur le continent et au-del?.
          </p>
        </details>
        <details>
          <summary>Qui peut s?inscrire ?</summary>
          <p>
            Commer?ants, artisans, cr?ateurs, entrepreneurs ? toute personne pr?te ?
            rejoindre l??conomie digitale africaine.
          </p>
        </details>
        <details>
          <summary>Quand l?application sera-t-elle disponible ?</summary>
          <p>
            Tr?s bient?t. Une version Android sera d?abord propos?e sur Google Play.
          </p>
        </details>
      </section>

      <footer className="footer">
        <p>
          ? {new Date().getFullYear()} MayimavaStore ?
          <a className="link" href="https://www.mayimavastore.com" target="_blank" rel="noreferrer"> www.mayimavastore.com</a>
        </p>
      </footer>
    </main>
  );
}
