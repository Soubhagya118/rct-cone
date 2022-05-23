import styles from "./CandidateCard.module.css";

const CandidateCard=({company_name,salary,avatar})=> {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img alt="logo" width="100px" height="100px" src={avatar} />
      <div>
        <div>Name:{company_name}</div>
        <div>Title & Company Name</div>
      </div>
      <div>$ Salary{salary}</div>
    </div>
  );
}

export default CandidateCard;
