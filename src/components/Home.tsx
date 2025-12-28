export default function Home() {
    return (
        <div>
            <h1 className="text-3xl">Hey, I'm Kavin</h1>
            {/* <br/> */}
            <blockquote className="text-lg text-[#99a0ae] font-fira-code">
                <span>
                    I'm a Sophomore <span className="font-fira-code">@</span>{" "}
                    <a className="hero_links" href="https://pes.edu/">
                        PESU
                    </a>{" "}
                    & fullstack developer
                </span>
                <br />
                <span>
                    Based in{" "}
                    <a
                        className="hero_links"
                        href="https://www.google.com/maps?q=Bengaluru"
                    >
                        Bengaluru, India
                    </a>
                </span>
            </blockquote>
            <br />
            <br />
        </div>
    );
}
