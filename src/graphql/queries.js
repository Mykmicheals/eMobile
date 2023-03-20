/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSwapTicket = /* GraphQL */ `
  query GetSwapTicket($id: ID!) {
    getSwapTicket(id: $id) {
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
export const listSwapTickets = /* GraphQL */ `
  query ListSwapTickets(
    $filter: ModelSwapTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSwapTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSwapTickets = /* GraphQL */ `
  query SyncSwapTickets(
    $filter: ModelSwapTicketFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSwapTickets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const swapTicketsByOrderticketID = /* GraphQL */ `
  query SwapTicketsByOrderticketID(
    $orderticketID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSwapTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    swapTicketsByOrderticketID(
      orderticketID: $orderticketID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrderBook = /* GraphQL */ `
  query GetOrderBook($id: ID!) {
    getOrderBook(id: $id) {
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
export const listOrderBooks = /* GraphQL */ `
  query ListOrderBooks(
    $filter: ModelOrderBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrderBooks = /* GraphQL */ `
  query SyncOrderBooks(
    $filter: ModelOrderBookFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderBooks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrderTicket = /* GraphQL */ `
  query GetOrderTicket($id: ID!) {
    getOrderTicket(id: $id) {
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
export const listOrderTickets = /* GraphQL */ `
  query ListOrderTickets(
    $filter: ModelOrderTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserID
        CurrencySend
        CurrencyReceive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrderTickets = /* GraphQL */ `
  query SyncOrderTickets(
    $filter: ModelOrderTicketFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderTickets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        UserID
        CurrencySend
        CurrencyReceive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPaymentProvider = /* GraphQL */ `
  query GetPaymentProvider($id: ID!) {
    getPaymentProvider(id: $id) {
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
export const listPaymentProviders = /* GraphQL */ `
  query ListPaymentProviders(
    $filter: ModelPaymentProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPaymentProviders = /* GraphQL */ `
  query SyncPaymentProviders(
    $filter: ModelPaymentProviderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPaymentProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUserAccount = /* GraphQL */ `
  query GetUserAccount($id: ID!) {
    getUserAccount(id: $id) {
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
export const listUserAccounts = /* GraphQL */ `
  query ListUserAccounts(
    $filter: ModelUserAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserAccounts = /* GraphQL */ `
  query SyncUserAccounts(
    $filter: ModelUserAccountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUseraccess = /* GraphQL */ `
  query GetUseraccess($id: ID!) {
    getUseraccess(id: $id) {
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
export const listUseraccesses = /* GraphQL */ `
  query ListUseraccesses(
    $filter: ModelUseraccessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUseraccesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUseraccesses = /* GraphQL */ `
  query SyncUseraccesses(
    $filter: ModelUseraccessFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUseraccesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUserData = /* GraphQL */ `
  query GetUserData($id: ID!) {
    getUserData(id: $id) {
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
export const listUserData = /* GraphQL */ `
  query ListUserData(
    $filter: ModelUserDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserData = /* GraphQL */ `
  query SyncUserData(
    $filter: ModelUserDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
