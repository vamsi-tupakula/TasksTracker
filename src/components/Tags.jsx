import React from "react";

function Tags(props) {
  return (
    <>
      {props.length === 0 ? (
        ""
      ) : (
        <button
          className={`${
            props.selectedTag.toLowerCase() === ""
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-300 hover:bg-gray-400"
          } px-3 py-0.5 rounded select-none`}
          onClick={() => props.setSelectedTag("")}
        >
          ALL
        </button>
      )}
      {props.allTags.map((tag) => {
        return (
          <button
            className={`${
              props.selectedTag.toLowerCase() === tag
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            } px-3 py-0.5 rounded select-none`}
            key={tag}
            onClick={() => props.setSelectedTag(tag)}
          >
            {tag.toUpperCase()}
          </button>
        );
      })}
    </>
  );
}

export default Tags;
