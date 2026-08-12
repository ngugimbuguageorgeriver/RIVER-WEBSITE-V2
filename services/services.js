const services = [
  {
    n:"01", title:"Software Development",
    desc:"Websites, applications, platforms, APIs and custom software built around real business requirements.",
    href:"/services/software-development"
  },
  {
    n:"02", title:"Performance Engineering",
    desc:"Make existing websites and applications faster, more efficient and more reliable.",
    href:"/services/performance-engineering"
  },
  {
    n:"03", title:"System Modernization",
    desc:"Modernize legacy applications, architectures and technology stacks without losing business continuity.",
    href:"/services/system-modernization"
  },
  {
    n:"04", title:"Cloud & Infrastructure",
    desc:"Cloud migration, infrastructure architecture, deployment, scalability and operational improvements.",
    href:"/services/cloud-infrastructure"
  },
  {
    n:"05", title:"Security & Reliability",
    desc:"Strengthen critical systems through security reviews, hardening, monitoring, backup and recovery.",
    href:"/services/security-reliability"
  },
  {
    n:"06", title:"Maintenance & Support",
    desc:"Keep systems updated, secure, monitored and operational with ongoing engineering support.",
    href:"/services/maintenance-support"
  },
  {
    n:"07", title:"Technical Advisory",
    desc:"Architecture reviews, technology selection, audits, technical planning and engineering decisions.",
    href:"/services/technical-advisory"
  },
  {
    n:"08", title:"DevOps & Automation",
    desc:"Deployment pipelines, infrastructure automation, environments and engineering operations.",
    href:"/services/devops-automation"
  }
];

const problems = [
  ["My website is slow","Performance Engineering","/services/performance-engineering"],
  ["I need to move to the cloud","Cloud & Infrastructure","/services/cloud-infrastructure"],
  ["My system is outdated","System Modernization","/services/system-modernization"],
  ["I need ongoing technical support","Maintenance & Support","/services/maintenance-support"],
  ["My system needs better security","Security & Reliability","/services/security-reliability"],
  ["I need new software","Software Development","/services/software-development"]
];

const engagements = [
  ["01","Project","Defined scope, defined objectives and defined delivery."],
  ["02","Retainer","Ongoing engineering capacity for continuous development."],
  ["03","Managed","We continuously maintain, monitor and improve your systems."],
  ["04","Advisory","Technical expertise for architecture, planning and decisions."]
];

const work = [
  ["01","Web & Software","Custom digital systems engineered around business operations."],
  ["02","Performance","Existing systems improved for speed, usability and efficiency."],
  ["03","Infrastructure","Systems moved, deployed and operated on modern infrastructure."]
];

document.addEventListener("DOMContentLoaded", () => {
  const serviceGrid = document.querySelector("#service-grid");
  serviceGrid.innerHTML = services.map(s => `
    <article class="service-card reveal">
      <span class="service-number">${s.n}</span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a href="${s.href}">Explore service →</a>
    </article>
  `).join("");

  document.querySelector("#problem-grid").innerHTML = problems.map(p => `
    <a class="reveal" href="${p[2]}">
      <span>${p[0]}</span>
      <strong>${p[1]} →</strong>
    </a>
  `).join("");

  document.querySelector("#engagement-grid").innerHTML = engagements.map(e => `
    <article class="reveal">
      <span>${e[0]}</span>
      <h3>${e[1]}</h3>
      <p>${e[2]}</p>
    </article>
  `).join("");

  document.querySelector("#work-grid").innerHTML = work.map(w => `
    <article class="work-card reveal">
      <div class="fake-media"></div>
      <span class="work-number">${w[0]} / RIVER PROJECTS</span>
      <div class="work-content">
        <h3>${w[1]}</h3>
        <p>${w[2]}</p>
        <a href="/projects">View case studies →</a>
      </div>
    </article>
  `).join("");

  document.querySelector("#year").textContent = new Date().getFullYear();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08 });

  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 35, 280)}ms`;
    observer.observe(el);
  });

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "×" : "☰";
  });

  document.querySelectorAll(".main-nav a").forEach(a => {
    a.addEventListener("click", () => {
      header.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    });
  });
});
