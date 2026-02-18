const Registration = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#182543] to-[#10192d] px-4 py-8">
      <div className="font-DM rounded-lg border text-[#0f1729] shadow-sm w-full max-w-lg bg-[#182543cc] border-[#3e4f74] backdrop-blur-sm">
        <div className="flex flex-col space-y-1.5 p-6 text-center">
          <div className="text-sm text-[#dcc9a399] mb-2">სასტუმრო</div>
          <h3 className="font-playfair text-3xl font-bold text-[#c9a65e] tracking-wide">
            EPISODE
          </h3>
          <p className="text-sm mt-2 text-[#dcc9a3b3]">
            პერსონალის რეგისტრაცია
          </p>
        </div>
        <div className="p-6 pt-0">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="bg-[#10192d80] rounded-lg p-4 space-y-3 mb-6">
              <h3 className="text-sm font-medium text-[#dcc9a399] mb-2">
                თქვენი პოზიცია
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-[#dcc9a380]">სასტუმრო</p>
                  <p className="text-sm font-medium text-[#dcc9a3]">
                    Episode Tbilisi
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#dcc9a380]">დეპარტამენტი</p>
                  <p className="text-sm font-medium text-[#dcc9a3]">
                    Housekeeping
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#dcc9a380]">როლი</p>
                  <p className="text-sm font-medium text-[#dcc9a3]">
                    პერსონალი
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#10192d80] rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar h-4 w-4 text-[#c9a65e]"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <h3 className="text-sm font-medium text-[#dcc9a3cc]">
                  თქვენი ცვლები
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center justify-between bg-[#18254380] rounded-md px-3 py-2 border border-[#3e4f744d]">
                  <span className="text-sm text-[#dcc9a3]">ორშაბათი</span>
                  <span className="text-xs text-[#c9a65eb3]">
                    09:00 - 17:00
                  </span>
                </div>
                <div className="flex items-center justify-between bg-[#18254380] rounded-md px-3 py-2 border border-[#3e4f744d]">
                  <span className="text-sm text-[#dcc9a3]">სამშაბათი</span>
                  <span className="text-xs text-[#c9a65eb3]">
                    09:00 - 17:00
                  </span>
                </div>
                <div className="flex items-center justify-between bg-[#18254380] rounded-md px-3 py-2 border border-[#3e4f744d]">
                  <span className="text-sm text-[#dcc9a3]">ოთხშაბათი</span>
                  <span className="text-xs text-[#c9a65eb3]">
                    09:00 - 17:00
                  </span>
                </div>
                <div className="flex items-center justify-between bg-[#18254380] rounded-md px-3 py-2 border border-[#3e4f744d]">
                  <span className="text-sm text-[#dcc9a3]">ხუთშაბათი</span>
                  <span className="text-xs text-[#c9a65eb3]">
                    09:00 - 17:00
                  </span>
                </div>
                <div className="flex items-center justify-between bg-[#18254380] rounded-md px-3 py-2 border border-[#3e4f744d]">
                  <span className="text-sm text-[#dcc9a3]">პარასევი</span>
                  <span className="text-xs text-[#c9a65eb3]">
                    09:00 - 17:00
                  </span>
                </div>
              </div>
            </div>
            {/* Name and last name */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#dcc9a3cc]"
                  htmlFor="name"
                >
                  სახელი
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="გიორგი"
                  className="mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base ring-[#f6f7f9] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#10192d80] border-[#3e4f7480] text-[#dcc9a3] placeholder:text-[#dcc9a3]/30 focus:border-[#c9a65e]"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#dcc9a3cc]"
                  htmlFor="lastName"
                >
                  გვარი
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="გიორგაძე"
                  className="mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base ring-[#f6f7f9] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#10192d80] border-[#3e4f7480] text-[#dcc9a3] placeholder:text-[#dcc9a3]/30 focus:border-[#c9a65e]"
                />
              </div>
            </div>
            {/* email */}
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#dcc9a3cc]"
                htmlFor="email"
              >
                ელფოსტა
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email@example.com"
                className="mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base ring-[#f6f7f9] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#10192d80] border-[#3e4f7480] text-[#dcc9a3] placeholder:text-[#dcc9a3]/30 focus:border-[#c9a65e]"
              />
            </div>
            {/* Phone number */}
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#dcc9a3cc]"
                htmlFor="phone"
              >
                ტელეფონის ნომერი
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+995 555 12 34 56"
                className="mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base ring-[#f6f7f9] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#10192d80] border-[#3e4f7480] text-[#dcc9a3] placeholder:text-[#dcc9a3]/30 focus:border-[#c9a65e]"
              />
            </div>
            {/* passwords */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#dcc9a3cc]"
                  htmlFor="password"
                >
                  პაროლი
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="მინიმუმ 6 სიმბოლო"
                  className="mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base ring-[#f6f7f9] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#10192d80] border-[#3e4f7480] text-[#dcc9a3] placeholder:text-[#dcc9a3]/30 focus:border-[#c9a65e]"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#dcc9a3cc]"
                  htmlFor="repeatPassword"
                >
                  გაიმეორეთ პაროლი
                </label>
                <input
                  type="password"
                  name="repeatPassword"
                  id="repeatPassword"
                  placeholder="••••••••"
                  className="mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base ring-[#f6f7f9] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#10192d80] border-[#3e4f7480] text-[#dcc9a3] placeholder:text-[#dcc9a3]/30 focus:border-[#c9a65e]"
                />
              </div>
            </div>
            {/* Submit button */}
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:shadow-md h-10 px-4 py-2 w-full bg-[#c9a65e] text-[#10192d] hover:bg-[#dcc9a3] font-semibold"
              type="submit"
            >
              რეგისტრაცია
            </button>
            {/* Note for user */}
            <p className="text-xs text-center text-[#dcc9a380]">
              ეს არის დემო რეჟიმი. რეალური რეგისტრაციისთვის გამოიყენეთ მოწვევის
              ბმული.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
