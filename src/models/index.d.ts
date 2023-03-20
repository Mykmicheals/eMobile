import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerSwapTicket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SwapTicket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SwapTicket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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

export declare const SwapTicket: (new (init: ModelInit<SwapTicket>) => SwapTicket) & {
  copyOf(source: SwapTicket, mutator: (draft: MutableModel<SwapTicket>) => MutableModel<SwapTicket> | void): SwapTicket;
}

type EagerOrderBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderBook, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderBook, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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

export declare const OrderBook: (new (init: ModelInit<OrderBook>) => OrderBook) & {
  copyOf(source: OrderBook, mutator: (draft: MutableModel<OrderBook>) => MutableModel<OrderBook> | void): OrderBook;
}

type EagerOrderTicket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderTicket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserID: string;
  readonly CurrencySend: string;
  readonly CurrencyReceive: string;
  readonly SwapTickets?: (SwapTicket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrderTicket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderTicket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserID: string;
  readonly CurrencySend: string;
  readonly CurrencyReceive: string;
  readonly SwapTickets: AsyncCollection<SwapTicket>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrderTicket = LazyLoading extends LazyLoadingDisabled ? EagerOrderTicket : LazyOrderTicket

export declare const OrderTicket: (new (init: ModelInit<OrderTicket>) => OrderTicket) & {
  copyOf(source: OrderTicket, mutator: (draft: MutableModel<OrderTicket>) => MutableModel<OrderTicket> | void): OrderTicket;
}

type EagerPaymentProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PaymentProvider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly AddressID?: string | null;
  readonly CountryID?: string | null;
  readonly DateCreated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPaymentProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PaymentProvider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly AddressID?: string | null;
  readonly CountryID?: string | null;
  readonly DateCreated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PaymentProvider = LazyLoading extends LazyLoadingDisabled ? EagerPaymentProvider : LazyPaymentProvider

export declare const PaymentProvider: (new (init: ModelInit<PaymentProvider>) => PaymentProvider) & {
  copyOf(source: PaymentProvider, mutator: (draft: MutableModel<PaymentProvider>) => MutableModel<PaymentProvider> | void): PaymentProvider;
}

type EagerUserAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserAccount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserAccount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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

export declare const UserAccount: (new (init: ModelInit<UserAccount>) => UserAccount) & {
  copyOf(source: UserAccount, mutator: (draft: MutableModel<UserAccount>) => MutableModel<UserAccount> | void): UserAccount;
}

type EagerUseraccess = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Useraccess, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Useraccess, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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

export declare const Useraccess: (new (init: ModelInit<Useraccess>) => Useraccess) & {
  copyOf(source: Useraccess, mutator: (draft: MutableModel<Useraccess>) => MutableModel<Useraccess> | void): Useraccess;
}

type EagerUserData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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

export declare const UserData: (new (init: ModelInit<UserData>) => UserData) & {
  copyOf(source: UserData, mutator: (draft: MutableModel<UserData>) => MutableModel<UserData> | void): UserData;
}