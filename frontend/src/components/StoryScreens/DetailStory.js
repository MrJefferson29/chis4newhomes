import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../../Css/DetailStory.css";
import Loader from "../GeneralScreens/Loader";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit, FiArrowLeft } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const DetailStory = () => {
  const [likeStatus, setLikeStatus] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [activeUser, setActiveUser] = useState({});
  const [story, setStory] = useState({});
  const [storyLikeUser, setStoryLikeUser] = useState([]);
  const [sidebarShowStatus, setSidebarShowStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const slug = useParams().slug;
  const [storyReadListStatus, setStoryReadListStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getDetailStory = async () => {
      setLoading(true);
      var activeUser = {};
      try {
        const { data } = await axios.get("/auth/private", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        activeUser = data.user;

        setActiveUser(activeUser);
      } catch (error) {
        setActiveUser({});
      }

      try {
        const { data } = await axios.post(`/story/${slug}`, { activeUser });
        setStory(data.data);
        setLikeStatus(data.likeStatus);
        setLikeCount(data.data.likeCount);
        setStoryLikeUser(data.data.likes);
        setLoading(false);

        const story_id = data.data._id;

        if (activeUser.readList) {
          if (!activeUser.readList.includes(story_id)) {
            setStoryReadListStatus(false);
          } else {
            setStoryReadListStatus(true);
          }
        }
      } catch (error) {
        setStory({});
        navigate("/not-found");
      }
    };
    getDetailStory();
  }, [slug, setLoading]);

  const handleLike = async () => {
    setTimeout(() => {
      setLikeStatus(!likeStatus);
    }, 1500);

    try {
      const { data } = await axios.post(
        `/story/${slug}/like`,
        { activeUser },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setLikeCount(data.data.likeCount);
      setStoryLikeUser(data.data.likes);
    } catch (error) {
      setStory({});
      localStorage.removeItem("authToken");
      navigate("/");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Do you want to delete this post")) {
      try {
        await axios.delete(`/story/${slug}/delete`, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editDate = (createdAt) => {
    const d = new Date(createdAt);
    var datestring =
      d.toLocaleString("eng", { month: "long" }).substring(0, 3) +
      " " +
      d.getDate();
    return datestring;
  };

  const addStoryToReadList = async () => {
    try {
      const { data } = await axios.post(
        `/user/${slug}/addStoryToReadList`,
        { activeUser },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setStoryReadListStatus(data.status);

      document.getElementById("readListLength").textContent =
        data.user.readListLength;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styles>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="Inclusive-detailStory-page">
            <div className="top_detail_wrapper">
              <Link to={"/"}>
                <FiArrowLeft />
              </Link>
              <div className="story-general-info">
                {activeUser &&
                story.author &&
                story.author._id === activeUser._id ? (
                  <div className="top_story_transactions">
                    <Link
                      className="editStoryLink"
                      to={`/story/${story.slug}/edit`}
                    >
                      <FiEdit />
                    </Link>
                    <span style={{justifyContent: 'end'}} className="deleteStoryLink" onClick={handleDelete}>
                      <RiDeleteBin6Line />
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
            <Row>
              <Row className="story-content">
                <Col md="6" style={{marginTop: '15px'}}>
                  <div className="story-banner-img">
                    <img
                      src={`/storyImages/${story.image}`}
                      alt={story.title}
                    />
                  </div>
                </Col>
                <Col md='5' style={{marginTop: '15px'}}>
                <p style={{float: 'right', fontSize: '1.6rem', fontWeight: '900', color: '#000', boxShadow: '2px 2px 2px 2px', padding: '5px'}}>{story.price}£</p>

                <p className="name" style={{fontSize: '1.3rem', fontWeight: '700'}}><font>{story.title}</font> is About {story.age} old,</p>
                <p style={{fontSize: '1.3rem', fontWeight: '700'}}>Weighs {story.weight} lbs, and is {story.height} ft tall</p>
                <p style={{fontSize: '1.3rem', fontWeight: '600'}}>Health Status: <FontAwesomeIcon icon={faHeart} style={{color: 'burlywood'}}/><font style={{fontWeight: '800'}}>{story.status}</font></p>
                  <p
                    className="content" dangerouslySetInnerHTML={{ __html: story.content }}></p>
                    <p className="contents">To proceed in the adoption of {story.title}, contact our customer support, on the messages icon on the screen.</p>
                </Col>
              </Row>
            </Row>
          </div>
        </>
      )}
    </Styles>
  );
};

export default DetailStory;

const Styles = styled.div``