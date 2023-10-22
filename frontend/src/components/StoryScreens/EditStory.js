import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import Loader from '../GeneralScreens/Loader';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthContext";
import { Row, Col} from 'react-bootstrap'
import { AiOutlineUpload } from 'react-icons/ai'
import '../../Css/EditStory.css'

const EditStory = () => {
    const { config } = useContext(AuthContext)
    const slug = useParams().slug
    const imageEl = useRef(null)
    const [loading, setLoading] = useState(true)
    const [story, setStory] = useState({})
    const [image, setImage] = useState('')
    const [previousImage, setPreviousImage] = useState('')
    const [title, setTitle] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')
    const [price, setPrice] = useState('')
    const [weight, setWeight] = useState('')
    const [status, setStatus] = useState('')
    const [content, setContent] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {

        const getStoryInfo = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get(`/story/editStory/${slug}`, config)
                setStory(data.data)
                setTitle(data.data.title)
                setAge(data.data.age)
                setHeight(data.data.height)
                setWeight(data.data.weight)
                setPrice(data.data.price)
                setStatus(data.data.status)
                setContent(data.data.content)
                setImage(data.data.image)
                setPreviousImage(data.data.image)
                setLoading(false)
            }
            catch (error) {
                navigate("/")
            }
        }
        getStoryInfo()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append("title", title)
        formdata.append("content", content)
        formdata.append("age", age)
        formdata.append("height", height)
        formdata.append("weight", weight)
        formdata.append("price", price)
        formdata.append("status", status)
        formdata.append("image", image)
        formdata.append("previousImage", previousImage)

        try {
            const { data } = await axios.put(`/story/${slug}/edit`, formdata, config)

            setSuccess('Edit Story successfully ')

            setTimeout(() => {
                navigate('/')
            }, 2500)

        }
        catch (error) {
            setTimeout(() => {
                setError('')
            }, 4500)
            setError(error.response.data.error)
        }
    }



    return (
        <>
            {
                loading ? <Loader /> : (
                    <div className="Inclusive-editStory-page ">
                        <form onSubmit={handleSubmit} className="editStory-form">

                            {error && <div className="error_msg">{error}</div>}
                            {success && <div className="success_msg">
                                <span>
                                    {success}
                                </span>
                                <Link to="/">Go home</Link>
                            </div>}

                            <Row>
              <Col md="6">
                <input
                  className="inp"
                  type="text"
                  required
                  placeholder="Tracking ID"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  autoFocus={true}
                />

                <input
                  className="inp"
                  type="text"
                  required
                  placeholder="What is the Price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
                <input
                  className="inp"
                  type="text"
                  placeholder="Chi's age"
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                />
              </Col>
              <Col md="6">
              <input
                  className="inp"
                  type="text"
                  placeholder="Chi's Weight"
                  onChange={(e) => setWeight(e.target.value)}
                  value={weight}
                />

                <input
                  className="inp"
                  type="text"
                  required
                  placeholder="Chi's Height"
                  onChange={(e) => setHeight(e.target.value)}
                  value={height}
                />
                <input
                  className="inp"
                  type="text"
                  placeholder="Health Status"
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                />
              </Col>
            </Row>

                            <CKEditor
                                editor={ClassicEditor}
                                onChange={(e, editor) => {
                                    const data = editor.getData();
                                    setContent(data)
                                }}
                                data={content}

                            />

                            <div class="currentlyImage">
                                <div class="absolute">
                                    Currently Image
                                </div>
                                <img src={`http://localhost:5000/storyImages/${previousImage}`} alt="storyImage" />
                            </div>
                            <div class="StoryImageField">
                                <AiOutlineUpload />
                                <div class="txt">

                                    {image === previousImage ? "    Change the image in your story " :
                                        image.name}

                                </div>
                                <input
                                    name="image"
                                    type="file"
                                    ref={imageEl}
                                    onChange={(e) => {
                                        setImage(e.target.files[0])
                                    }}
                                />
                            </div>

                            <button type='submit' className='editStory-btn'
                            >Edit Story </button>
                        </form>

                    </div>
                )
            }
        </>
    )
}

export default EditStory;