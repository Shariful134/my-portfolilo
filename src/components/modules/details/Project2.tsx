import { BoxReveal } from "@/components/magicui/box-reveal";
import style from "./Projects.module.css";
import { TextAnimate } from "@/components/magicui/text-animate";

const Project2 = () => {
  return (
    <div className={`${style.iamgeSetup2} bg-gray-100 text-gray-800 min-h-screen py-20`}>
      <div className="container mx-auto px-6 xl:px-0">
        <BoxReveal boxColor={"#2b6eebff"} duration={0.5}>
          <h2 className="px-2 pt-8 md:pt-15 pb-5 text-4xl md:text-5xl font-bold text-gray-700">
            📚 Project: BookBazaar – Your Trusted Online Bookstore
          </h2>
        </BoxReveal>

        <div className="flex flex-col lg:flex-row justify-between gap-10 pb-10 px-2">
          {/* Left Side */}
          <div className="flex-1 space-y-6">
            <BoxReveal boxColor={"#2b6eebff"} duration={0.5}>
              <p className="text-lg font-semibold max-w-2xl text-gray-700">🔍 Overview:</p>
              <p className="text-base text-gray-700 max-w-2xl leading-relaxed">
                BookBazaar is a full-stack e-commerce platform built for purchasing books with secure role-based access, intuitive search and filter features, dynamic checkout, and a responsive user interface. The platform ensures smooth user experiences, real-time stock validation, and admin-level product/order management.
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#2b6eebff"} duration={0.5}>
              <h2 className="pt-10 pb-5 text-4xl md:text-5xl font-bold text-gray-700">🌟 Core Features</h2>
            </BoxReveal>

            <TextAnimate
              className="text-lg font-semibold max-w-2xl text-gray-700"
              animation="slideLeft"
              by="character"
            >
              🔐 Authentication & User Roles
            </TextAnimate>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl space-y-1 text-base leading-relaxed">
              <li>Users can register using name, email, and password</li>
              <li>JWT token is generated on login and stored in localStorage</li>
              <li>Default role is user. Admin must be updated manually</li>
              <li>Logout clears token and redirects to login page</li>
            </ul>

            <TextAnimate
              className="text-lg font-semibold mt-5 max-w-2xl text-gray-700"
              animation="slideLeft"
              by="character"
            >
              🛒 Public Pages
            </TextAnimate>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl space-y-1 text-base leading-relaxed">
              <li>Navbar with logo, nav items, and auth buttons</li>
              <li>Banner with optional carousel</li>
              <li>Featured Products (up to 6) with View All</li>
              <li>Extra section (testimonial/blog)</li>
              <li>Footer with social links and contact info</li>
              <li>All Products page with search and filters (title, author, category, price, availability)</li>
              <li>Dynamic product cards and View Details button</li>
              <li>Product Details page with complete info and Buy Now button</li>
              <li>About page with shop’s mission and extra info</li>
            </ul>

            <TextAnimate
              className="text-lg font-semibold mt-5 max-w-2xl text-gray-700"
              animation="slideLeft"
              by="character"
            >
              🔐 Private Routes
            </TextAnimate>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl space-y-1 text-base leading-relaxed">
              <li>Checkout only if stock is available</li>
              <li>Total price calculation with user/product data</li>
              <li>SurjoPay integration in sandbox mode</li>
              <li>Order Now for placing orders</li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex-1 space-y-6">
            <TextAnimate
              className="text-lg font-semibold max-w-2xl mt-5 text-gray-700"
              animation="slideLeft"
              by="character"
            >
              📊 Dashboards (Role-Based)
            </TextAnimate>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl space-y-1 text-base leading-relaxed">
              <li>Admin: Manage users (deactivate/reactivate), products (CRUD), and orders</li>
              <li>User: View order history, update profile, change password with current validation</li>
            </ul>

            <TextAnimate
              className="text-lg font-semibold mt-5 max-w-2xl text-gray-700"
              animation="slideLeft"
              by="character"
            >
              🎨 UI/UX Design Highlights
            </TextAnimate>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl space-y-1 text-base leading-relaxed">
              <li>Fully responsive for all devices</li>
              <li>Friendly error messages (invalid login, duplicates, out-of-stock)</li>
              <li>Loading spinners/skeletons during data fetch</li>
              <li>Toasts for success/error actions</li>
            </ul>

            <TextAnimate
              className="text-lg font-semibold mt-5 max-w-2xl text-gray-700"
              animation="slideLeft"
              by="character"
            >
              ✨ Optional Feature
            </TextAnimate>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl space-y-1 text-base leading-relaxed">
              <li>Users can leave reviews (rating 1–5, comment)</li>
              <li>Reviewer name, rating, and comment shown on product details</li>
            </ul>

            <TextAnimate
              className="text-lg font-semibold mt-5 max-w-2xl text-gray-700"
              animation="slideLeft"
              by="character"
            >
              🛠 Tech Stack
            </TextAnimate>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl space-y-1 text-base leading-relaxed">
              <li><strong>Frontend:</strong> React.js with Vite, Tailwind CSS, Toastify, React Icons</li>
              <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt</li>
              <li><strong>Payment Gateway:</strong> SurjoPay (sandbox)</li>
              <li><strong>Deployment:</strong> Vercel (frontend), Render (backend), MongoDB Atlas (database)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
