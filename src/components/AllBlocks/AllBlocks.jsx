import React from 'react';
import { useData } from 'vike-react/useData'

import Entrance from '../Entrance/Entrance';
import Advantages from '../Advantages/Advantages';
import Tile from '../Tile/Tile';
import Channels from '../Channels/Channels';
import Partners from '../Partners/Partners';
import Steps from '../Steps/Steps';
import Case from '../Case/Case';
import Money from '../Money/Money';
import Faq from '../Faq/Faq';
import EntranceEvent from 'components/EntranceEvent/EntranceEvent';
import BannerSellers from 'components/BannersSellers/BannerSellers';
import Connect from 'components/Connect/Connect';
import SalesImprovement from 'components/SalesImprovement/SalesImprovement';
import TileSellers from 'components/TileSellers/TileSellers';
import VerticalSlider from 'components/VerticalSlider/VerticalSlider';
import EntranceSellers from 'components/EntranceSellers/EntranceSellers';
import NumberSeller from 'components/NumberSeller/NumberSeller';
import PopupSeller from 'components/PopupSeller/PopupSeller';
import BannerKurs from 'components/BannersKurs/BannerKurs';
import StepsTovary from 'components/StepsTovary/StepsTovary';
import СonnectionСonditions from 'components/СonnectionСonditions/СonnectionСonditions';
import Calculator from 'components/Calculator/Calculator';
import Advices from 'components/Advices/Advices';
import CasePreview from 'components/CasePreview/CasePreview';
import CasesSlider from 'components/CasesSlider/CasesSlider';
import CardsSlider from 'components/CardsSlider/CardsSlider';
import TabsBlock from 'components/TabsBlock/TabsBlock';
import TovaryAbout from 'components/TovaryAbout/TovaryAbout';
import Review from 'components/Review/Review';
import Timer from 'components/Timer/Timer';
import Iframe from 'components/Iframe/Iframe';
import ShopsEntrance from 'components/ShopsEntrance/ShopsEntrance';
import ShopsAdvantages from 'components/ShopsAdvantages/ShopsAdvantages';
import ShopsSteps from 'components/ShopsSteps/ShopsSteps';
import ShopsStudy from 'components/ShopsStudy/ShopsStudy';
import ShopsExamples from 'components/ShopsExamples/ShopsExamples';
import EntranceVideo from 'components/EntranceVideo/EntranceVideo';
import BackpackLink from 'components/BackpackLink/BackpackLink';
import BlogCatalog from 'components/BlogCatalog/BlogCatalog';
import InfoStatus from 'components/InfoStatus/InfoStatus';


export default function AllBlocks() {
  const data = useData()
  const pageState = data.page

  return (
    <>
      {pageState && pageState.blocks.map((block, i) => {
        switch (block.block_slug) {
          case 'entrance_event':
            return <EntranceEvent key={i} block_state={block.block_state} />;
          case 'entrance':
            return <Entrance key={i} block_state={block.block_state} />;
          case 'advantages':
            return <Advantages key={i} block_state={block.block_state} />;
          case 'tile':
            return <Tile key={i} block_state={block.block_state} />;
          case 'channels':
            return <Channels key={i} block_state={block.block_state} />;
          case 'partners':
            return <Partners key={i} block_state={block.block_state} />;
          case 'steps':
            return <Steps key={i} block_state={block.block_state} />;
          case 'case':
            return <Case key={i} block_state={block.block_state} />;
          case 'money':
            return <Money key={i} block_state={block.block_state} />;
          case 'faq':
            return <Faq key={i} block_state={block.block_state} />;
          case 'banner_sellers':
            return <BannerSellers key={i} block_state={block.block_state} />;
          case 'banner_kurs':
            return <BannerKurs key={i} block_state={block.block_state} />;
          case 'connect':
            return <Connect key={i} block_state={block.block_state} />;
          case 'sales_improvement':
            return <SalesImprovement key={i} block_state={block.block_state} />;
          case 'tile_sellers':
            return <TileSellers key={i} block_state={block.block_state} />;
          case 'vertical_slider':
            return <VerticalSlider key={i} block_state={block.block_state} />;
          case 'entrance_seller':
            return <EntranceSellers key={i} block_state={block.block_state} />;
          case 'number_seller':
            return <NumberSeller key={i} block_state={block.block_state} />;
          case 'popup_seller':
            return <PopupSeller key={i} block_state={block.block_state} />;
          case 'steps_tovary':
            return <StepsTovary key={i} block_state={block.block_state} />;
          case 'connection_conditions':
            return <СonnectionСonditions key={i} block_state={block.block_state} />;
          case 'calculator':
            return <Calculator key={i} block_state={block.block_state} />;
          case 'advices':
            return <Advices key={i} block_state={block.block_state} />;
          case 'case_preview':
            return <CasePreview key={i} block_state={block.block_state} />;
          case 'cases_slider':
            return <CasesSlider key={i} block_state={block.block_state} />;
          case 'cards_slider':
            return <CardsSlider key={i} block_state={block.block_state} />;
          case 'tabs_block':
            return <TabsBlock key={i} block_state={block.block_state} />;
          case 'tovary_about':
            return <TovaryAbout key={i} block_state={block.block_state} />;
          case 'review':
            return <Review key={i} block_state={block.block_state} />;
          case 'timer':
            return <Timer key={i} block_state={block.block_state} />;
          case 'iframe':
            return <Iframe key={i} block_state={block.block_state} />;
          case 'shops_entrance':
            return <ShopsEntrance key={i} block_state={block.block_state} />;
          case 'shops_advantages':
            return <ShopsAdvantages key={i} block_state={block.block_state} />;
          case 'shops_steps':
            return <ShopsSteps key={i} block_state={block.block_state} />;
          case 'shops_study':
            return <ShopsStudy key={i} block_state={block.block_state} />;
          case 'shops_examples':
            return <ShopsExamples key={i} block_state={block.block_state} />;
          case 'entrance_video':
            return <EntranceVideo key={i} block_state={block.block_state} />;
          case 'backpack_link':
            return <BackpackLink key={i} block_state={block.block_state} />;
          case 'blog_catalog':
            return <BlogCatalog key={i} block_state={block.block_state} />;
          case 'info_status ':
            return <InfoStatus key={i} block_state={block.block_state} />;
          default:
            return null;
        }
      })}
    </>
  );
}
