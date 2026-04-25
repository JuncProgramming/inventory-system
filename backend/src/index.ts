import express from 'express'
import cors from 'cors'
import productRoutes from '@/routes/productRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/products', productRoutes)

app.listen(3000, () => console.log('Server listening on port 3000'))
