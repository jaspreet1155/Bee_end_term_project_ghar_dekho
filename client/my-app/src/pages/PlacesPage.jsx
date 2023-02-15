import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function PlacesPage() {
  const { action } = useParams();
  const [title, setTitle] = useState(' ');
  const [address, setAddress] = useState(' ');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState('');
  const [desc, setDesc] = useState(' ');

  function inputHeader(text) {
    return (
        <h2 className="text-2xl mt-4">{text}</h2>
    );
    
  }

  function inputDesc(text) {
    return (
        <p className="text-gray-500 text-sm">{text}</p>
    );
    
  }

  function preInput(header, desc) {
    return (
        <div>
            inputDesc
        </div>
    );
    
  }


  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            add new places
          </Link>
        </div>
      )}
      {action === 'new' && (
        <div>
            <form>
                <h2 className="text-2xl mt-4" >Title</h2>
                <p className="text-gray-500 text-sm">Title for your place.</p>
            <input type="text" placeholder="title, for example: My lovely apt"/>
            <h2 className="text-2xl mt-4">Address</h2>
            <p  className="text-gray-500 text-sm" >Address to this place</p>
            <input type="text" placeholder="address"/>
            <h2 className="text-2xl mt-4" >Photos</h2>
            <div className="flex gap-2">
                <input type="text" placeholder="Add us a link...jpg"/>
                <button className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;photo</button>
            </div >
            <div className="mt-3grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6">
            <button className="border bg-transparent rounded-2xl p-4 text-2xl text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
</svg>
+</button>
            </div>
            <h2 className="text-2xl mt-4">Desc.</h2>
            <p className="text-gray-500 text-sm">write some about your place</p>
            <textarea classname="" rows="" cols=""></textarea>
           
            </form>
        </div>
      )}
      
    </div>
  );
}
