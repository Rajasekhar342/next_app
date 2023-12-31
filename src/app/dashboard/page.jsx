'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'

const Dashboard = () => {
  // const [data, setData] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // const [isError, setIsError] = useState(false)
  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true)
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //       cache: 'no-store',
  //     })
  //     if (!res.ok) {
  //       setIsError(true)
  //     }
  //     const data = await res.json()
  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`,
    fetcher
  )
  console.log(data)
  return <div>Dashboard</div>
}

export default Dashboard
