import { useState } from "react";
import PostCard from "./PostCard";
import { posts, projects, notes } from "../data/data";
import "./TabSection.css";

const TABS = [
  { id: "posts",    label: "Posts",    count: posts.length },
  { id: "projects", label: "Projects", count: projects.length },
  { id: "notes",    label: "Notes",    count: notes.length },
];

const TabSection = () => {
  const [active, setActive] = useState("posts");

  const items   = { posts, projects, notes };
  const variant = active === "projects" ? "project" : active === "notes" ? "note" : "post";

  return (
    <section className="tab-section" id="posts">
      <div className="tab-section__header">
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
        <span className="tab-section__count">{items[active].length} items</span>
      </div>

      <div className="tab-section__list">
        {items[active].map((item, i) => (
          <PostCard key={item.id} post={item} variant={variant} index={i} />
        ))}
      </div>
    </section>
  );
};

export default TabSection;
