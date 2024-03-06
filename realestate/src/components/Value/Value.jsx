import './Value.css';
import uuid from 'react-uuid';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemButton
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import data from '../../utils/accordian';
import { useState } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const Value = () => {
  const [className, setClassName] = useState(null);

  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        {/* left side */}
        <div className='v-left'>
          <div className='image-container'>
            <img src='./value.png' alt='' />
          </div>
        </div>
        {/* right side */}
        <div className='flexColStart v-right'>
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value we give to you </span>
          <span className='secondaryText'>
            Lorem ipsum dolor adipisicing elit. Earum, odio? <br />
            Lorem ipsum dolor sit molestiae.
          </span>
          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading className='heading'>
                    <AccordionItemButton className='flexCenter accordionButton'>
                      <AccordionItemState>
                        {({ expanded }) => expanded ? setClassName('expanded') : setClassName('collapsed')}
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={24} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='secondaryText'>
                    {item.detail}
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
