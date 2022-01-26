import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const { handleChange, formValues } = useContext(RoomContext);
  let types = getUnique(rooms, "type");
  types = ["All", ...types];

  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  let peoples = getUnique(rooms, "capacity");
  peoples = peoples.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type"> room type </label>
          <select
            name="type"
            id="type"
            value={formValues.type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity"> Guests </label>
          <select
            name="capacity"
            id="capacity"
            value={formValues.capacity}
            className="form-control"
            onChange={handleChange}
          >
            {peoples}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price"> Room Price $ {formValues.price} </label>
          <input
            id="price"
            name="price"
            type="range"
            min={formValues.minPrice}
            max={formValues.maxPrice}
            value={formValues.price}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="size"> Room size </label>
          <div className="size-inputs">
            <input
              id="size"
              name="minSize"
              type="number"
              value={formValues.minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              id="size"
              name="maxSize"
              type="number"
              value={formValues.maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              id="breakfast"
              name="breakfast"
              checked={formValues.breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast"> Breakfast</label>
          </div>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              id="pets"
              name="pets"
              checked={formValues.pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast"> Pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
