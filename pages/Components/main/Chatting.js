import React, { useState, useRef } from 'react'
import Link from 'next/link';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
const Chatting = () => {
  const [inProgress, setInProgress] = useState(false);


  const emmetMesage = useRef(null);
  const messageLoaderf = useRef(null);
  const typingOrNOt = useRef(null);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Write your API call code here and update the apiValue state accordingly
  }
  const [message, setMessage] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Send the message
      sendMessage();
    }
  };
  const formatedCode = (code) => {
    try {
      const options = {
        parser: 'babel',
        plugins: [parserBabel],
        semi: true,
        singleQuote: true,
        jsxSingleQuote: true,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
      };
      return prettier.format(code, options);
    } catch (error) {
      console.error("Failed to format code", error);
      return code;
    }

  }
  const emmetMessage = (userMesage) => {
    emmetMesage.current.innerHTML += `
    <li class="clearfix">
      <div class="message-data">
        <img src="/main/assets/img/cybercell.png" alt="avatar" />
        <span class="message-data-time">${getCurrentTime()}</span>
      </div>
      <div class="message my-message">${userMesage}</div>
    </li>
    `;
  }
  const emmetBotMessage = (botMessage) => {
    emmetMesage.current.innerHTML += `
    <li class="clearfix">
        <div class="message-data text-right">
           <span class="message-data-time">${getCurrentTime()}</span>
          <img class='mx-2' src="/main/assets/img/chatgpt.png" alt="avatar" />
         </div>
          <div style = "width:70%"  class="message other-message float-right text-left"> ${botMessage} </div>
        </li>
    `;
  }
  const verifyAnswer = (str) => {
    const regex = /^`{3}(?:\s*\w+)?([\s\S]*)`{3}$/gm;
    const match = regex.exec(str);
    if (match) {
      const snip = match[1].trim();
      const formated = formatedCode(snip);
      const code = `<b>${formated}</b>`;
      const other = str.substring(0, match.index) + str.substring(match.index + match[0].length);
      return `${other}<br><br>${code}`;
    } else {
      return `${str}<br><br>`;
    }
  }
  const getCurrentTime = () => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const date = new Date().toLocaleString("en-US", { timeZone });
    const time = new Date(date).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const today = new Date().toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    return `${time}, ${today}`;
  };

  const sendMessage = async () => {
    if (inProgress) {
      alert('Please wait for the previous request to complete')
    } else {
      if (message.length < 5) {
        alert("Please enter a valid message");
      } else {
        // Send the message logic here
        setMessage('');
        emmetMessage(message);


        try {
          setInProgress(true);
          messageLoaderf.current.style.display = 'block';
          typingOrNOt.current.innerHTML = 'Typing...';
          const response = await fetch('https://chatgpt.merlinwms.co.uk/askedQuestion', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_input: message }),
          });
          const data = await response.json();
          messageLoaderf.current.style.display = 'none';
          typingOrNOt.current.innerHTML = 'Online';
          let res = verifyAnswer(data.answer);
          emmetBotMessage(res);
          setInProgress(false);
        } catch (error) {
          setInProgress(false);
          messageLoaderf.current.style.display = 'none';
          typingOrNOt.current.innerHTML = 'Online';
          emmetBotMessage(error.message);
        }
      }
    }

  };

  const handleChange = (event) => {
    setMessage(event.target.value);

  };
  const clearChat = () => {
    emmetMesage.current.innerHTML = '';
  }
  return (
    <div style={{ height: '90vh' }} className="content">
      <div className="container my-3">
        <div className="row clearfix">
          <div className="col-lg-12">
            <Link href="/" className='btn btn-warning'>Generate Desription</Link>
            <div className="card chat-app">
              <div className="chat">
                <div className="chat-header clearfix">
                  <div className="row">
                    <div className="col-lg-6">
                      <a data-toggle="modal" data-target="#view_info">
                        <img src="/main/assets/img/chatgpt.png" alt="avatar" />
                      </a>
                      <div className="chat-about">
                        <h6 className="m-b-0">Chat GPT</h6>
                        <strong> <span className='text-success' ref={typingOrNOt}>Online</span></strong>
                      </div>
                    </div>
                    <div className="col-lg-6 hidden-sm text-right">
                      <a onClick={clearChat} className="btn btn-outline-danger"><i
                        className="fa fa-remove"></i></a>
                    </div>
                  </div>
                </div>
                <div style={{ minHeight: '500px', maxHeight: '500px', overflowY: 'auto' }} className="chat-history">
                  <ul className="m-b-0">
                    <div ref={emmetMesage}></div>
                    <li ref={messageLoaderf} style={{ display: 'none' }} className="clearfix">
                      <div className="message-data text-right">
                        <span className="message-data-time">{getCurrentTime()}</span>
                        <img className='mx-2' src="/main/assets/img/chatgpt.png" alt="avatar" />
                      </div>
                      <div className=" other-message float-right"> <div className="message-typing">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div></div>
                    </li>
                  </ul>
                </div>
                <div className="chat-message clearfix">
                  <div className="input-group mb-0">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fa fa-send"></i></span>
                    </div>
                    <textarea class="form-control" value={message}
                      onKeyDown={handleKeyDown}
                      onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                    {/* <textarea
                      className="form-control"
                      placeholder="Enter text here..."
                      
                    /> */}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatting

