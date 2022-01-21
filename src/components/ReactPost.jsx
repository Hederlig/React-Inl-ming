import PostLiked from "./PostLiked";
import { useState } from 'react';

const ReactPost = ({question, awnser}) => {

    const [postLiked, setPostLiked] = useState(false);


    return ( 
        <div style={{ border: "2px solid white" }} className="viewCard">
            <h3>{question}</h3>
            <p>{awnser}</p>
            <p> <button
          className={postLiked ? "hide" : null}
          onClick={() => setPostLiked(true)}        >
          Like it!
        
        </button>
        </p>
      
      {postLiked && <PostLiked />}

        </div>
    );
}
 
export default ReactPost;