// import React from "react";
// import { useDrag } from "react-dnd";

// const SidebarItem = ({ photo, text }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "SIDEBAR_ITEM",
//     item: { photo, text },
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   const opacity = isDragging ? 0.4 : 1;

//   return (
//     <div ref={drag} style={{ opacity }}>
//       {photo && <img src={photo} alt="Player" style={{ width: "70px" }} />}
//       {text && (
//         <h2 style={{ padding: "3px", fontFamily: "serif", fontSize: "20px" }}>
//           {text}
//         </h2>
//       )}
//     </div>
//   );
// };

// export default SidebarItem;

import React from "react";
import { useDrag } from "react-dnd";

const SidebarItem = ({ photo, text, type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "SIDEBAR_ITEM",
    item: { photo, text, type }, // Include the type in the item object
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} style={{ opacity }}>
      {type === "image" && photo && (
        <img src={photo} alt="Player" style={{ width: "70px" }} />
      )}
      {type === "text" && text && (
        <h2 style={{ padding: "3px", fontFamily: "serif", fontSize: "20px" }}>
          {text}
        </h2>
      )}
    </div>
  );
};

export default SidebarItem;
