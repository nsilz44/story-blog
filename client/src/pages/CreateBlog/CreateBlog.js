import { useState } from 'react';
import InputTextBox from '../../components/InputTextBox'
import  './CreateBlog.css';


async function sendStory(data){ 
    console.log(data)
    return fetch('http://localhost:8080/newstory', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
   }
     
export default function CreateBlog() {
    const [storyData,setStoryData] = useState({
        title: '',
        body: ''
    });
    const username = 'lmaosq111'

    const handleTitleChanage = (InputTextBox) => {
        setStoryData({title:InputTextBox,body:storyData.body});
    };

    const handleBodyChange = (InputTextBox) => {
        setStoryData({title:storyData.title,body:InputTextBox});
    };

    const submitStory = async e => {
        e.preventDefault();
            e.preventDefault();
            const response = await sendStory({
              title: storyData.title,
              body: storyData.body,
              username:username
            });
            console.log(response);
    }
    const titleLength = '255'
    const textLength = '50000'
    return(
        <div>
            <form onSubmit={submitStory}>
                <label> Title: </label>
                <InputTextBox id='title' maxLength={titleLength} onChange={handleTitleChanage}/>
                <label> Story:</label>
                <InputTextBox id='texts' maxLength={textLength} onChange={handleBodyChange}/>
                <label> Username: </label>
                <p id='username' > {username} </p>
                <button>Submit short story</button>
            </form>
            

        </div>
        

    )
}