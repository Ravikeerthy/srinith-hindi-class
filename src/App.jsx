import HindiTutiinSingle from "./assets/Hindi_Tuition_Tutor_Only.png";
import groupImage from "./assets/group-image.png";

const courses = [
  "CBSE / Matriculation Board",
  "Reading & Writing",
  "Grammar Practice",
  "Exam Preparation",
  "Spoken Hindi for Beginners",
  "100% Result Guaranteed",
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-2xl shadow-[0_0_25px_rgba(255,255,255,0.08)]">
              अ
            </div>

            <div>
              <h1 className="text-lg font-extrabold tracking-wide text-white md:text-xl">
                Srinith Hindi
              </h1>
              <p className="text-xs font-medium text-yellow-400">
                Tuition Center
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/70 md:flex">
            <a href="#about" className="transition hover:text-yellow-400">
              About
            </a>
            <a href="#courses" className="transition hover:text-yellow-400">
              Courses
            </a>
            <a href="#contact" className="transition hover:text-yellow-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-red-600 px-6 py-3 font-bold text-white shadow-[0_0_25px_rgba(220,38,38,0.35)] transition hover:-translate-y-1 hover:bg-red-700"
          >
            Join Now
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-black px-6 pt-32 pb-24 text-white">
        <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-red-600/30 blur-3xl"></div>
        <div className="absolute right-[-120px] bottom-10 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              Admissions Open Now
            </p>

            <h2 className="text-5xl font-extrabold leading-tight md:text-6xl">
              Effective Hindi Classes for School Students
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Srinith Hindi Tuition Center provides Hindi coaching for CBSE and
              Matriculation Board students with reading, writing, grammar,
              spoken Hindi and exam preparation.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-red-600 px-7 py-3 font-bold text-white shadow-xl shadow-red-900/30 hover:bg-red-700"
              >
                Enquire Now
              </a>

              <a
                href="#courses"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3 font-bold text-white hover:bg-white/20"
              >
                View Courses
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="overflow-hidden rounded-[35px] border border-white/15 bg-black p-3 shadow-[0_0_40px_rgba(250,204,21,0.12)]">
              <img
                src={HindiTutiinSingle}
                alt="Happy students and parents after joining Srinith Hindi Tuition Center"
                className="h-auto w-full rounded-[1.5rem] object-contain"
              />
            </div>

            {/* Responsive Trust Badge */}
            <div className="absolute bottom-2 left-2 max-w-[90%] rounded-xl border border-white/20 bg-black/90 px-3 py-2 shadow-2xl sm:-bottom-6 sm:-left-6 sm:rounded-3xl sm:px-6 sm:py-5">
              <h3 className="text-base font-extrabold text-yellow-400 sm:text-2xl">
                 100%
              </h3>
                  
              <p className="text-xs font-bold text-white sm:text-lg">
               Result Guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative overflow-hidden bg-black px-6 py-24"
      >
        <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-red-600/20 blur-3xl"></div>
        <div className="absolute right-[-120px] bottom-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(255,255,255,0.08)] backdrop-blur-xl md:p-14">
            <div className="grid items-center gap-14 md:grid-cols-2">
              <div>
                <p className="inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-400">
                  About Us
                </p>

                <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
                  Hindi Learning Made Simple, Friendly and Effective.
                </h2>

                <p className="mt-6 text-lg leading-8 text-white/60">
                  Srinith Hindi Tuition Center helps school students learn Hindi
                  with confidence through simple explanations, regular practice,
                  personal attention and exam-focused training.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                    <h3 className="text-3xl font-extrabold text-yellow-400">
                      100%
                    </h3>
                    <p className="mt-1 text-white/60">Result Focused</p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                    <h3 className="text-3xl font-extrabold text-yellow-400">
                      1:1
                    </h3>
                    <p className="mt-1 text-white/60">Personal Attention</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-[0_0_50px_rgba(255,255,255,0.12)]">
                  <img
                    src={groupImage}
                    alt="Srinith Hindi Tuition Teacher Poster"
                    className="max-h-[620px] w-full rounded-[1.5rem] object-contain"
                  />
                </div>

                {/* Responsive Result Badge */}
                <div className="absolute bottom-2 left-2 max-w-[90%] rounded-xl border border-white/20 bg-black/90 px-3 py-2 shadow-2xl sm:-bottom-6 sm:-left-6 sm:rounded-3xl sm:px-6 sm:py-5">
                  <h3 className="text-lg font-extrabold text-yellow-400 sm:text-3xl">
                    ★★★★★
                  </h3>

                  <p className="text-[11px] font-semibold leading-tight text-white/80 sm:text-base">
                     Trusted by Parents 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="courses"
        className="relative overflow-hidden bg-black px-6 py-24 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.22),transparent_35%)]"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Effective Hindi Classes
            </p>

            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Courses We Offer
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Focused Hindi coaching for school students with reading, writing,
              grammar and exam preparation.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/15 bg-white/5 p-8 shadow-[0_0_30px_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-2 hover:border-yellow-400/60 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/15 text-3xl transition group-hover:scale-110">
                  ✅
                </div>

                <h3 className="text-2xl font-bold text-white">{course}</h3>

                <p className="mt-4 leading-7 text-white/60">
                  Personal guidance, regular practice and simple explanations to
                  help students learn Hindi confidently.
                </p>

                <div className="mt-6 h-1 w-16 rounded-full bg-yellow-400/60 transition-all duration-300 group-hover:w-28 group-hover:bg-yellow-400"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)]"></div>

        <div className="relative mx-auto grid max-w-7xl gap-6 text-center md:grid-cols-4">
          <div className="rounded-3xl border border-white/20 bg-white/5 p-8 shadow-[0_0_30px_rgba(255,255,255,0.08)] transition hover:-translate-y-2 hover:border-white/50 hover:bg-white/10">
            <h3 className="text-5xl font-extrabold">4+</h3>
            <p className="mt-3 text-white/70">Course Types</p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/5 p-8 shadow-[0_0_30px_rgba(255,255,255,0.08)] transition hover:-translate-y-2 hover:border-white/50 hover:bg-white/10">
            <h3 className="text-5xl font-extrabold">1:1</h3>
            <p className="mt-3 text-white/70">Personal Attention</p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/5 p-8 shadow-[0_0_30px_rgba(255,255,255,0.08)] transition hover:-translate-y-2 hover:border-white/50 hover:bg-white/10">
            <h3 className="text-5xl font-extrabold">Easy</h3>
            <p className="mt-3 text-white/70">Teaching Method</p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/5 p-8 shadow-[0_0_30px_rgba(255,255,255,0.08)] transition hover:-translate-y-2 hover:border-white/50 hover:bg-white/10">
            <h3 className="text-5xl font-extrabold">Exam</h3>
            <p className="mt-3 text-white/70">Focused Training</p>
          </div>
        </div>
      </section>

      <section className="bg-black-50 px-6 py-20 ">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 text-white">
              Student Reviews
            </h2>
            <p className="mt-4 text-slate-600 text-white">
              What students and parents say about us.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-black p-8 shadow-xl border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <div className="mb-4 text-amber-400 text-2xl text-white">
                ★★★★★
              </div>
              <p className="leading-7 text-slate-600 text-white">
                “Very easy teaching method. My child improved Hindi reading and
                writing within few months.”
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-slate-900 text-white">
                  Priya Sharma
                </h3>
                <p className="text-sm text-slate-500 text-white">Parent</p>
              </div>
            </div>

            <div className="rounded-3xl bg-black p-8 shadow-xl  border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <div className="mb-4 text-amber-400 text-2xl text-white">
                ★★★★★
              </div>
              <p className="leading-7 text-slate-600 text-white">
                “Classes are very interactive and friendly. Grammar became
                simple for me.”
              </p>

              <div className="mt-6 text-white">
                <h3 className="font-bold text-slate-900 text-white">
                  Rahul Kumar
                </h3>
                <p className="text-sm text-slate-500 text-white">Student</p>
              </div>
            </div>

            <div className="rounded-3xl bg-black p-8 shadow-xl  border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <div className="mb-4 text-amber-400 text-2xl text-white">
                ★★★★★
              </div>
              <p className="leading-7 text-slate-600 text-white">
                “Excellent coaching with personal attention. Highly recommended
                for school students.”
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-slate-900 text-white">
                  Anita Verma
                </h3>
                <p className="text-sm text-slate-500 text-white">Parent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-black px-6 py-24 text-white"
      >
        <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-red-600/20 blur-3xl"></div>
        <div className="absolute right-[-120px] bottom-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-400">
              Contact Us
            </p>

            <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
              Admissions Open Now!
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/60">
              Contact Srinith Hindi Tuition Center for admission, batch timings
              and fee details.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                📞 +91 85248 36516
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                📍 Om Saravana Garden, Theethipalayam
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                🎓 Admissions Open Now
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                ✅ 100% Result Guaranteed
              </div>
            </div>
          </div>

          <form className="rounded-[35px] border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(255,255,255,0.08)] backdrop-blur-xl">
            <input
              type="text"
              placeholder="Student Name"
              className="mb-4 w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="mb-4 w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-yellow-400"
            />

            <textarea
              placeholder="Message"
              rows="5"
              className="mb-4 w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-yellow-400"
            ></textarea>

            <button
              type="button"
              className="w-full rounded-2xl bg-red-600 py-4 font-bold text-white shadow-[0_0_25px_rgba(220,38,38,0.35)] transition hover:-translate-y-1 hover:bg-red-700"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-white/60">
        © 2026 Srinith Hindi Tuition Center. Admissions Open Now.
      </footer>
    </div>
  );
}

export default App;
