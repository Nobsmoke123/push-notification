const push = require('web-push');

let vapidKeys = { 
    publicKey:
    'BOXX38-hCaxpxmRZsuXVE_ii_bBPUxpZ-7Z0RaSufcq1Fc7Y6EwEyrXQU7B3rPaSQnIlYRBC5lZ-4YQIMufi4Hs',
   privateKey: 'nnPRYQFUTWUx04BipwTphbIrO9mIzVWqJ07jJONw91w' 
}

push.setVapidDetails('mailto:snoww3b@gmail.com',vapidKeys.publicKey, vapidKeys.privateKey);

// We pull this out from our database of store people that want to receive notification
let sub = {};

push.sendNotification(sub, 'Test Message');