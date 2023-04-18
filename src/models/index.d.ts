import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type SwapTicketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderBookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderTicketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PaymentProviderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserAccountMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UseraccessMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerSwapTicket = {
  readonly id: string;
  readonly UserID: string;
  readonly CurrencyPair: string;
  readonly NegotiateRate: boolean;
  readonly Rate: number;
  readonly AmountToSend: number;
  readonly orderticketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySwapTicket = {
  readonly id: string;
  readonly UserID: string;
  readonly CurrencyPair: string;
  readonly NegotiateRate: boolean;
  readonly Rate: number;
  readonly AmountToSend: number;
  readonly orderticketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SwapTicket = LazyLoading extends LazyLoadingDisabled ? EagerSwapTicket : LazySwapTicket

export declare const SwapTicket: (new (init: ModelInit<SwapTicket, SwapTicketMetaData>) => SwapTicket) & {
  copyOf(source: SwapTicket, mutator: (draft: MutableModel<SwapTicket, SwapTicketMetaData>) => MutableModel<SwapTicket, SwapTicketMetaData> | void): SwapTicket;
}

type EagerOrderBook = {
  readonly id: string;
  readonly UserID: string;
  readonly Currency: string;
  readonly AmountO?: number | null;
  readonly CurrencyPair?: string | null;
  readonly Rate: number;
  readonly StartDate: string;
  readonly EndDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrderBook = {
  readonly id: string;
  readonly UserID: string;
  readonly Currency: string;
  readonly AmountO?: number | null;
  readonly CurrencyPair?: string | null;
  readonly Rate: number;
  readonly StartDate: string;
  readonly EndDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrderBook = LazyLoading extends LazyLoadingDisabled ? EagerOrderBook : LazyOrderBook

export declare const OrderBook: (new (init: ModelInit<OrderBook, OrderBookMetaData>) => OrderBook) & {
  copyOf(source: OrderBook, mutator: (draft: MutableModel<OrderBook, OrderBookMetaData>) => MutableModel<OrderBook, OrderBookMetaData> | void): OrderBook;
}

type EagerOrderTicket = {
  readonly id: string;
  readonly UserID: string;
  readonly CurrencySend: string;
  readonly CurrencyReceive: string;
  readonly SwapTickets?: (SwapTicket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrderTicket = {
  readonly id: string;
  readonly UserID: string;
  readonly CurrencySend: string;
  readonly CurrencyReceive: string;
  readonly SwapTickets: AsyncCollection<SwapTicket>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrderTicket = LazyLoading extends LazyLoadingDisabled ? EagerOrderTicket : LazyOrderTicket

export declare const OrderTicket: (new (init: ModelInit<OrderTicket, OrderTicketMetaData>) => OrderTicket) & {
  copyOf(source: OrderTicket, mutator: (draft: MutableModel<OrderTicket, OrderTicketMetaData>) => MutableModel<OrderTicket, OrderTicketMetaData> | void): OrderTicket;
}

type EagerPaymentProvider = {
  readonly id: string;
  readonly Name?: string | null;
  readonly AddressID?: string | null;
  readonly CountryID?: string | null;
  readonly DateCreated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPaymentProvider = {
  readonly id: string;
  readonly Name?: string | null;
  readonly AddressID?: string | null;
  readonly CountryID?: string | null;
  readonly DateCreated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PaymentProvider = LazyLoading extends LazyLoadingDisabled ? EagerPaymentProvider : LazyPaymentProvider

export declare const PaymentProvider: (new (init: ModelInit<PaymentProvider, PaymentProviderMetaData>) => PaymentProvider) & {
  copyOf(source: PaymentProvider, mutator: (draft: MutableModel<PaymentProvider, PaymentProviderMetaData>) => MutableModel<PaymentProvider, PaymentProviderMetaData> | void): PaymentProvider;
}

type EagerUserAccount = {
  readonly id: string;
  readonly UserID?: string | null;
  readonly PaymentProviderID?: string | null;
  readonly AccountNumberID?: string | null;
  readonly Type?: string | null;
  readonly DateCreated?: string | null;
  readonly DateDeactivated?: string | null;
  readonly Active?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserAccount = {
  readonly id: string;
  readonly UserID?: string | null;
  readonly PaymentProviderID?: string | null;
  readonly AccountNumberID?: string | null;
  readonly Type?: string | null;
  readonly DateCreated?: string | null;
  readonly DateDeactivated?: string | null;
  readonly Active?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserAccount = LazyLoading extends LazyLoadingDisabled ? EagerUserAccount : LazyUserAccount

export declare const UserAccount: (new (init: ModelInit<UserAccount, UserAccountMetaData>) => UserAccount) & {
  copyOf(source: UserAccount, mutator: (draft: MutableModel<UserAccount, UserAccountMetaData>) => MutableModel<UserAccount, UserAccountMetaData> | void): UserAccount;
}

type EagerUseraccess = {
  readonly id: string;
  readonly user_id?: string | null;
  readonly login?: string | null;
  readonly failed_attempts?: string | null;
  readonly password_changed_dt?: string | null;
  readonly role?: string | null;
  readonly require_password_change?: string | null;
  readonly password?: string | null;
  readonly login_status?: string | null;
  readonly user_status?: string | null;
  readonly expiry_dt?: string | null;
  readonly password_hint?: string | null;
  readonly logical_delete?: string | null;
  readonly dt_update_last?: string | null;
  readonly received_contract?: string | null;
  readonly event_flg?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUseraccess = {
  readonly id: string;
  readonly user_id?: string | null;
  readonly login?: string | null;
  readonly failed_attempts?: string | null;
  readonly password_changed_dt?: string | null;
  readonly role?: string | null;
  readonly require_password_change?: string | null;
  readonly password?: string | null;
  readonly login_status?: string | null;
  readonly user_status?: string | null;
  readonly expiry_dt?: string | null;
  readonly password_hint?: string | null;
  readonly logical_delete?: string | null;
  readonly dt_update_last?: string | null;
  readonly received_contract?: string | null;
  readonly event_flg?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Useraccess = LazyLoading extends LazyLoadingDisabled ? EagerUseraccess : LazyUseraccess

export declare const Useraccess: (new (init: ModelInit<Useraccess, UseraccessMetaData>) => Useraccess) & {
  copyOf(source: Useraccess, mutator: (draft: MutableModel<Useraccess, UseraccessMetaData>) => MutableModel<Useraccess, UseraccessMetaData> | void): Useraccess;
}

type EagerUserData = {
  readonly id: string;
  readonly Username?: string | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly DateOfBirth?: string | null;
  readonly Gender?: string | null;
  readonly Address?: string | null;
  readonly city?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserData = {
  readonly id: string;
  readonly Username?: string | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly DateOfBirth?: string | null;
  readonly Gender?: string | null;
  readonly Address?: string | null;
  readonly city?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserData = LazyLoading extends LazyLoadingDisabled ? EagerUserData : LazyUserData

export declare const UserData: (new (init: ModelInit<UserData, UserDataMetaData>) => UserData) & {
  copyOf(source: UserData, mutator: (draft: MutableModel<UserData, UserDataMetaData>) => MutableModel<UserData, UserDataMetaData> | void): UserData;
}