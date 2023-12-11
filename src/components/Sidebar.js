import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./allComps";
import {
  motionComponents,
  looksComponents,
  controlComponents,
  eventsComponents,
} from "./SidebarConstants";

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div
        style={{
          backgroundColor: "offwhite",
          border: "5px solid lightgreen",
          fontSize: "20px",
          fontFamily: "poppins",
          borderRadius: "10px",
          padding: "5px 10px",
          marginBottom: "10px",
        }}
      >
        Sidebar
      </div>
      {/* Motion */}
      <div
        style={{
          border: "2px dashed lightgrey",
          fontSize: "15px",
          fontFamily: "poppins",
          borderRadius: "20px",
          padding: "5px 10px",
          fontWeight: "bold",
          marginLeft: "60px",
        }}
      >
        {" "}
        {"Motion"}{" "}
      </div>
      <Droppable droppableId="sideArea-motion" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-motion my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {motionComponents.map((x, i) => {
              return (
                <Draggable
                  key={`${x}-sideArea`}
                  draggableId={`${x}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="my-2"
                    >
                      {getComponent(x)}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      {/* Looks */}
      <div
        style={{
          border: "2px dashed lightgrey",
          fontSize: "15px",
          fontFamily: "poppins",
          borderRadius: "20px",
          padding: "5px 10px",
          fontWeight: "bold",
          marginLeft: "60px",
        }}
      >
        {" "}
        {"Looks"}{" "}
      </div>
      <Droppable droppableId="sideArea-looks" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-looks my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {looksComponents.map((x, i) => {
              return (
                <Draggable
                  key={`${x}-sideArea`}
                  draggableId={`${x}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="my-2"
                    >
                      {getComponent(x)}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      {/* Control */}
      <div
        style={{
          border: "2px dashed lightgrey",
          fontSize: "15px",
          fontFamily: "poppins",
          borderRadius: "20px",
          padding: "5px 10px",
          fontWeight: "bold",
          marginLeft: "60px",
        }}
      >
        {" "}
        {"Control"}{" "}
      </div>
      <Droppable droppableId="sideArea-control" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-control my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {controlComponents.map((x, i) => {
              return (
                <Draggable
                  key={`${x}-sideArea`}
                  draggableId={`${x}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="my-2"
                    >
                      {getComponent(x)}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      {/* Events */}
      <div
        style={{
          border: "2px dashed lightgrey",
          fontSize: "15px",
          fontFamily: "poppins",
          borderRadius: "20px",
          padding: "5px 10px",
          fontWeight: "bold",
          marginLeft: "60px",
        }}
      >
        {" "}
        {"Events"}{" "}
      </div>
      <Droppable droppableId="sideArea-motion" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-motion my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {eventsComponents.map((x, i) => {
              return (
                <Draggable
                  key={`${x}-sideArea`}
                  draggableId={`${x}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="my-2"
                    >
                      {getComponent(x)}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}
