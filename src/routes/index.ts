import express from 'express'
import companiesRoutes from './companiesRoutes'
import unitsRoutes from './unitsRoutes'
import usersRoutes from './usersRoutes'

const routes = (app) => {

  app.use(
    express.json(),
    companiesRoutes,
    unitsRoutes,
    usersRoutes
  )
}

export default routes