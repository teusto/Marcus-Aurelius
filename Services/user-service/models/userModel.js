const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  wallets: [
    {
      wallet_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wallet'
      },
      wallet_address: {
        type: String,
        required: true
      }
    }
  ],
  preferences: {
    notifications_enabled: {
      type: Boolean,
      default: true
    },
    app_preferences: [
      {
        application_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Application'
        },
        notifications_enabled: {
          type: Boolean,
          default: true
        }
      }
    ]
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
