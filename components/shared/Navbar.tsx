import React from "react";
import Image from "next/image";
import { allura } from "@/fonts/fonts";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="row-start-1 row-end-2 col-span-2 col-start-1 px-5 items-center shadow-md grid grid-cols-[200px_auto_200px]">
      <Image src="/images/logo.png" height={60} width={60} alt="logo" />
      <h2 className={`${allura.className} text-center  text-3xl font-semibold`}>
        Data visualization assignment solution by{" "}
        <span className="underline">Vinit Churi</span>
      </h2>
      <div className="ml-auto mr-0">
        <SignedOut>
          <div className="flex gap-3">
            <Link href="/sign-in">
              <button className="small-medium border-gray-500 border-2 border-solid  min-h-[41px] w-full rounded-lg px-4 py-3">
                <span className="primary-text-gradient max-lg:hidden">
                  Log In
                </span>
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="small-medium border-gray-500 border-2 border-solid text-dark100_light900 light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3">
                <span className="max-lg:hidden">Sign Up</span>
              </button>
            </Link>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
