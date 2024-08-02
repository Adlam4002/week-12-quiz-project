import Link from "next/link";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.layout}`}>
        <h1>
          Alex Adlam - Daniel Szabo - Joshua Day - Week 12 Assignment - Student
          Demo
        </h1>

        <Accordion.Root
          className={`${styles.accordion}`}
          type="single"
          collapsible
        >
          <Accordion.Item className={`${styles.accordionItem}`} value="item-1">
            <Accordion.Header className={`${styles.accordionHeader}`}>
              <Accordion.Trigger className={`${styles.accordionTrigger}`}>
                About Us
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={`${styles.accordionContent}`}>
              <nav>
                <ul className={`${styles.ul}`}>
                  <a className={`${styles.links}`} href="https://github.com/Adlam4002/week-12-quiz-project">
                    <Image
                      src="/Assets/github-mark-white.png"
                      alt="GitHub Logo"
                      width={50}
                      height={50}
                    />
                  </a>

                  <h2>LinkedIn:</h2>
                  <a href="https://www.linkedin.com/in/alex-adlam-3456b3a5/">
                    Alex
                  </a>
                  <a href="https://www.linkedin.com/in/daniel-szabo-455134248/">
                    Daniel
                  </a>
                  <a href="https://www.linkedin.com/in/joshua-day-ba1652311/">
                    Josh
                  </a>
                </ul>
              </nav>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </footer>
  );
};

export default Footer;
