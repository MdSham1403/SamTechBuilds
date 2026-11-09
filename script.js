(() => {
  const S = window.SITE;
  if (!S) { console.error("config.js failed to load"); return; }
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const lis = (a, cls = "") => `<ul class="${cls}">${a.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
  const fill = (key, html) => { const el = $(`[data-render="${key}"]`); if (el) el.innerHTML = html; };
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Render content from config.js ----------
  const ICONS = {
    web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/>',
    app: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    chart: '<path d="M4 20V11M10 20V4M16 20v-6M2 20h20"/>',
    auto: '<path d="M4 12a8 8 0 0 1 14-5l2 2M20 12a8 8 0 0 1-14 5l-2-2"/><path d="M20 4v5h-5M4 20v-5h5"/>',
    api: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
    hex: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',
    code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4"/>',
    server: '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>',
    db: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.6-.6-.6-2.6z"/>',
  };
  const icon = (k) => `<span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k] || ""}</svg></span>`;
  const PV = {
    dash: '<div class="mw"><div class="mw-top"><i></i><i></i><i></i></div><div class="mw-body"><div class="sk"><b></b><b></b><b></b></div><div class="bars"><b style="--h:40%"></b><b style="--h:70%"></b><b style="--h:52%"></b><b style="--h:88%"></b><b style="--h:62%"></b><b style="--h:80%"></b></div></div></div>',
    stream: '<div class="mw"><div class="mw-top"><i></i><i></i><i></i></div><div class="mw-body"><div class="player"><i></i></div><div class="seek"><b></b></div></div></div>',
    flow: '<div class="mw"><div class="mw-top"><i></i><i></i><i></i></div><div class="mw-body"><div class="cols"><div><b></b><b></b></div><div><b></b></div><div><b></b><b></b><b></b></div></div></div></div>',
    mobile: '<div class="phone"><b></b><b></b><b class="s"></b><b class="a"></b></div>',
    grid: '<div class="dots"><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div>',
  };
  const projectCard = (p) => `
    <article class="card proj spot reveal"><div class="pv" aria-hidden="true">${PV[p.preview] || ""}</div>
      <div class="pbody"><p class="kind">${esc(p.kind)}</p><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>
      ${p.stats ? `<dl class="stats">${p.stats.map((s) => `<div><dd>${esc(s[0])}</dd><dt>${esc(s[1])}</dt></div>`).join("")}</dl>` : ""}
      ${lis(p.tags, "tags")}
      ${p.links.length ? `<div class="plinks">${p.links.map((l) => `<a class="btn btn-sm ${l.type === "code" ? "btn-ghost" : "btn-primary"}" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(l.label)}: ${esc(p.name)} (opens in a new tab)">${esc(l.label)}</a>`).join("")}</div>` : ""}
      </div></article>`;
  fill("services", S.services.map((s, i) => `
    <article class="card spot reveal">${icon(s.icon)}<span class="num" aria-hidden="true">0${i + 1}</span>
      <div><h3>${esc(s.title)}</h3><p>${esc(s.blurb)}</p></div>
      <a class="link" href="#contact" data-service="${esc(s.service)}">Discuss your requirement</a></article>`).join(""));
  fill("projects-featured", S.projects.filter((p) => p.featured).map(projectCard).join(""));
  fill("projects-more", S.projects.filter((p) => !p.featured).map(projectCard).join(""));
  fill("skills", S.skills.map((g) => `<article class="card spot reveal"><h3>${icon(g.icon)}${esc(g.title)}</h3>${lis(g.items, "pills")}</article>`).join(""));
  fill("process", S.process.map((s) => `<li class="reveal"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join(""));
  fill("pricing", S.pricing.items.map((i) => `
    <article class="card pcard spot reveal"><p class="ptag">${esc(i.tag)}</p><h3 class="pname">${esc(i.name)}</h3><p class="pprice">${esc(i.price)}</p>
      <a class="link" href="#contact" data-service="${esc(i.service)}">Discuss this</a></article>`).join(""));
  fill("pricing-note", esc(S.pricing.note));
  fill("footer-services", S.services.map((s) => `<li><a href="#services">${esc(s.title)}</a></li>`).join(""));

  // ---------- Contact details (single source: config.js) ----------
  const C = S.contact;
  $$("[data-email]").forEach((a) => { a.href = `mailto:${C.email}`; a.textContent = C.email; });
  $$("[data-email-btn]").forEach((a) => { a.href = `mailto:${C.email}`; });
  $$("[data-github]").forEach((a) => { a.href = C.github; });
  $$("[data-linkedin]").forEach((a) => { a.href = C.linkedin; });
  $$("[data-location]").forEach((el) => { el.textContent = C.location; });
  const waOk = /^\d{10,15}$/.test(C.whatsapp || "");
  if (waOk) $$("[data-wa]").forEach((a) => { a.href = `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(C.whatsappMessage)}`; });
  else { $$("[data-wa], [data-wa-row]").forEach((el) => (el.hidden = true)); console.warn("WhatsApp number in config.js is still a placeholder — WhatsApp buttons are hidden."); }
  $("#year").textContent = new Date().getFullYear();

  // ---------- Header, mobile menu ----------
  const header = $("#siteHeader"), btn = $("#menuBtn"), nav = $("#nav");
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 24);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  const setMenu = (open) => { nav.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); btn.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
  btn.addEventListener("click", () => setMenu(btn.getAttribute("aria-expanded") !== "true"));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); btn.focus(); } });

  document.addEventListener("click", (e) => { const a = e.target.closest("a[data-service]"); if (a) $("#service").value = a.dataset.service; });

  // ---------- Card spotlight ----------
  document.addEventListener("pointermove", (e) => {
    const c = e.target.closest && e.target.closest(".spot");
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", `${e.clientX - r.left}px`); c.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, { passive: true });

  // ---------- Staggered scroll reveal ----------
  $$("[data-render], .stack, .pgrid, .bento").forEach((g) => [...g.children].forEach((el, i) => el.style.setProperty("--i", i % 6)));
  const items = $$(".reveal");
  const done = (el) => el.addEventListener("transitionend", (ev) => { if (ev.propertyName === "opacity") el.classList.remove("reveal", "in"); }, { once: true });
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); done(en.target); io.unobserve(en.target); } }), { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    items.forEach((el) => io.observe(el));
  } else items.forEach((el) => el.classList.add("in"));

  // ---------- Custom cursor (desktop / fine pointers only) ----------
  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const dot = Object.assign(document.createElement("div"), { className: "cur cur-dot" });
    const ring = Object.assign(document.createElement("div"), { className: "cur cur-ring" });
    [dot, ring].forEach((el) => { el.setAttribute("aria-hidden", "true"); document.body.appendChild(el); });
    document.documentElement.classList.add("has-cursor");
    const HOVER = "a,button,summary,label,select,[role=button],.card.spot";
    let x = -100, y = -100, rx = x, ry = y, raf = 0;
    const loop = () => {
      rx += (x - rx) * (reduce ? 1 : 0.17); ry += (y - ry) * (reduce ? 1 : 0.17);
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.2 ? requestAnimationFrame(loop) : 0;
    };
    addEventListener("pointermove", (e) => {
      if (e.pointerType === "touch") return;
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate3d(${x}px,${y}px,0)`;
      const txt = !!e.target.closest("input,textarea");
      [dot, ring].forEach((el) => { el.classList.add("on"); el.classList.toggle("off", txt); });
      ring.classList.toggle("hover", !txt && !!e.target.closest(HOVER));
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });
    addEventListener("pointerdown", () => ring.classList.add("down"));
    addEventListener("pointerup", () => ring.classList.remove("down"));
    document.documentElement.addEventListener("mouseleave", () => [dot, ring].forEach((el) => el.classList.remove("on")));
  }

  // ---------- Enquiry form ----------
  const form = $("#enquiryForm"), status = $("#formStatus"), submit = $("#submitBtn");
  const rules = {
    name: (v) => v.trim().length < 2 && "Please enter your name.",
    email: (v) => !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) && "Please enter a valid email address.",
    service: (v) => !v && "Please choose a service.",
    message: (v) => v.trim().length < 10 && "Please describe your project (at least 10 characters).",
  };
  const validate = () => {
    let first = null;
    Object.keys(rules).forEach((k) => {
      const field = form.elements[k], msg = rules[k](field.value);
      $(`#e-${k}`).textContent = msg || "";
      field.setAttribute("aria-invalid", msg ? "true" : "false");
      if (msg && !first) first = field;
    });
    return first;
  };
  const say = (text, cls) => { status.textContent = text; status.className = `status ${cls || ""}`; };
  const post = async (url, init) => {
    const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 15000);
    try { const r = await fetch(url, { ...init, signal: ctl.signal }); return r.ok; }
    catch { return false; } finally { clearTimeout(timer); }
  };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const bad = validate();
    if (bad) { say("Please fix the highlighted fields.", "bad"); bad.focus(); return; }
    if (form.elements["bot-field"].value) { say("Thank you — your enquiry has been sent.", "ok"); form.reset(); return; } // silent bot trap
    submit.disabled = true; const label = submit.textContent; submit.textContent = "Sending…"; say("Sending your enquiry…");
    const data = new FormData(form);
    const [viaForms, viaTelegram] = await Promise.all([
      post("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(data).toString() }),
      post("/.netlify/functions/send-telegram", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(data)) }),
    ]);
    submit.disabled = false; submit.textContent = label;
    // Success is shown only if at least one channel confirmed receipt.
    if (viaForms || viaTelegram) {
      say("Thank you — your enquiry has been sent. We'll get back to you soon.", "ok");
      form.reset(); $$("[aria-invalid]", form).forEach((el) => el.setAttribute("aria-invalid", "false"));
    } else {
      say(`We couldn't send your enquiry. Please try again, or email us at ${C.email}.`, "bad");
    }
  });
})();
