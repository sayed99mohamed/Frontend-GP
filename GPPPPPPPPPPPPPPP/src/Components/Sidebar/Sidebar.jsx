import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return <>
    <div className="d-flex align-items-start">
      <div className="nav flex-column nav-pills me-3 bg-white px-5 py-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <Link to='home'><button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Home</button></Link>
        <Link to='project'><button className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Projects </button></Link>
        <Link to='settings'><button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Setting</button></Link>
      </div>
    </div>
  </>
}
