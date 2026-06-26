import { useState } from 'react'
import * as orderService from '../services/orderService'

export const useOrders = () => {

  const [currentOrder, setCurrentOrder] = useState(null)

  const createOrder = async (payload) => {
    const data = await orderService.createOrder(payload)
    setCurrentOrder(data)
    return data
  }

  const loadOrder = async (id) => {
    const data = await orderService.getOrderById(id)
    setCurrentOrder(data)
  }

  return {
    currentOrder,
    createOrder,
    loadOrder
  }
}