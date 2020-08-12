import React from 'react'
import SaleCards from '../../components/Cards/SaleCards/index'
import Title from '../../components/Title'
import HotCardGroup from '../../components/Cards/BasicCards/hotCardGroup'
import DailyCardGroup from '../../components/Cards/BasicCards/dailyCardGroup'




export default function Home() {
  return (
    <div id="app-wrapper">
      <SaleCards />

      <Title title="Hot Display" />
      <HotCardGroup />

      <Title title="Daily Sharing" />
      <DailyCardGroup />

    </div>
  )
}
