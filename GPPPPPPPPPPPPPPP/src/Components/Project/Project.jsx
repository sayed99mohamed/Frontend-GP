// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Posts from '../Posts/Posts';


// export default function Project() {

//     let [projectTitle , setProjectTitle] = useState() // input data da el Shail elmaktob aw el files bta3t el user
//     let [projectSubmited , setProjectSubmited] = useState()
//     let [file , setFile] = useState()
//     let [projectsReturned ,setProjectsReturned ] = useState(['sayed'])


//     // async function getProjects(){
//     //   try {
//     //     let response = await axios.get(''); // Replace with your actual API endpoint
//     //     let { projects } = response.data;
//     //     console.log(projects);
//     //     console.log(projects.title);
//     //     console.log(projects.files);
//     //     setProjectsReturned(projects);

//     //   } catch (error) {
//     //     console.error('Error fetching projects:', error);
//     //   }

//     // }

//     // useEffect(()=>{
//     //   getProjects()
//     // },[])
//     // useEffect(()=>{
//     //   getProjects()
//     // },[projectSubmited])

//     function fileUploaded (e){
//       let selectedFile = e.target.files[0];
//       setFile(selectedFile);
        
//     }
      
//     function SubmitProject(e){
//     e.preventDefault()
//     console.log(projectTitle)
//     console.log(file) 
//     setProjectSubmited(projectTitle)
//     setProjectsReturned([...projectsReturned, projectTitle]);


// //     const handleSubmit = (event) => {
// //       event.preventDefault();
  
// //       // Make sure the file input is a File object
// //       // Ensure all necessary data is available
// //       if (!username || !password || !img || !active || !email) {
// //           console.error('Missing required data');
// //           return;
// //       }
  
// //       Create a FormData object to send the data including the image file
// //       const formData = new FormData();
// //       formData.append('username', username);
// //       formData.append('password', password);
// //       formData.append('img', img);
// //       formData.append('active', active);
// //       formData.append('email', email);

// //       axios
// //           .post('/add-user', formData, config)
// //           .then((response) => {
// //               // Handle the success response here
// //               console.log('User added or updated successfully', response.data);
// //           })
// //           .catch((error) => {
// //               // Handle any errors here
// //               console.error('Error adding or updating user', error);
// //           });


// //           clearForm();
// //           setActive("");
// //           setPassword("");
// //           setUsername("");
// //           setEmail("");

// //     };


    
// // setMyArray([...myArray, newData]);

   

// // displayProjects()


//     // setFile(null)
//     // setProjectTitle('')
//     // e.target.reset()
//     // console.log('sayed is here')
//     }

//     function projectBrief(e){
//         setProjectTitle(e.target.value)
//     }

//   return <>
//   <div className=''>
//     <div className="container mt-1 bg-white">
//       <form onSubmit={SubmitProject}>
//         <div className="input-group p-3 mb-3">
//             <input onChange={projectBrief} type="text" className="form-control w-100 mb-2 border-2" placeholder='Project brief'  id="" />
//             <input onChange={fileUploaded} type="file" className="form-control"  id="" />
//             <button className="btn btn-warning mx-1">Upload</button>
//         </div>
//       </form>
//     </div>

//     {projectsReturned.map((project , index)=> <div key={index} className='col-md-8'>{project}</div>)}
    
//     {/* 3taln hena 3shan be7sal auto render w override 3la el maktob */}
//     {/* <div>{projectTitle?<div><h2>{projectTitle}</h2></div>:''}</div> */}
  
//     {/* </div> 
//        <Posts projectTitle = {projectTitle}/>
//     <div>  */}
   
     
//   </div>
//   </>
// }

// export default function Project() {

//   let [projectTitle , setProjectTitle] = useState() // input data da el Shail elmaktob aw el files bta3t el user
//   let [file , setFile] = useState()
//   let [projectsReturned ,setProjectsReturned ] = useState([])


//   async function getProjects(){
//     try {
//       let response = await axios.get(''); // Replace with your actual API endpoint
//       let { projects } = response.data;
//       console.log(projects);
//       console.log(projects.title);
//       console.log(projects.files);
//       setProjectsReturned(projects);

//     } catch (error) {
//       console.error('Error fetching projects:', error);
//     }

//   }

//   useEffect(()=>{
//     getProjects()
//   },[])

//   useEffect(()=>{
//     getProjects()
//   },[projectSubmited])

//   function fileUploaded (e){
//     let selectedFile = e.target.files[0];
//     setFile(selectedFile);
      
//   }
    
//   function SubmitProject(e){
//   e.preventDefault()
//   console.log(projectTitle)
//   console.log(file) 

//   // setProjectsReturned([...projectsReturned, projectTitle]); 
//   // setMyArray([...myArray, newData]);
//   }

 


//   function projectBrief(e){
//       setProjectTitle(e.target.value)
//   }

// return <>
// <div className=''>
//   <div className="container mt-1 bg-white">
//     <form onSubmit={SubmitProject}>
//       <div className="input-group p-3 mb-3">
//           <input onChange={projectBrief} type="text" className="form-control w-100 mb-2 border-2" placeholder='Project brief'  id="" />
//           <input onChange={fileUploaded} type="file" className="form-control"  id="" />
//           <button className="btn btn-warning mx-1">Upload</button>
//       </div>
//     </form>
//   </div>

//   {projectsReturned.map((project , index)=> <div key={index} className='col-md-8'>{project}</div>)}
  
 

   
// </div>
// </>
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from '../Posts/Posts';

export default function Project() {
  const [projectTitle, setProjectTitle] = useState('');
  const [file, setFile] = useState(null);
  const [projectsReturned, setProjectsReturned] = useState([]);
  const [projectSubmitted, setProjectSubmitted] = useState(false);

  async function getProjects() {
    try {
      let response = await axios.get('');
      let { projects } = response.data;
      setProjectsReturned(projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }

  useEffect(() => {
    getProjects();
  }, [projectSubmitted]);

  async function submitProject(e) {
    e.preventDefault();

    try {
      let formData = new FormData();
      formData.append('projectTitle', projectTitle);
      formData.append('file', file);

      // Send the FormData object in the request
      await axios.post('', formData);

      // Reset form values
      // setProjectTitle('');
      // setFile(null);              fok el comment w graab

      // Trigger fetching projects after submission
      setProjectSubmitted((prev) => !prev);

      // Update projectsReturned state with the newly submitted project
      setProjectsReturned((prevProjects) => [
        ...prevProjects,
        { title: projectTitle, files: [file.name] }, // Adjust the structure based on your API response
      ]);
    } catch (error) {
      console.error('Error submitting project:', error);
    }
  }

  function fileUploaded(e) {
    let selectedFile = e.target.files[0];
    setFile(selectedFile);
  }

  function projectBrief(e) {
    setProjectTitle(e.target.value);
  }

  return (
    <>
      <div className="">
        <div className="container mt-1 bg-white">
          <form onSubmit={submitProject}>
            <div className="input-group p-3 mb-3">
              <input
                onChange={projectBrief}
                value={projectTitle}
                type="text"
                className="form-control w-100 mb-2 border-2"
                placeholder="Project brief"
                id=""
              />
              <input onChange={fileUploaded} type="file" className="form-control" id="" />
              <button type="submit" className="btn btn-warning mx-1">
                Upload
              </button>
            </div>
          </form>
        </div>

        {projectsReturned.map((project, index) => <Posts key={index} project={project}/>)}
      </div>
    </>
  );
  
}
// <div key={index} className="col-md-8">
//   {/* Display project information here */}
//   <p>Title: {project.title}</p>
//   {/* <p>Files: {project.files.join(', ')}</p> */}
// </div>
