/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSwapTicket = /* GraphQL */ `
  subscription OnCreateSwapTicket(
    $filter: ModelSubscriptionSwapTicketFilterInput
  ) {
    onCreateSwapTicket(filter: $filter) {
      id
      UserID
      CurrencyPair
      NegotiateRate
      Rate
      AmountToSend
      orderticketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSwapTicket = /* GraphQL */ `
  subscription OnUpdateSwapTicket(
    $filter: ModelSubscriptionSwapTicketFilterInput
  ) {
    onUpdateSwapTicket(filter: $filter) {
      id
      UserID
      CurrencyPair
      NegotiateRate
      Rate
      AmountToSend
      orderticketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSwapTicket = /* GraphQL */ `
  subscription OnDeleteSwapTicket(
    $filter: ModelSubscriptionSwapTicketFilterInput
  ) {
    onDeleteSwapTicket(filter: $filter) {
      id
      UserID
      CurrencyPair
      NegotiateRate
      Rate
      AmountToSend
      orderticketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrderBook = /* GraphQL */ `
  subscription OnCreateOrderBook(
    $filter: ModelSubscriptionOrderBookFilterInput
  ) {
    onCreateOrderBook(filter: $filter) {
      id
      UserID
      Currency
      AmountO
      CurrencyPair
      Rate
      StartDate
      EndDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrderBook = /* GraphQL */ `
  subscription OnUpdateOrderBook(
    $filter: ModelSubscriptionOrderBookFilterInput
  ) {
    onUpdateOrderBook(filter: $filter) {
      id
      UserID
      Currency
      AmountO
      CurrencyPair
      Rate
      StartDate
      EndDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrderBook = /* GraphQL */ `
  subscription OnDeleteOrderBook(
    $filter: ModelSubscriptionOrderBookFilterInput
  ) {
    onDeleteOrderBook(filter: $filter) {
      id
      UserID
      Currency
      AmountO
      CurrencyPair
      Rate
      StartDate
      EndDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrderTicket = /* GraphQL */ `
  subscription OnCreateOrderTicket(
    $filter: ModelSubscriptionOrderTicketFilterInput
  ) {
    onCreateOrderTicket(filter: $filter) {
      id
      UserID
      CurrencySend
      CurrencyReceive
      SwapTickets {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrderTicket = /* GraphQL */ `
  subscription OnUpdateOrderTicket(
    $filter: ModelSubscriptionOrderTicketFilterInput
  ) {
    onUpdateOrderTicket(filter: $filter) {
      id
      UserID
      CurrencySend
      CurrencyReceive
      SwapTickets {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrderTicket = /* GraphQL */ `
  subscription OnDeleteOrderTicket(
    $filter: ModelSubscriptionOrderTicketFilterInput
  ) {
    onDeleteOrderTicket(filter: $filter) {
      id
      UserID
      CurrencySend
      CurrencyReceive
      SwapTickets {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePaymentProvider = /* GraphQL */ `
  subscription OnCreatePaymentProvider(
    $filter: ModelSubscriptionPaymentProviderFilterInput
  ) {
    onCreatePaymentProvider(filter: $filter) {
      id
      Name
      AddressID
      CountryID
      DateCreated
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePaymentProvider = /* GraphQL */ `
  subscription OnUpdatePaymentProvider(
    $filter: ModelSubscriptionPaymentProviderFilterInput
  ) {
    onUpdatePaymentProvider(filter: $filter) {
      id
      Name
      AddressID
      CountryID
      DateCreated
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePaymentProvider = /* GraphQL */ `
  subscription OnDeletePaymentProvider(
    $filter: ModelSubscriptionPaymentProviderFilterInput
  ) {
    onDeletePaymentProvider(filter: $filter) {
      id
      Name
      AddressID
      CountryID
      DateCreated
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserAccount = /* GraphQL */ `
  subscription OnCreateUserAccount(
    $filter: ModelSubscriptionUserAccountFilterInput
  ) {
    onCreateUserAccount(filter: $filter) {
      id
      UserID
      PaymentProviderID
      AccountNumberID
      Type
      DateCreated
      DateDeactivated
      Active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserAccount = /* GraphQL */ `
  subscription OnUpdateUserAccount(
    $filter: ModelSubscriptionUserAccountFilterInput
  ) {
    onUpdateUserAccount(filter: $filter) {
      id
      UserID
      PaymentProviderID
      AccountNumberID
      Type
      DateCreated
      DateDeactivated
      Active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserAccount = /* GraphQL */ `
  subscription OnDeleteUserAccount(
    $filter: ModelSubscriptionUserAccountFilterInput
  ) {
    onDeleteUserAccount(filter: $filter) {
      id
      UserID
      PaymentProviderID
      AccountNumberID
      Type
      DateCreated
      DateDeactivated
      Active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUseraccess = /* GraphQL */ `
  subscription OnCreateUseraccess(
    $filter: ModelSubscriptionUseraccessFilterInput
  ) {
    onCreateUseraccess(filter: $filter) {
      id
      user_id
      login
      failed_attempts
      password_changed_dt
      role
      require_password_change
      password
      login_status
      user_status
      expiry_dt
      password_hint
      logical_delete
      dt_update_last
      received_contract
      event_flg
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUseraccess = /* GraphQL */ `
  subscription OnUpdateUseraccess(
    $filter: ModelSubscriptionUseraccessFilterInput
  ) {
    onUpdateUseraccess(filter: $filter) {
      id
      user_id
      login
      failed_attempts
      password_changed_dt
      role
      require_password_change
      password
      login_status
      user_status
      expiry_dt
      password_hint
      logical_delete
      dt_update_last
      received_contract
      event_flg
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUseraccess = /* GraphQL */ `
  subscription OnDeleteUseraccess(
    $filter: ModelSubscriptionUseraccessFilterInput
  ) {
    onDeleteUseraccess(filter: $filter) {
      id
      user_id
      login
      failed_attempts
      password_changed_dt
      role
      require_password_change
      password
      login_status
      user_status
      expiry_dt
      password_hint
      logical_delete
      dt_update_last
      received_contract
      event_flg
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserData = /* GraphQL */ `
  subscription OnCreateUserData($filter: ModelSubscriptionUserDataFilterInput) {
    onCreateUserData(filter: $filter) {
      id
      Username
      Email
      Phone
      DateOfBirth
      Gender
      Address
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserData = /* GraphQL */ `
  subscription OnUpdateUserData($filter: ModelSubscriptionUserDataFilterInput) {
    onUpdateUserData(filter: $filter) {
      id
      Username
      Email
      Phone
      DateOfBirth
      Gender
      Address
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserData = /* GraphQL */ `
  subscription OnDeleteUserData($filter: ModelSubscriptionUserDataFilterInput) {
    onDeleteUserData(filter: $filter) {
      id
      Username
      Email
      Phone
      DateOfBirth
      Gender
      Address
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
