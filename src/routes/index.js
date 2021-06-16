const adPartRouter = require('../routes/Admin/Part/part.route');

const adTopicRouter = require('../routes/Admin/Topic/topic.route')
const adQuestionRouter = require('../routes/Admin/Question/question.route')
const adminAuthRoute = require('../routes/Admin/Auth/auth.route')
const markAuthRoute = require('../routes/User/Mark/mark.route')
const uploadRoute = require('../routes/upload')


function route(app) {
    app.use('/admin', adPartRouter);
    app.use('/admin', adTopicRouter);
    app.use('/auth', adminAuthRoute);
    app.use('/admin', adQuestionRouter);
    app.use('/user', markAuthRoute);
    app.use('/admin', uploadRoute);


}

module.exports = route;