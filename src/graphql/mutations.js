/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSwapTicket = /* GraphQL */ `
  mutation CreateSwapTicket(
    $input: CreateSwapTicketInput!
    $condition: ModelSwapTicketConditionInput
  ) {
    createSwapTicket(input: $input, condition: $condition) {
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
export const updateSwapTicket = /* GraphQL */ `
  mutation UpdateSwapTicket(
    $input: UpdateSwapTicketInput!
    $condition: ModelSwapTicketConditionInput
  ) {
    updateSwapTicket(input: $input, condition: $condition) {
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
export const deleteSwapTicket = /* GraphQL */ `
  mutation DeleteSwapTicket(
    $input: DeleteSwapTicketInput!
    $condition: ModelSwapTicketConditionInput
  ) {
    deleteSwapTicket(input: $input, condition: $condition) {
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
export const createOrderBook = /* GraphQL */ `
  mutation CreateOrderBook(
    $input: CreateOrderBookInput!
    $condition: ModelOrderBookConditionInput
  ) {
    createOrderBook(input: $input, condition: $condition) {
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
export const updateOrderBook = /* GraphQL */ `
  mutation UpdateOrderBook(
    $input: UpdateOrderBookInput!
    $condition: ModelOrderBookConditionInput
  ) {
    updateOrderBook(input: $input, condition: $condition) {
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
export const deleteOrderBook = /* GraphQL */ `
  mutation DeleteOrderBook(
    $input: DeleteOrderBookInput!
    $condition: ModelOrderBookConditionInput
  ) {
    deleteOrderBook(input: $input, condition: $condition) {
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
export const createOrderTicket = /* GraphQL */ `
  mutation CreateOrderTicket(
    $input: CreateOrderTicketInput!
    $condition: ModelOrderTicketConditionInput
  ) {
    createOrderTicket(input: $input, condition: $condition) {
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
export const updateOrderTicket = /* GraphQL */ `
  mutation UpdateOrderTicket(
    $input: UpdateOrderTicketInput!
    $condition: ModelOrderTicketConditionInput
  ) {
    updateOrderTicket(input: $input, condition: $condition) {
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
export const deleteOrderTicket = /* GraphQL */ `
  mutation DeleteOrderTicket(
    $input: DeleteOrderTicketInput!
    $condition: ModelOrderTicketConditionInput
  ) {
    deleteOrderTicket(input: $input, condition: $condition) {
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
export const createPaymentProvider = /* GraphQL */ `
  mutation CreatePaymentProvider(
    $input: CreatePaymentProviderInput!
    $condition: ModelPaymentProviderConditionInput
  ) {
    createPaymentProvider(input: $input, condition: $condition) {
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
export const updatePaymentProvider = /* GraphQL */ `
  mutation UpdatePaymentProvider(
    $input: UpdatePaymentProviderInput!
    $condition: ModelPaymentProviderConditionInput
  ) {
    updatePaymentProvider(input: $input, condition: $condition) {
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
export const deletePaymentProvider = /* GraphQL */ `
  mutation DeletePaymentProvider(
    $input: DeletePaymentProviderInput!
    $condition: ModelPaymentProviderConditionInput
  ) {
    deletePaymentProvider(input: $input, condition: $condition) {
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
export const createUserAccount = /* GraphQL */ `
  mutation CreateUserAccount(
    $input: CreateUserAccountInput!
    $condition: ModelUserAccountConditionInput
  ) {
    createUserAccount(input: $input, condition: $condition) {
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
export const updateUserAccount = /* GraphQL */ `
  mutation UpdateUserAccount(
    $input: UpdateUserAccountInput!
    $condition: ModelUserAccountConditionInput
  ) {
    updateUserAccount(input: $input, condition: $condition) {
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
export const deleteUserAccount = /* GraphQL */ `
  mutation DeleteUserAccount(
    $input: DeleteUserAccountInput!
    $condition: ModelUserAccountConditionInput
  ) {
    deleteUserAccount(input: $input, condition: $condition) {
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
export const createUseraccess = /* GraphQL */ `
  mutation CreateUseraccess(
    $input: CreateUseraccessInput!
    $condition: ModelUseraccessConditionInput
  ) {
    createUseraccess(input: $input, condition: $condition) {
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
export const updateUseraccess = /* GraphQL */ `
  mutation UpdateUseraccess(
    $input: UpdateUseraccessInput!
    $condition: ModelUseraccessConditionInput
  ) {
    updateUseraccess(input: $input, condition: $condition) {
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
export const deleteUseraccess = /* GraphQL */ `
  mutation DeleteUseraccess(
    $input: DeleteUseraccessInput!
    $condition: ModelUseraccessConditionInput
  ) {
    deleteUseraccess(input: $input, condition: $condition) {
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
export const createUserData = /* GraphQL */ `
  mutation CreateUserData(
    $input: CreateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    createUserData(input: $input, condition: $condition) {
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
export const updateUserData = /* GraphQL */ `
  mutation UpdateUserData(
    $input: UpdateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    updateUserData(input: $input, condition: $condition) {
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
export const deleteUserData = /* GraphQL */ `
  mutation DeleteUserData(
    $input: DeleteUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    deleteUserData(input: $input, condition: $condition) {
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
