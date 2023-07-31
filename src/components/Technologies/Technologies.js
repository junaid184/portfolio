import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { TbSettingsAutomation, TbMessageChatbot } from "react-icons/tb";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with Next.js
            <br />
            React.js, Bootstrap, MaterialUi,Chakra ui,Tailwend
            <br />
            Ant Design, HTML5,Scss CSS3 <br />& JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with Node.js
            <br />
            Express.js,Next.js
            Docker,jest
            <br />
            Sequelize, MongoDB
            <br />
            MYSQL & Postgres
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          < TbMessageChatbot />
        </picture>
        <ListContainer>
          <ListTitle>ChatBots</ListTitle>
          <ListParagraph>
            DiscordBot
            <br />
            TelegramBot
            <br />
            WhatsappBot
            <br />
            MessengerBot
            <br />
            InstagramBot
            <br />
          </ListParagraph>
        </ListContainer>

      </ListItem>
      <ListItem>
        <picture>
          <TbSettingsAutomation />
        </picture>
        <ListContainer>
          <ListTitle>Web Automation/Scrapping</ListTitle>
          <ListParagraph>
            Scrapy
            <br />
            Selenium
            <br />
            Puppeteer
            <br />
            Cheerio.js
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
