import styles from "../styles/Icons.module.css";

export const Footer = () => (
    <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <p className={styles.footerLeadText}>
        Denne siden er laget for å hjelpe norske virksomheter med å være
        oppmerksomme på trusler og hvordan man best kan tilpasse sin
        sikkerhetsstrategi for å motvirke dem.
      </p>
      <div className={styles.footerContent}>
        <div className={styles.footerLogoContainer}>
          <a href="http://www.nsm.no">
            <img src="nsm.png" alt="NSM" width="100px" />
          </a>
        </div>

        <div className={styles.footerLinks}>
          <a href="https://nsm.no/getfile.php/136606-1625054194/NSM/Filer/Bildegalleri/Bilder%20til%20grunnprinsipper/Vedlegg-%20Mal%20for%20risikovurdring%20IKT-systemer.xlsx">
            NSM Risikovurdering av IKT-systemer
          </a>
          <a href="https://nettvett.no/sikkerhetssjekk-for-virksomheter/">
            Nettvett.no
          </a>
          <a href="https://www.msb.se/sv/amnesomraden/informationssakerhet-cybersakerhet-och-sakra-kommunikationer/systematiskt-informationssakerhetsarbete/infosakkollen/">
            Sveriges infosäkkollen
          </a>
          <a href="https://cybermaturity.dnv.com/">
            DNV og Gjensidige sin Modenhetsvurdering
          </a>
        </div>
      </div>
    </div>
  </footer>
)