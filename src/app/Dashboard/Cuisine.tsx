// import { useState } from "react";


// const CuisinePage = () => {
//   // State to toggle between Cuisine and Restaurants
//   const [selectedTab, setSelectedTab] = useState("Cuisine");

//   // Function to render content based on the selected tab
//   const renderContent = () => {
//     if (selectedTab === "Cuisine") {
//       return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Cuisine items */}
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
//             <img src="/pandi_curry.jpg" alt="Pandi Curry" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xl font-bold text-gray-800">Pandi Curry</h3>
//                 <img src="/non_veg_symbol.png" alt="Non Veg" className="w-5 h-5" />
//               </div>
//               <p className="text-gray-600">Spicy pork curry with Coorg spices. Rich and bold flavors with a tangy kick.</p>
//               <span className="inline-block mt-2 px-3 py-1 bg-orange-200 text-orange-800 font-semibold rounded-full shadow-lg text-sm">
//                 ₹250
//               </span>
//             </div>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
//             <img src="/akki_rotti.jpg" alt="Akki Rotti" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xl font-bold text-gray-800">Akki Rotti</h3>
//                 <img src="/veg_symbol.png" alt="Veg" className="w-5 h-5" />
//               </div>
//               <p className="text-gray-600">Rice flatbread served with coconut chutney. Light and fluffy, with an earthy taste.</p>
//               <span className="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-lg text-sm">
//                 ₹100
//               </span>
//             </div>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
//             <img src="/koli_curry.jpg" alt="Koli Curry" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xl font-bold text-gray-800">Koli Curry</h3>
//                 <img src="/non_veg_symbol.png" alt="Non Veg" className="w-5 h-5" />
//               </div>
//               <p className="text-gray-600">Chicken in a thick, spicy gravy with roasted spices and coconut. Smoky and bold.</p>
//               <span className="inline-block mt-2 px-3 py-1 bg-orange-200 text-orange-800 font-semibold rounded-full shadow-lg text-sm">
//                 ₹200
//               </span>
//             </div>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
//             <img src="/bamboo_shoot.jpg" alt="Bamboo Shoot Curry" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xl font-bold text-gray-800">Bamboo Shoot Curry</h3>
//                 <img src="/veg_symbol.png" alt="Veg" className="w-5 h-5" />
//               </div>
//               <p className="text-gray-600">Tender bamboo shoots in coconut gravy. Mild, crunchy with a hint of sweetness.</p>
//               <span className="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-lg text-sm">
//                 ₹150
//               </span>
//             </div>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
//             <img src="/kadambuttu.jpg" alt="Kadambuttu" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xl font-bold text-gray-800">Kadambuttu</h3>
//                 <img src="/veg_symbol.png" alt="Veg" className="w-5 h-5" />
//               </div>
//               <p className="text-gray-600">Soft rice dumplings, traditionally served with curry. Chewy with a neutral taste.</p>
//               <span className="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-lg text-sm">
//                 ₹120
//               </span>
//             </div>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
//             <img src="/noolputtu.jpg" alt="Noolputtu" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xl font-bold text-gray-800">Noolputtu</h3>
//                 <img src="/veg_symbol.png" alt="Veg" className="w-5 h-5" />
//               </div>
//               <p className="text-gray-600">Delicate rice noodles served with coconut milk or curry. Light and silky smooth.</p>
//               <span className="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-lg text-sm">
//                 ₹130
//               </span>
//             </div>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
//             <img src="/erachi_curry.jpg" alt="Erachi Curry" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xl font-bold text-gray-800">Erachi Curry</h3>
//                 <img src="/non_veg_symbol.png" alt="Non Veg" className="w-5 h-5" />
//               </div>
//               <p className="text-gray-600">Beef cooked with fragrant local spices. Deep, smoky flavor with a spicy aftertaste.</p>
//               <span className="inline-block mt-2 px-3 py-1 bg-orange-200 text-orange-800 font-semibold rounded-full shadow-lg text-sm">
//                 ₹220
//               </span>
//             </div>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
//             <img src="/kuleputtu.jpg" alt="Kuleputtu" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xl font-bold text-gray-800">Kuleputtu</h3>
//                 <img src="/veg_symbol.png" alt="Veg" className="w-5 h-5" />
//               </div>
//               <p className="text-gray-600">Steamed rice cake with coconut layers. Mildly sweet and soft in texture.</p>
//               <span className="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-lg text-sm">
//                 ₹140
//               </span>
//             </div>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
//             <img src="/meenu_fry.jpg" alt="Meenu Fry" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xl font-bold text-gray-800">Meenu Fry</h3>
//                 <img src="/non_veg_symbol.png" alt="Non Veg" className="w-5 h-5" />
//               </div>
//               <p className="text-gray-600">Crispy fried fish coated with spices. Crispy on the outside, tender and spicy inside.</p>
//               <span className="inline-block mt-2 px-3 py-1 bg-orange-200 text-orange-800 font-semibold rounded-full shadow-lg text-sm">
//                 ₹180
//               </span>
//             </div>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
//             <img src="/thambuttu.jpg" alt="Thambuttu" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xl font-bold text-gray-800">Thambuttu</h3>
//                 <img src="/veg_symbol.png" alt="Veg" className="w-5 h-5" />
//               </div>
//               <p className="text-gray-600">A traditional sweet made from bananas, roasted rice flour, and jaggery. Nutty and sweet.</p>
//               <span className="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-lg text-sm">
//                 ₹100
//               </span>
//             </div>
//           </div>
//         </div>
//       );
//     } else if (selectedTab === "Restaurants") {
//       return (
//         <div className="p-6">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Best Restaurants in Coorg</h2>
//           {/* Placeholder for restaurant details */}
//           <p className="text-gray-600">Restaurant details will go here...</p>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Toggle Switch */}
//       <div className="flex justify-center mb-6">
//         <button
//           onClick={() => setSelectedTab("Cuisine")}
//           className={`px-4 py-2 mx-2 rounded-lg font-semibold transition-all duration-300 ${
//             selectedTab === "Cuisine" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           Cuisine
//         </button>
//         <button
//           onClick={() => setSelectedTab("Restaurants")}
//           className={`px-4 py-2 mx-2 rounded-lg font-semibold transition-all duration-300 ${
//             selectedTab === "Restaurants" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           Restaurants
//         </button>
//       </div>

//       {/* Render Content based on selected tab */}
//       {renderContent()}
//     </div>
//   );
// };

// export default CuisinePage;




















"use client";

import { useState } from "react";

const CuisinePage = () => {
  const [selectedTab, setSelectedTab] = useState("Cuisine");
  const [showModal, setShowModal] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  // Sample restaurant data

  type Restaurant = {
    name: string;
    review: string;
    price: string;
    img: string;
    openTime: string;
    closeTime: string;
    latitude: number;
    longitude: number;
    distance: string;
  };

  const restaurantData: Restaurant[] = [
    {
      name: "Coorg Gate Family Restaurant",
      review: "Offers great views and decent seafood. Vegetarians should be cautious due to mix-ups with non-veg items.",
      price: "₹400",
      img: "/restaurants/coorg_gate.jpg",
      openTime: "7:00",
      closeTime: "22:30",
      latitude: 12.14483417,
      longitude: 75.79513492,
      distance: "40.6 KM"
    },
    {
      name: "Big Cup Cafe",
      review: "A cozy spot with excellent coffee from their own plantations. Brews include the rare Kopi Luwak.",
      price: "₹400-600",
      img: "/restaurants/big_cup_cafe.jpg",
      openTime: "9:30",
      closeTime: "23:00",
      latitude: 12.43113208,
      longitude: 75.75356974,
      distance: "3.6 KM"
    },
    {
      name: "Barbeque Bay Restaurant",
      review: "Good food with a nice ambience, but pricey—around ₹2000 per person for the non-veg buffet.",
      price: "₹2000+",
      img: "/restaurants/barbeque_bay.jpg",
      openTime: "7:00",
      closeTime: "22:30",
      latitude: 12.44182201,
      longitude: 75.71625272,
      distance: "3.1 KM"
    },
    {
      name: "KARAVALI Traditional Food",
      review: "A cozy, family-run spot serving delicious home-cooked Coorg dishes with warm hospitality.",
      price: "₹200",
      img: "/restaurants/karavali.jpg",
      openTime: "6:30",
      closeTime: "21:30",
      latitude: 12.4395836,
      longitude: 75.71892293,
      distance: "2.7 KM"
    },
    {
      name: "Coffee Blossom Restaurant",
      review: "Nice ambience and friendly staff, but pricey with occasional hygiene concerns.",
      price: "₹1000+",
      img: "/restaurants/coffee_blossom.jpg",
      openTime: "7:30",
      closeTime: "22:30",
      latitude: 12.44153926,
      longitude: 75.71659549,
      distance: "3.0 KM"
    },
    {
      name: "Kimberly Coorg",
      review: "Offers a cozy vibe with good pizza and coffee, but other dishes are underwhelming.",
      price: "₹200-400",
      img: "/restaurants/kimberly_coorg.jpg",
      openTime: "7:30",
      closeTime: "21:30",
      latitude: 12.41560909,
      longitude: 75.73757452,
      distance: "2.6 KM"
    },
    {
      name: "BELLI’S Restaurant",
      review: "Tasty Coorg-style dishes, especially Dynamite Chicken, in a lovely colonial setting.",
      price: "₹400",
      img: "/restaurants/bellis_restaurant.jpg",
      openTime: "12:00",
      closeTime: "22:00",
      latitude: 12.41645051,
      longitude: 75.7457724,
      distance: "3.3 KM"
    },
    {
      name: "Hotel Udupi Garden",
      review: "Offers delicious vegetarian South Indian dishes like masala dosa and fried rice.",
      price: "₹200",
      img: "/restaurants/udupi_garden.jpg",
      openTime: "7:00",
      closeTime: "22:00",
      latitude: 12.41995768,
      longitude: 75.74005095,
      distance: "2.4 KM"
    },
    {
      name: "Popular Guruprasad Restaurant",
      review: "Affordable dishes, but multiple reviews highlight poor hygiene and undercooked food.",
      price: "₹200",
      img: "/restaurants/guruprasad_restaurant.jpg",
      openTime: "6:30",
      closeTime: "21:30",
      latitude: 12.42347021,
      longitude: 75.73873254,
      distance: "2.0 KM"

    },
    {
      name: "Zaffron by Le Coorg",
      review: "Generous portions and standout dishes like chicken biryani and butter chicken.",
      price: "₹400-600",
      img: "/restaurants/zaffron.jpg",
      openTime: "9:00",
      closeTime: "22:00",
      latitude: 12.42010667,
      longitude: 75.73465788,
      distance: "2.0 KM"
    },
  ];

  const openModal = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRestaurant(null);
  };

  const renderRestaurantList = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurantData.map((restaurant) => (
          <div
            key={restaurant.name}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => openModal(restaurant)}
          >
            <img src={restaurant.img} alt={restaurant.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
                <span className="bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full text-sm font-bold">
                  {restaurant.price}
                </span>
              </div>
              <p className="text-gray-600">{restaurant.review.substring(0, 80)}...</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderCuisineList = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          <img src="/pandi_curry.jpg" alt="Pandi Curry" className="w-full h-48 object-cover" />
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-800">Pandi Curry</h3>
              <img src="/non_veg_symbol.png" alt="Non Veg" className="w-5 h-5" />
            </div>
            <p className="text-gray-600">Spicy pork curry with Coorg spices. Rich and bold flavors with a tangy kick.</p>
            <span className="inline-block mt-2 px-3 py-1 bg-orange-200 text-orange-800 font-semibold rounded-full shadow-lg text-sm">
              ₹250
            </span>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          <img src="/akki_rotti.jpg" alt="Akki Rotti" className="w-full h-48 object-cover" />
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-800">Akki Rotti</h3>
              <img src="/veg_symbol.png" alt="Veg" className="w-5 h-5" />
            </div>
            <p className="text-gray-600">Rice flatbread served with coconut chutney. Light and fluffy, with an earthy taste.</p>
            <span className="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-lg text-sm">
              ₹100
            </span>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="/koli_curry.jpg" alt="Koli Curry" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">Koli Curry</h3>
                <img src="/non_veg_symbol.png" alt="Non Veg" className="w-5 h-5" />
              </div>
              <p className="text-gray-600">Chicken in a thick, spicy gravy with roasted spices and coconut. Smoky and bold.</p>
              <span className="inline-block mt-2 px-3 py-1 bg-orange-200 text-orange-800 font-semibold rounded-full shadow-lg text-sm">
                ₹200
              </span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="/bamboo_shoot.jpg" alt="Bamboo Shoot Curry" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">Bamboo Shoot Curry</h3>
                <img src="/veg_symbol.png" alt="Veg" className="w-5 h-5" />
              </div>
              <p className="text-gray-600">Tender bamboo shoots in coconut gravy. Mild, crunchy with a hint of sweetness.</p>
              <span className="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-lg text-sm">
                ₹150
              </span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="/kadambuttu.jpg" alt="Kadambuttu" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">Kadambuttu</h3>
                <img src="/veg_symbol.png" alt="Veg" className="w-5 h-5" />
              </div>
              <p className="text-gray-600">Soft rice dumplings, traditionally served with curry. Chewy with a neutral taste.</p>
              <span className="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-lg text-sm">
                ₹120
              </span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="/noolputtu.jpg" alt="Noolputtu" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">Noolputtu</h3>
                <img src="/veg_symbol.png" alt="Veg" className="w-5 h-5" />
              </div>
              <p className="text-gray-600">Delicate rice noodles served with coconut milk or curry. Light and silky smooth.</p>
              <span className="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-lg text-sm">
                ₹130
              </span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="/erachi_curry.jpg" alt="Erachi Curry" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">Erachi Curry</h3>
                <img src="/non_veg_symbol.png" alt="Non Veg" className="w-5 h-5" />
              </div>
              <p className="text-gray-600">Beef cooked with fragrant local spices. Deep, smoky flavor with a spicy aftertaste.</p>
              <span className="inline-block mt-2 px-3 py-1 bg-orange-200 text-orange-800 font-semibold rounded-full shadow-lg text-sm">
                ₹220
              </span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="/kuleputtu.jpg" alt="Kuleputtu" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">Kuleputtu</h3>
                <img src="/veg_symbol.png" alt="Veg" className="w-5 h-5" />
              </div>
              <p className="text-gray-600">Steamed rice cake with coconut layers. Mildly sweet and soft in texture.</p>
              <span className="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-lg text-sm">
                ₹140
              </span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="/meenu_fry.jpg" alt="Meenu Fry" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">Meenu Fry</h3>
                <img src="/non_veg_symbol.png" alt="Non Veg" className="w-5 h-5" />
              </div>
              <p className="text-gray-600">Crispy fried fish coated with spices. Crispy on the outside, tender and spicy inside.</p>
              <span className="inline-block mt-2 px-3 py-1 bg-orange-200 text-orange-800 font-semibold rounded-full shadow-lg text-sm">
                ₹180
              </span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="/thambuttu.jpg" alt="Thambuttu" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">Thambuttu</h3>
                <img src="/veg_symbol.png" alt="Veg" className="w-5 h-5" />
              </div>
              <p className="text-gray-600">A traditional sweet made from bananas, roasted rice flour, and jaggery. Nutty and sweet.</p>
              <span className="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-lg text-sm">
                ₹100
              </span>
            </div>
          </div>
        </div>

     
    );
  };

  const renderContent = () => {
    if (selectedTab === "Cuisine") {
      return renderCuisineList();
    } else if (selectedTab === "Restaurants") {
      return renderRestaurantList();
    }
  };

  return (
    <div className="p-6">
      {/* Toggle Switch */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setSelectedTab("Cuisine")}
          className={`px-4 py-2 mx-2 rounded-lg font-semibold transition-all duration-300 ${
            selectedTab === "Cuisine" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          Cuisine
        </button>
        <button
          onClick={() => setSelectedTab("Restaurants")}
          className={`px-4 py-2 mx-2 rounded-lg font-semibold transition-all duration-300 ${
            selectedTab === "Restaurants" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          Restaurants
        </button>
      </div>

      {/* Render content based on selected tab */}
      {renderContent()}

      {/* Modal for restaurant details */}
      {showModal && selectedRestaurant && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" style={{ height: '100vh' }} onClick={closeModal}>
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg overflow-auto" style={{ maxHeight: '70vh' }} onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <div className="h-64 bg-gray-200">
              <iframe
                 width="100%"
                 height="100%"
                 frameBorder="0"
                 style={{ border: 0 }}
                 referrerPolicy="no-referrer-when-downgrade"
                 src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBoqSu9yPz4ARoAHj4kDy98smDZKsQGQgo&q=${selectedRestaurant.latitude},${selectedRestaurant.longitude}`}
                 allowFullScreen
             ></iframe>

              </div>
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            <div className="p-6">
  {/* Restaurant Name */}
  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
    {selectedRestaurant.name}
  </h2>

  {/* Review */}
  <p className="text-lg text-gray-600 leading-relaxed mb-6 border-l-4 border-orange-500 pl-4">
    {selectedRestaurant.review}
  </p>

  {/* Open and Close Time */}
  <div className="bg-gray-100 p-4 rounded-lg shadow-md text-gray-700 flex justify-between items-center">
          <div>
            <p className="text-sm sm:text-lg font-semibold">Open Time</p>
            <p className="text-sm sm:text-md">{selectedRestaurant.openTime}</p>
          </div>
          <div>
            <p className="text-sm sm:text-lg font-semibold">Close Time</p>
            <p className="text-sm sm:text-md">{selectedRestaurant.closeTime}</p>
          </div>
          <div>
            <p className="text-sm sm:text-lg font-semibold">Distance</p>
            <p className="text-sm sm:text-md">{selectedRestaurant.distance}</p>
          </div>
        </div>
</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CuisinePage;
