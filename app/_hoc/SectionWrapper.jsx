import { staggerContainer } from "../_utils/motion";
import { styles } from "../styles";

const StarWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <section
        variants={staggerContainer()}
        initial="hidden"
        whileinview="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </section>
    );
  };

export default StarWrapper;
