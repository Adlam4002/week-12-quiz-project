import Link from 'next/link';
import Image from 'next/image';
import * as Accordion from '@radix-ui/react-accordion';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      
      <Accordion.Root className={`${styles.accordion}`} type="single" collapsible>
        <Accordion.Item className={`${styles.accordionItem}`} value="item-1">
          <Accordion.Header className={`${styles.accordionHeader}`}>
            <Accordion.Trigger className={`${styles.accordionTrigger}`}>
              About Us
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={`${styles.accordionContent}`}>
          <nav>
        <ul className={`${styles.ul}`}>
          <h1>Alex Adlam - Daniel Szabo - Joshua Day - Week 12 Assignment - Student Demo</h1>
          <a href="/">GitHub</a>
          <a href="/">LinkedIn-Alex</a>
          <a href="/">LinkedIn-Daniel</a>
          <a href="/">LinkedIn-Josh</a>
        </ul>
      </nav>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </footer>
  );
};

export default Footer;
