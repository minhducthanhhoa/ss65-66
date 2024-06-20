import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const user:any = useSelector(state => {
        return state;
    })
  return (
    <div>
        <h1>Thông tin cá nhân</h1>
        <p>Id: {user.id}</p>
        <p>Họ và tên: {user.userName}</p>
        <p>Giới tính: {user.gender}</p>
        <p>Ngày sinh: {user.dateBirth}</p>
        <p>Địa chỉ: {user.address}</p>
    </div>
  )
}
