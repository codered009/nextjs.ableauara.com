// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { ScreenVariantProvider } from "../components/plasmic/nextjs_ableaura_com/PlasmicGlobalVariant__Screen";
import { ThemeContext } from "../components/plasmic/nextjs_ableaura_com/PlasmicGlobalVariant__Theme";
import { PlasmicGatsbyBuilder } from "../components/plasmic/nextjs_ableaura_com/PlasmicGatsbyBuilder";

function GatsbyBuilder() {
  // Use PlasmicGatsbyBuilder to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicGatsbyBuilder are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicGatsbyBuilder is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <ThemeContext.Provider value={undefined}>
      <PlasmicGatsbyBuilder />
    </ThemeContext.Provider>
  );
}

export default GatsbyBuilder;
