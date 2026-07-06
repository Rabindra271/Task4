const products = [
  {
    id: 1,
    name: "Organic Whole Milk",
    category: "Dairy",
    price: 4.29,
    rating: 4.8,
    description: "Fresh organic whole milk from local farms.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800"
  },
  {
    id: 2,
    name: "Greek Yogurt",
    category: "Dairy",
    price: 3.49,
    rating: 4.7,
    description: "Creamy Greek yogurt rich in protein.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800"
  },
  {
    id: 3,
    name: "Butter Blocks",
    category: "Dairy",
    price: 5.19,
    rating: 4.6,
    description: "Premium salted butter blocks.",
    image: "https://images.unsplash.com/photo-1589985270958-b3f0b0f4f5c8?w=800"
  },
  {
    id: 4,
    name: "Aged Cheddar Cheese",
    category: "Dairy",
    price: 6.79,
    rating: 4.9,
    description: "Rich aged cheddar cheese.",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800"
  },
  {
    id: 5,
    name: "Vanilla Coffee Creamer",
    category: "Dairy",
    price: 4.89,
    rating: 4.5,
    description: "Smooth vanilla coffee creamer.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800"
  },
  {
    id: 6,
    name: "Gala Apples",
    category: "Fruits",
    price: 2.99,
    rating: 4.7,
    description: "Fresh and crispy gala apples.",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800"
  },
  {
    id: 7,
    name: "Banana Bunch",
    category: "Fruits",
    price: 1.69,
    rating: 4.6,
    description: "Naturally sweet bananas.",
    image: "https://images.unsplash.com/photo-1574226516831-e1dff420e37b?w=800"
  },
  {
    id: 8,
    name: "Navel Oranges",
    category: "Fruits",
    price: 3.29,
    rating: 4.8,
    description: "Juicy oranges packed with Vitamin C.",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=800"
  },
  {
    id: 9,
    name: "Mixed Berry Pack",
    category: "Fruits",
    price: 5.99,
    rating: 4.9,
    description: "Blueberries, strawberries and raspberries.",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800"
  },
  {
    id: 10,
    name: "Seedless Red Grapes",
    category: "Fruits",
    price: 4.59,
    rating: 4.6,
    description: "Sweet seedless grapes.",
    image: "https://images.unsplash.com/photo-1515778767554-13f9c9f1d2d5?w=800"
  },
  {
    id: 11,
    name: "Baby Spinach",
    category: "Vegetables",
    price: 3.79,
    rating: 4.5,
    description: "Fresh baby spinach leaves.",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800"
  },
  {
    id: 12,
    name: "Carrot Pack",
    category: "Vegetables",
    price: 2.49,
    rating: 4.6,
    description: "Fresh crunchy carrots.",
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=800"
  },
  {
    id: 13,
    name: "Broccoli Florets",
    category: "Vegetables",
    price: 2.99,
    rating: 4.7,
    description: "Green broccoli florets.",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800"
  },
  {
    id: 14,
    name: "Cherry Tomatoes",
    category: "Vegetables",
    price: 3.59,
    rating: 4.8,
    description: "Sweet cherry tomatoes.",
    image: "https://images.unsplash.com/photo-1546470427-e5ac89cd0b5e?w=800"
  },
  {
    id: 15,
    name: "Avocado Set",
    category: "Vegetables",
    price: 4.49,
    rating: 4.7,
    description: "Fresh ripe avocados.",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=800"
  },
  {
    id: 16,
    name: "Basmati Rice",
    category: "Grains & Rice",
    price: 5.99,
    rating: 4.8,
    description: "Premium long grain basmati rice.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800"
  },
  {
    id: 17,
    name: "Quinoa Blend",
    category: "Grains & Rice",
    price: 6.29,
    rating: 4.6,
    description: "Healthy protein-rich quinoa.",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e1?w=800"
  },
    {
    id: 18,
    name: "Whole Wheat Pasta",
    category: "Grains & Rice",
    price: 3.49,
    rating: 4.5,
    description: "Nutritious whole wheat pasta.",
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=800"
  },
  {
    id: 19,
    name: "Rolled Oats",
    category: "Grains & Rice",
    price: 4.19,
    rating: 4.7,
    description: "Healthy rolled oats for breakfast.",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800"
  },
  {
    id: 20,
    name: "Cornmeal Bag",
    category: "Grains & Rice",
    price: 2.79,
    rating: 4.4,
    description: "Fine cornmeal for baking and cooking.",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e1?w=800"
  },
  {
    id: 21,
    name: "Sourdough Bread",
    category: "Bakery",
    price: 4.99,
    rating: 4.9,
    description: "Fresh artisan sourdough bread.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
  },
  {
    id: 22,
    name: "Butter Croissants",
    category: "Bakery",
    price: 5.49,
    rating: 4.7,
    description: "Flaky buttery croissants.",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800"
  },
  {
    id: 23,
    name: "Multigrain Loaf",
    category: "Bakery",
    price: 4.89,
    rating: 4.8,
    description: "Soft multigrain bread loaf.",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800"
  },
  {
    id: 24,
    name: "Chocolate Donuts",
    category: "Bakery",
    price: 3.79,
    rating: 4.6,
    description: "Chocolate glazed donuts.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
  },
  {
    id: 25,
    name: "Blueberry Muffins",
    category: "Bakery",
    price: 4.29,
    rating: 4.7,
    description: "Fresh blueberry muffins.",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800"
  },
  {
    id: 26,
    name: "Sparkling Water",
    category: "Beverages",
    price: 2.29,
    rating: 4.6,
    description: "Refreshing sparkling mineral water.",
    image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=800"
  },
  {
    id: 27,
    name: "Green Tea",
    category: "Beverages",
    price: 3.99,
    rating: 4.7,
    description: "Premium green tea bags.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800"
  },
  {
    id: 28,
    name: "Cold Brew Coffee",
    category: "Beverages",
    price: 4.99,
    rating: 4.8,
    description: "Smooth ready-to-drink cold brew coffee.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800"
  },
  {
    id: 29,
    name: "Fruit Smoothie",
    category: "Beverages",
    price: 5.49,
    rating: 4.5,
    description: "Mixed fruit smoothie.",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=800"
  },
  {
    id: 30,
    name: "Lemonade Bottle",
    category: "Beverages",
    price: 2.99,
    rating: 4.6,
    description: "Refreshing homemade-style lemonade.",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800"
  },
  {
    id: 31,
    name: "Almond Granola",
    category: "Snacks",
    price: 5.99,
    rating: 4.7,
    description: "Crunchy almond granola.",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800"
  },
  {
    id: 32,
    name: "Protein Bars",
    category: "Snacks",
    price: 4.49,
    rating: 4.5,
    description: "Chocolate protein bars.",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800"
  },
  {
    id: 33,
    name: "Pretzel Twists",
    category: "Snacks",
    price: 2.99,
    rating: 4.4,
    description: "Crunchy salted pretzels.",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800"
  },
  {
    id: 34,
    name: "Tortilla Chips",
    category: "Snacks",
    price: 3.69,
    rating: 4.6,
    description: "Crispy tortilla chips.",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800"
  },
    {
    id: 35,
    name: "Gourmet Popcorn",
    category: "Snacks",
    price: 4.29,
    rating: 4.8,
    description: "Light and crunchy gourmet popcorn.",
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=800"
  },
  {
    id: 36,
    name: "Black Pepper",
    category: "Spices",
    price: 2.49,
    rating: 4.5,
    description: "Premium ground black pepper.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800"
  },
  {
    id: 37,
    name: "Turmeric Powder",
    category: "Spices",
    price: 3.29,
    rating: 4.7,
    description: "Pure turmeric powder.",
    image: "https://images.unsplash.com/photo-1615485925873-9a2c5b5cb364?w=800"
  },
  {
    id: 38,
    name: "Cinnamon Sticks",
    category: "Spices",
    price: 3.99,
    rating: 4.6,
    description: "Natural cinnamon sticks.",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e1?w=800"
  },
  {
    id: 39,
    name: "Garlic Powder",
    category: "Spices",
    price: 2.79,
    rating: 4.4,
    description: "Fine garlic powder.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800"
  },
  {
    id: 40,
    name: "Mixed Herbs",
    category: "Spices",
    price: 3.19,
    rating: 4.6,
    description: "Italian mixed herbs seasoning.",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800"
  },
  {
    id: 41,
    name: "Tomato Soup",
    category: "Canned Foods",
    price: 2.29,
    rating: 4.3,
    description: "Creamy tomato soup.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800"
  },
  {
    id: 42,
    name: "Chickpeas Can",
    category: "Canned Foods",
    price: 2.49,
    rating: 4.5,
    description: "Ready-to-use canned chickpeas.",
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?w=800"
  },
  {
    id: 43,
    name: "Tuna Flakes",
    category: "Canned Foods",
    price: 3.69,
    rating: 4.4,
    description: "Premium canned tuna flakes.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800"
  },
  {
    id: 44,
    name: "Sweet Corn",
    category: "Canned Foods",
    price: 2.39,
    rating: 4.6,
    description: "Sweet corn kernels.",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800"
  },
  {
    id: 45,
    name: "Coconut Milk",
    category: "Canned Foods",
    price: 3.99,
    rating: 4.7,
    description: "Creamy coconut milk.",
    image: "https://images.unsplash.com/photo-1604908176997-43118b0f8245?w=800"
  },
  {
    id: 46,
    name: "Dish Soap",
    category: "Household",
    price: 2.99,
    rating: 4.8,
    description: "Powerful dishwashing liquid.",
    image: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?w=800"
  },
  {
    id: 47,
    name: "Paper Towels",
    category: "Household",
    price: 5.49,
    rating: 4.7,
    description: "Highly absorbent paper towels.",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800"
  },
  {
    id: 48,
    name: "Laundry Detergent",
    category: "Household",
    price: 9.99,
    rating: 4.6,
    description: "Powerful laundry detergent.",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800"
  },
  {
    id: 49,
    name: "Trash Bags",
    category: "Household",
    price: 6.29,
    rating: 4.4,
    description: "Strong and durable trash bags.",
    image: "https://images.unsplash.com/photo-1604186838309-c6715f0d3be1?w=800"
  },
  {
    id: 50,
    name: "All-purpose Cleaner",
    category: "Household",
    price: 4.79,
    rating: 4.7,
    description: "Multi-surface cleaner with fresh fragrance.",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800"
  }
];