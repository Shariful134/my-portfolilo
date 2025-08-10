import { BoxReveal } from "@/components/magicui/box-reveal";
import style from "./Projects.module.css";
import { TextAnimate } from "@/components/magicui/text-animate";

const Project2 = () => {
  return (
    <div className={`${style.iamgeSetup2}`}>
      <div className="container mx-auto px-2">
        <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
          <h2 className="text-purple-400 px-2 pt-8 md:pt-15 pb-5 text-2xl md:text-5xl">
            📚 Project: BookBazaar – Your Trusted Online Bookstore
          </h2>
        </BoxReveal>
        <div>
          <div>
            <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
              <p className="text-lg text-purple-400 max-w-2xl">🔍 Overview:</p>
              <p className="text-lg text-gray-300 max-w-2xl">
                BookBazaar is a full-stack e-commerce platform built for
                purchasing books with secure role-based access, intuitive search
                and filter features, dynamic checkout, and a responsive user
                interface. The platform ensures smooth user experiences,
                real-time stock validation, and admin-level product/order
                management.
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
              <h2 className="text-purple-400 pt-10 pb-5 text-2xl md:text-5xl">
                🌟 Core Features
              </h2>
            </BoxReveal>

            <div className="flex flex-col lg:flex-row justify-between pb-10 px-2 gap-5">
              <div>
                <TextAnimate
                  className="text-lg text-purple-400 max-w-2xl"
                  animation="slideLeft"
                  by="character"
                >
                  🔐 Authentication & User Roles
                </TextAnimate>
                <p className="text-lg text-gray-300 max-w-2xl">
                  <li>Users can register using name, email, and password</li>
                  <li>
                    JWT token is generated on login and stored in localStorage
                  </li>
                  <li>Default role is user. Admin must be updated manually</li>
                  <li>Logout clears token and redirects to login page</li>
                </p>

                <TextAnimate
                  className="text-lg mt-5 text-purple-400 max-w-2xl"
                  animation="slideLeft"
                  by="character"
                >
                  🛒 Public Pages
                </TextAnimate>
                <p className="text-lg text-gray-300 max-w-2xl">
                  <li>Navbar with logo, nav items, and auth buttons</li>
                  <li>Banner with optional carousel</li>
                  <li>Featured Products (up to 6) with View All</li>
                  <li>Extra section (testimonial/blog)</li>
                  <li>Footer with social links and contact info</li>
                  <li>
                    All Products page with search and filters (title, author,
                    category, price, availability)
                  </li>
                  <li>Dynamic product cards and View Details button</li>
                  <li>
                    Product Details page with complete info and Buy Now button
                  </li>
                  <li>About page with shop’s mission and extra info</li>
                </p>

                <TextAnimate
                  className="text-lg mt-5 text-purple-400 max-w-2xl"
                  animation="slideLeft"
                  by="character"
                >
                  🔐 Private Routes
                </TextAnimate>
                <p className="text-lg text-gray-300 max-w-2xl">
                  <li>Checkout only if stock is available</li>
                  <li>Total price calculation with user/product data</li>
                  <li>SurjoPay integration in sandbox mode</li>
                  <li>Order Now for placing orders</li>
                </p>
              </div>
              <div>
                <TextAnimate
                  className="text-lg mt-5 text-purple-400 max-w-2xl"
                  animation="slideLeft"
                  by="character"
                >
                  📊 Dashboards (Role-Based)
                </TextAnimate>
                <p className="text-lg text-gray-300 max-w-2xl">
                  <li>
                    Admin: Manage users (deactivate/reactivate), products
                    (CRUD), and orders
                  </li>
                  <li>
                    User: View order history, update profile, change password
                    with current validation
                  </li>
                </p>
                <TextAnimate
                  className="text-lg mt-5 text-purple-400 max-w-2xl"
                  animation="slideLeft"
                  by="character"
                >
                  🎨 UI/UX Design Highlights
                </TextAnimate>
                <p className="text-lg text-gray-300 max-w-2xl">
                  <li>Fully responsive for all devices</li>
                  <li>
                    Friendly error messages (invalid login, duplicates,
                    out-of-stock)
                  </li>
                  <li>Loading spinners/skeletons during data fetch</li>
                  <li>Toasts for success/error actions</li>
                </p>

                <TextAnimate
                  className="text-lg mt-5 text-purple-400 max-w-2xl"
                  animation="slideLeft"
                  by="character"
                >
                  ✨ Optional Feature
                </TextAnimate>
                <p className="text-lg text-gray-300 max-w-2xl">
                  <li>Users can leave reviews (rating 1–5, comment)</li>
                  <li>
                    Reviewer name, rating, and comment shown on product details
                  </li>
                </p>

                <TextAnimate
                  className="text-lg mt-5 text-purple-400 max-w-2xl"
                  animation="slideLeft"
                  by="character"
                >
                  🛠 Tech Stack
                </TextAnimate>
                <p className="text-lg text-gray-300 max-w-2xl">
                  <li>
                    <strong>Frontend:</strong> React.js with Vite, Tailwind CSS,
                    Toastify, React Icons
                  </li>
                  <li>
                    <strong>Backend:</strong> Node.js, Express.js, MongoDB,
                    Mongoose, JWT, bcrypt
                  </li>
                  <li>
                    <strong>Payment Gateway:</strong> SurjoPay (sandbox)
                  </li>
                  <li>
                    <strong>Deployment:</strong> Vercel (frontend), Render
                    (backend), MongoDB Atlas (database)
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
