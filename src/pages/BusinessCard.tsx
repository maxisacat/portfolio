import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import useBreakpoint from "../hooks/useBreakpoint";
import useLocal from "../hooks/useLocal";
import Logo from "../assets/Logo";
import { useEffect, useState } from "react";
import Flip from "../assets/Flip";
import mail from "../assets/icons/mail.png";

export default function BusinessCard() {
  const { isSm, isMd } = useBreakpoint();
  return (
    <>
      <Helmet>
        <title>Kaniel Kirby</title>
        <meta
          name="description"
          content="Kaniel Kirby's Virtual Business Card."
        />
      </Helmet>
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-neutral-900 text-center">
        <Card
          front={
            <>
              <div className="flex h-full w-full flex-col items-center justify-center">
                <Logo
                  className={`mb-[1%] aspect-square ${
                    isSm || isMd ? "w-[50%]" : "h-[50%]"
                  }`}
                />
                <div className="flex flex-col gap-[1vw]">
                  <h1
                    className={`font-body ${
                      isSm || isMd
                        ? "text-[6vh] [line-height:7vh] "
                        : "text-[6vw] [line-height:7vw] "
                    }`}
                  >
                    Kaniel Kirby
                  </h1>
                  <h2
                    className={`font-body opacity-70 ${
                      isSm || isMd ? "text-[3vh]" : "text-[3vw]"
                    }`}
                  >
                    Web Developer
                  </h2>
                </div>
              </div>
            </>
          }
          back={
            <>
              <div className="me relative z-10 flex h-full w-full flex-row-reverse items-center justify-start">
                <Tippy content="My Website" placement="left">
                  <Link to="/" className="mr-[3%] w-[26%]">
                    <img
                      src="/src/assets/icons/qr-code.png"
                      alt=""
                      className="aspect-square w-full cursor-pointer rounded-lg border-solid border-black shadow-md transition-all duration-200 [border-width:.35vw] hover:scale-105 hover:shadow-xl"
                    />
                  </Link>
                </Tippy>
                <div className="absolute left-[2%] top-0 flex h-full w-[67%] flex-col items-center justify-center gap-[5%]">
                  <img
                    src="/kaniel-kirby-1.jpg"
                    alt=""
                    className={`relative aspect-square -translate-x-[30%] rounded-lg border-solid border-black object-cover [border-width:.35vw] ${
                      isSm || isMd ? "w-[70%]" : "h-[43%]"
                    }`}
                  />
                  <h2 className="-translate-x-[30%] text-center font-body text-[5vw] font-bold">
                    Kaniel Kirby
                  </h2>
                  <ul className="flex w-full flex-col items-start text-[3vw]">
                    <Tippy content="My Cell" placement="right">
                      <li className="group w-full">
                        <a
                          href="tel:325.443.6046"
                          className="flex items-center gap-[7%] transition-all duration-200 group-hover:scale-105"
                        >
                          <img
                            src="/src/assets/icons/phone.png"
                            alt=""
                            className="w-[8%] drop-shadow-lg transition-all duration-200 group-hover:-rotate-12"
                          />
                          <span className="">325.443.6046</span>
                        </a>
                      </li>
                    </Tippy>
                    <Tippy content="My Email" placement="right">
                      <li className="group w-full">
                        <a
                          href="mailto:kanielrkirby@runbox.com"
                          className="flex items-center gap-[7%] transition-all duration-200 group-hover:scale-105"
                        >
                          <img
                            src={mail}
                            alt=""
                            className="w-[8%] drop-shadow-lg transition-all duration-200 group-hover:-rotate-12"
                          />
                          <span className="">kanielrkirby@runbox.com</span>
                        </a>
                      </li>
                    </Tippy>
                    <Tippy content="My LinkedIn" placement="right">
                      <li className="group w-full">
                        <a
                          href="https://www.linkedin.com/in/kanielrkirby/"
                          className="flex items-center gap-[7%] transition-all duration-200 group-hover:scale-105"
                        >
                          <img
                            src="/src/assets/icons/linkedin.png"
                            alt=""
                            className="w-[8%] drop-shadow-lg transition-all duration-200 group-hover:-rotate-12"
                          />
                          <span className="">@kanielrkirby</span>
                        </a>
                      </li>
                    </Tippy>
                  </ul>
                </div>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}

function Card({
  front,
  back,
  className,
}: {
  front: JSX.Element | JSX.Element[];
  back: JSX.Element | JSX.Element[];
  className?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const [icons, setIcons] = useState<any>();
  const { isSm, isMd } = useBreakpoint();
  const flip = (pos: string) => (
    <Flip
      id={`business-card-${pos}-flip-icon`}
      className={`absolute right-[2%] top-[4%] z-10 cursor-pointer transition-all duration-200 hover:rotate-12 hover:scale-105 ${
        isSm || isMd ? "h-[6%]" : "w-[6%]"
      }`}
      onClick={(e) => {
        setFlipped((prev) => !prev);
      }}
    />
  );
  useEffect(() => {
    setIcons({ front: flip("front"), back: flip("back") });
  }, []);
  return (
    <div
      className={`relative h-fit transition-all duration-300 [perspective:1000px] ${
        className ?? ""
      } ${
        isMd || isSm
          ? " aspect-[2/3.5] h-[95%] min-h-[25rem] max-w-[90%]"
          : "aspect-[3.5/2] w-[85%] min-w-[25rem]"
      }
      `}
    >
      <div
        className={`relative h-full w-full rounded-md transition-all duration-300 [transform-style:preserve-3d] ${
          flipped
            ? "shadow-[-7px_3px_13px_3px_#00000050] [transform:rotate3d(0,1,0,180deg)]"
            : "shadow-[7px_3px_13px_3px_#00000050] [transform:rotate3d(0,1,0,0deg)]"
        }`}
      >
        <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-md bg-black transition-all duration-300 [-webkit-backface-visibility:hidden] [backface-visibility:hidden]">
          <Tippy content="Flip card for more!">{icons?.front}</Tippy>
          {front}
          <CardBG />
        </div>
        <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-md bg-black transition-all duration-300 [transform:rotate3d(0,1,0,180deg)] [-webkit-backface-visibility:hidden] [backface-visibility:hidden]">
          {back}
          <CardBG flipped />
        </div>
      </div>
    </div>
  );
}

function CardBG({ flipped = false }: { flipped?: boolean }) {
  const { isSm, isMd } = useBreakpoint();
  return (
    <div
      className={`pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden ${
        flipped ? "[transform:rotate3d(0,1,0,180deg)]" : ""
      }`}
    >
      <img
        src="/src/assets/paint-splashes/blue-pink-splash.png"
        alt=""
        className={`absolute w-[60%] opacity-70 ${
          flipped ? "bottom-[-70%] right-[-40%]" : "bottom-[-70%] right-[-30%]"
        }`}
      />
      <img
        src="/src/assets/paint-splashes/blue-pink-splash.png"
        alt=""
        className={`absolute opacity-70 ${
          isSm || isMd
            ? ""
            : flipped
            ? "right-[-12%] top-[-70%] w-[80%]"
            : "right-[-20%] top-[-50%] w-[60%]"
        }`}
      />
      <img
        src="/src/assets/paint-splashes/red-purple-splash.png"
        alt=""
        className={`absolute opacity-70 ${
          isSm || isMd
            ? ""
            : flipped
            ? "right-[55%] top-[-25%] w-[70.5%]"
            : "left-[-24%] top-[-55%] w-[60%]"
        }`}
      />
      <img
        src="/src/assets/paint-splashes/red-purple-splash.png"
        alt=""
        className={`absolute bottom-[-73%] left-[-25%] w-[60%] opacity-70 ${
          isSm || isMd ? "" : flipped ? "hidden" : ""
        }`}
      />
    </div>
  );
}