import {React, useState} from 'react'
import "./Hotel.css"
import Navbar from "../../Components/navbar/Navbar"
import Header from "../../Components/header/Header"
import MailList from "../../Components/mailList/MailList"
import Footer from "../../Components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";


function Hotel() {

  const [sliderNumber, setSliderNumber] = useState([0])
  const [open, setOpen] = useState(false)
   
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074"
    },
    {
      src: "https://images.unsplash.com/photo-1594560913095-8cf34bab82ad?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169"
    },
    {
      src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074"
    },
    {
      src: "https://images.unsplash.com/photo-1631049035182-249067d7618e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
    },
    {
      src: "https://images.unsplash.com/photo-1621293954908-907159247fc8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
    },
    {
      src: "https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
    },

  ]

const handleOpen = (i) => {
   setSliderNumber(i)
   setOpen(true)
}

const handleMove = (direction) => {
  let newSlider;

  if (direction === "l") {
    newSlider = sliderNumber === 0 ? 5 : sliderNumber-1
  } else {
    newSlider = sliderNumber === 5 ? 0 : sliderNumber+1
  }

  setSliderNumber(newSlider)
}




  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer">
       {open && <div className="slider">
       <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
       <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() =>handleMove("l")} />
       <div className="sliderWrapper">
         <img src={photos[sliderNumber].src} alt="" className='sliderImg' />
       </div>
       <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
        </div>}

        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m form center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className='hotelImg' />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the love of ciry</h1>
              <p className='hotelDesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of kraknow, this property has an excellent location score of 9.8!</span>
              <h2><b>$945</b></h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer className="footer" />

      </div>
    </div>
  )
}

export default Hotel