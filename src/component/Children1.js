import React, { useState } from 'react'
import "./Web.css";
function Children1(props) {
    let [jsonUserData , setDataHandler]=useState(props.jsonUserData1)
    let [toggler , setToggleit]=useState(props.toggle);
    let [count , setCount]=useState(props.ct);
    let [newUser , setUser]=useState({
                                        id:count,
                                        name:"Silver stalon",
                                        username:"silverst",
                                        email:"stalon@123.com",
                                        phone:"+91-829992899",
                                        website:"hello_how.com",
                                        address:{
                                            street:"",
                                            suite:"",
                                            city:"",
                                            zipcode:"",
                                            geo:{
                                                lat:"",
                                                lng:""

                                            }},
                                        company:{
                                            name:"",
                                            catchPhrase:"",
                                            bs:""
                                        }

                                    })
                                    

    return (
    <div>
        <button className='btn btn-primary' onClick={(newUser)=>props.handleAdd(newUser)} >Add New User</button>
        <div className='  row'>
                                        {jsonUserData.map(user=>(<div className=' col-4'>
            

                <div className=' row m-3' style={{width: '28rem',marginRight:0}}>
                   
                <div className=" col-4  card"   >
                <ul className="list-group list-group-flush">
                    <li className="list-group-item left" >{Object.keys(user)[0]}</li>
                    <li className="list-group-item left">{Object.keys(user)[1]}</li>
                    <li className="list-group-item left">{Object.keys(user)[2]}</li>
                    <li className="list-group-item left">{Object.keys(user)[3]}</li>
                    <li className="list-group-item left">{Object.keys(user)[5]}</li>
                    <li className="list-group-item left">{Object.keys(user)[6]}</li>
                    <li style={{height:'10rem'}} className="list-group-item left">{Object.keys(user)[4]}</li>
                    <li style={{height:'9rem'}} className="list-group-item left">{Object.keys(user)[7]}</li>


                </ul>
            </div>



                <div className="col-8  card"   >
                <ul className="list-group list-group-flush">
                    <li className="list-group-item left-only">{user.id}</li>
                    <li className="list-group-item left-only">{user.name}</li>
                    <li className="list-group-item left-only">{user.username}</li>
                    <li className="list-group-item left-only">{user.email}</li>
                    <li className="list-group-item left-only">{user.phone}</li>
                    <li className="list-group-item left-only">{user.website}</li>
                    <li style={{height:'10rem'}} className="list-group-item left-only">
                        <div className="row">
                            <div className="col-4 " >
                                    <ul className="list-group list-group-flush" >
                                    { Object.keys(user.address).map(key1=>(
                                    <li className="left" style={{ listStyleType:"none" }}>{key1}</li>)) }    

                                    </ul>
                            </div>
                            <div className="col-8">
                            <ul className="list-group list-group-flush" >
                                       <li style={{ listStyleType:"none" }} >{user.address.street}</li>     
                                       <li style={{ listStyleType:"none" }} >{user.address.suite}</li>     
                                       <li style={{ listStyleType:"none" }} >{user.address.city}</li>          
                                       <li style={{ listStyleType:"none" }} >{user.address.zipcode}</li>          
                                       <li style={{ listStyleType:"none" }} >{user.address.geo.lat}</li>          
                                       <li style={{ listStyleType:"none" }} >{user.address.geo.lng}</li>          
                                    </ul>
                            </div>

                        </div>
                  
                    
                    </li>
                    <div className="row">
                            <div className="col-5 " >
                                    <ul className="list-group list-group-flush" >
                                    { Object.keys(user.company).map(key1=>(
                                    <li className="left" style={{ listStyleType:"none" }}>{key1}</li>)) }    

                                    </ul>
                            </div>
                            <div className="col-7">
                            <ul className="list-group list-group-flush" >
                                       <li className="left-only" style={{ listStyleType:"none" }} >{user.company.name}</li>     
                                       <li className="left-only" style={{ listStyleType:"none" }} >{user.company.catchPhrase}</li>     
                                       <li className="left-only" style={{ listStyleType:"none" }} >{user.company.name}</li>          
                                       
                                    </ul>
                            </div>

                        </div>

                    
                 
                </ul>
            </div >
            <div className="m-1  bg-light row"><div className="col-6"><button className="btn btn-info">Update</button></div>
            <div className="bg-light col-6"><button className="btn btn-danger" onClick={(user)=>props.handleDel(user)}>Delete</button></div></div>

                </div>

        

            
        </div>))}        
                            

        </div>

    </div>
  )
}

export default Children1