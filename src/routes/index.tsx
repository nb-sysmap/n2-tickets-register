import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth/AuthContext'
import Login from '../pages/Login/Login'

export function PrivateRoutes() {
  const { signed } = useContext(AuthContext)
  return signed ? <Outlet /> : <Navigate to="/" />
}
