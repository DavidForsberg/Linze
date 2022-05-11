import Link from "next/link";
import Button from "../../components/formui/button";
import Button2 from "../../components/formui/button2";

const Login = () => {
  return (
    <div className="items-center justify-center w-11/12 text-center flex">
      <div className="bg-alternative flex rounded-2xl shadow-2xl w-11/12 max-w-4xl">
        <div className=" w-3/5 p-5 bg-primary rounded-tl-2xl rounded-bl-2xl">
          <div className="text-left font-bold text-alternative">
            Linze-Account
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-alternative my-3">
              Sign in to Account
            </h2>
            <div>
              {/* GOOGLE AUTH */}
              <img
                src="/icons/google.png"
                alt=""
                width={50}
                height={50}
                className="mx-auto border-2 rounded-2xl border-alternative hover:border-primary cursor-pointer"
              />
            </div>
            <p className="text-alternative my-2">Or use your email account</p>
            <div className="flex flex-col items-center">
              <div className=" bg-secondary w-64 rounded-xl flex items-center mb-3 hover:ring-2 ring-alternative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className=" bg-secondary border-none placeholder:text-alternative placeholder:text-sm outline-none flex-1 rounded-xl p-2"
                />
              </div>
              <div className=" bg-secondary w-64 rounded-xl flex items-center mb-3 hover:ring-2 ring-alternative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className=" bg-secondary border-none placeholder:text-alternative placeholder:text-sm outline-none flex-1 rounded-xl p-2"
                />
              </div>
              <div className="flex w-64 mb-5 text-xs justify-between text-alternative">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="remember"
                    className="mr-2 cursor-pointer"
                  />
                  Remember me
                </label>
                <a href="">Forgot Password?</a>
              </div>
              <Button text="Sign in" link="/" />
            </div>
          </div>
        </div>
        <div className="w-2/5 p-5 bg-alternative rounded-tr-2xl rounded-br-2xl py-36 px-12">
          {" "}
          {/*HÖGER SIDA*/}
          <h2 className="text-3xl border-b-2 inline-block border-primary text-primary mb-2">
            <b>Hello friend!</b>
          </h2>
          <p className="text-primary mb-6">
            <i>Start your journey with us</i>
          </p>
          <div className="">
            <Button2 text="Sign up with Google" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
