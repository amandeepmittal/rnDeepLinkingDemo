import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

function Details({ navigation }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const item = navigation.getParam('item', {})

    if (Object.keys(item).length === 0) {
      const userId = navigation.getParam('userId', 1)
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(res => {
          const data = []

          Object.keys(res).forEach(key => {
            data.push({ key, value: `${res[key]}` })
          })

          setData(data)
        })
    } else {
      const data = []

      Object.keys(item).forEach(key => {
        data.push({ key, value: `${item[key]}` })
      })

      setData(data)
    }
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {data.map(data => (
        <Text
          style={{ fontSize: 20 }}
          key={data.key}>{`${data.key}: ${data.value}`}</Text>
      ))}
    </View>
  )
}

export default Details
