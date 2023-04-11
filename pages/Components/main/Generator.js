import React, { useState, useRef } from 'react'
import Link from 'next/link';
const Generator = () => {
    const [description, setDescription] = useState([]);
    const loaderTheBike = useRef(null);
    const [payload, setPayload] = useState({
        productName: '',
        productDescription: '',
        numResults: null
    });
    
    const onChange = (e) => {
        const { name, value } = e.target;
        setPayload({ ...payload, [name]: value });
        console.log("payload", payload);
    }
    const generateDescription = async (e) => {
        try {
           
        e.preventDefault();

        const { productName, productDescription, numResults } = payload;
        if (productName && productDescription && numResults) {
           if(Number(numResults)<1){
              alert("Number of results should be greater than 0");
           } else{
            loaderTheBike.current.style.display = "block";
            e.target.innerHTML = "Generating...";
            e.target.disabled = true;
            const result = await fetch('https://chatgpt.merlinwms.co.uk/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(payload),

            });
            const data = await result.json();
            const updatedData = data.data.map(obj => {
                const key = Object.keys(obj)[0]; 
                const newKey = key.substring(0, key.length - 1); 
                const value = obj[key]; 
                return { [newKey]: value }; 
              });
              console.log("updatedData", updatedData);
              loaderTheBike.current.style.display = "none";
            e.target.innerHTML = "Generate Again";
            e.target.disabled = false;
            setDescription(updatedData);
           }
        }
        else {
            loaderTheBike.current.style.display = "none";
            e.target.innerHTML = "Start";
            e.target.disabled = false;
            alert("Please fill all the fields");
        }
        } catch (error) {
            alert(error.message)
        }
    }

    const copyText = (e) => {
        const text = e.target.parentElement.parentElement.children[0].innerHTML;
        navigator.clipboard.writeText(text).then(() => {
            e.target.innerHTML = "Text Copied"
            e.target.classList.remove("btn-primary");
            e.target.classList.add("btn-success");
            setTimeout(() => {
                e.target.classList.remove("btn-success");
                e.target.classList.add("btn-primary");
                e.target.innerHTML = "Copy Text"
            }, 1000);
        }, (err) => {
            alert('Could not copy text, Try Again')
        });
    }
    return (
        <>

            <div style={{ height: '90vh' }} className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-user">
                            <div className="card-header">
                                <h5 className="card-title">Generate Description</h5>
                            <Link href="/Components/main/Chat" className='btn btn-warning d-flex float-right'>Start Chat</Link>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label><strong>Product Name</strong></label>
                                                <input type="text" onChange={onChange} name='productName' defaultValue={payload.productName} className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label><strong>Add Keywords</strong></label>
                                                <input type="text" onChange={onChange} name='productDescription' defaultValue={payload.productDescription} className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label><strong>No. of Result</strong></label>
                                                <input type="number" onChange={onChange} name='numResults' defaultValue={payload.numResults} className="form-control" placeholder="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="update mx-3">
                                            <button onClick={generateDescription} type="submit" className="btn btn-primary btn-round">Start</button>
                                        </div>
                                        <div className="update mx-3">
                                            <svg style={{ display: 'none' }} class="bike" ref={loaderTheBike} id='bikeLoader' viewBox="0 0 48 30" width="48px" height="30px">
                                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                                                    <g transform="translate(9.5,19)">
                                                        <circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
                                                        <g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
                                                            <circle class="bike__spokes" r="5" />
                                                            <circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
                                                        </g>
                                                    </g>
                                                    <g transform="translate(24,19)">
                                                        <g class="bike__pedals-spin" stroke-dasharray="25.133 25.133" stroke-dashoffset="-21.991" transform="rotate(67.5,0,0)">
                                                            <circle class="bike__pedals" r="4" />
                                                            <circle class="bike__pedals" r="4" transform="rotate(180,0,0)" />
                                                        </g>
                                                    </g>
                                                    <g transform="translate(38.5,19)">
                                                        <circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
                                                        <g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
                                                            <circle class="bike__spokes" r="5" />
                                                            <circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
                                                        </g>
                                                    </g>
                                                    <polyline class="bike__seat" points="14 3,18 3" stroke-dasharray="5 5" />
                                                    <polyline class="bike__body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" stroke-dasharray="79 79" />
                                                    <path class="bike__handlebars" d="m30,2h6s1,0,1,1-1,1-1,1" stroke-dasharray="10 10" />
                                                    <polyline class="bike__front" points="32.5 2,38.5 19" stroke-dasharray="19 19" />
                                                </g>
                                            </svg>
                                            {/* <div className="customLoader text-primary">Loading...</div> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label>
                                            <strong className='mx-3' style={{ fontSize: "large" }}>Result</strong>
                                        </label>
                                        {
                                            description.map((item,index) => {
                                               
                                     
                                                return (
                                                    <div className="col-md-12" key={index}>
                                                        <div className="form-group">
                                                            <div className="form-control">
                                                                <div className="d-flex justify-content-start">{item.blogPost}</div>
                                                                <div className="d-flex justify-content-end mt-2">
                                                                    <button type='button' onClick={copyText} className="btn btn-primary">Copy Text</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                      
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Generator
