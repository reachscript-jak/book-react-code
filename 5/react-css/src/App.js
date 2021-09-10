import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyles } from "./components/InlineStyles";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";

export const App = () => {
  return (
    <div>
      <InlineStyles />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
};
