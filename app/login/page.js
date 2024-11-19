import Button from "../_components/Button";
import SignInButton from "../_components/SignInButton";
import { SectionWrapper } from "../_hoc";
import { styles } from "../styles";

function Page() {
  return (
    <div>
      <div className="flex-[0.75] p-8 rounded-2xl">
        <h3 className={`${styles.heroSubText} mb-10`}>
          Sign in to access your courses!
        </h3>

        <SignInButton />
      </div>
    </div>
  );
}

export default SectionWrapper(Page, "login");
