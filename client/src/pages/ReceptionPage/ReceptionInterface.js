import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaCheck, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const ReceptionInterface = () => {
  const [rooms, setRooms] = useState([
    { id: 1, roomNumber: "101", roomType: "Single", status: "Available", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304" },
    { id: 2, roomNumber: "102", roomType: "Double", status: "Occupied", image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658" },
    { id: 3, roomNumber: "103", roomType: "Suite", status: "Available", image: "https://images.unsplash.com/photo-1631049035182-249067d7618e" },
  ]);

  const [guests, setGuests] = useState([
    { id: 1, name: "John Doe", roomNumber: "102", checkIn: "2024-01-20", checkOut: null },
  ]);

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showRoomForm, setShowRoomForm] = useState(false);
  const [formData, setFormData] = useState({
    roomNumber: "",
    roomType: "Single",
    status: "Available",
  });

  const [guestFormData, setGuestFormData] = useState({
    name: "",
    roomNumber: "",
  });

  const handleAddRoom = () => {
    setSelectedRoom(null);
    setFormData({ roomNumber: "", roomType: "Single", status: "Available" });
    setShowRoomForm(true);
  };

  const handleUpdateRoom = (room) => {
    setSelectedRoom(room);
    setFormData(room);
    setShowRoomForm(true);
  };

  const handleRemoveRoom = (roomId) => {
    setRooms(rooms.filter((room) => room.id !== roomId));
  };

  const handleRoomSubmit = (e) => {
    e.preventDefault();
    if (selectedRoom) {
      setRooms(
        rooms.map((room) =>
          room.id === selectedRoom.id ? { ...room, ...formData } : room
        )
      );
    } else {
      setRooms([
        ...rooms,
        { id: rooms.length + 1, ...formData, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304" },
      ]);
    }
    setShowRoomForm(false);
    setSelectedRoom(null);
    setFormData({ roomNumber: "", roomType: "Single", status: "Available" });
  };

  const handleCheckIn = (e) => {
    e.preventDefault();
    const room = rooms.find((r) => r.roomNumber === guestFormData.roomNumber);
    if (!room || room.status === "Occupied") {
      alert("Room not available!");
      return;
    }

    setGuests([
      ...guests,
      {
        id: guests.length + 1,
        ...guestFormData,
        checkIn: new Date().toISOString().split("T")[0],
        checkOut: null,
      },
    ]);

    setRooms(
      rooms.map((r) =>
        r.roomNumber === guestFormData.roomNumber
          ? { ...r, status: "Occupied" }
          : r
      )
    );

    setGuestFormData({ name: "", roomNumber: "" });
  };

  const handleCheckOut = (guestId) => {
    const guest = guests.find((g) => g.id === guestId);
    setRooms(
      rooms.map((r) =>
        r.roomNumber === guest.roomNumber ? { ...r, status: "Available" } : r
      )
    );

    setGuests(
      guests.map((g) =>
        g.id === guestId
          ? { ...g, checkOut: new Date().toISOString().split("T")[0] }
          : g
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Hotel Reception Interface</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Room Management */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">Room Management</h2>
              <button
                onClick={handleAddRoom}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
              >
                <FaPlus /> Add Room
              </button>
            </div>

            {showRoomForm && (
              <form onSubmit={handleRoomSubmit} className="mb-6 bg-gray-50 p-4 rounded-lg">
                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Room Number
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.roomNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, roomNumber: e.target.value })
                      }
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Room Type
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) =>
                        setFormData({ ...formData, roomType: e.target.value })
                      }
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="Single">Single</option>
                      <option value="Double">Double</option>
                      <option value="Suite">Suite</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                      }
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="Available">Available</option>
                      <option value="Occupied">Occupied</option>
                      <option value="Maintenance">Maintenance</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    {selectedRoom ? "Update" : "Add"} Room
                  </button>
                </div>
              </form>
            )}

            <div className="grid gap-4">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={room.image}
                      alt={`Room ${room.roomNumber}`}
                      className="w-16 h-16 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1631049307264-da0ec9d70304";
                      }}
                    />
                    <div>
                      <h3 className="font-semibold">Room {room.roomNumber}</h3>
                      <p className="text-sm text-gray-600">{room.roomType}</p>
                      <span
                        className={`text-sm ${room.status === "Available" ? "text-green-500" : "text-red-500"}`}
                      >
                        {room.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdateRoom(room)}
                      className="p-2 text-blue-500 hover:bg-blue-100 rounded-full"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleRemoveRoom(room.id)}
                      className="p-2 text-red-500 hover:bg-red-100 rounded-full"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guest Management */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Guest Management</h2>

            <form onSubmit={handleCheckIn} className="mb-6 bg-gray-50 p-4 rounded-lg">
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Guest Name
                  </label>
                  <input
                    type="text"
                    required
                    value={guestFormData.name}
                    onChange={(e) =>
                      setGuestFormData({ ...guestFormData, name: e.target.value })
                    }
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Room Number
                  </label>
                  <input
                    type="text"
                    required
                    value={guestFormData.roomNumber}
                    onChange={(e) =>
                      setGuestFormData({ ...guestFormData, roomNumber: e.target.value })
                    }
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center hover:bg-green-600 transition-colors"
                >
                  <FaSignInAlt /> Check In
                </button>
              </div>
            </form>

            <div className="grid gap-4">
              {guests
                .filter((guest) => !guest.checkOut)
                .map((guest) => (
                  <div
                    key={guest.id}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold">{guest.name}</h3>
                      <p className="text-sm text-gray-600">Room {guest.roomNumber}</p>
                      <p className="text-sm text-gray-600">Check In: {guest.checkIn}</p>
                    </div>
                    <button
                      onClick={() => handleCheckOut(guest.id)}
                      className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <FaSignOutAlt /> Check Out
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceptionInterface;
