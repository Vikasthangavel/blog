import { useParams, Link } from "react-router-dom";
import "./PostPage.css";

/* ─── Time2Order Content ─────────────────────────────────────────────────── */
const Time2OrderPost = () => (
  <article className="post-page">
    <div className="post-page__header">
      <Link to="/" className="post-page__back">← Back to home</Link>
      <h1 className="post-page__title">Time2Order: Making Local Shop Pickups Smarter and Faster</h1>
      <div className="post-page__meta">
        <span className="post-page__tag">Project Story</span>
        <span>•</span>
        <span>May 30</span>
        <span>•</span>
        <span>8 min read</span>
      </div>
    </div>

    <div className="post-page__content">
      <p>In today's busy world, customers often spend valuable time waiting in queues at bakeries, restaurants, and local stores. Time2Order is designed to solve this problem by providing a simple platform where customers can place orders in advance and collect them at their preferred time.</p>

      <h2>What is Time2Order?</h2>
      <p>Time2Order is a pre-order and pickup management platform that connects customers with local shops. Instead of waiting in long lines, customers can browse products, place orders, choose a pickup time, and collect their items quickly.</p>

      <h2>Problems Faced by Customers</h2>
      <ul>
        <li>Long waiting times at shops.</li>
        <li>Uncertainty about product availability.</li>
        <li>Crowded stores during peak hours.</li>
        <li>Difficulty in planning purchases efficiently.</li>
      </ul>

      <h2>Problems Faced by Shop Owners</h2>
      <ul>
        <li>Manual order management.</li>
        <li>Rush during busy hours.</li>
        <li>Difficulty predicting demand.</li>
        <li>Limited digital presence.</li>
      </ul>

      <h2>Our Solution</h2>
      <p>Time2Order provides:</p>

      <h3>Easy Online Ordering</h3>
      <p>Customers can place orders anytime through the platform.</p>

      <h3>Scheduled Pickup</h3>
      <p>Users choose a convenient pickup time, reducing waiting time.</p>

      <h3>Real-Time Order Management</h3>
      <p>Shop owners receive and manage orders efficiently.</p>

      <h3>Secure Payment Options</h3>
      <p>Customers can pay online or use cash on pickup.</p>

      <h3>Order Notifications</h3>
      <p>Customers receive updates regarding their order status.</p>

      <h2>Benefits for Customers</h2>
      <ul>
        <li>Save time.</li>
        <li>Avoid queues.</li>
        <li>Convenient ordering experience.</li>
        <li>Better planning for busy schedules.</li>
      </ul>

      <h2>Benefits for Shop Owners</h2>
      <ul>
        <li>Improved workflow.</li>
        <li>Better customer satisfaction.</li>
        <li>Increased repeat customers.</li>
        <li>Opportunity to expand digitally without large investments.</li>
      </ul>

      <h2>Future Enhancements</h2>
      <p>Time2Order aims to introduce:</p>
      <ul>
        <li>AI-based demand prediction.</li>
        <li>Automated order processing.</li>
        <li>Loyalty and reward programs.</li>
        <li>Delivery partner integration.</li>
        <li>Analytics dashboard for shop owners.</li>
        <li>WhatsApp order notifications.</li>
        <li>Multi-store support.</li>
      </ul>

      <h2>Vision</h2>
      <p>Our vision is to help local businesses embrace digital transformation while providing customers with a seamless and efficient ordering experience.</p>

      <h2>Conclusion</h2>
      <p>Time2Order is not just an ordering platform; it is a step towards creating a smarter and more organized shopping experience. By reducing waiting time and improving communication between customers and shop owners, Time2Order aims to empower local businesses and enhance customer convenience.</p>

      <hr />

      <p className="post-page__summary">
        <strong>Summary:</strong> Time2Order is a smart pre-order and pickup platform that helps customers save time and enables local businesses to manage orders efficiently. By allowing customers to order in advance and pick up at their preferred time, Time2Order creates a faster, more convenient, and queue-free shopping experience.
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

      <h2>Role-Based Access: Volunteer & Coordinator Portals</h2>
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
