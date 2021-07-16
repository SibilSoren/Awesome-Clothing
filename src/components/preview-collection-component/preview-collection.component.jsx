import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./preview-collection.style.css";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview container mt-4">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview d-flex justify-content-between">
        {items
          .filter((item, index) => index < 5)
          .map(({id, ...otherSelectionProps}) => (
            <CollectionItem key={id} {...otherSelectionProps}/>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
