# GadgetsX - Premium Laptop Store

A modern, fully functional eCommerce website built with Vite + React.js, TypeScript, and Tailwind CSS. GadgetsX is a premium laptop store featuring different categories, shopping cart, checkout functionality, and a clean, professional, responsive UI.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with dark/light theme support
- **Responsive Design**: Fully responsive across all devices
- **Product Categories**: Gaming, Business, Ultrabooks, and Workstations
- **Advanced Filtering**: Filter by price, brand, category, and search functionality
- **Shopping Cart**: Add, remove, and update quantities
- **Checkout Process**: Complete checkout flow with form validation
- **Product Details**: Detailed product pages with specifications and image galleries
- **Theme Toggle**: Dark and light mode support
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Context API

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd GadgetsX
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── ProductCard.tsx # Product display card
│   ├── CategoryCard.tsx # Category display card
│   ├── Hero.tsx        # Homepage hero section
│   └── LoadingSpinner.tsx # Loading component
├── contexts/           # React Context providers
│   ├── CartContext.tsx # Shopping cart state
│   └── ThemeContext.tsx # Theme state
├── data/              # Mock data
│   └── products.ts    # Product and category data
├── pages/             # Page components
│   ├── Home.tsx       # Homepage
│   ├── Products.tsx   # Product listing
│   ├── ProductDetail.tsx # Product details
│   ├── Cart.tsx       # Shopping cart
│   └── Checkout.tsx   # Checkout process
├── types/             # TypeScript type definitions
│   └── index.ts       # Type interfaces
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Design Features

- **Professional Color Scheme**: Primary blue theme with complementary colors
- **Modern Typography**: Inter font family for clean readability
- **Smooth Animations**: Hover effects and transitions
- **Card-based Layout**: Clean product and category cards
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Accessibility**: Proper contrast ratios and keyboard navigation

## 🛒 E-commerce Features

- **Product Catalog**: 8+ laptop products across 4 categories
- **Search Functionality**: Search by name, brand, or specifications
- **Advanced Filtering**: Filter by price range, brand, and category
- **Shopping Cart**: Persistent cart with quantity management
- **Checkout Flow**: Complete order process with form validation
- **Product Details**: Comprehensive product information and specifications

## 🎯 Categories

1. **Gaming Laptops**: High-performance laptops for gaming
2. **Business Laptops**: Professional laptops for business use
3. **Ultrabooks**: Lightweight and portable laptops
4. **Workstations**: Powerful laptops for content creation

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive layouts for tablets
- **Desktop Experience**: Full-featured desktop interface
- **Touch Friendly**: Optimized for touch interactions

## 🌙 Theme Support

- **Light Mode**: Clean, bright interface

### Components
- **Cards**: Elevated product and category cards
- **Buttons**: Primary, secondary, and ghost variants
- **Forms**: Consistent input styling with validation
- **Modals**: Centered overlays with backdrop
- **Navigation**: Sticky header with mobile menu

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Setup
The project uses Vite's built-in environment handling. No additional configuration needed for development.

## 🚀 Deployment

The project is ready for deployment to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3**: Upload the build files to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon set
- **Vite** for the lightning-fast build tool

---

**Built with ❤️ for laptop enthusiasts everywhere!**


