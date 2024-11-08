import React, { useEffect, useState } from "react";

const MyLoattery = () => {

  const [user, setUser] = useState();

    const numbers2 = Array.from({ length: 9 }, () =>
        Math.floor(100000 + Math.random() * 900000)
      );

      if(user){
        console.log('hello');
      }

      const numbers3 = [4823, 7631, 2156, 8947, 3402, 5789, 9106, 1273, 6594, 8021]

      const numbers4 = [3841, 7269, 1456, 9023, 5772, 3485, 8673, 9214, 2310, 6589]

      const numbers5 = [4352, 7891, 6123, 9548, 2764, 8317, 4198, 5032, 6887, 7429]


      const numbers6 = [
        5318, 5061, 9915, 4936, 1454, 1793, 5787, 2038, 8251, 8862,
        7338, 3014, 4604, 2703, 4330, 8003, 5611, 4737, 8448, 5679,
        5459, 7181, 4481, 2939, 3604, 8460, 3217, 7653, 1767, 1000,
        8269, 8901, 7741, 8905, 6082, 1253, 6688, 6290, 5587, 2917,
        6852, 1667, 1484, 1007, 6084, 9762, 6241, 8145, 7935, 6249,
        3996, 1477, 4676, 1621, 8349, 6866, 1898, 7209, 4789, 5940,
        3232, 1656, 8581, 6648, 5419, 2416, 3507, 7736, 4471, 9315,
        3471, 7421, 1058, 9620, 6025, 8476, 4505, 7307, 2351, 9790
      ]
    

      useEffect(() => {
        const userData = localStorage.getItem("user");
        setUser(JSON.parse(userData))
        // console.log(user);
      },[])

  return (
    <div className="pt-28 p-4">
      <div className="border-2 border-black pb-2">
        <img className="w-full h-[300px]" src={`https://ltfront.rscjewells.shop/${user?.photo}`} alt="error" />
        <h1 className="text-3xl mt-4 font-bold">Congratulations</h1>
        <p className="font-bold">{user?.name}</p>
        <p className="font-bold">2nd Prize</p>
        <p className="text-2xl font-bold">10,00000/-</p>
        <p className="text-lg font-semibold">ticket no: 402579</p>
        <p className="text-lg font-semibold">Draw no: 2nd prize</p>
        <hr className="w-[95%] mt-2 border-red-500 m-auto" />
        <button className="mt-3 bg-green-600 font-bold p-2 text-white rounded-lg w-[30%]">
          Result
        </button>
        <hr className="w-[95%] mt-2 border-red-500 m-auto" />
        <button className="mt-3 bg-green-600 font-bold p-2 text-white rounded-lg w-[50%]">
          2024-10-25
        </button>
      </div>
      <div className="bg-gray-200 mt-10 p-4 rounded-md">
        <h1 className="text-4xl font-semibold">Winning Lottery Tickets</h1>
        <h1 className="font-bold mt-4">Congratulations to all our winners!</h1>
      </div>
      <div className="border border-green-600 mt-10 rounded-xl">
        <h1 className="w-full text-xl font-semibold px-2 py-1 bg-green-500 rounded-tl-xl rounded-tr-xl">
          🔺1st Prize Rs.15000000/-
        </h1>
        <div className="p-6">
          <div className="m-auto border-2 border-green-600 w-[40%] rounded-md p-2">
            638007
          </div>
        </div>
      </div>
      <div className="border border-green-600 mt-10 rounded-xl">
        <h1 className="w-full text-xl font-semibold px-2 py-1 bg-green-500 rounded-tl-xl rounded-tr-xl">
          🔺2nd Prize Rs.1000000/-
        </h1>
        <div className="p-6 px-2 flex flex-wrap justify-center">
      {numbers2.map((number, index) => (
        <div
          key={index}
          className={`m-2 border-2 border-green-600 w-[80px] rounded-md p-2 text-center`}
        >
          {number}
        </div>
      ))}
              <div
          className={`m-2 border-2 blinking border-green-600 w-[80px] rounded-md p-2 text-center`}
        >
          402579
        </div>
      {/* Blinking Animation CSS */}
      <style jsx>{`
        .blinking {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 100% {
            background-color: transparent;
            color: black;
          }
          50% {
            background-color: red;
            color: white;
          }
        }
      `}</style>
    </div>
      </div>
      <div className="border border-green-600 mt-10 rounded-xl">
        <h1 className="w-full text-xl font-semibold px-2 py-1 bg-green-500 rounded-tl-xl rounded-tr-xl">
          🔺3rd Prize Rs.500000/-
        </h1>
      <div className="p-6 px-2 flex flex-wrap justify-center">
      {numbers3.map((number, index) => (
        <div
          key={index}
          className={`m-2 border-2 border-green-600 w-[70px] rounded-md p-2 text-center`}
        >
          {number}
        </div>
      ))}
    </div>
    </div>
      <div className="border border-green-600 mt-10 rounded-xl">
        <h1 className="w-full text-xl font-semibold px-2 py-1 bg-green-500 rounded-tl-xl rounded-tr-xl">
          🔺4th Prize Rs.9000/-
        </h1>
        <div className="p-6 px-1 flex flex-wrap justify-center gap-3">
      {numbers4.map((number, index) => (
        <div
          key={index}
          className={` border-2 border-green-600 w-[60px] rounded-md p-2 text-center`}
        >
          {number}
        </div>
      ))}
    </div>
      </div>
      <div className="border border-green-600 mt-10 rounded-xl">
        <h1 className="w-full text-xl font-semibold px-2 py-1 bg-green-500 rounded-tl-xl rounded-tr-xl">
          🔺5th Prize Rs.6000/-
        </h1>
        <div className="p-6 px-2 flex flex-wrap justify-center gap-3">
      {numbers5.map((number, index) => (
        <div
          key={index}
          className={` border-2 border-green-600 w-[60px] rounded-md p-2 text-center`}
        >
          {number}
        </div>
      ))}
    </div>
      </div>
      <div className="border border-green-600 mt-10 rounded-xl">
        <h1 className="w-full text-xl font-semibold px-2 py-1 bg-green-500 rounded-tl-xl rounded-tr-xl">
          🔺6th Prize Rs.2000/-
        </h1>
        <div className="p-6 px-2 flex flex-wrap justify-center gap-3">
      {numbers6.map((number, index) => (
        <div
          key={index}
          className={` border-2 border-green-600 w-[60px] rounded-md p-2 text-center`}
        >
          {number}
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default MyLoattery;
