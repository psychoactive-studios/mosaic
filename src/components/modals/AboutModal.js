import { useSpring, animated, config } from "@react-spring/web";
import CloseBtn from "../ui/CloseBtn";
import { usePageSlideConfig } from "@/configs/springConfigs";

const AboutModal = ({ modalState, isClosing, handleClose }) => {
  const [pageSlide, api] = useSpring(() => ({
    config: { ...config.slow },
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(100%)" },
  }));

  usePageSlideConfig("about", modalState, isClosing, api);

  return (
    <>
      <animated.div
        className="modal-wrapper modal-outer-large"
        style={pageSlide}
      >
        <div className="modal-inner-wrapper">
          <div className="close-btn">
            <CloseBtn handleClose={handleClose} />
          </div>
          <div className="modal-text-block">
            <h1>Collaborators</h1>
            <p className="medium">
              Ara Taiohi is the peak body for youth development in Aotearoa/NZ.
            </p>
            <p className="medium">
              The Prince’s Trust New Zealand supports young people to navigate
              the world we live in, through equitable education, empowering
              entrepreneurship and social cohesion.
            </p>
            <p className="medium">
              Nas, is a collective of BIPOC professionals working to address
              issues of racism, discrimination, belonging, and inclusion. Its
              primary goal is to improve the lives of systemically excluded
              communities.
            </p>
            <br />
            <p>
              Together, we are committed to ensuring the young people of
              Aotearoa/NZ thrive. These cards have been collaboratively
              developed following the terrorist events of 15 March 2019, and
              expanded through hopeful conversations. The cards are designed to
              be used by whānau, young people and people who work with young
              people, to support healthy conversations around areas of
              prejudice, as we endeavour to be a more peaceful and inclusive
              society.
            </p>
          </div>
          <div className="modal-text-block">
            <h2>Extra support</h2>
            <p>
              If you or a young person finds using the cards/the facilitation
              upsetting please check ICON (in case of online negativity
              <a target="_blank" href="https://icon.org.nz/about">
                https://icon.org.nz/about/
              </a>
              ) or contact Youthline (0800 376 633)
            </p>
            <p>
              If you are unsure or concerned about what someone is expressing,
              you could contact the Human Rights Commission (0800 496 877). If
              you are concerned that someone is going to act on views of hate or
              extremism, please contact the Police.
            </p>
          </div>
          <div className="modal-text-block">
            <h2>Information sources</h2>
            <p className="medium">The following have informed these cards: </p>
            <p>
              The Mana Taiohi principles of youth development, that acknowledge
              the mana that every young person carries, and ways of working with
              young people that support or enhance their mana
            </p>
            <p>
              The Code of Ethics for Youth Work in Aotearoa/NZ (2nd ed.) that
              provides guidance for people who work with young people about how
              to engage ethically and responsively.
            </p>
            <p>
              Both of these can be viewed at
              <br />
              <a target="_blank" href="https://www.arataiohi.org.nz">
                www.arataiohi.org.nz
              </a>
            </p>
          </div>
          <div className="modal-footer flex">
            <div className="modal-footer-inner left-footer">
              <p className="medium align-left">
                The following organisations have contributed to the development
                of these cards.
              </p>
              <div className="footer-logo-wrapper">
                <img
                  className="footer-logo ara-taiohi-logo"
                  src="images/logos/ara-taiohi.png"
                  alt="ara-taiohi logo"
                />
                <img
                  className="footer-logo prince-logo"
                  src="images/logos/prince.png"
                  alt="prince logo"
                />
                <img
                  className="footer-logo nas-logo"
                  src="images/logos/nas.png"
                  alt="nas logo"
                />
              </div>
            </div>
            <div className="modal-footer-inner right-footer">
              <p className="footer-icon-text align-left">
                Enabled by a grant from the Preventing and Countering Violent
                Extremism fund and the Clare foundation
              </p>
              <div className="clare-wrapper">
                <img
                  className="footer-logo clare-logo"
                  src="images/logos/clare.png"
                  alt="clare logo"
                />
              </div>
            </div>
          </div>
        </div>
      </animated.div>
      <div className="white-modal-gradient-overlay"></div>
    </>
  );
};

export default AboutModal;
