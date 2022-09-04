import React from 'react'
import '../../Styles/AppEdit.scss'
import logo from '../../Assets/gly.png'


const Panel = () => {
  return (
    <div className='panel-container'>
     <div className='panel'>
        <div className='left-side'>
         <img 
         className='logo' 
         src={logo}
          />
         <h3 id='desc'>Glydetek Developer Membership</h3>
         </div>
         <div className='right-side'>
         <h1><i class="fa-regular fa-circle-user fa-3x"></i></h1>
            <div className='rightside-container'>
           <p className='input-text'>Username</p>
           <input type='email' name='email'  className='txtbox'  />

            <p className='input-text'>Password <sup>*</sup> </p>
           <input type='password' name='pword'  className='txtbox' />   

           <input type="submit" name='login' value='Log In' className='btnLogin'/>

           <h3>Continue With:</h3>

            <div className='icon-container'>
              <div className='icon'>
              <i class="fa-brands fa-google fa-2x"></i>
              </div>
              <div className='icon'>
              <i class="fa-brands fa-facebook fa-2x"></i>
              </div>
              <div className='icon'>
              <i class="fa-brands fa-linkedin fa-2x"></i>
              </div>
              <div className='icon'>
              <i class="fa-brands fa-twitter fa-2x"></i>
              </div>
            </div>
           <p>Don't have an acoount? <a href='#'>Create one.</a></p>
           </div>
         </div>
     </div>
     </div>
  )
}

export default Panel