import styles from "scss/components/TeamCard.module.scss";
import twitterIcon from "assets/images/social-icons/twitter.svg";
import linkedinIcon from "assets/images/social-icons/linkedin.svg";

interface Props {
  img?: string;
  designation?: string;
  name?: string;
  twitterLink?: string;
  linkdenLink?: string;
}

function TeamCard({
  img,
  designation = "Founder",
  name,
  twitterLink,
  linkdenLink,
}: Props) {
  return (
    <div className={styles.card}>
      <main>
        <div>
          <img src={img} className={styles.teamMemberImg} alt="" />
        </div>

        {name ? (
          <h1 className="fs-14px white text-center weight-4">{name}</h1>
        ) : (
          ""
        )}
      </main>

      <div className="mb-30px">
        {designation ? (
          <p className="text-gradient weight-9 fs-14px">{designation}</p>
        ) : (
          ""
        )}
      </div>

      <footer>
        <a
          href={twitterLink ? twitterLink : "/"}
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <img src={twitterIcon} alt="" />
        </a>
        <a
          href={linkdenLink ? linkdenLink : "/"}
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <img src={linkedinIcon} alt="" />
        </a>
      </footer>
    </div>
  );
}

export default TeamCard;
