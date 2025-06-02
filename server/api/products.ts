import { defineEventHandler } from 'h3'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '~/assets/firebase'

export default defineEventHandler(async () => {
  const querySnapshot = await getDocs(collection(db, 'products'))

  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return products
})