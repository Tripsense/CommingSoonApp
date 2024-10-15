"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    google: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    initMap: () => void;
  }
}

const GoLive = () => {
  const places = [
    {
      name: "Woodland Showroom(Company Outlet)",
      type: "shoe",
      offer: "Flat 10% off",
      latitude: 12.45270536,
      longitude: 75.96595256,
    },
    {
      name: "Madani Shoe Bazaar",
      type: "shoe",
      offer: "Flat 30% off",
      latitude: 12.29839435,
      longitude: 75.87470166,
    },
    {
      name: "Sunshinebaby",
      type: "baby clothes",
      offer: "Flat 25% off above 5000",
      latitude: 12.42589231,
      longitude: 75.73415246,
    },
    {
      name: "Coorg Fancy Store",
      type: "clothes",
      offer: "Flat 30% off",
      latitude: 12.42513793,
      longitude: 75.73451724,
    },
    {
      name: "Pixo Mart",
      type: "shoe",
      offer: "Flat 30% off",
      latitude: 12.42369203,
      longitude: 75.73434558,
    },
    {
      name: "XIAOMI MI STORE",
      type: "mobile",
      offer: "Flat 25% off above 5000",
      latitude: 12.42370278,
      longitude: 75.73554525,
    },
    {
      name: "Bata Shoe Store",
      type: "shoe",
      offer: "Flat 30% off",
      latitude: 12.42056142,
      longitude: 75.73996816,
    },
    {
      name: "Reliance Trends Footwear",
      type: "shoe",
      offer: "Flat 25% off above 5000",
      latitude: 12.42280275,
      longitude: 75.74017699,
    },
    {
      name: "TRENDS",
      type: "clothes",
      offer: "Flat 30% off",
      latitude: 12.42284713,
      longitude: 75.73992933,
    },
    {
      name: "Woodland Aero Club",
      type: "shoe",
      offer: "Flat 30% off",
      latitude: 12.42286879,
      longitude: 75.73989745,
    },
    {
      name: "Options",
      type: "clothes",
      offer: "Flat 25% off above 5000",
      latitude: 12.4241327,
      longitude: 75.7383437,
    },
    {
      name: "Sports World Madikeri",
      type: "sportswear",
      offer: "20% off upto Rs. 650",
      latitude: 12.4245914,
      longitude: 75.7378121,
    },
    {
      name: "SPORTS TOPPER",
      type: "sportswear",
      offer: "20% off upto Rs. 650",
      latitude: 12.42472803,
      longitude: 75.73970988,
    },
    {
      name: "Bata",
      type: "shoe",
      offer: "Flat 25% off above 5000",
      latitude: 12.42385912,
      longitude: 75.73850127,
    },
    {
      name: "Shama Boot House",
      type: "shoe",
      offer: "Flat 40% discount above 2000",
      latitude: 12.42322977,
      longitude: 75.73885092,
    },
    {
      name: "Usha Jeweller",
      type: "jewelry",
      offer: "Flat 30% off",
      latitude: 12.42327489,
      longitude: 75.73554786,
    },
    {
      name: "Kodava Tradition",
      type: "jewelry",
      offer: "Flat 25% off above 5000",
      latitude: 12.422751,
      longitude: 75.73653491,
    },
    {
      name: "Sky Gold & Diamond",
      type: "jewelry",
      offer: "50% off on next shopping",
      latitude: 12.42542358,
      longitude: 75.73804734,
    },
    {
      name: "Sri Devi Jewellers",
      type: "jewelry",
      offer: "10% discount on every purchase",
      latitude: 12.42577555,
      longitude: 75.73792258,
    },
    {
      name: "Coorg Traditional Jewelry Works",
      type: "jewelry",
      offer: "Flat 20% off",
      latitude: 12.19868248,
      longitude: 75.80433029,
    },
  ];

  useEffect(() => {
    let activeInfoWindow: any = null; // eslint-disable-line @typescript-eslint/no-explicit-any

    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 12.431331552266553, lng: 75.73511562466364 }, // Center of the map
        zoom: 16,
      });

      // Add a red marker at the center of the map
      new window.google.maps.Marker({
        position: { lat: 12.431331552266553, lng: 75.73511562466364 },
        map: map,
        title: "Center Marker",
      });

      const customIcon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: "white",
        fillOpacity: 1,
        strokeColor: "black",
        strokeWeight: 5,
        scale: 8,
      };

      // Add markers and InfoWindow to the map
      places.forEach((place) => {
        const marker = new window.google.maps.Marker({
          position: { lat: place.latitude, lng: place.longitude },
          map: map,
          icon: customIcon,
          title: `${place.name} - ${place.offer}`,
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div><strong>${place.name}</strong><br>${place.offer}</div>`,
        });

        // Open InfoWindow on marker click
        marker.addListener("click", () => {
          if (activeInfoWindow) {
            activeInfoWindow.close();
          }
          infoWindow.open(map, marker);
          activeInfoWindow = infoWindow;
        });
      });

      // Close InfoWindow when clicking on the map (outside markers)
      map.addListener("click", () => {
        if (activeInfoWindow) {
          activeInfoWindow.close();
          activeInfoWindow = null;
        }
      });
    };

    const loadScript = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBoqSu9yPz4ARoAHj4kDy98smDZKsQGQgo&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        window.initMap = initMap;
      } else {
        initMap();
      }
    };

    loadScript();
  }, []);

  return (
    <div>
      <div
        id="map"
        className="absolute inset-0 left-0 w-full h-full" // Ensures no space is left on the sides
        style={{ margin: 0, padding: 0 }}
      ></div>
      <div
        className="absolute top-4 left-1/2 transform -translate-x-1/2  bg-opacity-100 shadow-md rounded-lg p-4 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 text-center z-10"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,56,102,1) 0%, rgba(4,2,1,1) 100%)",
        }}
      >
        <h2 className="text-lg font-semibold text-white">Coorg Fancy Store</h2>
        <p className="text-sm text-white mb-3">
          Flat 30% OFF &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.2 KM
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 min
          <br />
        </p>
        <p className="text-sm text-white">
          Click on Black dots to explore more Offers
        </p>
      </div>
    </div>
  );
};

export default GoLive;
