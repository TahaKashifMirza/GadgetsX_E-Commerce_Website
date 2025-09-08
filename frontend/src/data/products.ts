import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Gaming Laptops',
    slug: 'gaming',
    description: 'High-performance laptops for gaming enthusiasts',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Business Laptops',
    slug: 'business',
    description: 'Professional laptops for business users',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Ultrabooks',
    slug: 'ultrabooks',
    description: 'Lightweight and portable laptops',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    name: 'Workstations',
    slug: 'workstations',
    description: 'Powerful laptops for content creation',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'ASUS ROG Strix G15',
    brand: 'ASUS',
    price: 1299.99,
    originalPrice: 1499.99,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop'
    ],
    description: 'Powerful gaming laptop with AMD Ryzen 7 processor and RTX 3060 graphics card. Perfect for gaming and content creation.',
    specifications: {
      processor: 'AMD Ryzen 7 5800H',
      memory: '16GB DDR4',
      storage: '512GB SSD',
      graphics: 'NVIDIA RTX 3060 6GB',
      display: '15.6" FHD 144Hz',
      operatingSystem: 'Windows 11 Home',
      weight: '2.3 kg',
      battery: '90Wh'
    },
    category: 'gaming',
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    featured: true,
    tags: ['gaming', 'rtx', 'amd', '144hz']
  },
  {
    id: '2',
    name: 'MacBook Pro 14"',
    brand: 'Apple',
    price: 1999.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=crop'
    ],
    description: 'Professional laptop with M2 Pro chip, perfect for developers, designers, and content creators.',
    specifications: {
      processor: 'Apple M2 Pro',
      memory: '16GB Unified Memory',
      storage: '512GB SSD',
      graphics: 'M2 Pro GPU',
      display: '14.2" Liquid Retina XDR',
      operatingSystem: 'macOS Ventura',
      weight: '1.6 kg',
      battery: '70Wh'
    },
    category: 'business',
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    featured: true,
    tags: ['apple', 'm2', 'professional', 'retina']
  },
  {
    id: '3',
    name: 'Dell XPS 13',
    brand: 'Dell',
    price: 1199.99,
    originalPrice: 1299.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop'
    ],
    description: 'Ultra-thin and lightweight laptop with stunning 13.4" InfinityEdge display. Perfect for professionals on the go.',
    specifications: {
      processor: 'Intel Core i7-1165G7',
      memory: '16GB LPDDR4x',
      storage: '512GB SSD',
      graphics: 'Intel Iris Xe',
      display: '13.4" FHD+ InfinityEdge',
      operatingSystem: 'Windows 11 Home',
      weight: '1.27 kg',
      battery: '52Wh'
    },
    category: 'ultrabooks',
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    featured: false,
    tags: ['ultrabook', 'intel', 'lightweight', 'infinityedge']
  },
  {
    id: '4',
    name: 'HP ZBook Studio G8',
    brand: 'HP',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=400&fit=crop'
    ],
    description: 'Professional workstation laptop with Intel Core i9 processor and RTX A2000 graphics. Built for demanding workloads.',
    specifications: {
      processor: 'Intel Core i9-11950H',
      memory: '32GB DDR4',
      storage: '1TB SSD',
      graphics: 'NVIDIA RTX A2000 4GB',
      display: '15.6" 4K DreamColor',
      operatingSystem: 'Windows 11 Pro',
      weight: '2.0 kg',
      battery: '83Wh'
    },
    category: 'workstations',
    rating: 4.7,
    reviewCount: 67,
    inStock: true,
    featured: true,
    tags: ['workstation', 'intel', 'rtx', '4k', 'professional']
  },
  {
    id: '5',
    name: 'MSI GE76 Raider',
    brand: 'MSI',
    price: 1899.99,
    originalPrice: 2199.99,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=400&fit=crop'
    ],
    description: 'High-end gaming laptop with Intel Core i7 and RTX 3070. Features 17.3" 144Hz display for immersive gaming.',
    specifications: {
      processor: 'Intel Core i7-11800H',
      memory: '32GB DDR4',
      storage: '1TB SSD',
      graphics: 'NVIDIA RTX 3070 8GB',
      display: '17.3" FHD 144Hz',
      operatingSystem: 'Windows 11 Home',
      weight: '2.9 kg',
      battery: '99.9Wh'
    },
    category: 'gaming',
    rating: 4.4,
    reviewCount: 92,
    inStock: true,
    featured: false,
    tags: ['gaming', 'intel', 'rtx', '17-inch', '144hz']
  },
  {
    id: '6',
    name: 'Lenovo ThinkPad X1 Carbon',
    brand: 'Lenovo',
    price: 1599.99,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&h=400&fit=crop'
    ],
    description: 'Premium business laptop with exceptional build quality and all-day battery life. Built for professionals.',
    specifications: {
      processor: 'Intel Core i7-1165G7',
      memory: '16GB LPDDR4x',
      storage: '512GB SSD',
      graphics: 'Intel Iris Xe',
      display: '14" WQHD IPS',
      operatingSystem: 'Windows 11 Pro',
      weight: '1.13 kg',
      battery: '57Wh'
    },
    category: 'business',
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    featured: false,
    tags: ['business', 'thinkpad', 'lightweight', 'professional']
  },
  {
    id: '7',
    name: 'Razer Blade 15',
    brand: 'Razer',
    price: 1799.99,
    originalPrice: 1999.99,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=400&fit=crop'
    ],
    description: 'Premium gaming laptop with sleek design and powerful performance. Features RTX 3060 and 15.6" QHD display.',
    specifications: {
      processor: 'Intel Core i7-11800H',
      memory: '16GB DDR4',
      storage: '512GB SSD',
      graphics: 'NVIDIA RTX 3060 6GB',
      display: '15.6" QHD 165Hz',
      operatingSystem: 'Windows 11 Home',
      weight: '2.0 kg',
      battery: '80Wh'
    },
    category: 'gaming',
    rating: 4.6,
    reviewCount: 145,
    inStock: true,
    featured: true,
    tags: ['gaming', 'razer', 'premium', 'qhd', '165hz']
  },
  {
    id: '8',
    name: 'Surface Laptop 4',
    brand: 'Microsoft',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&h=400&fit=crop'
    ],
    description: 'Elegant and versatile laptop with premium build quality and excellent performance. Perfect for everyday use.',
    specifications: {
      processor: 'AMD Ryzen 5 4680U',
      memory: '8GB LPDDR4x',
      storage: '256GB SSD',
      graphics: 'AMD Radeon Graphics',
      display: '13.5" PixelSense',
      operatingSystem: 'Windows 11 Home',
      weight: '1.27 kg',
      battery: '47.4Wh'
    },
    category: 'ultrabooks',
    rating: 4.3,
    reviewCount: 178,
    inStock: true,
    featured: false,
    tags: ['microsoft', 'surface', 'amd', 'pixelsense']
  },
  {
    id: '9',
    name: 'Alienware m15 R7',
    brand: 'Dell',
    price: 2299.99,
    originalPrice: 2599.99,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=400&fit=crop'
    ],
    description: 'Ultimate gaming machine with Intel Core i9 and RTX 4070. Features advanced cooling and customizable RGB lighting.',
    specifications: {
      processor: 'Intel Core i9-12900H',
      memory: '32GB DDR5',
      storage: '1TB SSD',
      graphics: 'NVIDIA RTX 4070 8GB',
      display: '15.6" QHD 240Hz',
      operatingSystem: 'Windows 11 Home',
      weight: '2.42 kg',
      battery: '86Wh'
    },
    category: 'gaming',
    rating: 4.8,
    reviewCount: 76,
    inStock: true,
    featured: true,
    tags: ['gaming', 'alienware', 'rtx4070', '240hz', 'rgb']
  },
  {
    id: '10',
    name: 'MacBook Air M2',
    brand: 'Apple',
    price: 1199.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=crop'
    ],
    description: 'Incredibly thin and light laptop with M2 chip. Perfect balance of performance and portability for everyday tasks.',
    specifications: {
      processor: 'Apple M2',
      memory: '8GB Unified Memory',
      storage: '256GB SSD',
      graphics: 'M2 GPU',
      display: '13.6" Liquid Retina',
      operatingSystem: 'macOS Ventura',
      weight: '1.24 kg',
      battery: '52.6Wh'
    },
    category: 'ultrabooks',
    rating: 4.7,
    reviewCount: 234,
    inStock: true,
    featured: false,
    tags: ['apple', 'm2', 'ultrabook', 'lightweight']
  },
  {
    id: '11',
    name: 'ASUS ZenBook Pro 15',
    brand: 'ASUS',
    price: 1799.99,
    originalPrice: 1999.99,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=400&fit=crop'
    ],
    description: 'Creative powerhouse with OLED display and dedicated graphics. Ideal for content creators and designers.',
    specifications: {
      processor: 'Intel Core i7-12700H',
      memory: '16GB DDR5',
      storage: '1TB SSD',
      graphics: 'NVIDIA RTX 3050 Ti 4GB',
      display: '15.6" 4K OLED Touch',
      operatingSystem: 'Windows 11 Pro',
      weight: '1.8 kg',
      battery: '96Wh'
    },
    category: 'workstations',
    rating: 4.6,
    reviewCount: 112,
    inStock: true,
    featured: true,
    tags: ['workstation', 'oled', 'touchscreen', '4k', 'creative']
  },
  {
    id: '12',
    name: 'Acer Predator Helios 300',
    brand: 'Acer',
    price: 1399.99,
    originalPrice: 1599.99,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop'
    ],
    description: 'Affordable gaming laptop with excellent performance. Features advanced cooling and customizable RGB keyboard.',
    specifications: {
      processor: 'Intel Core i7-12700H',
      memory: '16GB DDR4',
      storage: '512GB SSD',
      graphics: 'NVIDIA RTX 3060 6GB',
      display: '15.6" FHD 144Hz',
      operatingSystem: 'Windows 11 Home',
      weight: '2.3 kg',
      battery: '59Wh'
    },
    category: 'gaming',
    rating: 4.4,
    reviewCount: 189,
    inStock: true,
    featured: false,
    tags: ['gaming', 'budget', 'rgb', '144hz', 'cooling']
  }
];


