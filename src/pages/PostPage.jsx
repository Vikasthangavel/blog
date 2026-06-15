import { useParams, Link } from "react-router-dom";
import "./PostPage.css";

/* ─── Time2Order Content ─────────────────────────────────────────────────── */
const Time2OrderPost = () => (
  <article className="post-page">
    <div className="post-page__header">
      <Link to="/" className="post-page__back">← Back to home</Link>
      <h1 className="post-page__title">How I Built a Preorder System for Local Shops Using Python &amp; Cashfree API</h1>
      <div className="post-page__meta">
        <span className="post-page__tag">Project Story</span>
        <span>•</span>
        <span>May 30</span>
        <span>•</span>
        <span>8 min read</span>
      </div>
    </div>

    <div className="post-page__content">

      <p>
        Every project has an origin story. For Time2Order, mine started long before I wrote a single
        line of code — during my 12th grade school holidays, in a place I least expected: my uncle's office.
      </p>

      <h2>Where the Idea Was Born</h2>
      <p>
        During the gap between finishing school and starting college, I spent time at my uncle's office —
        a products and spares business. What I noticed immediately was the uneven rhythm of the day. For
        long stretches, the office would be quiet with staff waiting around. Then, without warning, multiple
        customers would arrive at once, overwhelming the team, spiking wait times, and creating visible
        stress for everyone involved.
      </p>
      <p>
        We used a nearby hotel for meals during work. That had the same issue — sometimes we'd arrive late
        from the office and the food we wanted was already sold out. The kitchen couldn't predict demand;
        we couldn't plan our visit. It was friction on both sides.
      </p>
      <p>
        Back home, I saw the same pattern repeat at grocery stores, meat shops, and local hotels. Customers
        waited. Shops either ran out of stock or scrambled to keep up. Nobody had a reliable way to manage this.
      </p>
      <p>
        The thing that struck me: <strong>this problem existed everywhere, but no one had solved it for
        Tier-3 towns and pickup-only shops</strong> — the kind that don't deliver, where you have to show
        up in person. Big food apps work for restaurants with delivery. But for the local meat shop, the
        neighbourhood bakery, the spare parts counter — there was nothing.
      </p>
      <p>
        I had the idea in 12th grade. But I didn't have the knowledge to build it yet.
      </p>

      <h2>The First Build: A Java MVP in 3rd Semester</h2>
      <p>
        In our 3rd semester, we had to create a Java application as a course project. I used that
        opportunity to build the simplest possible version of the concept — a basic preorder flow in
        a Java desktop application. It was rough, limited, and nowhere near production-ready, but it
        proved the core logic worked and gave the idea a tangible form for the first time.
      </p>

      <h2>Going Full Stack: The Flask Web App</h2>
      <p>
        After the Java prototype, I shared the concept in detail with my project collaborator{" "}
        <a href="https://mithunp.me" target="_blank" rel="noreferrer">Mithun P</a>, who immediately
        understood the problem and the opportunity. Together, we rebuilt the system properly as a
        Flask web application, launched in <strong>April 2026</strong>.
      </p>
      <p>
        We validated it with actual local shops. The feedback was clear and direct: shop owners and
        customers understood the concept and found value in it — but they{" "}
        <strong>preferred a mobile app over a web app</strong>. People in this segment primarily use
        smartphones, not browsers. The web app had validated the idea; the mobile app was the real product.
      </p>

      <h2>Building the Mobile App</h2>
      <p>
        We shifted focus and built the mobile app using <strong>React Native with Expo</strong>. The
        backend stayed on a <strong>VPS</strong>, the web presence was served through{" "}
        <strong>Cloudflare</strong> with a custom domain, and the shop owner dashboard was built in{" "}
        <strong>React</strong>.
      </p>
      <p>
        The app was submitted for review on <strong>13th June 2026</strong> and is currently under
        review on the app store.
      </p>

      <h2>What We Built</h2>
      <ul>
        <li><strong>Preorder flow</strong> — customers place orders in advance and choose a pickup time slot.</li>
        <li><strong>Shop dashboard</strong> — owners see incoming orders, manage slots, and control stock visibility.</li>
        <li><strong>Payment integration</strong> — online payment via Cashfree API with server-side verification.</li>
        <li><strong>User onboarding</strong> — designed for first-time users with minimal friction.</li>
        <li><strong>Marketing page</strong> — to explain the product to shops during onboarding visits.</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Mobile App:</strong> React Native + Expo</li>
        <li><strong>Web Frontend:</strong> React (shop owner dashboard)</li>
        <li><strong>Backend:</strong> Python / Flask, hosted on VPS</li>
        <li><strong>Infrastructure:</strong> Cloudflare (CDN, DNS, security), custom domain</li>
        <li><strong>Payments:</strong> Cashfree API</li>
      </ul>

      <h2>What This Project Taught Me</h2>
      <ul>
        <li>Real problems don't always come from tech communities — sometimes they're sitting in a spare parts office in your hometown.</li>
        <li><strong>Validation before scaling:</strong> the web app wasn't the final product, it was a proof of concept. Building it first saved us from over-engineering a mobile app no one needed.</li>
        <li>User feedback is the fastest debugging tool. "We prefer an app" redirected months of work in a single conversation.</li>
        <li>Going from a Java prototype → Flask web app → React Native app taught me how the same idea evolves as your skills and understanding grow.</li>
        <li>Tier-3 markets have real unsolved problems. You don't need to invent a new concept — you need to bring existing solutions to underserved places.</li>
      </ul>

      <h2>Current Status</h2>
      <p>
        The mobile app is <strong>under review as of 13th June 2026</strong>. The web app is live at{" "}
        <a href="https://time2orders.com" target="_blank" rel="noreferrer">time2orders.com</a>. Onboarding
        of the first set of shops is in progress.
      </p>

      <hr />

      <p className="post-page__summary">
        <strong>Summary:</strong> Time2Order started as an observation during my 12th grade holidays —
        local shops in Tier-3 towns had no way to manage customer flow for pickups. What began as a rough
        Java MVP became a validated Flask web app, and is now a React Native mobile app under app store
        review. This project taught me that the best problems to solve are the ones hiding in plain sight.
      </p>
    </div>
  </article>
);

/* ─── DAKSHAA T26 Content ────────────────────────────────────────────────── */
const DakshaaPost = () => (
  <article className="post-page">
    <div className="post-page__header">
      <Link to="/" className="post-page__back">← Back to home</Link>
      <h1 className="post-page__title">
        Deploying a Full-Stack App on Cloudflare + VPS — Lessons from DAKSHAA T26
      </h1>
      <div className="post-page__meta">
        <span className="post-page__tag">Deployment</span>
        <span>•</span>
        <span>May 12</span>
        <span>•</span>
        <span>9 min read</span>
      </div>
    </div>

    <div className="post-page__content">

      <p>
        DAKSHAA T26 is our college's national-level technical symposium — 30+ events, 10+ departments,
        thousands of participants. I was the backend developer responsible for the registration system,
        payment verification, and volunteer/coordinator portals. Here's what I built, what broke, and
        what I learned.
      </p>

      <h2>The Scale of the Problem</h2>
      <p>
        Running a digital registration system for a national symposium isn't just about CRUD operations.
        We had <strong>30+ events across 10+ departments</strong>, each with its own registration rules,
        participant limits, and coordinators. Every event needed its own form, confirmation email, and
        payment tracking — and it all had to work flawlessly on event day.
      </p>

      <h2>Architecture: Cloudflare + VPS Split</h2>
      <p>
        We chose a clean split-deployment strategy:
      </p>
      <ul>
        <li><strong>Frontend (React)</strong> — hosted on Cloudflare Pages for free CDN delivery and instant global caching.</li>
        <li><strong>Backend (Node.js / Express)</strong> — running on a VPS for full control over API logic, email services, and payment verification.</li>
        <li><strong>Database (Supabase)</strong> — connected directly from the frontend where possible, bypassing the backend for read-heavy operations.</li>
      </ul>
      <p>
        Connecting Supabase directly from the frontend reduced backend load significantly. The backend
        was reserved for operations that genuinely needed it: sending confirmation emails and verifying
        payments.
      </p>

      <h2>The Rate Limiting Incident</h2>
      <p>
        A few days after registration opened, our team noticed something alarming — a single person had
        created <strong>30 accounts within 2 minutes</strong>. We had no rate limiting and no input
        validation on the registration flow.
      </p>
      <p>
        We fixed this immediately by adding:
      </p>
      <ul>
        <li>IP-based <strong>rate limiting</strong> on all registration endpoints.</li>
        <li>Server-side <strong>input validation</strong> to reject malformed or duplicate submissions.</li>
        <li>These patterns were then applied to every new page we built going forward.</li>
      </ul>
      <p>
        That incident taught me to think about abuse scenarios before launch, not after.
      </p>

      <h2>Payment Verification Flow</h2>
      <p>
        We used our college's own payment gateway. The flow worked like this:
      </p>
      <ul>
        <li>The user completes registration and receives a <strong>Registration ID</strong>.</li>
        <li>That ID is sent to the college payment server via API.</li>
        <li>After a successful payment, the server returns the <strong>amount actually paid</strong>.</li>
        <li>We cross-check this on our backend — because the college payment form allowed users to edit the amount before submitting.</li>
      </ul>
      <p>
        This verification step was critical. Without it, anyone could modify the payment amount and
        register for free. Building this made me understand why payment systems always verify server-side,
        never trust client-side values.
      </p>

      <h2>Role-Based Access: Volunteer &amp; Coordinator Portals</h2>
      <p>
        We built <strong>separate login systems</strong> for volunteers and coordinators. This wasn't
        just a UX decision — it forced me to think clearly about authentication vs. authorization:
      </p>
      <ul>
        <li><strong>Authentication</strong> — who are you? (Login with credentials)</li>
        <li><strong>Authorization</strong> — what can you do? (Volunteers can scan QR codes; Coordinators can view registrations by department)</li>
      </ul>
      <p>
        Each role had a scoped view. Coordinators could see live registration counts per department
        through a unique URL — making the entire event digitally transparent, accessible to anyone
        inside or outside the campus.
      </p>

      <h2>QR Code Attendance System</h2>
      <p>
        Volunteers used a dedicated page to <strong>print QR codes</strong> for participants. On event
        day, scanning a QR code marked attendance instantly. Building this taught me about printer
        configuration from a web app context — CSS print stylesheets, paper sizing, and how browsers
        handle print dialogs differently across operating systems.
      </p>
      <p>
        More importantly, it made me understand what "user-level mistakes" really means — a volunteer
        who doesn't understand tech shouldn't be able to break the system. Every edge case a non-developer
        could hit needed to be handled gracefully.
      </p>

      <h2>Supabase as the Database Layer</h2>
      <p>
        Supabase made data management surprisingly flexible. When a user entered incorrect information
        during registration, coordinators could update the record directly in the Supabase dashboard —
        no SQL client needed. This was a real operational win during a high-pressure event.
      </p>

      <h2>Logging and Error Handling</h2>
      <p>
        One of the most valuable habits I developed was wrapping every async operation in
        <strong> try-catch</strong> blocks and logging failures with enough context to debug later.
        When something went wrong during payment verification at 2 AM before event day, those logs told
        me exactly where and why — saving hours of guesswork.
      </p>

      <h2>What This Project Taught Me</h2>
      <ul>
        <li>Think about <strong>abuse and edge cases</strong> before going live — rate limiting is not optional.</li>
        <li><strong>Payment verification must always happen server-side</strong> — client values cannot be trusted.</li>
        <li>Role-based systems require careful separation of <strong>authn vs. authz</strong> logic.</li>
        <li>Direct Supabase connections from the frontend reduce backend overhead for read-heavy workloads.</li>
        <li><strong>Try-catch and structured logging</strong> are your best friends in production.</li>
        <li>Building for non-technical users means designing for the mistakes they will make — not the mistakes developers think of.</li>
        <li>Full-stack development is also about <strong>system flow and team coordination</strong> — not just writing code.</li>
      </ul>

      <h2>Outcome</h2>
      <p>
        DAKSHAA T26 ran successfully as a fully digital event. Registrations were tracked in real time,
        payments were verified automatically, attendance was managed via QR codes, and every department
        could monitor their own numbers live. What started as a college project became a real production
        system serving thousands of participants — and it held up.
      </p>

      <hr />

      <p className="post-page__summary">
        <strong>Summary:</strong> DAKSHAA T26 was my first experience owning a production backend end-to-end —
        from registration flows and rate limiting to payment verification, role-based portals, and QR code
        attendance. It gave me a deep understanding of full-stack system design, security thinking, and
        what it means to build software that real users depend on.
      </p>
    </div>
  </article>
);

/* ─── Router ─────────────────────────────────────────────────────────────── */
const PostPage = () => {
  const { slug } = useParams();

  if (slug === "time2order") return <Time2OrderPost />;
  if (slug === "dakshaa-t26") return <DakshaaPost />;

  return (
    <div className="post-page__not-found">
      <h2>Post not found</h2>
      <Link to="/" className="post-page__back">← Back to home</Link>
    </div>
  );
};

export default PostPage;
