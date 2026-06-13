import { useState } from "react";
import PostCard from "./PostCard";
import { posts, projects, notes } from "../data/data";
import "./TabSection.css";

const TABS = [
  { id: "posts", label: "Recent posts" },
  { id: "projects", label: "Projects" },
  { id: "notes", label: "Notes" },
];

const TabSection = () => {
  const [active, setActive] = useState("posts");

  const items = {
    posts,
    projects,
    notes,
  };

  const variant = active === "projects" ? "project" : active === "notes" ? "note" : "post";

  return (
    <section className="tab-section" id="posts">
      <div className="tab-section__tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab-section__tab ${active === tab.id ? "tab-section__tab--active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-section__list">
        {items[active].map((item) => (
          <PostCard key={item.id} post={item} variant={variant} />
        ))}
      </div>
    </section>
  );
};

export default TabSection;
