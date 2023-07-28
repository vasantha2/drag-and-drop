import React, { useState } from "react";
import SidebarItem from "./SidebarItem";

import { useDrop } from "react-dnd";

const Sidebar = () => {
  const data = [
    {
      id: 1,
      photo: "https://media.api-sports.io/football/players/278.png",
      type: "image",
    },
    {
      id: 2,
      photo: "https://media.api-sports.io/football/players/2059.png",
      type: "image",
    },
    {
      id: 3,
      photo: "https://media.api-sports.io/football/players/666.png",
      type: "image",
    },
    {
      id: 4,
      photo: "https://media.api-sports.io/football/players/2780.png",
      type: "image",
    },
    {
      id: 5,
      text: "Hello",
      type: "text",
    },
    {
      id: 6,
      text: "Hello World",
      type: "text",
    },
    {
      id: 7,
      text: "How are you",
      type: "text",
    },
  ];

  const [headerItems, setHeaderItems] = useState([]);
  const [bodyItems, setBodyItems] = useState([]);
  const [footerItems, setFooterItems] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: "SIDEBAR_ITEM",
    drop: (item) => {
      // Handle the drop event here
      console.log("Item dropped:", item);

      // Add the dropped item to the corresponding area based on its type
      switch (item.type) {
        case "image":
          setHeaderItems((prevItems) => [...prevItems, item]);
          break;
        case "text":
          setFooterItems((prevItems) => [...prevItems, item]);
          break;
        default:
          setBodyItems((prevItems) => [...prevItems, item]);
      }
    },
  }));

  return (
    <div ref={drop} style={{ display: "flex", marginTop: "50px" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "200px",
          borderRadius: "md",
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)",
          padding: "6px",
          height: "90vh",
          textAlign: "center",
        }}
      >
        <h2 style={{ padding: "3px", fontFamily: "serif", fontSize: "20px" }}>
          Sidebar
        </h2>
        <div>
          {data.map((item) => (
            <SidebarItem
              key={item.id}
              photo={item.photo}
              text={item.text}
              type={item.type}
            />
          ))}
        </div>
      </div>

      {/* Right-side content */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div
          style={{
            width: "500px",
            borderRadius: "md",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)",
            padding: "6px",
            height: "150px",
            margin: "20px",
            textAlign: "center",
          }}
        >
          <h2 style={{ padding: "3px", fontFamily: "serif", fontSize: "20px" }}>
            Header
          </h2>
          {headerItems.map((item) => (
            <SidebarItem
              key={item.id}
              photo={item.photo}
              text={item.text}
              type={item.type}
            />
          ))}
        </div>

        {/* Body */}
        <div
          style={{
            width: "500px",
            borderRadius: "md",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)",
            padding: "6px",
            height: "150px",
            margin: "20px",
            textAlign: "center",
          }}
        >
          <h2 style={{ padding: "3px", fontFamily: "serif", fontSize: "20px" }}>
            Body
          </h2>
          {bodyItems.map((item) => (
            <SidebarItem
              key={item.id}
              photo={item.photo}
              text={item.text}
              type={item.type}
            />
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            width: "500px",
            borderRadius: "md",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)",
            padding: "6px",
            height: "150px",
            margin: "20px",
            textAlign: "center",
          }}
        >
          <h2 style={{ padding: "3px", fontFamily: "serif", fontSize: "20px" }}>
            Footer
          </h2>
          {footerItems.map((item) => (
            <SidebarItem
              key={item.id}
              photo={item.photo}
              text={item.text}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
