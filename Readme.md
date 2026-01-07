# 🍜 MOKCHA (먹자) - Korean Restaurant Ordering Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)

## 📖 About The Project

**MOKCHA** (먹자 - meaning "Let's Eat" in Korean) is a modern, full-stack restaurant ordering platform that provides seamless food ordering experience with comprehensive user management and order tracking capabilities. Built with React TypeScript frontend and Node.js/Express backend following MVC architecture, this application offers an intuitive interface for discovering dishes, placing orders, and managing your dining experience. The platform includes a powerful admin panel with server-side rendering for efficient management of users and products.

### ✨ Key Features

#### Client-Side Features

- 🔐 **Complete Authentication System** - Login, Signup, and Logout functionality
- 🏠 **Dynamic Home Page** - Popular Dishes, Fresh Menu, About Restaurant, and User Reviews sections
- 🍽️ **Smart Product Filtering** - Filter by category (Dishes, Salads, Desserts, Drinks, Other)
- 🔍 **Real-time Search** - Instant search functionality across all menu items
- 💰 **Price-based Sorting** - Sort items by newest arrivals and price range
- 📄 **Pagination** - Smooth navigation through extensive menu catalog
- 📦 **Order Management** - Track orders through Paused, Processing, and Finished states
- 👤 **User Profile** - Manage personal information, phone number, bio, points, and profile image
- 📊 **Order History** - Complete history of placed orders with total pricing
- 📱 **100% Responsive Design** - Optimized for all devices and screen sizes

#### Admin Panel Features

- 🛡️ **SSR Admin Dashboard** - Server-side rendered admin panel at `/admin`
- 👥 **User Management** - Complete CRUD operations for user accounts
- 🍽️ **Product Management** - Add, edit, delete, and organize menu items
- 📊 **Advanced Filtering** - Filter users and products with custom criteria
- 📄 **Pagination System** - Efficient data navigation for large datasets
- 🔒 **Secure Access** - Protected admin routes with authentication
- 📈 **Dashboard Analytics** - Overview of orders, users, and products

### 🔄 Real-time Features

- 🔄 **Live Updates** - Backend integration with Axios for dynamic data
- 🍞 **Toast Notifications** - Elegant user feedback system
- 🍪 **Cookie Management** - Secure session handling for frontend
- 🔐 **JWT Authentication** - Token-based security system

## 🏗️ Architecture

This project follows a **full-stack architecture** with clear separation between frontend and backend:

### Frontend Architecture

- **React + TypeScript** - Type-safe component development
- **Redux + Context API** - Hybrid state management approach
- **Component-based Structure** - Reusable and maintainable components
- **Axios Integration** - HTTP client for API communication

### Backend Architecture

- **MVC Pattern** - Model-View-Controller architecture
- **Express.js** - Fast, minimalist web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Middleware Chain** - Request processing pipeline
- **SSR with EJS** - Server-side rendering for admin panel

## 🛠️ Technology Stack

### Frontend Technologies

- **[React 18+](https://react.dev/)** - Modern UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Redux](https://redux.js.org/)** - Global state management
- **[Context API](https://react.dev/learn/passing-data-deeply-with-context)** - Additional state management
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Axios](https://axios-http.com/)** - HTTP client for API requests
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[DaisyUI](https://daisyui.com/)** - Component library for Tailwind
- **Toast Library** - User notification system

### Backend Technologies

- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment
- **[Express.js](https://expressjs.com/)** - Web application framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe backend development
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[Mongoose](https://mongoosejs.com/)** - MongoDB object modeling with aggregation pipelines
- **[EJS](https://ejs.co/)** - Embedded JavaScript templating for SSR
- **[jQuery](https://jquery.com/)** - DOM manipulation for admin panel
- **[Cookie-Parser](https://www.npmjs.com/package/cookie-parser)** - Cookie handling middleware
- **[JWT](https://jwt.io/)** - JSON Web Tokens for authentication
- **[Bcrypt](https://www.npmjs.com/package/bcrypt)** - Password hashing
- **[Multer](https://www.npmjs.com/package/multer)** - Multi-image upload handling (up to 5 images per product)

### Additional Tools & Libraries

- **[Multer](https://www.npmjs.com/package/multer)** - File upload handling
- **[Validator](https://www.npmjs.com/package/validator)** - Data validation
- **[Dotenv](https://www.npmjs.com/package/dotenv)** - Environment variable management
- **[CORS](https://www.npmjs.com/package/cors)** - Cross-Origin Resource Sharing
- **[Morgan](https://www.npmjs.com/package/morgan)** - HTTP request logger

## 🎯 Core Features

### 🏠 Home Page

**Popular Dishes Section**

- Curated selection of trending menu items
- Visual cards with pricing and descriptions
- Quick add-to-cart functionality

**Fresh Menu Section**

- Latest additions to the menu
- Seasonal and special offerings
- Real-time updates from backend

**About Restaurant**

- Restaurant story and mission
- Location and contact information
- Operating hours

**User Reviews Section**

- Customer testimonials
- Rating system
- User-generated content

### 🍽️ Product Page

**Category Filtering**

- **Dishes**: Main course items
- **Salads**: Fresh salad options
- **Desserts**: Sweet treats
- **Drinks**: Beverage selection
- **Other**: Additional menu items

**Advanced Filtering Options**

- Real-time search across all products
- Sort by newest arrivals
- Filter by price range
- Instant results with backend integration

**Pagination System**

- Smooth page navigation
- Configurable items per page
- Efficient data loading from MongoDB

### 📦 Orders Page

**Access Control**

- Available only to authenticated users
- Secure order management
- Real-time order status updates

**Order States**

- **Paused Orders**: Orders waiting to be processed
- **Processing Orders**: Currently being prepared
- **Finished Orders**: Completed and delivered orders

**Order Management**

- View order details
- Track order status
- Cancel or modify orders

### 👤 My Page (User Profile)

**Profile Information**

- Personal details management
- Phone number
- Bio/Description
- User points system
- Profile image upload and update

**Update Functionality**

- Edit personal information
- Change contact details
- Update profile picture
- Real-time backend synchronization

**Order History**

- Complete list of past orders
- Order details and items
- Total pricing for each order
- Date and time stamps
- Order status history

### 🛡️ Admin Panel (localhost:3005/admin)

**Server-Side Rendered Dashboard**

- Built with EJS templating engine
- jQuery for dynamic interactions
- Custom CSS styling
- Responsive admin interface

**User Management**

- View all registered users
- Edit user information
- Delete user accounts
- Filter users by criteria
- Pagination for large user lists
- User role management

**Product Management**

- Add new menu items
- Edit existing products
- Delete products
- Upload product images
- Manage product categories
- Set pricing and availability
- Filter products by category
- Pagination for product catalog

**Advanced Features**

- Search functionality for users and products
- Bulk actions for efficient management
- Data validation and error handling
- Secure authentication for admin access
- Activity logging and monitoring

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas)
- **Git** for version control

### Backend Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/khamzaevasad/mokcha-service.git
   ```

2. **Navigate to the backend directory**

   ```bash
   cd mokcha/backend
   ```

3. **Install backend dependencies**

   ```bash
   npm install
   ```

4. **Configure environment variables**

   Create a `.env` file in the backend root directory:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/mokcha
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Start the backend server**

   ```bash
   npm run dev
   # or for production
   npm start
   ```

6. **Access the admin panel**
   ```
   http://localhost:3005/admin
   ```

### Frontend Installation

1. **Navigate to the frontend directory**

   ```bash
   cd mokcha/frontend
   ```

2. **Install frontend dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the frontend root directory:

   ```env
   VITE_API_BASE_URL=http://localhost:3005/api
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

### Backend Structure

```
mokcha-backend/
├── src/
│   ├── controller/
│   │   ├── authController.ts
│   │   ├── userController.ts
│   │   ├── productController.ts
│   │   ├── orderController.ts
│   │   └── adminController.ts
│   ├── libs/
│   │   ├── enums/
│   │   ├── types/
│   │   └── utils/
│   │       ├── Errors.ts
│   │       ├── config.ts
│   │       └── logger.ts
│   ├── model/
│   │   ├── User.ts
│   │   ├── Product.ts
│   │   └── Order.ts
│   ├── public/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── schema/
│   │   ├── userSchema.ts
│   │   ├── productSchema.ts
│   │   └── orderSchema.ts
│   ├── views/
│   │   ├── includes/
│   │   │   ├── header.ejs
│   │   │   └── footer.ejs
│   │   ├── home.ejs
│   │   ├── login.ejs
│   │   ├── products.ejs
│   │   ├── signup.ejs
│   │   └── users.ejs
│   ├── app.ts
│   ├── router-admin.ts
│   ├── router.ts
│   └── server.ts
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
└── tsconfig.json
```

### Frontend Structure

```
mokcha-frontend/
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   └── store.ts
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── cards/
│   │   ├── help/
│   │   ├── home/
│   │   ├── order/
│   │   ├── product/
│   │   ├── providers/
│   │   └── user/
│   ├── context/
│   │   └── GlobalContext.tsx
│   ├── css/
│   │   └── styles.css
│   ├── data/
│   │   └── constants.ts
│   ├── hooks/
│   │   └── customHooks.ts
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── enums/
│   │   ├── types/
│   │   └── config.ts
│   ├── pages/
│   │   ├── help/
│   │   ├── home/
│   │   ├── order/
│   │   ├── product/
│   │   ├── productInfo/
│   │   ├── user/
│   │   └── index.ts
│   ├── services/
│   │   └── api.ts
│   ├── utils/
│   │   └── helpers.ts
│   ├── Routes.tsx
│   ├── main.tsx
│   └── App.tsx
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🏛️ MVC Architecture

### Model Layer

**Responsibilities:**

- Database schema definitions
- Data validation rules
- Business logic operations
- MongoDB document structure
- Mongoose model definitions

**Models:**

```typescript
// User Model
- User authentication data
- Profile information
- Order history references
- Points and loyalty data

// Product Model
- Product details and pricing
- Category classification
- Availability status
- Image references

// Order Model
- Order items and quantities
- User reference
- Order status tracking
- Payment information
- Timestamps and history
```

### View Layer

**Frontend Views (React Components):**

- React components for client interface
- Responsive design with Tailwind CSS
- Dynamic rendering with state management
- User interaction handling

**Backend Views (EJS Templates):**

- Server-side rendered admin pages
- EJS templating for dynamic content
- jQuery for enhanced interactivity
- Custom CSS for admin styling

### Controller Layer

**Responsibilities:**

- Request handling and routing
- Business logic coordination
- Data validation and sanitization
- Response formatting
- Error handling

**Controllers:**

```typescript
// membersController (Client API)
- getRestaurant: Get restaurant information
- signup: Member registration
- login: Member authentication
- logout: Member logout (requires verifyAuth)
- getMemberDetail: Get authenticated member details
- updateMember: Update member profile with image upload
- getTopUsers: Get leaderboard of top users by points
- verifyAuth: Middleware for authentication verification
- retrieveAuth: Middleware for optional authentication

// productController (Client API)
- getProducts: Get all products with filters and pagination
- getProduct: Get single product details (with optional auth)
- getRecommendedProducts: Get recommended products based on product ID

// orderController (Client API)
- createOrder: Create new order (requires verifyAuth)
- getMyOrders: Get all orders for authenticated member
- updateOrder: Update order status (requires verifyAuth)

// restaurantController (Admin SSR)
- goHome: Render admin home/dashboard
- getSignup: Render admin signup page
- processSignup: Handle admin registration with image upload
- getLogin: Render admin login page
- processLogin: Handle admin authentication
- checkedAuthenticated: Check admin authentication status
- logout: Admin logout
- verifyRestaurant: Middleware for admin authentication
- getUsers: Get all users for admin panel
- updateChosenUser: Update user information from admin panel

// productController (Admin SSR)
- getAllProducts: Get all products for admin management
- createNewProduct: Create product with up to 5 images
- updateChosenProduct: Update product from admin panel
```

## 🔧 Middleware Architecture

### Authentication Middleware

```typescript
// JWT Token Verification (verifyAuth)
- Validates JWT tokens for member routes
- Extracts member information
- Handles token expiration
- Protects private member routes

// Auth Retrieval (retrieveAuth)
- Optional authentication for public routes
- Enhances user experience with auth data
- Used for personalized content

// Restaurant Admin Verification (verifyRestaurant)
- Validates admin/restaurant authentication
- Protects admin panel routes
- Ensures only authorized access to management features

// Cookie Validation
- Verifies session cookies
- Manages cookie expiration
- Secure cookie handling
```

### Authorization Middleware

```typescript
// Role-based Access Control
- Admin route protection (verifyRestaurant)
- Member route protection (verifyAuth)
- Resource ownership validation
- Separate authentication for client and admin
```

### Validation Middleware

```typescript
// Request Validation
- Input sanitization
- Data type checking
- Schema validation
- Error formatting
```

### Error Handling Middleware

```typescript
// Global Error Handler
- Custom error classes
- Error logging
- User-friendly error messages
- Status code management
```

### Logging Middleware

```typescript
// Request Logging
- Morgan HTTP logger
- Custom logging system
- Error tracking
- Performance monitoring
```

### File Upload Middleware

```typescript
// Multer Configuration
- Member image upload handling (single image)
- Product images upload (up to 5 images per product)
- File size limits
- File type validation
- Storage configuration
- Organized upload directories (members/, products/)
```

## 🗄️ MongoDB Aggregations

The application uses MongoDB aggregation pipelines for complex data operations:

### Product Aggregations

```typescript
// Get Products with Filters
- $match: Filter by category, price range, search query
- $sort: Sort by price, views, createdAt
- $skip and $limit: Pagination
- $lookup: Join with related collections for enhanced data
- $project: Select specific fields and format output

// Get Recommended Products
- $match: Filter by category or related criteria
- $sample: Randomly select products
- $lookup: Get product details
- $limit: Limit recommendations count

// Product Views Tracking
- $inc: Increment view count atomically
- Used for popularity tracking and analytics
```

### Order Aggregations

```typescript
// Get Member Orders
- $match: Filter orders by member ID and status
- $lookup: Join with products collection
- $unwind: Flatten order items array
- $group: Calculate totals and aggregate data
- $sort: Sort by date, status
- $project: Format output with calculated fields

// Order Analytics (Admin)
- $group: Aggregate by status, date, member
- $sum: Calculate total revenue, order counts
- $avg: Calculate average order value
```

### Member Aggregations

```typescript
// Get Top Users
- $sort: Sort by points/orders
- $limit: Get top N users
- $lookup: Join with orders for statistics
- $project: Format user data with rankings

// User Statistics
- $lookup: Join with orders collection
- $group: Aggregate order counts and totals
- $addFields: Calculate derived fields
```

### View Logic Implementation

```typescript
// Product View Counter
- Increments view count when product is accessed
- Uses atomic operation to prevent race conditions
- Tracks product popularity for recommendations
- Used in analytics and trending products

// Implementation:
router.get("/product/:id",
  membersController.retrieveAuth, // Optional auth for personalized experience
  productController.getProduct    // Increments view count
);
```

## 🗄️ Database Schema

### MongoDB Collections

**Users Collection**

```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  phone: String,
  bio: String,
  image: String,
  points: Number,
  role: String (user/admin),
  createdAt: Date,
  updatedAt: Date
}
```

**Products Collection**

```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  category: String (dish/salad/dessert/drink/other),
  images: [String], // Array of image URLs (up to 5 images)
  availability: Boolean,
  views: Number, // Product view count for tracking popularity
  createdAt: Date,
  updatedAt: Date
}
```

**Orders Collection**

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  items: [{
    productId: ObjectId (ref: Product),
    quantity: Number,
    price: Number
  }],
  totalPrice: Number,
  status: String (paused/processing/finished),
  createdAt: Date,
  updatedAt: Date
}
```

## 🍪 Cookie Management

### Frontend Cookies

- **Session Cookie**: Stores user authentication state
- **Preferences Cookie**: User settings and preferences
- **Cart Cookie**: Shopping cart persistence

### Backend Cookie Configuration

```typescript
// Cookie Options
- httpOnly: true (prevents XSS attacks)
- secure: true (HTTPS only in production)
- sameSite: 'strict' (CSRF protection)
- maxAge: 7 days (configurable)
```

## 🔐 Authentication Flow

### User Authentication

1. User submits login credentials
2. Backend validates credentials
3. JWT token generated
4. Token stored in cookie
5. Frontend receives authentication status
6. Protected routes become accessible

### Admin Authentication

1. Admin accesses /admin route
2. SSR login page rendered
3. Credentials validated server-side
4. Admin session cookie created
5. Access granted to admin panel

## 🎨 Admin Panel Features

### Dashboard

- Overview of key metrics
- Recent orders display
- User statistics
- Product inventory status

### User Management

- User list with pagination
- Search and filter users
- Edit user profiles
- Delete user accounts
- View user order history

### Product Management

- Product catalog with pagination
- Add new products with image upload
- Edit product details
- Delete products
- Category management
- Availability toggle

### Filtering & Pagination

- Server-side filtering logic
- Efficient database queries
- Customizable page size
- Sort by multiple criteria

## 📡 API Endpoints

### Member Authentication & Management (Client API)

```
GET    /member/restaurant           - Get restaurant information
POST   /member/signup               - Register new member
POST   /member/login                - Member login
POST   /member/logout               - Member logout (Auth required)
GET    /member/detail               - Get member details (Auth required)
POST   /member/update               - Update member profile (Auth required, with image upload)
GET    /member/top-users            - Get top users by points
```

### Product Endpoints (Client API)

```
GET    /product/all                 - Get all products with filters
GET    /product/:id                 - Get single product details
GET    /product/:id/recommended     - Get recommended products for a product
```

### Order Endpoints (Client API)

```
POST   /order/create                - Create new order (Auth required)
GET    /order/all                   - Get all member orders (Auth required)
POST   /order/update                - Update order status (Auth required)
```

### Admin Authentication (SSR)

```
GET    /                            - Admin home/dashboard
GET    /signup                      - Admin signup page
POST   /signup                      - Process admin signup (with image upload)
GET    /login                       - Admin login page
POST   /login                       - Process admin login
GET    /check-me                    - Check authentication status
GET    /logout                      - Admin logout
```

### Admin Product Management (SSR)

```
GET    /product/all                 - Get all products (Admin auth required)
POST   /product/create              - Create new product (Admin auth required, up to 5 images)
POST   /product/:id                 - Update product (Admin auth required)
```

### Admin User Management (SSR)

```
GET    /user/all                    - Get all users (Admin auth required)
POST   /user/edit                   - Update user information (Admin auth required)
```

## 🚀 Performance Optimizations

### Frontend Optimizations

- Code splitting with React.lazy()
- Image lazy loading
- Redux state optimization
- Memoization with useMemo and useCallback
- Bundle size optimization with Vite

### Backend Optimizations

- MongoDB indexing for faster queries
- Request caching
- Compression middleware
- Database connection pooling
- Efficient pagination queries

## 🔒 Security Features

### Authentication & Authorization

- JWT token-based authentication
- Bcrypt password hashing
- Secure cookie configuration
- Role-based access control
- Protected admin routes

### Data Protection

- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF protection
- Rate limiting (planned)

### Best Practices

- Environment variable management
- Secure HTTP headers
- CORS configuration
- Error message sanitization
- Audit logging

## 🧪 Testing (Planned)

```bash
# Backend tests
npm run test:backend

# Frontend tests
npm run test:frontend

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

## 📝 TODO / Future Enhancements

### Frontend

- [ ] Progressive Web App (PWA) support
- [ ] Dark mode theme
- [ ] Multi-language support (Korean, English)
- [ ] Real-time notifications with WebSocket

### Backend

- [ ] GraphQL API implementation
- [ ] Redis caching layer
- [ ] Email notification system
- [ ] SMS notifications
- [ ] Advanced analytics dashboard

### Features

- [ ] Payment gateway integration
- [ ] Real-time order tracking with map
- [ ] Social media authentication
- [ ] Customer loyalty program enhancements
- [ ] Restaurant table reservation
- [ ] Promotional codes and discounts
- [ ] Review and rating system
- [ ] Favorites and wish list

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

#### Frontend

- Follow React and TypeScript best practices
- Use ESLint and Prettier for code formatting
- Follow component naming conventions
- Write meaningful commit messages

#### Backend

- Follow MVC architecture pattern
- Use TypeScript strict mode
- Implement proper error handling
- Document API endpoints
- Write unit tests for controllers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Khamzaev Asad**

- GitHub: [@khamzaevasad](https://github.com/khamzaevasad)
- Email: xamzayevasad442@gmail.com

## 🙏 Acknowledgments

### Frontend

- React and TypeScript communities
- Redux team for state management solution
- Tailwind CSS and DaisyUI for beautiful styling

### Backend

- Node.js and Express.js communities
- MongoDB team for excellent database solution
- EJS templating engine contributors

### All

- All open-source contributors
- Stack Overflow community
- GitHub community

## 📞 Contact & Support

For questions, feedback, or support:

- Create an issue on GitHub
- Email: xamzayevasad442@gmail.com

---

<div align="center">
  <p>Made with ❤️ and 🍜</p>
  <p>먹자! (Let's Eat!) - MOKCHA</p>
  <p>Full-Stack Restaurant Ordering Platform</p>
  <p>© 2025 MOKCHA. All rights reserved.</p>
</div>
