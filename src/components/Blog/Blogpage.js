import React from 'react'
import "./blog.css"
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { Markup } from 'interweave';
import Pagination from '@mui/material/Pagination';
const Blogpage = () => {

    const navigate = useNavigate();
    const [data, setdata] = useState([

    ]);

    const [page, setpage] = useState(1);

    const fetchdata = async () => {

        let response = await fetch("https://bitmemoir.org/posts/", {
            method: "GET",
        });

        let data = await response.text();
        data = JSON.parse(data);
        console.log(data);
                data = data.filter((item) => {
            return item.language === 'sp';
        })
        setdata(data);
        setpage(
            data.length % 10 === 0 ?
                data.length / 10 :
                Math.floor(data.length / 10) + 1

        )

    }
    function extractContent(s) {
        var span = document.createElement('span');
        span.innerHTML = s;
        var data = span.textContent || span.innerText;
        if(data.length > 100) data = data.substring(0, 100); 
        return data;
    };
    useEffect(() => {
        fetchdata();
    }, []);
    return (
        <div className='blogmainpage'>
            {/* <div style={{ color: "white", textAlign: "center", fontSize: "30px", fontWeight: "600" }} className="">
                 Blog
            </div> */}
            <div style={{color: "white", textAlign: "center", fontSize: "30px", fontWeight: "600",paddingTop:"30px"}}>Blogs</div>
            <div className="verifypage2">
                <div className='blog_display'>
                    <div className="container">
                        {
                            data===[]?
                            <div style={{
                                display: "flex",
                                paddingTop: "1rem",
                                backgroundColor: "#ffffff",
                                flexDirection: "column",
                                alignItems: "center",
                                borderRadius: "0.5rem",
                                borderWidth: "1px",
                                borderColor: "#E5E7EB",

                            }} className="">
                                Loading
                            </div>:
                            data.slice(0).reverse().map((item, idx) => {
                                return (
                                    <motion.div
                                        whileHover={{
                                            scale: 0.95
                                        }}
                                        onClick={() => {
                                            navigate(`/blogs/${item.id}`);
                                        }}
                                        style={{ color: "black" }} className="card">
                                        <div className="card__header">
                                            <img
                                                src={item.heading_image}
                                                alt="card__image"
                                                className="card__image"
                                                style={{ borderRadius: "10px", height: "208px", width: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div className="card__body">
                                            <span className="tag tag-blue">Technology</span>
                                            <h5>{item.title}</h5>
                                            {/* <p>
                                                <Markup content={item.content} />
                                            </p> */}
                                            <p className="card-text">{extractContent(item.content)} <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }} >Read More</span></p>
                                            {/* <h5 style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>Read More</h5> */}
                                        </div>
                                        {/* <div style={{ color: "black" }} className="card__footer">
                                            <div className="user">
                                                <div className="user__info">
                                                    <small>2h ago</small>
                                                </div>
                                            </div>
                                        </div> */}
                                    </motion.div>
                                )
                            })

                           

                        }
                        {
                            // data.slice(0).reverse().map((item, idx) => {
                            //     return (
                            //         <motion.div
                            //             whileHover={{
                            //                 scale: 0.95
                            //             }}
                            //             onClick={() => {
                            //                 navigate(`/blogs/${item.id}`);
                            //             }}
                            //             style={{ color: "black" }} className="card">
                            //             <div className="card__header">
                            //                 <img
                            //                     src={item.heading_image}
                            //                     alt="card__image"
                            //                     className="card__image"
                            //                     style={{ borderRadius: "10px", height: "208px", width: "100%", objectFit: "cover" }}
                            //                 />
                            //             </div>
                            //             <div className="card__body">
                            //                 <span className="tag tag-blue">Technology</span>
                            //                 <h5>{item.title}</h5>
                            //                 {/* <p>
                            //                     <Markup content={item.content} />
                            //                 </p> */}
                            //                 <p className="card-text">{extractContent(item.content)} <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }} >Read More</span></p>
                            //                 {/* <h5 style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>Read More</h5> */}
                            //             </div>
                            //             {/* <div style={{ color: "black" }} className="card__footer">
                            //                 <div className="user">
                            //                     <div className="user__info">
                            //                         <small>2h ago</small>
                            //                     </div>
                            //                 </div>
                            //             </div> */}
                            //         </motion.div>
                            //     )
                            // })
                        }
                    </div>
                </div>
                <div className='aside_bar_main'>
                    <h3>Recent Posts</h3>
                    <hr />
                    <div className='aside_bar'>
                        <div className="aside_bar_content">
                            <div className="aside_bar_content_header">
                                {
                                    data.slice(0).reverse().map((item, idx) => {
                                        if (idx > 4) return;
                                        return (
                                            <div className="aside_bar_content_body"
                                            onClick={() => {
                                                navigate(`/blogs/${item.id}`);
                                            }}
                                            >
                                                <div className="aside_bar_content_body_image">
                                                    <img
                                                        src={item.heading_image}
                                                        alt="card__image"
                                                        className="card__image"
                                                        style={{ borderRadius: "10px", height: "80px", width: "100%", objectFit: "cover" }}
                                                    />
                                                </div>
                                                <div className="aside_bar_content_body_text">
                                                    <h5>{item.title}</h5>
                                                    {/* <p>{item.author.first_name} {item.author.last_name}</p> */}
                                                </div>
                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            <div 
            className='pagination'
            >
                <Pagination count={page} color="primary" />
            </div>
        </div>
    )
}

export default Blogpage
