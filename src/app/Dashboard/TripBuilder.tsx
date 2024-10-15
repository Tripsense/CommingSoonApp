// "use client";

// import { useState } from "react";

// const TripBuilder = () => {
//   const myLocation = { lat: 12.431226779293965, lng: 75.73507270932168 };

//   const touristPlaces = [
//     {
//       name: "Mandalpatti Peak",
//       review:
//         "The views are absolutely breathtaking, but the journey is an adventure in itself! Brace for a bumpy off-road ride with steep jeep costs (nearly rs. 2000 per jeep). You can also reach the peak through trekking or bike. An additional Rs. 50 is taken as entry fee. Once you reach the top, it's pure magic! The view is very foggy if you go early morning in winters.",
//       latitude: 12.54558659,
//       longitude: 75.701137,
//       openTime: "6:00",
//       closeTime: "18:00",
//       stayTime: 180,
//       avgSpend: 2050,
//       distance: "19.7 KM",
//       bestTime: "Late morning in winters, early morning in summers",
//     },
//     {
//       name: "Abbey Falls",
//       review:
//         "Abbey Falls offers a powerful and scenic waterfall experience, but be ready for a bit of effort to reach it. The 300 steps may challenge some, but the lush green surroundings and roaring waters are worth it. While it can get crowded, early mornings offer a quieter, more serene experience. Don’t expect a close-up view—safety barriers are in place, and the suspension bridge is no more. Perfect for nature lovers, but the real magic is during monsoon!",
//       latitude: 12.45851392,
//       longitude: 75.71952632,
//       openTime: "9:00",
//       closeTime: "17:00",
//       stayTime: 120,
//       avgSpend: 50,
//       distance: "6.3 KM",
//       bestTime: "Monsoon is the best time, early in the day for less crowd.",
//     },
//     {
//       name: "Talakaveri Temple",
//       review:
//         "The temple at the source of the Cauvery is peaceful, but if you're expecting a grand natural spectacle, prepare to be disappointed. There's no flowing spring—just a small, stagnated pool said to be the river's origin. The lack of clear information, odd temple hours, and unfriendly staff can make the visit frustrating. However, the hilltop views are nice, and the temple offers a serene atmosphere, especially during quieter times. It's worth a stop if you're seeking a spiritual experience, but don’t expect much in terms of a natural wonder. Half pants are not allowed.",
//       latitude: 12.38570629,
//       longitude: 75.49116862,
//       openTime: "6:00",
//       closeTime: "18:00",
//       stayTime: 90,
//       avgSpend: 10,
//       distance: "45.7 KM",
//       bestTime: "Weekends are crowded in the afternoon, monsoon offers a good view.",
//     },
//     {
//       name: "Omkareshwara Temple",
//       review:
//         "Omkareshwara Temple offers a mix of Hindu and Islamic architecture, which is interesting, but the experience can feel a bit rigid. The strict dress code, which bans jeans, may catch visitors off guard, and no photography is allowed inside. While the temple is peaceful, the surroundings are not particularly scenic, and the upkeep isn't great. The prasadam quality has been inconsistent, disappointing some visitors. If you're expecting a relaxed tourist spot, this may not be for you—it’s more suited for those seeking a traditional temple experience. Worth visiting if you're already in Madikeri, but not a highlight.",
//       latitude: 12.42077204,
//       longitude: 75.74127024,
//       openTime: "6:30",
//       closeTime: "20:00",
//       stayTime: 60,
//       avgSpend: 10,
//       distance: "2.7 KM",
//       bestTime: "closed in the afternoon (12:00 to 17:00)",
//     },
//     {
//       name: "Raja's Seat Garden",
//       review:
//         "Raja's Seat has beautiful views, but the crowds can dampen the experience, especially during busy times. The garden is well-maintained, but some areas feel unfinished, with a lack of clear signage. While the mist and sunsets are stunning when you catch them, sunny days may feel a bit ordinary. The adventure activities are fun but can be inconsistent. It’s a nice spot for a short visit, especially in the early morning or evening, but not a must-see if you’re looking for complete peace or excitement.",
//       latitude: 12.41481886,
//       longitude: 75.73712285,
//       openTime: "6:00",
//       closeTime: "20:00",
//       stayTime: 120,
//       avgSpend: 70,
//       distance: "2.6 KM",
//       bestTime: "sunrise and sunset times are appreciated for pictures and beauty. Not good for hot days",
//     },
//     {
//       name: "Madikeri Fort",
//       review: "Madikeri Fort offers some scenic views and historical charm, but be prepared for a bit of disappointment. Due to ongoing renovations, entry inside the fort has been restricted for over a year, leaving visitors to walk around the periphery. The once-unique architecture is being modified, and some feel it has lost its heritage appeal. While the museum and Ganesh temple add a touch of history, the overall experience might feel underwhelming, especially for those expecting more from a 17th-century fort. Worth a quick visit if you're already in Madikeri, but not a must-see.",
//       latitude: 12.42134309,
//       longitude: 75.73870537,
//       openTime: "10:00",
//       closeTime: "17:30",
//       stayTime: 60,
//       avgSpend: 10,
//       distance: "2.2 KM",
//       bestTime: "closed on Monday"
//     },
//     {
//       name: "Namdroling Monastery Golden Temple",
//       review: "Namdroling Monastery offers a beautiful, peaceful experience, but there are some major downsides. The temple itself is stunning, with golden Buddha statues and intricate murals, but access is limited, and the lack of basic facilities, like clean washrooms, is frustrating. Be cautious when shopping here—some visitors have reported being scammed by shopkeepers, so double-check purchases. It’s crowded on weekends, making it difficult to fully enjoy the serene atmosphere. If you visit on a quieter day, you can find some calm, but overall, it's a place that could offer much more if better maintained and managed.",
//       latitude: 12.43335155,
//       longitude: 75.96648002,
//       openTime: "7:00",
//       closeTime: "18:00",
//       stayTime: 60,
//       avgSpend: 50,
//       distance: "35.3 KM",
//       bestTime: "forenoon time is highly preferred due to less crowd"
//     },
//     {
//       name: "Nagarahole Tiger Reserve",
//       review: "Nagarahole National Park offers a peaceful and beautiful setting, but don’t come expecting guaranteed tiger sightings—deer and the occasional elephant are more common. The park is well-maintained, with lush green forests and tranquil rivers, making it ideal for nature lovers. However, the organization can be frustrating; online bookings for jeep safaris are essential and often sell out, and there are no digital payments. Be prepared to wait in line for the bus safari, which is a cheaper alternative. Overall, a great spot for wildlife enthusiasts, but manage expectations regarding what you'll see.",
//       latitude: 12.07369888,
//       longitude: 76.1510815,
//       openTime: "6:30",
//       closeTime: "5:30",
//       stayTime: 180,
//       avgSpend: 700,
//       distance: "69 KM",
//       bestTime: "oct-may, do advanced booking for jeeps, closed in 9:00 to 15:00"
//     },
//     {
//       name: "Mallalli Waterfalls",
//       review: "Mallalli Falls is a breathtaking sight, especially during the monsoon, but be ready for a challenge. The 700+ steps to get close to the waterfall make for a strenuous trek, and you won’t be able to touch the water—just admire from a distance. The misty atmosphere, lush surroundings, and dramatic 60-meter drop make the effort worthwhile, though some may find the climb taxing. The area is well-maintained, but basic amenities like restrooms need improvement. It's a beautiful destination, but plan ahead and visit on a weekday to avoid crowds.",
//       latitude: 12.6808314,
//       longitude: 75.72364554,
//       openTime: "8:30",
//       closeTime: "17:00",
//       stayTime: 180,
//       avgSpend: 100,
//       distance: "53.3 KM",
//       bestTime: "june-sept best time, weekdays are less crowded"
//     },
//     {
//       name: "Pushpagiri Wildlife Sanctuary",
//       review: "Pushpagiri Wildlife Sanctuary, known for its scenic beauty and tough treks, offers a true adventure for nature lovers. The Kumaraparvatha trek is one of the toughest in South India, with a challenging mix of dense forests, grasslands, and rocky climbs. The trek rewards you with breathtaking views and a sense of peace, as the area is less crowded. However, be prepared for leeches, especially in the morning, and carry salt to deal with them. While the sanctuary is well-maintained, some visitors have reported issues with forest guards asking for extra money. Overall, it's a rewarding trek but not for the faint-hearted!",
//       latitude: 12.66300228,
//       longitude: 75.68714262,
//       openTime: "6:00",
//       closeTime: "19:00",
//       stayTime: 300,
//       avgSpend: 500,
//       distance: "57.8 KM",
//       bestTime: "nov-march is favourable for the trekking"
//     }
//   ];

//   // Split places for a 3-day itinerary (for simplicity, divide evenly)
//   const itineraryDays = [
//     touristPlaces.slice(0, 3), // Day 1
//     touristPlaces.slice(3, 7), // Day 2
//     touristPlaces.slice(7, 10), // Day 3
//   ];

//   const [selectedDay, setSelectedDay] = useState(0);

//   return (
//     <div className="p-4">
//       {/* Google Maps Section */}
//       <div className="relative w-full h-64 mb-6">
//         <iframe
//           width="100%"
//           height="100%"
//           frameBorder="0"
//           style={{ border: 0 }}
//           referrerPolicy="no-referrer-when-downgrade"
//           src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBoqSu9yPz4ARoAHj4kDy98smDZKsQGQgo&q=${myLocation.lat},${myLocation.lng}&zoom=14`}
//           allowFullScreen
//         ></iframe>
       
//       </div>

//       {/* Day Switcher */}
//       <div className="flex justify-center mb-4 space-x-4">
//         <button
//           onClick={() => setSelectedDay(0)}
//           className={`px-4 py-2 rounded ${selectedDay === 0 ? "bg-orange-500 text-white" : "bg-gray-200"}`}
//         >
//           Day 1
//         </button>
//         <button
//           onClick={() => setSelectedDay(1)}
//           className={`px-4 py-2 rounded ${selectedDay === 1 ? "bg-orange-500 text-white" : "bg-gray-200"}`}
//         >
//           Day 2
//         </button>
//         <button
//           onClick={() => setSelectedDay(2)}
//           className={`px-4 py-2 rounded ${selectedDay === 2 ? "bg-orange-500 text-white" : "bg-gray-200"}`}
//         >
//           Day 3
//         </button>
//       </div>

//       {/* Itinerary Section */}
//       <div className="space-y-8">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Day {selectedDay + 1}</h2>
//           <ul className="space-y-4">
//           {itineraryDays[selectedDay].map((place) => (
//               <li
//                 key={place.name}
//                 className="relative p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md"
//               >
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-2">{place.name}</h3>
//                 <p className="text-gray-700 mb-4">{place.review}</p>
//                 <div className="text-sm text-gray-500 mb-2">
//                   <span>Open: {place.openTime}</span> | <span>Close: {place.closeTime}</span> |{" "}
//                   <span>Stay: {place.stayTime} mins</span>
//                 </div>
//                 <p className="text-sm text-gray-500 mb-6">Best Time to Visit: {place.bestTime}</p>
//                 <div className="absolute bottom-4 right-4 text-orange-500 font-bold text-lg">
//                   {place.distance}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripBuilder;






"use client";

import { useState, useEffect, useRef } from "react";

const TripBuilder = () => {
  const myLocation = { lat: 12.431226779293965, lng: 75.73507270932168 };

  const touristPlaces = [
    {
      name: "Mandalpatti Peak",
      review:
        "The views are absolutely breathtaking, but the journey is an adventure in itself! Brace for a bumpy off-road ride with steep jeep costs (nearly rs. 2000 per jeep). You can also reach the peak through trekking or bike. An additional Rs. 50 is taken as entry fee. Once you reach the top, it's pure magic! The view is very foggy if you go early morning in winters.",
      latitude: 12.54558659,
      longitude: 75.701137,
      openTime: "6:00",
      closeTime: "18:00",
      stayTime: 180,
      avgSpend: 2050,
      distance: "19.7 KM",
      bestTime: "Late morning in winters, early morning in summers",
    },
    {
      name: "Omkareshwara Temple",
      review:
        "Omkareshwara Temple offers a mix of Hindu and Islamic architecture, which is interesting, but the experience can feel a bit rigid. The strict dress code, which bans jeans, may catch visitors off guard, and no photography is allowed inside. While the temple is peaceful, the surroundings are not particularly scenic, and the upkeep isn't great. The prasadam quality has been inconsistent, disappointing some visitors. If you're expecting a relaxed tourist spot, this may not be for you—it’s more suited for those seeking a traditional temple experience. Worth visiting if you're already in Madikeri, but not a highlight.",
      latitude: 12.42077204,
      longitude: 75.74127024,
      openTime: "6:30",
      closeTime: "20:00",
      stayTime: 60,
      avgSpend: 10,
      distance: "2.7 KM",
      bestTime: "closed in the afternoon (12:00 to 17:00)",
    },
    {
      name: "Raja's Seat Garden",
      review:
        "Raja's Seat has beautiful views, but the crowds can dampen the experience, especially during busy times. The garden is well-maintained, but some areas feel unfinished, with a lack of clear signage. While the mist and sunsets are stunning when you catch them, sunny days may feel a bit ordinary. The adventure activities are fun but can be inconsistent. It’s a nice spot for a short visit, especially in the early morning or evening, but not a must-see if you’re looking for complete peace or excitement.",
      latitude: 12.41481886,
      longitude: 75.73712285,
      openTime: "6:00",
      closeTime: "20:00",
      stayTime: 120,
      avgSpend: 70,
      distance: "2.6 KM",
      bestTime: "sunrise and sunset times are appreciated for pictures and beauty. Not good for hot days",
    },
    {
      name: "Madikeri Fort",
      review: "Madikeri Fort offers some scenic views and historical charm, but be prepared for a bit of disappointment. Due to ongoing renovations, entry inside the fort has been restricted for over a year, leaving visitors to walk around the periphery. The once-unique architecture is being modified, and some feel it has lost its heritage appeal. While the museum and Ganesh temple add a touch of history, the overall experience might feel underwhelming, especially for those expecting more from a 17th-century fort. Worth a quick visit if you're already in Madikeri, but not a must-see.",
      latitude: 12.42134309,
      longitude: 75.73870537,
      openTime: "10:00",
      closeTime: "17:30",
      stayTime: 60,
      avgSpend: 10,
      distance: "2.2 KM",
      bestTime: "closed on Monday"
    },
    {
      name: "Abbey Falls",
      review:
        "Abbey Falls offers a powerful and scenic waterfall experience, but be ready for a bit of effort to reach it. The 300 steps may challenge some, but the lush green surroundings and roaring waters are worth it. While it can get crowded, early mornings offer a quieter, more serene experience. Don’t expect a close-up view—safety barriers are in place, and the suspension bridge is no more. Perfect for nature lovers, but the real magic is during monsoon!",
      latitude: 12.45851392,
      longitude: 75.71952632,
      openTime: "9:00",
      closeTime: "17:00",
      stayTime: 120,
      avgSpend: 50,
      distance: "6.3 KM",
      bestTime: "Monsoon is the best time, early in the day for less crowd.",
    },
    {
      name: "Talakaveri Temple",
      review:
        "The temple at the source of the Cauvery is peaceful, but if you're expecting a grand natural spectacle, prepare to be disappointed. There's no flowing spring—just a small, stagnated pool said to be the river's origin. The lack of clear information, odd temple hours, and unfriendly staff can make the visit frustrating. However, the hilltop views are nice, and the temple offers a serene atmosphere, especially during quieter times. It's worth a stop if you're seeking a spiritual experience, but don’t expect much in terms of a natural wonder. Half pants are not allowed.",
      latitude: 12.38570629,
      longitude: 75.49116862,
      openTime: "6:00",
      closeTime: "18:00",
      stayTime: 90,
      avgSpend: 10,
      distance: "45.7 KM",
      bestTime: "Weekends are crowded in the afternoon, monsoon offers a good view.",
    },
    {
      name: "Namdroling Monastery Golden Temple",
      review: "Namdroling Monastery offers a beautiful, peaceful experience, but there are some major downsides. The temple itself is stunning, with golden Buddha statues and intricate murals, but access is limited, and the lack of basic facilities, like clean washrooms, is frustrating. Be cautious when shopping here—some visitors have reported being scammed by shopkeepers, so double-check purchases. It’s crowded on weekends, making it difficult to fully enjoy the serene atmosphere. If you visit on a quieter day, you can find some calm, but overall, it's a place that could offer much more if better maintained and managed.",
      latitude: 12.43335155,
      longitude: 75.96648002,
      openTime: "7:00",
      closeTime: "18:00",
      stayTime: 60,
      avgSpend: 50,
      distance: "35.3 KM",
      bestTime: "forenoon time is highly preferred due to less crowd"
    },
    {
      name: "Nagarahole Tiger Reserve",
      review: "Nagarahole National Park offers a peaceful and beautiful setting, but don’t come expecting guaranteed tiger sightings—deer and the occasional elephant are more common. The park is well-maintained, with lush green forests and tranquil rivers, making it ideal for nature lovers. However, the organization can be frustrating; online bookings for jeep safaris are essential and often sell out, and there are no digital payments. Be prepared to wait in line for the bus safari, which is a cheaper alternative. Overall, a great spot for wildlife enthusiasts, but manage expectations regarding what you'll see.",
      latitude: 12.07369888,
      longitude: 76.1510815,
      openTime: "6:30",
      closeTime: "5:30",
      stayTime: 180,
      avgSpend: 700,
      distance: "69 KM",
      bestTime: "oct-may, do advanced booking for jeeps, closed in 9:00 to 15:00"
    },
    {
      name: "Mallalli Waterfalls",
      review: "Mallalli Falls is a breathtaking sight, especially during the monsoon, but be ready for a challenge. The 700+ steps to get close to the waterfall make for a strenuous trek, and you won’t be able to touch the water—just admire from a distance. The misty atmosphere, lush surroundings, and dramatic 60-meter drop make the effort worthwhile, though some may find the climb taxing. The area is well-maintained, but basic amenities like restrooms need improvement. It's a beautiful destination, but plan ahead and visit on a weekday to avoid crowds.",
      latitude: 12.6808314,
      longitude: 75.72364554,
      openTime: "8:30",
      closeTime: "17:00",
      stayTime: 180,
      avgSpend: 100,
      distance: "53.3 KM",
      bestTime: "june-sept best time, weekdays are less crowded"
    },
    {
      name: "Pushpagiri Wildlife Sanctuary",
      review: "Pushpagiri Wildlife Sanctuary, known for its scenic beauty and tough treks, offers a true adventure for nature lovers. The Kumaraparvatha trek is one of the toughest in South India, with a challenging mix of dense forests, grasslands, and rocky climbs. The trek rewards you with breathtaking views and a sense of peace, as the area is less crowded. However, be prepared for leeches, especially in the morning, and carry salt to deal with them. While the sanctuary is well-maintained, some visitors have reported issues with forest guards asking for extra money. Overall, it's a rewarding trek but not for the faint-hearted!",
      latitude: 12.66300228,
      longitude: 75.68714262,
      openTime: "6:00",
      closeTime: "19:00",
      stayTime: 300,
      avgSpend: 500,
      distance: "57.8 KM",
      bestTime: "nov-march is favourable for the trekking"
    }
    // Add more places for the example
  ];

  const itineraryDays = [
    touristPlaces.slice(0, 4), // Day 1
    touristPlaces.slice(4, 7), // Day 2
    touristPlaces.slice(7, 10), // Day 3  
  ];

  const [selectedDay, setSelectedDay] = useState(0);
  const mapRef = useRef(null);

  const loadGoogleMapsScript = (): Promise<void> => {
    return new Promise((resolve) => {
      if (window.google && window.google.maps) {
        resolve(); // Maps already loaded
      } else {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBoqSu9yPz4ARoAHj4kDy98smDZKsQGQgo`;
        script.async = true;
        script.onload = () => resolve();
        document.head.appendChild(script);
      }
    });
  };

  useEffect(() => {
    loadGoogleMapsScript().then(() => {
      if (mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: myLocation,
          zoom: 8,
        });

        // Add a marker for my current location
        new window.google.maps.Marker({
          position: myLocation,
          map,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: "#FF0000",
            fillOpacity: 1,
            strokeColor: "white",
            strokeWeight: 2,
          },
          title: "My Location",
        });

        // Add markers for the places in the selected day
        itineraryDays[selectedDay].forEach((place, index) => {
          new window.google.maps.Marker({
            position: { lat: place.latitude, lng: place.longitude },
            map,
            label: {
              text: `${index + 1}`,
              color: "white",
              fontSize: "14px",
            },
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 12,
              fillColor: "black",
              fillOpacity: 1,
              strokeWeight: 2,
            },
            title: place.name,
          });
        });
      }
    });
  }, [selectedDay]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Google Maps Section */}
      <div className="relative w-full h-64 mb-6 shadow-lg rounded-lg overflow-hidden">
        <div ref={mapRef} className="w-full h-full" />
      </div>

      {/* Day Switcher */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setSelectedDay(0)}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            selectedDay === 0 ? "bg-orange-500 text-white shadow-lg" : "bg-gray-200 text-gray-700"
          } hover:bg-orange-600`}
        >
          Day 1
        </button>
        <button
          onClick={() => setSelectedDay(1)}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            selectedDay === 1 ? "bg-orange-500 text-white shadow-lg" : "bg-gray-200 text-gray-700"
          } hover:bg-orange-600`}
        >
          Day 2
        </button>
        <button
          onClick={() => setSelectedDay(2)}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            selectedDay === 2 ? "bg-orange-500 text-white shadow-lg" : "bg-gray-200 text-gray-700"
          } hover:bg-orange-600`}
        >
          Day 3
        </button>
      </div>

      {/* Itinerary Section */}
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Day {selectedDay + 1}</h2>
          <ul className="space-y-6">
            {itineraryDays[selectedDay].map((place, index) => (
              <li
                key={place.name}
                className="relative p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {index + 1}. {place.name}
                </h3>
                <p className="text-gray-700 mb-4">{place.review}</p>
                <div className="text-sm text-gray-500 mb-2">
                  <span>Open: {place.openTime}</span> | <span>Close: {place.closeTime}</span> |{" "}
                  <span>Stay: {place.stayTime} mins</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">Best Time to Visit: {place.bestTime}</p>
                <div className="absolute bottom-4 right-4 text-orange-500 font-bold text-lg">
                  {place.distance}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TripBuilder;
