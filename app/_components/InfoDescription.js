import { styles } from "../styles";

function InfoDescription({ description, question }) {
  return (
    <div
      className="p-[1px] content-center"
      style={{ width: "400px", height: "300px" }}
    >
      <div className="flex flex-col items-center text-center justify-evenly">
        <h1 className={styles.sectionHeadText}>{question}</h1>
        <p className="text-secondary">{description}</p>
      </div>
    </div>
  );
}

export default InfoDescription;
