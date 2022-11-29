import React, { useEffect } from "react";
import { useState } from "react";
import CreatePostForm from "./forms/CreatePostForm"


const CreatePost = () => {
  const [data, setData] = useState('');

  
  return (
    <div>
      <CreatePostForm setData={setData} />

    </div>
  );
}

export default CreatePost;
