Roomiety
Find your perfect roommate and shared housing opportunities.


Overview
Roomiety is a modern platform designed to connect people in Greece with compatible roommates and shared housing opportunities. Powered by AI, it ensures users find matches based on lifestyle, habits, and preferences. The platform is intuitive, secure, and optimized for mobile use.

Features
Core Features
🔍 Smart Profile Matching: AI-powered compatibility system based on lifestyle, habits, and preferences.
💰 Budget Planning Tools: Shared expense calculators for rent and utilities.
✅ Verified Profiles: Identity verification system with badges for students and professionals.
📍 Location-based Search: Find roommates or housing near universities, workplaces, or specific neighborhoods.
🛌 Lifestyle Questionnaire: Detailed matching for sleeping habits, cleanliness, and social preferences.
Social Features
💬 Group Chat System: Secure in-app messaging for potential roommates.
📹 Virtual Meet-ups: Video chat integration for safe initial meetings.
⭐ Community Reviews: Ratings and reviews for users by previous roommates.
🔗 Social Media Integration: Optional LinkedIn/Facebook verification.
Housing Features
🏠 Room Listings: Available rooms in shared apartments with detailed descriptions and photos.
📄 Rental Agreement Templates: Ready-to-use Greek rental agreement templates.
🌍 Area Guides: Neighborhood guides with details on amenities and transportation.
Tech Stack
Frontend: Next.js 15 with App Router and Server Components.
Backend: Node.js with Prisma and PostgreSQL.
Authentication: NextAuth.js.
Real-time Chat: WebSockets for instant messaging.
Location Services: Google Maps API for location-based features.
AI Matching: OpenAI API for smart roommate matching.
Deployment: Vercel for seamless CI/CD.
Installation
Prerequisites
Node.js v18+
PostgreSQL 12+
Environment variables for Google Maps API, OpenAI API, and NextAuth.js (detailed below).
Steps
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables: Create a .env.local file in the root directory and configure the following:

env
Copy code
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
OPENAI_API_KEY=your_openai_api_key
Run Migrations:

bash
Copy code
npx prisma migrate dev
Start the Development Server:

bash
Copy code
npm run dev
The app will be available at http://localhost:3000.

Usage
Development
Run the development server:

bash
Copy code
npm run dev
Build for Production
Build the app:

bash
Copy code
npm run build
Start the production server:

bash
Copy code
npm start
Run Tests
Run unit tests:

bash
Copy code
npm test
Contributing
We welcome contributions to improve Roomiety!

Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature/your-feature-name.
Open a pull request.
For more details, read the CONTRIBUTING.md.

License
This project is licensed under the MIT License.

Screenshots
Homepage

Search Page

Future Features
🌐 Expansion to European markets.
📊 Advanced analytics for roommates and landlords.
🛒 Integration with local services (cleaning, moving, etc.).
Contact
Feel free to reach out:

Email: support@appname.com
GitHub Issues: Submit an Issue
