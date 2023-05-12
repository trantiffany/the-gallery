import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";
import UploadForm from "./components/UploadForm";

const photos = [
  "https://picsum.photos/id/1001/200/200",
  "https://picsum.photos/id/1002/200/200",
  "https://picsum.photos/id/1003/200/200",
  "https://picsum.photos/id/1004/200/200",
  "https://picsum.photos/id/1005/200/200",
  "https://picsum.photos/id/1006/200/200",
];

function App() {
  const [items, setItems] = useState(photos)
  const [isCollasped, collapse] = useState(false)

  const toggle = () => collapse(!isCollasped);

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>{isCollasped ? 'Close' : 'Add'}</button>
       <div className="clearfix mb-4">
       </div>
        <UploadForm isVisible={isCollasped}/>
        <h1>Gallery</h1>
        <div className="row">
          {items.map((photo) => (
            <Card src={photo}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
