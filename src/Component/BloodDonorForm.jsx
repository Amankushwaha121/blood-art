import React, { useState } from 'react';

export default function BloodDonorForm({ onBackToHome }) {
  const [donors, setDonors] = useState([]); // State to store donor data

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form values
    const name = e.target.name.value;
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    const bloodGroup = e.target.bloodGroup.value;
    const type = e.target.type.value;
    const idCard = e.target.idCard.files[0];

    // Validate file upload
    if (!idCard) {
      alert('Please upload an ID card.');
      return;
    }

    // Read the uploaded file and create a new donor object
    const reader = new FileReader();
    reader.onload = (e) => {
      const newDonor = {
        name,
        age,
        gender,
        bloodGroup,
        type,
        idCard: e.target.result, // Store the image as a data URL
      };

      // Add the new donor to the list
      setDonors([...donors, newDonor]);

      // Print the input data to the console
      console.log('New Donor:', newDonor);
    };
    reader.readAsDataURL(idCard);

    // Clear form fields
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center pt-[4%] pb-6">
      <div className="max-w-md w-full bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl shadow-2xl border border-red-100">
        <span>
          {/* Back to Home Button */}
          <button
            onClick={onBackToHome}
            className="mt-6 bg-red-600 text-white p-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300 left-0 top-0"
          >
            Back
          </button>
        </span>
        <h1 className="text-3xl font-bold text-center text-red-800 mb-6">
          Donor/Receiver <div>Registration </div>
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className=" text-gray-700 font-semibold mb-2 flex items-center">
              <span className="mr-2">👤</span> Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className=" text-gray-700 font-semibold mb-2 flex items-center">
              <span className="mr-2">🎂</span> Age
            </label>
            <input
              type="number"
              name="age"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className=" text-gray-700 font-semibold mb-2 flex items-center">
              <span className="mr-2">🚻</span> Gender
            </label>
            <select
              name="gender"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className=" text-gray-700 font-semibold mb-2 flex items-center">
              <span className="mr-2">🩸</span> Blood Group
            </label>
            <select
              name="bloodGroup"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div>
            <label className=" text-gray-700 font-semibold mb-2 flex items-center">
              <span className="mr-2">🏷</span> Type
            </label>
            <select
              name="type"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="Donor">Donor</option>
              <option value="Recipient">Recipient</option>
            </select>
          </div>

          <div>
            <label className=" text-gray-700 font-semibold mb-2 flex items-center">
              <span className="mr-2">🪪</span> ID Card
            </label>
            <input
              type="file"
              name="idCard"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>

      {/* Table */}
      <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-red-800 py-6 bg-red-50">
          Registered Donors
        </h2>
        <div className="p-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-red-50">
                <th className="p-3 text-left text-sm font-semibold text-red-800 uppercase">Name</th>
                <th className="p-3 text-left text-sm font-semibold text-red-800 uppercase">Age</th>
                <th className="p-3 text-left text-sm font-semibold text-red-800 uppercase">Gender</th>
                <th className="p-3 text-left text-sm font-semibold text-red-800 uppercase">Blood Group</th>
                <th className="p-3 text-left text-sm font-semibold text-red-800 uppercase">Type</th>
              </tr>
            </thead>
            <tbody>
              {donors.map((donor, index) => (
                <tr
                  key={index}
                  className="border-b border-red-100 hover:bg-red-50 transition duration-200"
                >
                  <td className="p-3 text-sm text-gray-700">{donor.name}</td>
                  <td className="p-3 text-sm text-gray-700">{donor.age}</td>
                  <td className="p-3 text-sm text-gray-700">{donor.gender}</td>
                  <td className="p-3 text-sm text-gray-700">{donor.bloodGroup}</td>
                  <td className="p-3 text-sm text-gray-700">{donor.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}