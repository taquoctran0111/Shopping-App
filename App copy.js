import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { login, register, getproduct } from "./API";
export default function App() {
  const [token, setToken] = useState()
  const onLogin = async () => {
    const result = await login({
      "email": "abcd@gmail.com",
      "password": "123456"
    })
    console.log('Result login:', result.data)
  }
  const onRegister = async () => {
    const result = await register({
      "email": "abcd@gmail.com",
      "password": "123456",
      "userName": "tqt"
    })
    console.log('Result register:', result.data)
  }
  const onGetproduct = async () =>{
    const result = await getproduct()
    console.log('Get product:', result.data)
  }
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <TouchableOpacity onPress={onLogin}>
        <Text>Login</Text>
      </TouchableOpacity> 
      <TouchableOpacity onPress={onRegister}>
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onGetproduct}>
        <Text>Get products</Text>
      </TouchableOpacity>
    </View>
  )
}