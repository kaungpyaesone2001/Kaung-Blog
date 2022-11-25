import { useState } from "react";

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title : "My New Blog",auther : "Kaung",id : 1,detail:"lorem loreaffaafjlafjlafjlafjlajflafjlafjlafjalfjalfjafjalsfslfaljflaf"},
        {title : "Breaking News of Wenesday",auther : "Yu Waddy",id : 2,detail:"lorem loreaffaafjlafjlafjlafjlajflafjlafjlafjalfjalfjafjalsfslfaljflaf"},
        {title : "All of Sports News",auther : "Hein Ko",id : 3,detail:"lorem loreaffaafjlafjlafjlafjlajflafjlafjlafjalfjalfjafjalsfslfaljflaf"},
    ])
   
    return ( 
        <div className="home">
           {blogs.map((blog)=>{
             return  (<div className="blog-preview" key={blog.id}>
                   <h2>{ blog.title }</h2>
                   <p>Written by{ blog.auther }</p>
               </div>)
           })}
        </div>
     );
}
 
export default Home;