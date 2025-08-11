import { BoxReveal } from "@/components/magicui/box-reveal";
import { TextAnimate } from "@/components/magicui/text-animate";

const Project1 = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-20">
      <div className="container mx-auto px-6 xl:px-0">
        <BoxReveal boxColor={"#2b6eebff"} duration={0.5}>
          <h2 className="px-2 pt-8 md:pt-15 pb-5 text-4xl md:text-5xl font-bold text-gray-700">
            💼 Project: TutorLink 🎓 – Find & Connect with the Best Tutors
          </h2>
        </BoxReveal>

        <div className="flex flex-col lg:flex-row justify-between gap-10 pb-10 px-2">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <BoxReveal boxColor={"#2b6eebff"} duration={0.5}>
              <p className="text-lg font-semibold max-w-2xl text-gray-700">
                Overview:
              </p>
              <p className="text-gray-700 text-base leading-relaxed max-w-2xl">
                TutorLink is a full-stack web application that connects students
                with verified tutors, streamlining the process of finding,
                booking, and managing tutoring sessions. The platform supports
                distinct user roles (Student, Tutor, Admin), secure payments,
                and a robust booking system with real-time availability.
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#2b6eebff"} duration={0.5}>
              <h2 className="pt-10 md:pt-15 pb-5 text-4xl md:text-5xl font-bold text-gray-700">
                🔧 Key Features
              </h2>
            </BoxReveal>

            <TextAnimate
              className="text-lg font-semibold max-w-2xl text-gray-700"
              animation="slideLeft"
              by="character"
            >
              👥 User Roles
            </TextAnimate>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl space-y-1 text-base leading-relaxed">
              <li>Students: Browse tutors, book sessions, leave reviews, manage profile.</li>
              <li>Tutors: Create detailed profiles, set subject-wise availability, manage bookings, view earnings.</li>
              <li>Admins (optional): Approve tutors, monitor activity, and manage content.</li>
            </ul>

            <TextAnimate
              className="text-lg font-semibold mt-5 max-w-2xl text-gray-700"
              animation="slideLeft"
              by="character"
            >
              🌐 Public Pages
            </TextAnimate>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl space-y-1 text-base leading-relaxed">
              <li>Home: Landing page with a search bar, platform highlights, CTAs.</li>
              <li>Browse Tutors: Filter and sort tutors by subject, rating, availability, etc.</li>
              <li>Tutor Profile: Individual tutor pages with bio, subjects, rates, reviews, and availability calendar.</li>
              <li>About Us: Mission, team, success stories.</li>
              <li>FAQ: Answers to common questions about tutoring, payments, etc.</li>
              <li>Blog/News: Educational tips, platform updates, and industry news (powered by News API).</li>
            </ul>

            <TextAnimate
              className="text-lg font-semibold mt-5 max-w-2xl text-gray-700"
              animation="slideLeft"
              by="character"
            >
              🔐 Private Dashboards
            </TextAnimate>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl space-y-1 text-base leading-relaxed">
              <li>Student Dashboard: Profile, booking history, payment info, reviews.</li>
              <li>Tutor Dashboard: Availability, subjects, booking requests, earnings.</li>
              <li>Secure Checkout: Supports Stripe, PayPal, SSLCommerz integration.</li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-6">
            <TextAnimate
              className="text-lg font-semibold max-w-2xl mt-5 text-gray-700"
              animation="slideLeft"
              by="character"
            >
              🧱 Backend Architecture
            </TextAnimate>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl space-y-1 text-base leading-relaxed">
              <li>Authentication: JWT-based auth with role-based access.</li>
              <li>Booking Module: Book sessions, manage status, and sync payments.</li>
              <li>Review System: Post reviews, calculate average ratings for tutors.</li>
              <li>
                Database Models:
                <ul className="list-disc list-inside pl-6 space-y-1 text-gray-700 text-base leading-relaxed">
                  <li><span className="font-semibold">User</span> (role: student/tutor, bio, subjects, availability)</li>
                  <li><span className="font-semibold">Subject</span> (name, level, category)</li>
                  <li><span className="font-semibold">Booking</span> (student, tutor, time, status)</li>
                  <li><span className="font-semibold">Review</span> (linked to student & tutor)</li>
                </ul>
              </li>
              <li>Payments: Secure, real-time payment logic (monthly/hourly) with earnings update logic.</li>
            </ul>

            <TextAnimate
              className="text-lg font-semibold max-w-2xl mt-5 text-gray-700"
              animation="slideLeft"
              by="character"
            >
              🚀 Technologies Used
            </TextAnimate>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl space-y-1 text-base leading-relaxed">
              <li><strong>Frontend:</strong> Next.js 15 (SSR + SSG), TypeScript & Tailwind CSS, Reusable Components (RatingStars, BookingCard, etc.)</li>
              <li><strong>Backend:</strong> Node.js & Express.js (Modular REST API), MongoDB & Mongoose (Schema-based modeling), JWT & bcrypt (Secure Auth)</li>
              <li><strong>Tools & Services:</strong> Payment Gateway (SSLCommerz, Stripe, PayPal), Deployment (Vercel - Frontend, Render - Backend, MongoDB Atlas - DB), Testing & Dev Tools (Vite, Jest)</li>
              <li><strong>Optional Features:</strong> Google Calendar Sync, Socket.io for chat</li>
            </ul>

            <TextAnimate
              className="text-lg font-semibold max-w-2xl mt-5 text-gray-700"
              animation="slideLeft"
              by="character"
            >
              📹 Demo Highlights
            </TextAnimate>
            <ul className="list-disc list-inside text-gray-700 max-w-2xl space-y-1 text-base leading-relaxed">
              <li>Student & tutor signup/login</li>
              <li>Tutor availability & booking flow</li>
              <li>Payment confirmation with dynamic rate calculation</li>
              <li>Tutor dashboard earnings auto-update</li>
              <li>Live filtering & sorting in Browse Tutors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
