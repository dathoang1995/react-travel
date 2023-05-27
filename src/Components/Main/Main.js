import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img from "../../assets/img.jpg";
import img2 from "../../assets/img(2).jpg";
import img3 from "../../assets/img(3).jpg";
import img4 from "../../assets/img(4).jpg";
import img5 from "../../assets/img(5).jpg";
import img6 from "../../assets/img(6).jpg";
import img7 from "../../assets/img(7).jpg";
import img8 from "../../assets/img(8).jpg";
import img9 from "../../assets/img(9).jpg";
import "./main.scss";

const Data = [
    {
        id: 1,
        imgSrc: img,
        desTitle: "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "It is surrounded by coral reefs. On the west side of Bora-Bora is a large lagoon in which the smaller islands of Toopua and Toopua Iti protect a spacious harbour, popular with yachtsmen. Vaitape, the principal village and administrative centre, is on the west coast.",
    },
    {
        id: 2,
        imgSrc: img2,
        desTitle: "Machu Picchu",
        location: "Peru",
        grade: "CULTURAL RELAX",
        fees: "$600",
        description:
            "Machu Picchu is an old Inca site located in the mountains of Peru, about 80 kilometres northwest of Cusco. Archaeologists think that Machu Picchu was built as a home for the emperor of the Incas, a civilization that lived there before Columbus discovered America.",
    },
    {
        id: 3,
        imgSrc: img3,
        desTitle: "Greate Barrier Reef",
        location: "Peru",
        grade: "CULTURAL RELAX",
        fees: "$600",
        description:
            "The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the world's largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc.",
    },
    {
        id: 4,
        imgSrc: img4,
        desTitle: "Cappadocia",
        location: "Turkey",
        grade: "CULTURAL RELAX",
        fees: "$900",
        description:
            "Cappadocia is a unique historical region in landlocked Central Anatolia. It is most distinguished for the extraordinary spectacular rock formations and eroded volcanic rock tuff landscape that was formed millions of years ago.",
    },
    {
        id: 5,
        imgSrc: img5,
        desTitle: "Guanajuato",
        location: "Mexico",
        grade: "CULTURAL RELAX",
        fees: "$1000",
        description:
            "Guanajuato  is a city and municipal seat of the municipality of Guanajuato in central Mexico and the capital of the state of the same name. It is part of the macroregion of the Bajío. It is in a narrow valley, which makes its streets narrow and winding.",
    },
    {
        id: 6,
        imgSrc: img6,
        desTitle: "Cinque Terre",
        location: "Italy",
        grade: "CULTURAL RELAX",
        fees: "$1100",
        description:
            "Cinque Terre, the five towns, is a string of five old fishing villages perched high on the Italian Riviera in the region Liguria, which until recently were linked only by mule tracks and accessible only by rail or water. The best way to explore the five villages is to hike along this scenic coastline.",
    },
    {
        id: 7,
        imgSrc: img7,
        desTitle: "Angkor Wat",
        location: "Cambodia",
        grade: "CULTURAL RELAX",
        fees: "$1200",
        description:
            "Angkor Wat is an enormous Buddhist temple complex located in northern Cambodia. It was originally built in the first half of the 12th century as a Hindu temple. Spread across more than 400 acres, Angkor Wat is said to be the largest religious monument in the world",
    },
    {
        id: 8,
        imgSrc: img8,
        desTitle: "Taj Mahal",
        location: "India",
        grade: "CULTURAL RELAX",
        fees: "$1600",
        description:
            "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.",
    },
    {
        id: 9,
        imgSrc: img9,
        desTitle: "Bali Island",
        location: "Indonesia",
        grade: "CULTURAL RELAX",
        fees: "$1900",
        description:
            "Bali Indonesia. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers' paradise!",
    },
];

function Main() {
    return (
        <section className='main container section'>
            <div className='secTitle'>
                <h3 className='title'>Most visited destinations</h3>
            </div>

            <div className='secContent grid'>
                {Data.map(({ id, imgSrc, desTitle, location, grade, fees, description }) => {
                    return (
                        <div className='singleDestination' key={id}>
                            <div className='imageDiv'>
                                <img src={imgSrc} alt={desTitle} />
                            </div>

                            <div className='cardInfo'>
                                <h4 className='desTitle'>{desTitle}</h4>

                                <span className='continent flex'>
                                    <HiOutlineLocationMarker className='icon' />
                                    <span className='name'>{location}</span>
                                </span>

                                <div className='fees flex'>
                                    <div className='grade'>
                                        <span>
                                            {grade}
                                            <small>+1</small>
                                        </span>
                                    </div>

                                    <div className='price'>
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className='desc'>
                                    <p>{description}</p>
                                </div>

                                <button className='btn flex'>
                                    DETAILS <HiOutlineClipboardCheck className='icon' />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Main;
