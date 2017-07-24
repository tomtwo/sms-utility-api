const nexmo = require('easynexmo');

const NEXMO_KEY = process.env.NEXMO_KEY;
const NEXMO_SECRET = process.env.NEXMO_SECRET;

try {
  nexmo.initialize(NEXMO_KEY, NEXMO_SECRET);
} catch (ex) {
  console.log('failed to initialize nexmo:', ex);

  console.log('** terminating server process');
  process.exit(1);
}

class NexmoService {
  sendTextMessage(sender, receiver, content) {
    return new Promise((resolve, reject) => {
      nexmo.sendTextMessage(sender, receiver, content, function(err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
}

export default new NexmoService();
