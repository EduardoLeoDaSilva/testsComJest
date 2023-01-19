import personRoutes from './personRoutes.js'

const injectRoutes = function (app) {
  app.use('/api/person', personRoutes)
}

export default injectRoutes
