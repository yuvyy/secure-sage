import React from 'react'
import '../Styles/Header.css'
import LogoutIcon from "@mui/icons-material/Logout";
export default function Header() {
  return (
      <>
          <div className="header">
              <div className="title">
                  <h1>Dashboard</h1>
              </div>
              <div className="login">
                 <LogoutIcon fontSize='large'/>
              </div>
          </div>
      </>
  )
}
