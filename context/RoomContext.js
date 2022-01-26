import { createContext, useState, useEffect, useCallback } from "react";
import { useToasts } from "react-toast-notifications";
import Client from "../helper/Contenful";

const RoomContext = createContext();

function formatData(items) {
  let tempItems = items.map((item) => {
    let id = item.sys.id;
    let images = item.fields.images.map(
      (image) => "https:" + image.fields.file.url
    );
    let room = { ...item.fields, images, id };
    return room;
  });

  return tempItems;
}

function setRoomFeature(data) {
  return data.filter((room) => room.featured === true);
}

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();

  const [formValues, setFormValues] = useState({
    type: "All",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  const getDataFromContenful = async () => {
    setLoading(true);
    try {
      let response = await Client.getEntries({
        content_type: "name", 
        order:"sys.createdAt"       
      });

      const parseRoom = formatData(response.items);

      setRooms(parseRoom);
      setFeaturedRooms(setRoomFeature(parseRoom));
      setSortedRooms(parseRoom);

      let maxPrice = Math.max(...parseRoom.map((item) => item.price));
      let maxSize = Math.max(...parseRoom.map((item) => item.size));

      setFormValues((prevState) => ({
        ...prevState,
        ["maxPrice"]: maxPrice,
      }));

      setFormValues((prevState) => ({
        ...prevState,
        ["maxSize"]: maxSize,
      }));
    } catch (error) {
      addToast(JSON.parse(error.message).message, { appearance: "error" });
    }
    setLoading(false);
  };

  useEffect(() => {
    getDataFromContenful();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRoom = (slug) => {
    let room;
    if (slug) {
      room = rooms.find((room) => room.slug === slug);
    }

    return room;
  };

  const handleChange = (event) => {
    const target = event.target;

    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filterrooms = useCallback(() => {
    let { type, capacity, price, minSize, maxSize, breakfast, pets } =
      formValues;

    let tempRooms = [...rooms];

    capacity = parseInt(capacity);
    price = parseInt(price);

    if (type !== "All") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    tempRooms = tempRooms.filter((room) => room.price <= price);

    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === breakfast);
    }

    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === pets);
    }

    setSortedRooms(tempRooms);
  }, [formValues, rooms]);

  useEffect(() => {
    filterrooms();
  }, [formValues, filterrooms]);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        featuredRooms,
        sortedRooms,
        loading,
        getRoom,
        handleChange,
        formValues,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomContext, RoomConsumer };
