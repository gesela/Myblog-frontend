// import "./post.css";
// import { Link } from "react-router-dom";

// export default function Post({ post }) {
//   const PF = "http://localhost:5000/images/";
//   return (
//     <div className="post">
//       {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
//       <div className="postInfo">
//         <div className="postCats">
//           {post.categories.map((c) => (
//             <span className="postCat">{c.name}</span>
//           ))}
//         </div>
//         <Link to={`/post/${post._id}`} className="link">
//           <span className="postTitle">{post.title}</span>
//         </Link>
//         <hr />
//         <span className="postDate">
//           {new Date(post.createdAt).toDateString()}
//         </span>
//       </div>
//       <p className="postDesc">{post.desc}</p>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  return (
    <div className="post">
      {post.photo && (

      <img
        className="postImg"
        src={post.photo}
        alt=""
      />
      )}
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music
            {/* <Link className="link" to="/posts?cat=Music">
              Music
            </Link> */}
          </span>
          <span className="postCat">Life
            {/* <Link className="link" to="/posts?cat=Life">
              Life
            </Link> */}
          </span>
        </div>
        <span className="postTitle">{post.title}
          {/* <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link> */}
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  );
}