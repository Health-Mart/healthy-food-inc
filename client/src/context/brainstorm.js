user data shape

users: [
  {
    username: 'Billie Elish',
    phone: '14151234567',
    address: 'Lorem ipsum dolor San Francisco, CA 94022',
    email: 'billesh@gmail.com',
    picture: 'picture url',
    subscription: true,
    credit: 1234,
    recentOrders: [
      {
        date: new Date(),
        orderStatus: 'shipped',
        mealPlan: [
          {
            productId: 12345,
            name: Pasta & meatballs,
          }
        ],
        groceryItems: [
          {
            productId: 45678,
            name: 'Human Flesh',
            quantity: 4,
            price: 29.99,
          }
        ]
      }
    ]
  }
]