import React from 'react'
import Count from './components/Count'
import Profile from './components/Bai1/Profile'
import ListUser from './components/Bai2/ListUser'
import ListProduct from './components/Bai3/ListProduct'
import Counter from './components/Bai4/Counter'
import RandomNumber from './components/Bai5/RandomNumber'
import ChangeState from './components/Bai6/ChangeState'

export default function App() {
  return (
    <div>
      <Count></Count>
      <Profile></Profile>
      <ListUser></ListUser>
      <ListProduct></ListProduct>
      <Counter></Counter>
      <RandomNumber></RandomNumber>
      <ChangeState></ChangeState>
    </div>
  )
}
