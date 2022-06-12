/* ----------------------- Message broker ----------------------- */

const { STATISTIC_BINDING_KEY } = require('../config/config.js')
const amqp = require('amqplib/callback_api')
const eventHendler = require('./eventsFunctions')

// create a channel

module.exports.CreatChannel = () => {
  amqp.connect('amqps://ynowgtny:wzTk0kKludPNXPmdIhKxp5NoUWfA6GXt@rat.rmq2.cloudamqp.com/ynowgtny', function (error0, connection) {
    if (error0) {
      console.log(error0)
      throw error0
    }
    console.log('succesfull connection with rabbitMq server')
    connection.createChannel(function (error1, channel) {
      module.exports.channel = channel
      // consume messages part
      if (error1) {
        console.log(error1)
      }
      channel.assertQueue(STATISTIC_BINDING_KEY, {
        durable: false
      })
      channel.consume(STATISTIC_BINDING_KEY, async function (msg) {
        const data = JSON.parse(msg.content)
        console.log(' [x] Received ' + data[0].event)
        await eventSwitcher(data[0].event, data[0].payload)
      }, {
        // automatic acknowledgment mode,
        noAck: true
      })
    })
  })
  // TODO add the connection close method
}

// publish messages
module.exports.PublishMessage = (channel, BINDING_KEY, message) => {
  channel.assertQueue(BINDING_KEY, {
    durable: false
  })
  channel.sendToQueue(BINDING_KEY, Buffer.from(JSON.stringify(message)), { persistent: true })
  console.log(' [x] send %s', message)
}

async function eventSwitcher (event, payload) {
  switch (event) {
    case 'UPDATE-SUBCATEGORY':
      await eventHendler.updateSubCategory(payload)
      break
    case 'ADD-SUBCATEGORY':
      await eventHendler.addSubCategory(payload)
      break
    case 'ADD-EVENT':
      eventHendler.addEvent(payload)
      break
    case 'ADD-EVENT-TO-SUBCATEGORY':
      await eventHendler.addEventToSubCategory(payload)
      break
    case 'DELETE-EVENT':
      await eventHendler.deleteEvent(payload)
      break
    case 'DELETE-EVENT-FROM-SUBCATEGORY':
      await eventHendler.deletEventFromSubCategory(payload)
      break
    case 'UPDATE-USER-STAT':
      await eventHendler.updateUser(payload)
      break
    case 'ADD-PURCHASE-STAT':
      await eventHendler.addPurchase(payload)
      break
    case 'REMOVE-FROM-CITY':
      await eventHendler.removeFromCity(payload)
      break
    case 'ADD-TO-CITY':
      await eventHendler.addToCity(payload)
      break

    default:
      break
  }
}
