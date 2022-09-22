import "./Web.css"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
function WebServices1() {
    let [jsonUserData , setData]=useState([]);
    let [jsonUserData2 , setData2]=useState([]);
    let [count , setCount]=useState(11);
    let [toggler , setToggler]=useState(false);
    let [isUpdate , setUpdate]=useState(false);
    let [singleUser , setaddresse1]=useState(
        {
            id:"",
            name:"",
            username:"",
            email:"",
            phone:"",
            website:"",
            address:{
                street:"",
                suite:"",
                zipcode:"",
                geo:{lat:"",lng:""}},
            company:{
                name:"",
                catchPhrase:"",
                bs:""
            }

        }
    );
    //console.log(data.name);
    
        let hitUrl=async()=>{ 
            const {data :userData}=await axios.get("https://jsonplaceholder.typicode.com/users");
            setData(userData);
            
        };
        let handleAddUser=async()=>
                {
                        setCount(count+1);                    
                        setToggler(true);
                        if(toggler)
                        {
                            setTimeout(()=>{
                                setToggler(false);
                                console.log("hello");
                            },5000);
                        }
                        console.log("after if ")
                        setCount(count+1);
                        console.log("presse");
                    const newUser={
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

                    };
                    console.log("object",newUser);
                //    const {data:response}= await axios.post("https://jsonplaceholder.typicode.com/users",newUser);
                    //console.log('respo:',response);
                 jsonUserData.push(newUser);
//                       jsonUserData.push(response);
                       // console.log('response',response);
                        //console.log('json',jsonUserData);
                    //console.log(jsonUserData);
                    //setData(jsonUserData);
                    //this.state.posts.push(response);
                   // this.setState({posts:this.state.posts});
                    //console.log(response);
                    
          
                }    


    useEffect(()=>{
        
        hitUrl();
        console.log("count in effect",count);
        console.log("in useEffect",jsonUserData);
    } ,[]);
    

    let handleClick=()=>
    {
        console.log("due to clicked",jsonUserData);
    }
    let handleDelete=async(selectedUser)=>
    {
        setCount(count+1);
        console.log("before delete",selectedUser.id);
      //  const {data:response}=await axios.delete("https://jsonplaceholder.typicode.com/users"+'/'+selectedUser.id);

        jsonUserData.splice(jsonUserData.indexOf(selectedUser),1);
        console.log('after delet',jsonUserData);    
        setData(jsonUserData);
        console.log("code after dlet",jsonUserData);
    };
    let handleUpdater=()=>
    {   setUpdate(true);
        console.log(isUpdate);

    };
    let handleSubmiter=()=>{

    };
   
  return (
    <div className='bg-secondary '>
        
        <button className='btn btn-primary' onClick={handleAddUser} >Add New User</button>
        { toggler && <h3>New User Added Successfully check it at bottom of the page</h3> } 

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

            

            
            <div className="m-1  bg-light row"><div className="col-6">
            
                {  !isUpdate &&  <button className="btn btn-info" onClick={()=>handleUpdater(user)}  >Update</button>}
                { isUpdate &&  <button className="btn btn-info" onClick={()=>handleSubmiter(user)} >Submit</button>}

            </div>
            
            <div className="bg-light col-6"><button className="btn btn-danger" onClick={()=>handleDelete(user)}>Delete</button></div></div>

                </div>

        

            
        </div>))}        
                            

        </div>
    </div>
  )
}

export default WebServices1


/*
<li style={{height:'9rem'}} className="list-group-item left-only">{ user.company.name},{user.company.catchPhrase},{user.company.bs}</li>
<table>
                        <tbody>
                        <tr>
                            <td>street</td>
                            <td>{ user.address.street}</td>
                        </tr>
                        <tr>
                            <td>city</td>
                            <td>{ user.address.city}</td>
                        </tr>
                        <tr>
                            <td>zipcode</td>
                            <td>{ user.address.zipcode}</td>
                        </tr>
                        <tr>
                            <td>geo-lat</td>
                            <td>{user.address.geo.lat},{user.address.geo.lng}</td>
                        </tr>
                        <tr>
                            <td>geo-lng</td>
                            <td>{user.address.geo.lng}</td>
                        </tr>    
                        </tbody>    
                        </table>                            
*/
