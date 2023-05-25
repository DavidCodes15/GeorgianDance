// import React from "react";
// import { useState } from "react";


// function Accordion() {
//   const [expanded, setExpanded] = useState(null);

//   const handleAccordion = (index) => {
//     setExpanded(index === expanded ? null : index);
//   };

//   const accordionData = [
//     {
//       question: 'How much time do you need to learn these dances?',
//       answer: 'The time required to learn Georgian dances varies depending on factors such as the complexity of the dance style, individual aptitude, and the intensity of practice. It can range from a few months to several years to become proficient in different Georgian dance styles.'
//     },
//     {
//       question: 'What are other things that Georgia is famous for?',
//       answer: 'Apart from its vibrant dance tradition, Georgia is renowned for its picturesque landscapes, rich history, delicious cuisine, and warm hospitality. The country is famous for its winemaking traditions, UNESCO World Heritage sites, ancient cave cities, and the breathtaking beauty of the Caucasus Mountains.'
//     },
//     {
//       question: 'Where can I read about Georgian culture?',
//       answer: 'To delve deeper into Georgian culture, you can explore books, websites, and resources dedicated to Georgian history, art, music, and traditions. Some recommended books include "Georgia: In the Mountains of Poetry" by Peter Nasmyth, "The Making of the Georgian Nation" by Ronald Grigor Suny, and "Georgian Folk Tales" by Marjory Wardrop.'
//     }
//   ];

//   return (
//     <div className="accordion">
//       {accordionData.map((item, index) => (
//         <div className="flex flex-col justify-center space-y-6 border-black border-[2px] border-solid text-2xl px-4 py-4" key={index}>
//           <div className="flex justify-center items-center space-x-6">
//           <div
//             className={`accordion-header ${expanded === index ? 'expanded' : ''}`}
//             onClick={() => handleAccordion(index)}
//           >
//             {item.question}
//           </div>
//           <div className="w-[30px] h-[30px]">
//             <img  src="https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Expand_menu-512.png" alt="accordion arrow logo" />
//           </div>
//           </div>
//           {expanded === index && (
//             <div className="accordion-content">
//               {item.answer}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Accordionimport React, { useState } from "react";
import { useState } from "react";

function Accordion() {
    const [expanded, setExpanded] = useState(null);
  
    const handleAccordion = (index) => {
      setExpanded(index === expanded ? null : index);
    };
  
    const accordionData = [
      {
        question: "How much time do you need to learn these dances?",
        answer: "The time required to learn Georgian dances varies depending on factors such as the complexity of the dance style, individual aptitude, and the intensity of practice. It can range from a few months to several years to become proficient in different Georgian dance styles.",
      },
      {
        question: "What are other things that Georgia is famous for?",
        answer: "Apart from its vibrant dance tradition, Georgia is renowned for its picturesque landscapes, rich history, delicious cuisine, and warm hospitality. The country is famous for its winemaking traditions, UNESCO World Heritage sites, ancient cave cities, and the breathtaking beauty of the Caucasus Mountains.",
      },
      {
        question: "Where can I read about Georgian culture?",
        answer: 'To delve deeper into Georgian culture, you can explore books, websites, and resources dedicated to Georgian history, art, music, and traditions. Some recommended books include "Georgia: In the Mountains of Poetry" by Peter Nasmyth, "The Making of the Georgian Nation" by Ronald Grigor Suny, and "Georgian Folk Tales" by Marjory Wardrop.',
      },
    ];
  
    return (
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div className="flex flex-col justify-center space-y-6 border-black border-[2px] border-solid text-2xl px-4 py-4" key={index}>
            <div className="flex justify-center items-center space-x-6">
              <div
                className={`accordion-header ${expanded === index ? "expanded" : ""}`}
                onClick={() => handleAccordion(index)}
              >
                {item.question}
              </div>
              <div
                className="w-[30px] h-[30px] cursor-pointer"
                onClick={() => handleAccordion(index)}
              >
                <img src="https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Expand_menu-512.png" alt="accordion arrow logo" />
              </div>
            </div>
            {expanded === index && (
              <div className="accordion-content">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  export default Accordion;
  