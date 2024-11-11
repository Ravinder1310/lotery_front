import React, { useState } from "react";
import Footer from "./footer";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobile,setMobile] = useState('');
  const navigate = useNavigate()

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const hanndleValidate = async() => {
    try {
      console.log('mobile===>',mobile);
      
      const res = await axios.get(`https://ltback.rscjewells.shop/api/v1/user/validate/${mobile}`)
      // console.log(res); 
       
      if(res.status == 201){
        alert('No Lottery found with this number')
      }else{
        let userData = {
          _id : res.data._id,
          mobile : res.data.mobile,
          name : res.data.name,
          photo : res.data.photo
        }
        localStorage.setItem("user",JSON.stringify(userData))
        navigate('/my-lottery')
      }
      
      
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <div className="bg-gradient-to-b from-red-500 to-orange-500 h-full pt-52">
      <div className="flex flex-col text-white items-center text-center mt-8">
        <h1 className="text-lg text-white font-bold tracking-widest">
          PUNJAB STATE DEAR RAKHI BUMPER 2024 DRAW
        </h1>
        <p className=" text-xl font-semibold">Prizes worth</p>

        <h1
          className="text-4xl mt-10 font-extrabold text-white"
          style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          ₹8,10,00,000.00
        </h1>
        <p
          className="text-4xl font-extrabold text-white"
          style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          CRORE
        </p>

        <p className="text-xl mt-10 font-bold">On 24-Aug-2024, Ludhiana</p>

        <button className="mt-8 bg-white text-black font-semibold text-lg px-6 py-2 rounded-full shadow-md hover:bg-gray-200"
        onClick={openModal}
        >
          SEARCH LOTTERY RESULTS
        </button>
      </div>
      <div className="m-auto mt-10">
        <img className="m-auto" src="/images/vid.png" />
        <button className="w-full bg-yellow-200 text-red-400 p-5 text-xl font-semibold">
          What's New
        </button>
        <h1 className="w-full text-sm border-dotted border-gray-400 py-2 text-blue-300 bg-white">
          12-April-2022 Punjab State Dear Holiday Bumper 2022
        </h1>
      </div>
      <div className="bg-white pt-10">
        <img className="w-full h-60" src="/images/rupee.png" />
        <div className="w-full mt-16 max-w-xs mx-auto bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Our Recent Winners
          </h2>

          <div className="mb-6 border-b border-gray-200 pb-4">
            <p className="text-base font-bold text-black">
              Parshotam Singh ₹2,00,00,000
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Punjab state dear 500 monthly
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Winner against Tickets No 285601 from Palampur Himachal Pradesh
              Draw held on 14.05.2022
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <p className="text-base font-bold text-black">
              Ashok Bhauso Desai from Maharashtra ₹1,20,00,000
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Punjab state dear 200 monthly
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Ticket no 196351 winner from Maharashtra
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-sm overflow-hidden">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-center mb-4">
        Meet few of our First Prize Winners
      </h2>

      {/* Falling Confetti */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className={`confetti w-2 h-2 absolute  z-50 ${
              ["bg-red-500", "bg-yellow-500", "bg-green-500", "bg-blue-500", "bg-pink-500"][i % 5]
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[90%] max-w-xs p-6 rounded-lg shadow-lg text-center relative">
            <h2 className="text-lg font-bold mb-4">SINGH LOTTERY</h2>
            <button
              className="absolute top-2 right-2 text-black font-bold text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="border border-gray-300 w-full px-3 py-2 rounded-md mb-4 text-center"
            />
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md w-full"
            onClick={hanndleValidate}
            >
              Search
            </button>
            <p className="mt-6 text-black font-semibold">
              Contact for more information
            </p>
            <a href="tel:+918797527031" className="text-blue-600 font-semibold">
              +91 9266878747
            </a>
          </div>
        </div>
      )}

      {/* Winner Card Content */}
      <div className="bg-white p-4 rounded-md border border-gray-200 relative text-center">
        {/* Winner's Image */}
        <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src="/images/sikh2.png" // Replace with actual image source
            alt="Winner"
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-lg font-medium">
          1st Prize at Punjab State Holi Bumper 2020
        </h3>
        <p className="text-xl font-bold text-gray-800 mt-2">
          Sarwan Singh of Fazilka
        </p>
        <p className="text-red-500 text-2xl font-semibold">
          ₹1,50,00,000 /-
        </p>
      </div>

      {/* Confetti CSS */}
      <style jsx>{`
        .confetti {
          top: -10px;
          animation-name: confettiFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes confettiFall {
          0% {
            transform: translateY(10px) rotate(100deg);
            opacity: 1;
          }
          100% {
            transform: translateY(120vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
    <div className="relative flex mt-10 flex-col items-center justify-center bg-blue-300 py-20 px-4">
      {/* Background and Text */}
      {/* <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://via.placeholder.com/300)' }}></div> */}
      
      <h2 className="text-3xl font-bold text-white mb-2">WE CHANGE LIVES!</h2>
      <p className="text-white text-lg text-center mb-6">
        Try your luck with Punjab State Lotteries and get the chance to be <span className="font-semibold text-red-600">CROREPATI</span>.
      </p>
      
      {/* Winners Count Card */}
      <div className="bg-white rounded-xl p-8 shadow-lg w-[95%] mt-10 text-center">
        <p className="text-5xl font-bold text-red-500">4,348</p>

        <p className="text-gray-500 text-lg mt-2 font-bold">Total Winners</p>
      </div>
      <div className="bg-white rounded-xl p-8 shadow-lg w-[95%] mt-10 text-center">
        <p className="text-5xl font-bold text-red-500">18,03,862</p>
        <p className="text-xl font-bold text-red-500">Crore</p>

        <p className="text-gray-500 text-lg mt-2 font-bold">Total Amount Paid</p>
      </div>
      <div className="bg-white rounded-xl p-8 shadow-lg w-[95%] mt-10 text-center">
        <p className="text-5xl font-bold text-red-500">6,650</p>

        <p className="text-gray-500 text-lg mt-2 font-bold">Winners this month</p>
      </div>
      <div className="bg-white rounded-xl p-8 shadow-lg w-[95%] mt-10 text-center">
        <p className="text-5xl font-bold text-red-500">10,70,000</p>
        <p className="text-xl font-bold text-red-500">Crore</p>

        <p className="text-gray-500 text-lg mt-2 font-bold">Amount paid this month</p>
      </div>
    </div>
    <div className=" mt-10 w-[90%] items-center justify-center py-10 px-1 rounded-lg shadow-lg max-w-sm mx-auto">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-red-500 text-center mb-4 leading-tight">
        Our Authorised <br /> Distributor(s)
      </h2>
      
      {/* Distributor Name */}
      <p className="text-2xl font-bold text-black text-center mb-2">
        BIGSTAR G SERVICES LLP.
      </p>
      
      {/* Address */}
      <p className="text-mg text-gray-700 font-semibold text-center mb-4">
        <span className="font-bold text-lg">Regd. Office:</span> Shop No. 407, Guru Nanak Pura, Kailash Cinema Chowk, Ludhiana 141010, Punjab
      </p>

      {/* Phone Number */}
      <p className="text-gray-700 font-bold text-center">
        📞 +91 8797527031
      </p>
    </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-red-500 to-orange-500 text-white py-28 px-6 rounded-lg shadow-md w-full max-w-sm mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
        BELIEVE IN YOUR WIN!
      </h2>
      
      {/* Distributor Name */}
      <p className="text-xl font-extrabold text-center mb-2">
        BELIEVE IN PUNJAB STATE LOTTERIES!
      </p>
      
      {/* Address */}
      <p className="text-md text-center mt-10">
        Lottery tickets are available in the Markets, Bus Stands, Railway Stations, Post Offices and Sewa Kendras in Punjab.
      </p>
      <p className="text-md text-center mb-4">
        Lottery Draw Results can be seen in the Newspapers and website on the next day.
      </p>

      {/* Phone Number */}
      <div className="flex w-[95%] bg-white text-black gap-10 p-6 rounded-sm mt-10">
          <img className="w-10" src="/images/ticket.png" alt="error"/>
          <div className="text-left">
            <h1 className="text-xl font-bold">Tickets</h1>
            <p className="font-bold text-gray-400">Purchase Online</p>
          </div>
      </div>
      <div className="flex w-[95%] bg-white text-black gap-10 p-6 rounded-sm mt-8">
          <img className="w-10" src="/images/online.png" alt="error"/>
          <div className="text-left">
            <h1 className="text-xl font-bold">Result</h1>
            <p className="font-bold text-gray-400">Check Online</p>
          </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
