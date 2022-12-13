import express from 'express'
import companiesRoutes from './companiesRoutes'
import unitsRoutes from './unitsRoutes'
import usersRoutes from './usersRoutes'
import assetsRoutes from './assetsRoutes'

const routes = (app) => {

  app.use(
    express.json(),
    assetsRoutes,
    companiesRoutes,
    unitsRoutes,
    usersRoutes
  )
}

export default routes