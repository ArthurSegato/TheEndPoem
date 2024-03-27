import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link} from "@builder.io/qwik-city";

export default component$(() => {
  const isDialogOpen = useSignal(false);


  useVisibleTask$(() => {
    const dialog = document.getElementById("modal");
  });
  return (
    <>
      <header class="fixed top-0 flex w-full h-16 px-8 items-center z-20">
        <button onClick$={() => { isDialogOpen.value = !isDialogOpen.value; dialog.value.showModal()}} className={`w-8 h-8 flex flex-col items-start content-center justify-evenly ease-in-out transition-all duration-300 ${isDialogOpen.value && "-rotate-90"}`}>
          <div className={`bg-[#FBFBFB] rounded transition-all duration-300 ${!isDialogOpen.value ? "w-[57%] h-[16%]": "w-[20%] h-[20%] ml-3"}`}></div>
          <div className={`bg-[#FBFBFB] rounded transition-all duration-300 ${!isDialogOpen.value ? "w-[39%] h-[16%]": "w-[20%] h-[20%] ml-3"}`}></div>
          <div className={`bg-[#FBFBFB] rounded transition-all duration-300 ${!isDialogOpen.value ? "w-[78%] h-[16%]": "w-[20%] h-[20%] ml-3"}`}></div>
        </button>
      </header>
        <dialog id="modal" class="leading-6 gap-4 flex flex-col px-20 py-32 sm:px-48 lg:px-80 md:px-64 2xl:px-[36rem] md:py-44 2xl:py-56">
          <h4 class="text-2xl md:text-3xl 2xl:text-4xl font-bold">Credits</h4>
          <p class="text-sm md:text-base 2xl:text-lg">
            The <strong>“End Poem”</strong> has been released into the {" "}
            <Link class="underline" tabindex="0" href="https://creativecommons.org/publicdomain/zero/1.0/">
              public domain
            </Link>
                {" "} by its creator, {" "}
                <Link class="underline" tabindex="0" href="https://www.juliangough.com">
                  Julian Gough
                </Link>.
                For insights into his decision, I highly recommend checking out his {" "}
                <Link class="underline" tabindex="0" href="https://theeggandtherock.substack.com/p/i-wrote-a-story-for-a-friend">
                  blog post
                </Link>
                {" "} discussing the rationale behind this move. Additionaly, if you'd like to
                show support for his creative endeavors, consider making a donation via
                his {" "}
                <Link class="underline" tabindex="0" href="https://www.paypal.com/donate/?hosted_button_id=525T2WCA24268">
                  PayPal account
                </Link>.
              </p>
              <p class="text-sm md:text-base 2xl:text-lg">
                The <strong>"theendpoem.com"</strong> was created by {" "}
                <Link class="underline" tabindex="0" href="https://github.com/ArthurSegato">
                  Arthur Segato
                </Link>
                {" "} with the goal to spread and disassociate the <strong>“End Poem”</strong> with {" "}
                <Link class="underline" tabindex="0" href="https://en.wikipedia.org/wiki/Minecraft">
                  Minecraft
                </Link>
                , if you wish to support this project, consider making a donation via {" "}
                <Link class="underline" tabindex="0" href="https://donate.stripe.com/9AQbMl1Pt5DV4i4288">
                  Stripe
                </Link>
                {" "} or {" "}
                <Link class="underline" tabindex="0" href="https://github.com/sponsors/ArthurSegato">
                  Github Sponsors
                </Link>-
              </p>
              <p class="text-sm md:text-base 2xl:text-lg">
                Below are listed all the resources utilized in its development. Should you
                encounter any issues or wish to request improvements, please don't
                hesitate to reach out via email at {" "}
                <Link class="underline" tabindex="0" href="mailto:github.reentry594@passinbox.com">
                  github.reentry594@passinbox.com
                </Link>
                , Alternatively, if you'd prefer to take the initiative to fix any
                concerns yourself, you're more than welcome to contribute directly to the {" "}
                <Link class="underline" tabindex="0" href="https://github.com/ArthurSegato/Website-TheEndPoem">
                  Github repository
                </Link>.
              </p>
              <p class="text-sm md:text-base 2xl:text-lg">
                Icons by {" "}
                <Link class="underline" tabindex="0" href="https://icons.getbootstrap.com">
                  Bootstrap Icons
                </Link>, {" "}
                <Link class="underline" tabindex="0" href="https://fonts.google.com/specimen/Open+Sans">
                  Open Sans
                </Link>
                {" "} and {" "}
                <Link class="underline" tabindex="0" href="https://fonts.google.com/specimen/Nothing+You+Could+Do">
                  Nothing You Could Do
                </Link>{" "}
                by Google Fonts, Animations by {" "}
                <Link class="underline" tabindex="0" href="https://animista.net">
                  Animista
                </Link>, {" "}
                <Link class="underline" tabindex="0" href="https://codepen.io/himalayasingh/pen/KOdJPM">
                  Menu button
                </Link>.
              </p>
        </dialog>
    </>
  );
});