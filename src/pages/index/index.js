import React from "react";

// Component Imports
import { TextMarquee } from "../../components/Marquee/index.js";
import { TrendingNftSection } from "./components/Trending/index.js";
import { HotCollectionSection } from "./components/Hot/index.js";
import { AboutSection } from "./components/About/index.js";
import { WelcomeSection } from "./components/Welcome/index.js";

export default function Index() {
  return (
    <>
      <div>
        {/* Welcome section */}
        <WelcomeSection />

        {/* Text marquee */}
        <TextMarquee>
          trending nft's{" "}
          <span role="img" aria-label="emoji">
            &#128293; &#128293; &#128293;
          </span>
        </TextMarquee>

        {/* Trending NFTs */}
        <TrendingNftSection />

        {/* Text marquee */}
        <TextMarquee>
          trending nft's{" "}
          <span role="img" aria-label="emoji">
            &#128293; &#128293; &#128293;
          </span>
        </TextMarquee>

        {/* About Section */}
        <AboutSection />

        {/* Hot Collections */}
        <HotCollectionSection />
      </div>
    </>
  );
}
