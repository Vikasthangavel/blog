import { useParams, Link } from "react-router-dom";
import { posts } from "../data/data";
import "./PostPage.css";

const PostPage = () => {
  const { slug } = useParams();
  
  // Find the post from data or default to the Time2Order post if it's the specific slug
  const isTime2Order = slug === "time2order";
  
  if (!isTime2Order) {
    return (
      <div className="post-page__not-found">
        <h2>Post not found</h2>
        <Link to="/" className="post-page__back">← Back to home</Link>
      </div>
    );
  }

  return (
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
};

export default PostPage;
