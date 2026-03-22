import express from 'express'
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(productRoutes)

app.listen(3000, () => 'Server listening on port 3000')
