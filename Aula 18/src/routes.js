import expresss from 'express'

import user from './user.js'

export default function(app){
    app
    .use(expresss.json())
    .use('/user', user)


}