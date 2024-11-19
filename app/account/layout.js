import { SectionWrapper } from "../_hoc";

const { default: SideNavigation } = require("../_components/SideNavigation");

function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-screen gap-12 mt-8">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}

export default SectionWrapper(Layout, "layout");
