import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  
  const token = useSelector((state) => state.token);

  useEffect(() => {
    // Fetch userId when component mounts
    const fetchUserId = async () => {
      try {
        const response = await fetch("http://localhost:8000/users", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const userData = await response.json();
        setUserId(userData.userId);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        setError("Failed to fetch user data.");
      }
    };

    fetchUserId();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [token]); // Run effect only when token changes

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic form validation
    if (!title.trim() || !desc.trim()) {
      setError("Title and description are required.");
      return;
    }
  
    if (!userId) {
      setError("User ID is not available.");
      return;
    }
  
    const newPost = {
      title,
      desc,
      userId,
    };
  
    try {
      const response = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { 
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(newPost),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create post");
      }
  
      console.log("Post created successfully!");
      // You can navigate to another page or update the UI as needed
    } catch (error) {
      console.error("Error creating post:", error.message);
      setError("Failed to create post. Please try again later.");
    }
  };
  

  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeInput writeText"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        {error && <p className="error">{error}</p>} {/* Display error message */}
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}


// import { useState } from "react";
// import { useSelector } from "react-redux";

// export default function Write() {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [userId,setuserId] = useState("");

//   const token = useSelector((state) => state.token);
//   const { userData } = useSelector((store) => store.user);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPost = {
//       title,
//       desc,
//       userId,
//     };
//    console.log(newPost);
//     try {
//       const response = await fetch("http://localhost:8000/blogs", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, 
//         body: JSON.stringify(newPost),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create post");
//       }

//       console.log("Post created successfully!");
//       // You can navigate to another page or update the UI as needed
//     } catch (error) {
//       console.error("Error creating post:", error.message);
//     }
//   };

//   return (
//     <div className="write">
//       <form className="writeForm" onSubmit={handleSubmit}>
//         <div className="writeFormGroup">
//           <input
//             type="text"
//             placeholder="Title"
//             className="writeInput"
//             autoFocus={true}
//             value={title} // Added value attribute
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="writeFormGroup">
//           <textarea
//             placeholder="Tell your story"
//             type="text"
//             className="writeInput writeText"
//             value={desc} // Added value attribute
//             onChange={(e) => setDesc(e.target.value)}
//           ></textarea>
//         </div>
//         <button className="writeSubmit" type="submit">
//           Publish
//         </button>
//       </form>
//     </div>
//   );
// }
