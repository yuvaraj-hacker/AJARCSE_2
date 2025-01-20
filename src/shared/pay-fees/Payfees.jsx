import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';
function Payfees() {

    

    return (
      <>

<section >
    <div class="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
        <div class="lg:flex md:flex  gap-8 ">
            <div class="max-w-full w-full ">
                <h1 class="text-primary-blue-color text-3xl font-bold ">Pay Fees</h1>
                <div class="lg:max-w-3xl max-w-xl w-full mx-auto  ">
                    <div   class=" dark:bg-gray-900 lg:px-20 lg:py-10 px-5 py-5">
                       <div class="py-8 lg:py-5 px-4 mx-auto max-w-screen-md bg-white rounded-3xl border border-slate-300  shadow shadow-primary-skyblue-color">
                           <h2 class="mb-4 text-4xl  font-extrabold text-center text-gray-900 dark:text-white fnt">Pay Your Fees</h2>
                          
                           <form     class="w-full space-y-4" ngNativeValidate>
                             <div>
                               <label for="email" class="block mb-2 text-sm   text-gray-900 dark:text-gray-300">Amount</label>
                               <input type="text" name="name" id="name" ngModel class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Your Name" required/>
                           </div>
                           <div>
                            <label for="email" class="block mb-2 text-sm   text-gray-900 dark:text-gray-300">Name</label>
                            <input type="text" name="name" id="name" ngModel class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Your Name" required/>
                        </div>
                             <div>
                                   <label for="email" class="block mb-2 text-sm   text-gray-900 dark:text-gray-300">Email</label>
                                   <input type="email" name="email" id="email" ngModel class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
                               </div>
                               <div>
                                 <label for="email" class="block mb-2 text-sm   text-gray-900 dark:text-gray-300">Contact Number</label>
                                 <input type="text" name="number" id="number" ngModel class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Your Mobile Number" required/>
                             </div>
                             <div>
                                <label for="email" class="block mb-2 text-sm   text-gray-900 dark:text-gray-300">Paper Id</label>
                                <input type="text" name="name" id="name" ngModel class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Your Name" required/>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm   text-gray-900 dark:text-gray-300">Paper Title</label>
                                <input type="text" name="name" id="name" ngModel class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Your Name" required/>
                            </div>
                               {/* <!-- <div>
                                 <label for="service"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Service You Need</label>
                             
                                 <select id="service" id="service" name="service" ngModel class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                   <option value="" selected >Choose a Service</option> 
                                   <option value="DESIGN & DETAIL ENGINEERING">DESIGN & DETAIL ENGINEERING</option> 
                                   <option value="PEB & BRIDGE DETAILING">PEB & BRIDGE DETAILING</option>                      
                                   <option value="CIVIL & MECHANICAL">CIVIL & MECHANICAL</option>                      
                                   <option value="MAN POWER CONSULTANCY">MAN POWER CONSULTANCY</option>      
                                   <option value="TRAINING & PLACEMENTS">TRAINING & PLACEMENTS</option>
                                   <option value="PIPING & ELECTRICAL">PIPING & ELECTRICAL</option>   
                                 
                                 </select>
             
                               </div> --> */}
                            
                               <button type="submit" class="py-3 px-5 text-sm bg-primary-blue-color  text-center text-white rounded-lg bg-primary-red-color sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                           </form>
                           
{/* <!--               
               @if (isloadingenable==true) {
             
                 <div class=" absolute z-20 left-0 top-0 h-full w-full bg-[rgba(18,18,18,0.44)] ">
               
                   <div class="image-container absolute z-30 top-0  h-[100vh] w-full  flex justify-center items-center">
                     <img    class="flip-with-scale" src="logo/vivid.png" alt="">
                   </div>
                 </div>
                 } --> */}
                       </div>
                     </div>
             
                   </div>
                 
                
            </div>
            
            <Sidebar/>

        </div>
       
   <h1 class="bg-slate-300 h-[1px] w-full mt-5"></h1>
    </div>
 
</section>

 


</>
  )
}

export default Payfees