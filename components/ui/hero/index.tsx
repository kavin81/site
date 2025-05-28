import { IoLogoGithub } from "react-icons/io";
import { RiAttachment2 } from "react-icons/ri";
import { siteConfig } from "@/lib/siteConfig";

import "./hero.css";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-wrap items-center pt-[100px]">
            <div className="flex-grow">
                <div className="space-y-5 pb-5">
                    <h1 className="pb-5">
                        Hey, I&apos;m{" "}
                        <span className="relative fancy_highlight">Kavin</span>
                    </h1>
                    <div>
                        <p>
                            <span className="max-xs:hidden">A Sophomore </span>
                            <span className="xs:hidden">Student </span>at{" "}
                            <Link className="link" href="https://pes.edu">
                                PESU
                            </Link>{" "}
                            & fullstack{" "}
                            <span className="max-xs:hidden">developer</span>
                            <span className="xs:hidden">dev</span>
                        </p>
                        <p>
                            Based in{" "}
                            <Link
                                className="link"
                                href="https://www.google.com/maps?q=Bengaluru"
                            >
                                Bangalore, India
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="space-x-4 space-y-4">
                    <Link
                        href={siteConfig.social.github}
                        className="button w-full xs:w-auto"
                    >
                        View Github <IoLogoGithub className="" />
                    </Link>

                    <Link
                        href="/resumé.pdf"
                        className="button w-full xs:w-auto"
                        data-umami-event="hero-resume-download"
                    >
                        Read Resumé <RiAttachment2 />
                    </Link>
                </div>
            </div>
            <Image
                src="/favicon.png"
                alt="Description of image"
                className="hidden w-50 h-50 md:block"
                width={50}
                height={50}
                priority={true}
                loading="eager"
                quality={100}
            />
        </div>
    );
}
