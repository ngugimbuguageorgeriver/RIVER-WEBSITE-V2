Let's make this page production-ready rather than merely prettier:

Careers
→ Hero
→ Why River
→ Open Roles
→ How We Work
→ General Application
→ Footer

And keep the design consistent with the rest of River rather than introducing another visual system.

If we're upgrading it, I would also make the Open Roles section data-driven, so later you can add a job without rebuilding the page structure. That would fit very well with the way you've already been thinking about centralized project registries and reusable components.

continue

Yes. Let’s continue from the current Careers page and build it properly.

I’d make the Careers page feel like River the engineering company, not a generic “we’re hiring” page.

The final page direction
CAREERS
│
├── HERO
│   └── Careers at River
│
├── WHY RIVER
│   ├── Build real systems
│   ├── Solve meaningful problems
│   ├── Own your work
│   └── Keep learning
│
├── OPEN ROLES
│   ├── Available positions
│   ├── Role cards
│   └── Internships
│
├── HOW WE WORK
│   └── Understand → Build → Review → Ship → Improve
│
├── NO PERFECT ROLE?
│   └── General application / Contact
│
└── FOOTER

The key thing is not to overbuild it. Your Careers page should probably be one of the calmer pages on River.

1. Hero

I would change:

“Open roles and company culture.”

because it sounds like a job-board page.

Something closer to:

Build what matters.

Then explain that River brings together software engineering, product thinking and problem solving.

That immediately connects Careers to the positioning you've established across the rest of the site.

2. Why River

This is where I'd make the page feel distinctly River.

Four cards are enough:

Build real systems

Work on software that solves actual operational and business problems.

Think beyond the ticket

Understand the problem before deciding what to build.

Own the outcome

Take responsibility for the quality, reliability and usefulness of what you create.

Keep getting better

Experiment, learn, review your work and improve the system.

This also reinforces your Problem → Approach → Solution → Result philosophy from the Projects page.

3. Open Roles

This should be the visual centre of the page.

Instead of:

Open Roles
Internships
Hiring FAQ

I'd eventually have cards like:

Software Engineer
Engineering · Full-time
Build and maintain production software across River's projects and internal systems.

View role →

Frontend Engineer
Engineering · Full-time
Build interfaces that are fast, accessible and useful—not just visually polished.

View role →

Backend Engineer
Engineering · Full-time
Design APIs, services, data systems and infrastructure that support real-world products.

View role →

Engineering Internship
Early Career · Internship
Learn by contributing to real projects alongside experienced engineers.

View internship →

But—and this is important—don't advertise roles that aren't actually open.

If River isn't hiring yet, the page should honestly say:

No open positions right now.

Then:

We're always interested in meeting people who are curious, technically capable and excited about building useful systems.

Introduce yourself →

That is much better than having fake vacancies just to make the page look populated.

4. How We Work

I wouldn't make this another giant GSAP horizontal experience.

A simple engineering pipeline would be enough:

01 — Understand

We start with the problem, users, constraints and desired outcome.

↓

02 — Build

We design and implement the simplest system that can solve the problem properly.

↓

03 — Review

We test, challenge assumptions and improve the implementation.

↓

04 — Ship

We deploy real software into real environments.

↓

05 — Improve

We monitor, learn and continue improving what we've built.

This subtly tells potential employees:

“This is how engineering happens here.”

That's much more valuable than generic culture statements.

5. General Application

This could be the final CTA.

Something like:

Don't see your role?

Great people don't always fit neatly into a job description.

If you think you could contribute to River, tell us what you build, what problems you like solving and where you think you could make an impact.

Then:

Introduce yourself →

This could eventually lead into the contact/application system you're already developing.

One architectural change I'd make

I'd also avoid hardcoding the roles directly into the HTML.

Eventually have something like:

const RIVER_CAREERS = [
  {
    slug: "software-engineer",
    title: "Software Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Nairobi / Remote",
    status: "open",
    summary: "Build and maintain production software..."
  }
];

Then your <career-card> component renders the cards.

That gives you the same philosophy you're already applying to your Projects & Case Studies registry.

Later you can have:

careers.html
      ↓
RIVER_CAREERS
      ↓
careerCard.js
      ↓
career-software-engineer.html

And your Hiring FAQ can remain completely separate.

I'd also simplify the current page dependencies

Your Careers page currently loads:

projects.css

and:

whatWeDoSection.js
projectCard.js

Those don't appear necessary for the current Careers page.

I'd remove them unless another global component genuinely depends on them.

That keeps the page lighter and makes the architecture cleaner.

So I think today's Careers work should be:

Phase 1 — Structure

Replace the current minimal Careers section.
Add Why River.
Add Open Roles.
Add How We Work.
Add General Application.

Phase 2 — Components

careerCard.js
careers.css
optional careersData.js

Phase 3 — Polish

responsive layout
hover/focus states
accessibility
empty/no-open-roles state
subtle animations
mobile layout
dark/system theme compatibility

Phase 4 — Careers ecosystem

Internship page
Hiring FAQ
individual job pages
application flow

And I would not start Phase 4 until the main Careers page itself feels finished.

The main page should establish the culture and engineering philosophy first; the individual role pages can then do the heavy lifting for actual recruitment.



JOY
Yes — I actually think that should be a major part of the Careers page.

River can be technically serious without feeling cold or corporate.

In fact, because your other pages already communicate engineering capability, the Careers page has an opportunity to show another side of River:

We build serious things, but we enjoy building them together.

The page should make someone feel welcomed before they ever apply.

The emotional direction I'd use

Not:

“Join our high-performance team.”

Not:

“We seek exceptional talent.”

Not:

“Fast-paced environment. Competitive compensation.”

Those phrases immediately make applying feel like an audition.

Instead, I'd give the page a warmer personality:

Come build with us.

We like solving difficult problems, learning new things, and making useful software. We also believe work is better when the people doing it enjoy being around each other.

That feels much more human.

I would add a small “What it feels like here” section

Something visually playful but still sophisticated:

Curious minds.
Ask questions. Challenge assumptions. Learn something new.

Serious about the work.
We care about quality, but we don't need to take ourselves too seriously.

Room to grow.
You don't need to know everything before you join us.

People first.
Good software matters. So do the people building it.

That last point is particularly important for candidates who may be nervous about applying.

And I'd change the application CTA

Instead of:

Apply now

I'd use something softer:

Think we'd work well together?

Then:

We'd love to hear from you.

Say hello →

That's a very different psychological experience.

It changes the relationship from:

River is evaluating you

to:

Let's see if we're a good fit for each other.

That's exactly the feeling I'd want the page to create.

We can also make the Open Roles section warmer

Instead of a sterile job-board layout:

OPEN POSITIONS

I'd introduce it with:

There's always room for good people.

These are the roles we're currently looking for. If one sounds like you, we'd be happy to hear from you.

And if there are no openings:

Nothing open right now?

That's okay.

We don't want a great person to disappear just because we haven't written the right job description yet.

Tell us about yourself →

That's a genuinely welcoming touch.

Visually, I'd loosen the page up too

Your current global styling has a lot of strong colors and gradients. Rather than making Careers another highly animated page, I'd use small moments of joy:

friendly little illustrations / graphical marks
subtle floating elements
rounded role cards
playful microcopy
gentle hover animations
warm accent colors
occasional oversized typography
maybe a small “👋” style moment, but used sparingly
little engineering/culture details rather than stock corporate photography

Something like:

Build. Learn. Laugh. Repeat.

could sit between sections as a small oversized statement.

The page can feel alive without becoming childish.

And I'd make one philosophical change

Your Careers page shouldn't only answer:

“Why should you work at River?”

It should answer:

“Would I enjoy being one of the people who builds River?”

That's the stronger question.

So I think the final Careers experience should have two sides:

THE ENGINEERING

Problems
Systems
Architecture
Quality
Ownership
Learning

and

THE PEOPLE

Curiosity
Collaboration
Growth
Kindness
Humor
Enjoyment

That combination is much more compelling.

And honestly, this is one page where I would deliberately let River's personality show more than on the rest of the site. Your Projects page can prove that River is capable. Your Process page can prove that River is methodical. The Careers page should prove that River is somewhere people would actually want to belong.



CARTOONS
Absolutely — and I think that could work extremely well for the Careers page.

I'd avoid generic corporate illustrations and instead create a River-specific playful engineering world:

7
The visual language I'd recommend

Think:

🖥️ Monitors with little smiling faces
💻 Laptops with happy expressions
⚙️ Friendly gears
☁️ Smiling cloud/server characters
🧩 Code blocks behaving like characters
🐛 A cute little “bug” being fixed
🚀 A cheerful deployment rocket
🔧 Friendly tools
💡 Happy lightbulbs
👋 Characters waving
🙂 Small smiley faces integrated into the technology

But importantly, not children's-cartoon style.

I'd aim for something like:

Playful startup illustration × modern software engineering × editorial cartoon

with clean shapes, slightly imperfect character expressions, and a sophisticated palette that works with River's existing teal/warm visual identity.

We could even make the Careers page tell a little visual story

Hero

A group of friendly little developer/technology characters building something together.

Come build with us. 👋

↓

Why River

Four little characters:

🧠 Curiosity
A smiling brain/lightbulb character.

🛠️ Build
A happy laptop + tools.

🤝 Together
Two technology characters collaborating.

🌱 Grow
A little software/plant character growing from code.

↓

How We Work

A cartoon sequence:

Idea → Code → Test → Fix → Ship 🚀

With the little characters reacting throughout the process.

↓

Application CTA

A friendly computer character waving:

Don't see your role?
That's okay. Come say hello.

And I would make these actual original illustrations for River, rather than simply pulling random images from the internet.