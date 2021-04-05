import {useState} from 'react'
import {} from 'react-bootstrap'
import { useSelector } from "react-redux";
import axios from 'axios';

function Profile() {

    const user = useSelector(state => state.Sign.username)
    const [myImage, setMyImage] = useState("")
    const [myImageURL, setMyImageURL] = useState("")

    function uploadImage (event){
        setMyImage(event.target.files[0])
      }
    
      function hit (){
        console.log(myImage)
        const formData = new FormData();
        formData.append('file', myImage)
        formData.append('upload_preset',"jbsrcmbu")
        axios.post("https://api.cloudinary.com/v1_1/suryanto23/image/upload",formData)
          .then(res => {
            console.log("post sukses" ,res.data.url)
           
            setMyImageURL(res.data.url)
            console.log("isi " ,myImageURL)
          })
      }


    return (
        <div>
        <h1>User Profile</h1>
        <h1>{user}</h1>
   
        <input type="file" onChange={uploadImage} />
        <button type="submit" onClick={hit}>Click</button>
        
        {myImageURL 
            ? <img src={myImageURL} alt="image" />
            : <></>
        }
        


   
       </div>
    )
}

export default Profile
