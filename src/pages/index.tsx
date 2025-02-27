//React
import { useRef } from "react";


import Link from "next/link";

//Utils
import { socialAccountVariables } from "@utilities/variables/common/home/social-accounts.variables";

//Components
import {
  CanvasComponent, 
  MetaData,
} from "@components/shared/shared.components";

import {
  PAGE_METADATA,
  OPEN_GRAPH,
} from "@utilities/variables/shared/index-shared.variables";

import { HomeSocialCardItem } from "@components/common/home/home-page.components";

import Icons from "@components/shared/icons/Icons";
import {
  addClass,
  calculateOffset,
  removeClass,
  setStyleProperty,
} from "@utilities/helpers/dom.helpers";
/**
 * Home page component: `/`
 *
 * This component represents the home page of the website. It includes information about the developer, social media links, and a call-to-action (CTA) button to contact the developer.
 *
 * @returns {JSX.Element} The JSX element representing the home page.
 */
export default function Home(): JSX.Element {
  const homePageSectionRef = useRef<HTMLElement>(null);
  const blobDivRef = useRef<HTMLDivElement>(null);

  const { home } = PAGE_METADATA;

  /**
   * Updates the CSS variables of the blob element to rotate it.
   *
   * @param e - The mouse event object containing information about the mouse movement.
   */
  function rotateBlob(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const blobDiv = blobDivRef.current as HTMLDivElement;
    removeClass(blobDiv, "home-page__blob--mouse-leave");

    // Max rotation allowed in degrees
    const MAX_ROTATION: number = 45;

    const { offsetX: offsetXPercentage, offsetY: offsetYPercentage } =
      calculateOffset(blobDiv, e.nativeEvent, {
        calculateFromCenter: true,
        toPercentage: true,
      });

    setStyleProperty(
      "--_rotate-y",
      `${offsetXPercentage * MAX_ROTATION}deg`,
      blobDiv
    );
    setStyleProperty(
      "--_rotate-x",
      `${-1 * (offsetYPercentage * MAX_ROTATION)}deg`,
      blobDiv
    );
  }

  function resetBlob() {
    const blobDiv = blobDivRef.current as HTMLDivElement;
    addClass(blobDiv, "home-page__blob--mouse-leave");
  }

  return (
    <>
      <MetaData
        title={home.title}
        description={home.description}
        pageUri={home.pageUri}
        needsIndexation={home.needsIndexation}
        allowRobotCrawlers={home.allowRobotCrawlers}
        openGraph={OPEN_GRAPH}
      />
      <section className="home-page page-section" ref={homePageSectionRef}>
        <CanvasComponent parentElement={homePageSectionRef} />
        <aside className="home-page__socials">
          <ul className="home-page__social-list">
            {socialAccountVariables.map((account, index: number) => {
              const { srcIcon, title, link, needsInversionOnDarkMode } =
                account;

              return (
                <HomeSocialCardItem
                  key={`${index}-${title}-${link}`}
                  title={title}
                  srcIcon={srcIcon}
                  link={link}
                  needsInversionOnDarkMode={needsInversionOnDarkMode}
                />
              );
            })}
          </ul>
        </aside>
        <div className="home-page__presentation">
          <div className="home-page__description">
            <h1 className="home-page__title">
              Hi, I want to dedicate my FULL TIME and PASSION to your SUCCESS
              <span className="home-page__title-hand">🖐</span>
            </h1>
            <h2 className="home-page__subtitle">
              <em>Fullstack developer</em>
            </h2>
            <p
              className="home-page__paragraph"
              itemScope
              itemType="http://schema.org/Person"
            >
              I&apos;m{" "}
               a passionate <strong>fullstack developer</strong> creating
              beautiful and functional websites.
              
              <br />
              Now, with strong problem-solving skills and a keen eye for detail,
              I craft <strong>captivating websites and applications</strong>.
              Let&apos;s build something amazing together!
            </p>
            <Link href="/portfolio" className="link-button">
              Visit Portfolio
              <Icons.PaperPlane width={24} height={24} fill={"currentColor"} />
            </Link>
          </div>         
            
          
        </div>
      </section>
    </>
  );
}
