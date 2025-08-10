import { BoxReveal } from "@/components/magicui/box-reveal";
import style from "./Projects.module.css";
import { TextAnimate } from "@/components/magicui/text-animate";
const Project1 = () => {
  return (
    <div className={`${style.iamgeSetup2}`}>
      <div className="container mx-auto">
        <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
          <h2 className="text-purple-400 px-2 pt-8 md:pt-15 pb-5 text-2xl md:text-5xl">
            💼 Project: TutorLink 🎓 – Find & Connect with the Best Tutors
          </h2>
        </BoxReveal>
        <div className="flex flex-col lg:flex-row justify-between pb-10 px-2 gap-5">
          <div>
            <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
              <p className="text-lg text-purple-400  max-w-2xl"> Overview:</p>
              <p className="text-lg text-gray-300  max-w-2xl">
                TutorLink is a full-stack web application that connects students
                with verified tutors, streamlining the process of finding,
                booking, and managing tutoring sessions. The platform supports
                distinct user roles (Student, Tutor, Admin), secure payments,
                and a robust booking system with real-time availability.
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
              <h2 className="text-purple-400 pt-10 md:pt-15 pb-5 text-2xl md:text-5xl">
                🔧 Key Features
              </h2>
            </BoxReveal>

            <TextAnimate
              className="text-lg  text-purple-400  max-w-2xl"
              animation="slideLeft"
              by="character"
            >
              👥 User Roles
            </TextAnimate>
            <p className="text-lg text-gray-300  max-w-2xl">
              <li>
                Students: Browse tutors, book sessions, leave reviews, manage
                profile.
              </li>
              <li>
                Tutors: Create detailed profiles, set subject-wise availability,
                manage bookings, view earnings.
              </li>
              <li>
                Admins (optional): Approve tutors, monitor activity, and manage
                content.
              </li>
            </p>
            <TextAnimate
              className="text-lg mt-5 text-purple-400 max-w-2xl"
              animation="slideLeft"
              by="character"
            >
              🌐 Public Pages
            </TextAnimate>
            <p className="text-lg  text-gray-300 max-w-2xl">
              <li>
                Home: Landing page with a search bar, platform highlights, CTAs.
              </li>
              <li>
                Browse Tutors: Filter and sort tutors by subject, rating,
                availability, etc.
              </li>
              <li>
                Tutor Profile: Individual tutor pages with bio, subjects, rates,
                reviews, and availability calendar.
              </li>
              <li>About Us: Mission, team, success stories.</li>
              <li>
                FAQ: Answers to common questions about tutoring, payments, etc.
              </li>
              <li>
                Blog/News: Educational tips, platform updates, and industry news
                (powered by News API).
              </li>
            </p>

            <TextAnimate
              className="text-lg mt-5 text-purple-400 max-w-2xl"
              animation="slideLeft"
              by="character"
            >
              🔐 Private Dashboards
            </TextAnimate>
            <p className="text-lg text-gray-300 max-w-2xl">
              <li>
                Student Dashboard: Profile, booking history, payment info,
                reviews.
              </li>
              <li>
                Tutor Dashboard: Availability, subjects, booking requests,
                earnings.
              </li>
              <li>
                Secure Checkout: Supports Stripe, PayPal, SSLCommerz
                integration.
              </li>
            </p>
          </div>

          <div>
            <TextAnimate
              className="text-lg text-purple-400 max-w-2xl mt-5"
              animation="slideLeft"
              by="character"
            >
              👥 User Roles
            </TextAnimate>
            <p className="text-lg text-gray-300 max-w-2xl">
              <li>
                Students: Browse tutors, book sessions, leave reviews, manage
                profile.
              </li>
              <li>
                Tutors: Create detailed profiles, set subject-wise availability,
                manage bookings, view earnings.
              </li>
              <li>
                Admins (optional): Approve tutors, monitor activity, and manage
                content.
              </li>
            </p>

            <TextAnimate
              className="text-lg text-purple-400 max-w-2xl mt-5"
              animation="slideLeft"
              by="character"
            >
              🧱 Backend Architecture
            </TextAnimate>
            <p className="text-lg text-gray-300 max-w-2xl">
              <li>Authentication: JWT-based auth with role-based access.</li>
              <li>
                Booking Module: Book sessions, manage status, and sync payments.
              </li>
              <li>
                Review System: Post reviews, calculate average ratings for
                tutors.
              </li>
              <li>
                Database Models:
                <li className="ps-6">
                  <span className="text-purple-400">User</span> (role:
                  student/tutor, bio, subjects, availability)
                </li>
                <li className="ps-6">
                  <span className="text-purple-400">Subject</span> (name, level,
                  category)
                </li>
                <li className="ps-6">
                  <span className="text-purple-400">Booking</span> (student,
                  tutor, time, status)
                </li>
                <li className="ps-6">
                  <span className="text-purple-400">Review</span> (linked to
                  student & tutor)
                </li>
                <li className="ps-6">
                  <span className="text-purple-400">User</span> (role:
                  student/tutor, bio, subjects, availability)
                </li>
              </li>
              <li>
                Payments: Secure, real-time payment logic (monthly/hourly) with
                earnings update logic.
              </li>
            </p>

            <TextAnimate
              className="text-lg text-purple-400 max-w-2xl mt-5"
              animation="slideLeft"
              by="character"
            >
              🚀 Technologies Used
            </TextAnimate>
            <p className="text-lg text-gray-300 max-w-2xl">
              <li>
                <strong>Frontend:</strong> Next.js 15 (SSR + SSG), TypeScript &
                Tailwind CSS, Reusable Components (RatingStars, BookingCard,
                etc.)
              </li>
              <li>
                <strong>Backend:</strong> Node.js & Express.js (Modular REST
                API), MongoDB & Mongoose (Schema-based modeling), JWT & bcrypt
                (Secure Auth)
              </li>
              <li>
                <strong>Tools & Services:</strong> Payment Gateway (SSLCommerz,
                Stripe, PayPal), Deployment (Vercel - Frontend, Render -
                Backend, MongoDB Atlas - DB), Testing & Dev Tools (Vite, Jest)
              </li>
              <li>
                <strong>Optional Features:</strong> Google Calendar Sync,
                Socket.io for chat
              </li>
            </p>

            <TextAnimate
              className="text-lg text-purple-400 max-w-2xl mt-5"
              animation="slideLeft"
              by="character"
            >
              📹 Demo Highlights
            </TextAnimate>
            <p className="text-lg text-gray-300 max-w-2xl">
              <li>Student & tutor signup/login</li>
              <li>Tutor availability & booking flow</li>
              <li>Payment confirmation with dynamic rate calculation</li>
              <li>Tutor dashboard earnings auto-update</li>
              <li>Live filtering & sorting in Browse Tutors</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
