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
  getBalance() {
    return new Promise((resolve, reject) => {
      console.log('fetching balance..');

      nexmo.checkBalance((err, res) => {
        if (err) {
          console.log('failed to check balance:', err);
          reject(err);
        } else {
          console.log('fetched balance:', res);
          resolve(res);
        }
      });
    });
  }

  sendTextMessage(sender, receiver, content) {
    return new Promise((resolve, reject) => {
      console.log(`sending message to ${receiver}..`);

      nexmo.sendTextMessage(sender, receiver, content, function(err, res) {
        if (err) {
          console.log(`..failed to send message to ${receiver}`, err);
          reject(err);
        } else {
          console.log(`..message sent to ${receiver}`, res);
          resolve(res);
        }
      });
    });
  }
}

export default new NexmoService();
