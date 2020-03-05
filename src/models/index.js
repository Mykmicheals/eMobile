// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SwapTicket, OrderBook, OrderTicket, PaymentProvider, UserAccount, Useraccess, UserData } = initSchema(schema);

export {
  SwapTicket,
  OrderBook,
  OrderTicket,
  PaymentProvider,
  UserAccount,
  Useraccess,
  UserData
};