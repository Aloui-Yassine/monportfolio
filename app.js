/* =====================================================================
   MOTEUR DE LA PRÉSENTATION
   Construit les diapos à partir de contenu.js et gère la navigation.
   Normalement, pas besoin de modifier ce fichier pour changer le texte.
   ===================================================================== */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  var stage = document.getElementById("stage");
  var app = document.getElementById("app");

  /* ---------- Outils ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function asList(v) { return v == null ? [] : (Array.isArray(v) ? v : [v]); }

  // Compteur d'apparition échelonnée, remis à zéro pour chaque diapo
  var k = 0;
  function rv(cls) { return ' class="' + (cls ? cls + " " : "") + 'rv" style="--i:' + (k++) + '"'; }

  function titre(t, cls) {
    var l = asList(t);
    var i = k; k += 2;
    var html = '<h2 class="title ' + (cls || "") + '" style="--i:' + i + '">' +
      '<span class="line"><span>' + esc(l[0]) + "</span></span>";
    if (l[1]) html += '<span class="line l2"><span>' + esc(l[1]) + "</span></span>";
    return html + "</h2>";
  }
  function etiquettes(list) {
    if (!list || !list.length) return "";
    return "<dl" + rv("tags") + ">" + list.map(function (e) {
      return "<div><dt>" + esc(e.label) + "</dt><dd>" + esc(e.valeur) + "</dd></div>";
    }).join("") + "</dl>";
  }
  function paragraphes(t) {
    return asList(t).map(function (p) { return "<p" + rv("lead") + ">" + esc(p) + "</p>"; }).join("");
  }
  function points(list) {
    if (!list || !list.length) return "";
    return "<ul" + rv("points") + ">" + list.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>";
  }
  function figure(img, extra) {
    if (!img) return "";
    return "<figure" + rv("fig" + (img.portrait ? " portrait" : "") + (extra ? " " + extra : "")) + ">" +
      '<button type="button" data-zoom="' + esc(img.src) + '" data-caption="' + esc(img.legende || "") + '" aria-label="Agrandir l’image : ' + esc(img.alt || "") + '">' +
      '<img src="' + esc(img.src) + '" alt="' + esc(img.alt || "") + '" loading="lazy"></button>' +
      (img.legende ? "<figcaption>" + esc(img.legende) + "</figcaption>" : "") + "</figure>";
  }
  function colonnes(list) {
    if (!list || !list.length) return "";
    return '<div class="cols rv" style="--i:' + (k++) + ";--n:" + Math.min(list.length, 4) + '">' + list.map(function (c) {
      return '<div class="col">' + (c.label ? '<div class="c-label">' + esc(c.label) + "</div>" : "") +
        (c.titre ? "<h3>" + esc(c.titre) + "</h3>" : "") +
        "<ul>" + asList(c.items).map(function (it) { return "<li>" + esc(it) + "</li>"; }).join("") + "</ul></div>";
    }).join("") + "</div>";
  }
  function head(d, num) {
    var n = d.numeroGrand || num;
    return '<div class="head">' + titre(d.titre) + (n ? '<div' + rv("big-num" + (d.numeroGrand ? " acc" : "")) + ">" + esc(n) + "</div>" : "") + "</div>";
  }
  var mStripe = '<div class="m-stripe rv" style="--i:0" aria-hidden="true"><i></i><i></i><i></i></div>';

  /* ---------- Modèles de diapos ---------- */
  var T = {
    accueil: function () {
      var a = D.accueil;
      return '<div class="body"><div class="home-grid">' +
        '<div class="stack">' + titre(a.titre, "xl") + mStripe +
        "<p" + rv("home-role") + ">" + esc(a.role) + "</p>" +
        "<p" + rv("lead") + ">" + esc(a.texte) + "</p>" +
        "<div" + rv("home-actions") + '><button class="btn" type="button" data-go="sommaire">Découvrir le portfolio <span aria-hidden="true">→</span></button>' +
        '<a class="btn ghost" href="' + esc(D.site.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a></div>' +
        "</div>" +
        "<div" + rv("photo") + '><img src="' + esc(a.photo) + '" alt="Portrait de ' + esc(D.site.nom) + '" width="800" height="800"></div>' +
        "</div>" + etiquettes(a.etiquettes) + "</div>";
    },

    sommaire: function () {
      var s = D.sommaire;
      var cards = D.chapitres.map(function (ch, ci) {
        var color = ch.couleur === "ece" ? "var(--ece)" : ch.couleur === "bmw" ? "var(--bmw)" : "var(--night)";
        return '<button type="button" class="card-link rv" style="--i:' + (k++) + '" data-go="' + esc(ch.id) + '-0">' +
          '<span class="c-num">' + (ci + 1) + ".0</span>" +
          '<span class="c-title">' + esc(ch.titre) + "</span>" +
          '<span class="c-sub">' + esc(ch.resume || "") + "</span>" +
          '<span class="c-foot"><span><i class="c-dot" style="background:' + color + '"></i>' + ch.diapos.length + " diapos</span><span aria-hidden=\"true\">→</span></span>" +
          "</button>";
      }).join("");
      return '<div class="body"><div class="head">' + titre(s.titre, "xl") + "</div>" +
        (s.texte ? "<p" + rv("lead") + ">" + esc(s.texte) + "</p>" : "") +
        '<nav class="cards" aria-label="Chapitres">' + cards + "</nav></div>";
    },

    chapitre: function (d, ctx) {
      return '<div class="cover">' +
        "<div" + rv("cover-num") + ">" + ctx.n + ".0</div>" +
        '<div class="cover-bottom">' + (ctx.ch.couleur === "bmw" ? mStripe : "") +
        (d.surtitre ? "<p" + rv("surtitre") + ">" + esc(d.surtitre) + "</p>" : "") + titre(d.titre, "xl") +
        (d.texte ? "<p" + rv("lead") + ">" + esc(d.texte) + "</p>" : "") + etiquettes(d.etiquettes) +
        "</div></div>";
    },

    texte: function (d, ctx) {
      var right = points(d.points) + etiquettes(d.etiquettes);
      return '<div class="body">' + head(d, ctx.num) +
        '<div class="split"><div class="stack">' + paragraphes(d.texte) + "</div>" +
        '<div class="stack">' + right + "</div></div></div>";
    },

    chiffres: function (d, ctx) {
      var figs = '<div class="figures rv" style="--i:' + (k++) + ";--n:" + d.chiffres.length + '">' + d.chiffres.map(function (c) {
        return '<div class="figure"><div class="v">' + esc(c.valeur) + '</div><div class="l">' + esc(c.libelle) + "</div></div>";
      }).join("") + "</div>";
      return '<div class="body">' + head(d, ctx.num) +
        (d.texte ? "<p" + rv("lead") + ">" + esc(d.texte) + "</p>" : "") + figs +
        colonnes(d.colonnes) + (d.note ? "<p" + rv("small") + ">" + esc(d.note) + "</p>" : "") + "</div>";
    },

    colonnes: function (d, ctx) {
      return '<div class="body">' + head(d, ctx.num) +
        (d.texte ? "<p" + rv("lead") + ">" + esc(d.texte) + "</p>" : "") +
        colonnes(d.colonnes) + etiquettes(d.etiquettes) +
        (d.note ? "<p" + rv("small") + ">" + esc(d.note) + "</p>" : "") + "</div>";
    },

    frise: function (d, ctx) {
      var items = '<ol class="timeline rv" style="--i:' + (k++) + ";--n:" + d.etapes.length + '">' + d.etapes.map(function (e) {
        return '<li class="' + (e.actuel ? "now" : "") + '"><div class="d">' + esc(e.date) + "</div><h3>" + esc(e.titre) + "</h3>" +
          (e.lieu ? '<div class="p">' + esc(e.lieu) + "</div>" : "") + "</li>";
      }).join("") + "</ol>";
      return '<div class="body">' + head(d, ctx.num) + (d.texte ? "<p" + rv("lead") + ">" + esc(d.texte) + "</p>" : "") + items + "</div>";
    },

    media: function (d, ctx) {
      return '<div class="body">' + head(d, ctx.num) +
        '<div class="split' + (d.large ? " wide-r" : "") + '"><div class="stack">' + paragraphes(d.texte) + points(d.points) + etiquettes(d.etiquettes) + "</div>" +
        figure(d.image) + "</div></div>";
    },

    galerie: function (d, ctx) {
      return '<div class="body">' + head(d, ctx.num) +
        (d.texte ? "<p" + rv("lead") + ">" + esc(d.texte) + "</p>" : "") +
        '<div class="gallery">' + d.images.map(function (im) { return figure(im); }).join("") + "</div></div>";
    },

    cartes: function (d, ctx) {
      return '<div class="body">' + head(d, ctx.num) +
        '<div class="ccards">' + d.cartes.map(function (c) {
          var img = c.image ? '<button type="button" class="ccard-img zoomable" data-zoom="' + esc(c.image.src) + '" data-caption="' + esc(c.titre + " · " + (c.meta || "")) + '" aria-label="Agrandir le certificat : ' + esc(c.titre) + '">' +
            '<img src="' + esc(c.image.src) + '" alt="' + esc(c.image.alt || c.titre) + '" loading="lazy"></button>' : "";
          var lien = c.lien ? '<a class="ccard-link" href="' + esc(c.lien) + '" target="_blank" rel="noopener">' + esc(c.lienTexte || "Voir le certificat") + ' <span aria-hidden="true">↗</span></a>' : "";
          return "<article" + rv("ccard" + (c.vedette ? " vedette" : "") + (c.image ? " has-img" : "")) + ">" + img +
            '<span class="k">' + esc(c.kicker) + "</span><h3>" + esc(c.titre) + "</h3>" +
            (c.texte ? '<p class="small">' + esc(c.texte) + "</p>" : "") +
            '<div class="meta-line"><span>' + esc(c.meta || "") + "</span>" + lien + "</div></article>";
        }).join("") + "</div></div>";
    },

    chaine: function (d, ctx) {
      var list = '<ol class="chain">' + d.maillons.map(function (m, i) {
        return '<li class="' + (m.moi ? "moi" : "") + '" style="--k:' + i + '">' +
          '<div class="node"><b>' + esc(m.nom) + "</b><span>" + esc(m.detail || "") + "</span></div>" +
          (m.lien ? '<div class="link"><span class="proto">' + esc(m.lien) + "</span></div>" : "") + "</li>";
      }).join("") + "</ol>";
      return '<div class="body">' + head(d, ctx.num) +
        (d.texte ? "<p" + rv("lead") + ">" + esc(d.texte) + "</p>" : "") + list +
        '<div class="legend rv" style="--i:' + (k++) + '"><span><i class="me"></i>Ma responsabilité</span><span><i></i>Reste de l’équipe</span></div></div>';
    },

    valeurs: function (d, ctx) {
      var cards = d.cartes.map(function (c) {
        return '<li class="flip-item rv" style="--i:' + (k++) + '">' +
          '<button type="button" class="flip" aria-pressed="false" aria-label="' + esc(c.phrase) + ' : ' + esc(c.verso) + '" style="--fond:' + esc(c.fond || "#0B0F14") + ";--encre:" + esc(c.encre || "#FFFFFF") + '">' +
          '<span class="flip-inner">' +
          '<span class="flip-face flip-front"><img src="' + esc(c.image) + '" alt="" loading="lazy"></span>' +
          '<span class="flip-face flip-back"><span class="flip-quote">' + esc(c.phrase) + '</span><span class="flip-text">' + esc(c.verso) + "</span></span>" +
          "</span></button></li>";
      }).join("");
      return '<div class="body">' + head(d, ctx.num) + '<ul class="flips">' + cards + "</ul></div>";
    },

    bientot: function (d, ctx) {
      return '<div class="body">' + head(d, ctx.num) +
        "<div" + rv("soon") + '><p class="lead">' + esc(d.texte || "Contenu à venir.") + "</p></div></div>";
    },

    contact: function () {
      var c = D.contact;
      return '<div class="body">' + '<div class="head">' + titre(c.titre, "xl") + "</div>" + mStripe +
        "<p" + rv("lead") + ">" + esc(c.texte) + "</p>" +
        "<div" + rv("contact-row") + '><a class="btn" href="' + esc(D.site.linkedin) + '" target="_blank" rel="noopener">Me contacter sur LinkedIn <span aria-hidden="true">→</span></a>' +
        '<button class="btn ghost" type="button" id="copy-link">Copier le lien</button>' +
        '<span class="contact-url" id="profile-url">' + esc(D.site.linkedinAffiche) + "</span></div>" +
        "<div" + rv("home-actions") + '><button class="btn ghost" type="button" data-go="sommaire">Revenir au sommaire</button>' +
        '<button class="btn ghost" type="button" data-go="accueil">Revenir à l’accueil</button></div></div>';
    },
  };

  /* ---------- Liste ordonnée de toutes les diapos ---------- */
  var slides = [];
  slides.push({ key: "accueil", type: "accueil", tone: "paper", brand: "neutre", group: "home", label: "Accueil" });
  slides.push({ key: "sommaire", type: "sommaire", tone: "brand", brand: "bmw", group: "home", label: "Sommaire" });
  D.chapitres.forEach(function (ch, ci) {
    var n = ci + 1;
    ch.diapos.forEach(function (d, si) {
      var tone = d.ton === "nuit" ? "night" : d.ton === "couleur" ? "brand" : d.ton === "papier" ? "paper" :
        d.type === "chapitre" ? (ch.couleur === "neutre" ? "night" : "brand") : "paper";
      slides.push({
        key: ch.id + "-" + si, type: d.type, d: d, ch: ch, tone: tone, brand: ch.couleur || "neutre",
        group: ch.id, label: n + ".0 " + ch.titre, num: n + "." + si, n: n,
      });
    });
  });
  slides.push({ key: "contact", type: "contact", tone: "night", brand: "neutre", group: "contact", label: "Contact" });

  /* ---------- Construction du DOM ---------- */
  stage.innerHTML = slides.map(function (s, idx) {
    k = 0;
    var tpl = T[s.type] || T.texte;
    var inner = tpl(s.d || {}, { n: s.n, num: s.num, ch: s.ch });
    var meta = '<header class="meta"><div><b>' + esc(D.site.nom) + "</b>Portfolio</div>" +
      '<div class="m-year">' + esc(D.site.annee) + "</div>" +
      '<div class="m-chap">' + esc(s.label) + "</div>" +
      '<div class="num">' + (s.num ? esc(s.num) : (idx + 1 < 10 ? "0" : "") + (idx + 1)) + "</div></header>";
    return '<section class="slide tone-' + s.tone + '" data-brand="' + s.brand + '" data-key="' + s.key + '" aria-roledescription="diapositive" aria-label="' + esc(s.label + (s.num ? " · " + s.num : "")) + '" aria-hidden="true">' + meta + inner + "</section>";
  }).join("");
  var els = Array.prototype.slice.call(stage.querySelectorAll(".slide"));

  /* ---------- Navigation ---------- */
  var cur = -1;
  var dotsEl = document.getElementById("dots");
  var prevBtn = document.getElementById("prev");
  var nextBtn = document.getElementById("next");
  var progress = document.getElementById("progress");
  var live = document.getElementById("live");
  var brandColors = { bmw: "var(--bmw)", ece: "var(--ece)", neutre: "var(--bmw)" };

  function indexOfKey(key) {
    for (var i = 0; i < slides.length; i++) if (slides[i].key === key) return i;
    return -1;
  }

  function renderDots() {
    var g = slides[cur].group;
    var members = [];
    slides.forEach(function (s, i) { if (s.group === g) members.push(i); });
    var label = g === "home" ? "Introduction" : g === "contact" ? "Contact" : slides[cur].label;
    dotsEl.innerHTML = '<span class="chap">' + esc(label) + "</span>" + (members.length > 1 ? members.map(function (i) {
      return '<button class="dot" type="button" data-index="' + i + '" aria-label="Aller à la diapo ' + esc(slides[i].num || slides[i].label) + '"' + (i === cur ? ' aria-current="true"' : "") + "></button>";
    }).join("") : "");
  }

  function go(i, opts) {
    if (i < 0 || i >= slides.length || i === cur) return;
    var dir = cur === -1 || i > cur ? 1 : -1;
    stage.style.setProperty("--dir", dir);
    var prev = els[cur];
    if (prev) {
      prev.classList.remove("is-active");
      prev.classList.add("is-leaving");
      prev.setAttribute("aria-hidden", "true");
      setTimeout(function (el) { return function () { if (el !== els[cur]) el.classList.remove("is-leaving"); }; }(prev), 800);
    }
    cur = i;
    var el = els[cur];
    el.classList.remove("is-leaving");
    el.scrollTop = 0;
    // relance des animations d'apparition
    void el.offsetWidth;
    el.classList.add("is-active");
    el.removeAttribute("aria-hidden");

    var s = slides[cur];
    app.setAttribute("data-tone", s.tone);
    app.style.setProperty("--c-brand", brandColors[s.brand] || "var(--bmw)");
    prevBtn.disabled = cur === 0;
    nextBtn.disabled = cur === slides.length - 1;
    progress.style.width = (cur / (slides.length - 1)) * 100 + "%";
    renderDots();
    live.textContent = s.label + (s.num ? ", diapo " + s.num : "");
    if (!opts || !opts.fromHash) {
      try { history.replaceState(null, "", "#" + s.key); } catch (e) { /* lien direct indisponible */ }
    }
  }
  function next() { go(cur + 1); }
  function prev() { go(cur - 1); }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  document.getElementById("menu").addEventListener("click", function () { go(indexOfKey("sommaire")); });
  dotsEl.addEventListener("click", function (e) {
    var b = e.target.closest("[data-index]");
    if (b) go(+b.getAttribute("data-index"));
  });

  // Boutons internes : data-go="sommaire", data-go="projet-0", …
  stage.addEventListener("click", function (e) {
    var g = e.target.closest("[data-go]");
    if (g) { var i = indexOfKey(g.getAttribute("data-go")); if (i > -1) go(i); return; }
    var f = e.target.closest(".flip");
    // Au survol (souris), la carte se retourne seule ; le clic ne sert qu'au tactile et au clavier
    if (f) {
      if (e.detail > 0 && window.matchMedia && window.matchMedia("(hover: hover)").matches) return;
      var on = f.getAttribute("aria-pressed") !== "true"; f.setAttribute("aria-pressed", String(on)); return;
    }
    var z = e.target.closest("[data-zoom]");
    if (z) { e.preventDefault(); openZoom(z.getAttribute("data-zoom"), z.getAttribute("data-caption"), z.querySelector("img").alt); }
  });

  /* Clavier */
  document.addEventListener("keydown", function (e) {
    if (zoom) { if (e.key === "Escape") closeZoom(); return; }
    if (e.target.closest && e.target.closest("input, textarea")) return;
    if (e.key === "ArrowRight" || e.key === "PageDown" || (e.key === " " && !e.target.closest("button, a"))) { e.preventDefault(); next(); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
    else if (e.key === "Home") { e.preventDefault(); go(0); }
    else if (e.key === "End") { e.preventDefault(); go(slides.length - 1); }
    else if (e.key === "Escape" || e.key === "m" || e.key === "M") { go(indexOfKey("sommaire")); }
  });

  /* Glissement du doigt (mobile) */
  var tx = 0, ty = 0, tt = 0;
  stage.addEventListener("touchstart", function (e) { var t = e.changedTouches[0]; tx = t.clientX; ty = t.clientY; tt = Date.now(); }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    var t = e.changedTouches[0], dx = t.clientX - tx, dy = t.clientY - ty;
    if (Date.now() - tt < 700 && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) { dx < 0 ? next() : prev(); }
  }, { passive: true });

  /* Liens directs : #projet-3, #sommaire, … */
  window.addEventListener("hashchange", function () {
    var i = indexOfKey(location.hash.slice(1));
    if (i > -1) go(i, { fromHash: true });
  });

  /* ---------- Agrandissement d'image ---------- */
  var zoom = null, lastFocus = null;
  function openZoom(src, caption, alt) {
    lastFocus = document.activeElement;
    zoom = document.createElement("div");
    zoom.className = "lightbox";
    zoom.setAttribute("role", "dialog");
    zoom.setAttribute("aria-modal", "true");
    zoom.setAttribute("aria-label", caption || "Image agrandie");
    zoom.innerHTML = '<div class="lb-tools">' +
      (document.fullscreenEnabled ? '<button class="lb-btn fs" type="button">Plein écran</button>' : "") +
      '<button class="lb-btn close" type="button" aria-label="Fermer">×</button></div>' +
      '<div class="lb-body"><img src="' + esc(src) + '" alt="' + esc(alt || "") + '">' + (caption ? "<p>" + esc(caption) + "</p>" : "") + "</div>";
    zoom.addEventListener("click", function (e) {
      if (e.target.closest(".fs")) {
        e.stopPropagation();
        var p = document.fullscreenElement ? document.exitFullscreen() : zoom.requestFullscreen();
        if (p && p.catch) p.catch(function () { /* plein écran refusé : la vue agrandie reste affichée */ });
        return;
      }
      closeZoom();
    });
    document.body.appendChild(zoom);
    zoom.querySelector(".close").focus();
  }
  function closeZoom() {
    if (!zoom) return;
    if (document.fullscreenElement) { try { document.exitFullscreen(); } catch (e) { /* déjà sorti */ } }
    zoom.remove(); zoom = null;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener("fullscreenchange", function () {
    var b = zoom && zoom.querySelector(".fs");
    if (b) b.textContent = document.fullscreenElement ? "Quitter le plein écran" : "Plein écran";
  });

  /* ---------- Copier le lien LinkedIn ---------- */
  var copyBtn = document.getElementById("copy-link");
  if (copyBtn) copyBtn.addEventListener("click", function () {
    function done() { copyBtn.textContent = "Lien copié"; setTimeout(function () { copyBtn.textContent = "Copier le lien"; }, 2000); }
    function fallback() {
      var r = document.createRange(); r.selectNodeContents(document.getElementById("profile-url"));
      var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      copyBtn.textContent = "Lien sélectionné : Ctrl+C";
    }
    try { navigator.clipboard.writeText(D.site.linkedin).then(done, fallback); } catch (e) { fallback(); }
  });

  /* ---------- Démarrage ---------- */
  var start = indexOfKey(location.hash.slice(1));
  go(start > -1 ? start : 0, { fromHash: start > -1 });

  var hint = document.getElementById("hint");
  setTimeout(function () { hint.classList.add("show"); }, 1200);
  setTimeout(function () { hint.classList.remove("show"); }, 6500);
})();
