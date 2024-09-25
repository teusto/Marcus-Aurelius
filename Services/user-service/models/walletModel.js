const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  wallet_address: {
    type: String,
    required: true,
    unique: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  chain_id: {
    type: Number,
    required: true
  },
  signed_notifications: [
    {
      notification_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notification'
      },
      signature: {
        type: String,
        required: true
      },
      transaction_hash: {
        type: String,
        required: true
      }
    }
  ]
});

const Wallet = mongoose.model('Wallet', walletSchema);
module.exports = Wallet;
