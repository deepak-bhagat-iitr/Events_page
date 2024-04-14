"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ImArrowUpRight2 } from "react-icons/im";
// Define HTMLComponent outside the Events component
const HTMLComponent = ({ htmlContent }) => {
  return (
    <p dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.esummit.in/events/all');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="content">
      <div className="container">
        <div className="upper-div">
          <div className="left-div">
            <h1>Events</h1>
            <p>Challenge your limits with events full of uncertainties</p>
          </div>
          <div className="button-container">
            <button>All</button>
            <button>Live</button>
            <button>Upcoming</button>
          </div>
        </div>
        <div className="lower-div">
          <div className="card-container">
            {events.map(event => (
              <div className="card" style={{ backgroundImage: `url(${event.card_image})` }} key={event.id}>
                <div className='card-content'>
                  <h1>{event.event_name}</h1>
                  {/* Use the HTMLComponent to render HTML content */}

                  <HTMLComponent htmlContent={event.card_description} />
                  

                </div>
                <div className='card-footer'>
                <p >Apply Now   <ImArrowUpRight2 style={{ marginleft: '10px'}} /></p>
                  
                </div>


              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
